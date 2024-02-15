const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/images");
  },
  filename: function (req, file, cb) {
    const fileName =
      Date.now() +
      Math.round(Math.random() * 1000000) +
      "." +
      file.mimetype.split("/")[1];
    cb(null, file.fieldname + "-" + fileName);
  },
});

module.exports = multer({ storage });
