const cloudinary = require("../config/cloudinary");

exports.uploadCloud = async (path,folder) => {
  const { secure_url } = await cloudinary.uploader.upload(path, {
    use_filename: true,
    folder: folder
  });
  return secure_url;
};
