-- CreateTable
CREATE TABLE `users` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_name` VARCHAR(40) NOT NULL,
    `email` VARCHAR(40) NOT NULL,
    `password` VARCHAR(72) NOT NULL,
    `is_admin` BOOLEAN NOT NULL DEFAULT false,
    `bio` TEXT NULL,
    `twitter_url` VARCHAR(191) NULL,
    `is_verify` BOOLEAN NOT NULL DEFAULT false,
    `created_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `wallets` (
    `wallet_address` VARCHAR(191) NOT NULL,
    `user_id` INTEGER NOT NULL,
    `created_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`wallet_address`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `token_standards` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(40) NOT NULL,

    UNIQUE INDEX `token_standards_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `chains` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(40) NOT NULL,
    `rpc_url` VARCHAR(191) NOT NULL,
    `chain_id` INTEGER NOT NULL,
    `currencySymbol` VARCHAR(10) NOT NULL,
    `block_explorer_url` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `chains_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `cryptos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `token_standard_id` INTEGER NOT NULL,
    `chain_id` INTEGER NOT NULL,
    `wallet_address` VARCHAR(191) NOT NULL,
    `name` VARCHAR(40) NOT NULL,
    `balance` DECIMAL(65, 2) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `nfts` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `collection_id` INTEGER NOT NULL,
    `wallet_address` VARCHAR(191) NOT NULL,
    `chain_id` INTEGER NOT NULL,
    `creator_id` INTEGER NOT NULL,
    `token_standard_id` INTEGER NOT NULL,
    `token_id` INTEGER NOT NULL,
    `name` VARCHAR(40) NOT NULL,
    `image` VARCHAR(191) NOT NULL,
    `is_onsale` BOOLEAN NOT NULL DEFAULT false,
    `is_mint` BOOLEAN NOT NULL DEFAULT false,
    `created_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `collections` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `creator_id` INTEGER NOT NULL,
    `name` VARCHAR(40) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `on_mint` BOOLEAN NOT NULL DEFAULT false,
    `is_soldout` BOOLEAN NOT NULL DEFAULT false,
    `created_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updated_at` TIMESTAMP(0) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `traits` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `collection_id` INTEGER NOT NULL,
    `name` VARCHAR(40) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `trait_id_attributes` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nft_id` INTEGER NOT NULL,
    `trait_id` INTEGER NOT NULL,
    `name` VARCHAR(40) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `sale_list` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `seller_id` INTEGER NOT NULL,
    `nft_id` INTEGER NOT NULL,
    `price` DECIMAL(65, 2) NOT NULL,
    `created_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updated_at` TIMESTAMP(0) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `history` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nft_id` INTEGER NOT NULL,
    `collection_id` INTEGER NOT NULL,
    `creator_id` INTEGER NOT NULL,
    `seller_id` INTEGER NOT NULL,
    `buyer_id` INTEGER NOT NULL,
    `price` DECIMAL(65, 2) NOT NULL,
    `transection_date` TIMESTAMP(0) NOT NULL,
    `onsale_date` DATETIME(0) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `relationships` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `followed_id` INTEGER NOT NULL,
    `follower_id` INTEGER NOT NULL,
    `created_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `campaigns` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER NOT NULL,
    `name` VARCHAR(40) NOT NULL,
    `image` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `url` VARCHAR(191) NOT NULL,
    `created_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updated_at` TIMESTAMP(0) NOT NULL,
    `is_active` BOOLEAN NOT NULL DEFAULT true,
    `expired_date` TIMESTAMP(0) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `wallets` ADD CONSTRAINT `wallets_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `cryptos` ADD CONSTRAINT `cryptos_token_standard_id_fkey` FOREIGN KEY (`token_standard_id`) REFERENCES `token_standards`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `cryptos` ADD CONSTRAINT `cryptos_chain_id_fkey` FOREIGN KEY (`chain_id`) REFERENCES `chains`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `cryptos` ADD CONSTRAINT `cryptos_wallet_address_fkey` FOREIGN KEY (`wallet_address`) REFERENCES `wallets`(`wallet_address`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `nfts` ADD CONSTRAINT `nfts_collection_id_fkey` FOREIGN KEY (`collection_id`) REFERENCES `collections`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `nfts` ADD CONSTRAINT `nfts_wallet_address_fkey` FOREIGN KEY (`wallet_address`) REFERENCES `wallets`(`wallet_address`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `nfts` ADD CONSTRAINT `nfts_chain_id_fkey` FOREIGN KEY (`chain_id`) REFERENCES `chains`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `nfts` ADD CONSTRAINT `nfts_creator_id_fkey` FOREIGN KEY (`creator_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `nfts` ADD CONSTRAINT `nfts_token_standard_id_fkey` FOREIGN KEY (`token_standard_id`) REFERENCES `token_standards`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `collections` ADD CONSTRAINT `collections_creator_id_fkey` FOREIGN KEY (`creator_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `traits` ADD CONSTRAINT `traits_collection_id_fkey` FOREIGN KEY (`collection_id`) REFERENCES `collections`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `trait_id_attributes` ADD CONSTRAINT `trait_id_attributes_nft_id_fkey` FOREIGN KEY (`nft_id`) REFERENCES `nfts`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `trait_id_attributes` ADD CONSTRAINT `trait_id_attributes_trait_id_fkey` FOREIGN KEY (`trait_id`) REFERENCES `traits`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `sale_list` ADD CONSTRAINT `sale_list_seller_id_fkey` FOREIGN KEY (`seller_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `sale_list` ADD CONSTRAINT `sale_list_nft_id_fkey` FOREIGN KEY (`nft_id`) REFERENCES `nfts`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `history` ADD CONSTRAINT `history_nft_id_fkey` FOREIGN KEY (`nft_id`) REFERENCES `nfts`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `history` ADD CONSTRAINT `history_collection_id_fkey` FOREIGN KEY (`collection_id`) REFERENCES `collections`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `history` ADD CONSTRAINT `history_creator_id_fkey` FOREIGN KEY (`creator_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `history` ADD CONSTRAINT `history_seller_id_fkey` FOREIGN KEY (`seller_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `history` ADD CONSTRAINT `history_buyer_id_fkey` FOREIGN KEY (`buyer_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `relationships` ADD CONSTRAINT `relationships_followed_id_fkey` FOREIGN KEY (`followed_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `relationships` ADD CONSTRAINT `relationships_follower_id_fkey` FOREIGN KEY (`follower_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `campaigns` ADD CONSTRAINT `campaigns_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
