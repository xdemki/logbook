const { findClass } = require("../../utils/findClass");
const { findTeacher } = require("../../utils/findTeacher");
const router = require("express").Router();
const qrcode = require("qrcode");
const Codes = require("../../database/models/codes");

router.post("/create-qr-code/:teacher/:Class/:period", async (req, res) => {
  const { teacher, Class, period } = req.params;

  if (period > 7 || period < 0) {
    var response = { code: 500, content: "False Period", data: req.params };
    res.send(response);
    return response;
  }

  if (findTeacher(teacher) == false) {
    var response = {
      code: 404,
      content: "Teacher not found",
      data: req.params,
    };
    res.send(response);
    return response;
  }

  if (findClass(Class) == false) {
    var response = { code: 404, content: "Class not found", data: req.params };
    res.send(response);
    return response;
  }

  const QR = await qrcode.toDataURL(String(req.params));

  const code = await Codes.create({
    period,
    teacher,
    class: Class,
    students: [],
    expired: false,
    code: QR,
    date: new Date().getTime(),
  });

  res.send({ code });
});

module.exports = router;
