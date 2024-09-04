const certService = require("../services/certificate_services");

exports.createCert = async (req, res, next) => {
  try {
    const {
      user_id,
      name,
      level,
      graduatingClass,
      graduationDay,
      course,
      refNumber,
    } = req.body;
    let cert = await certService.createCert(
      user_id,
      name,
      level,
      graduatingClass,
      graduationDay,
      course,
      refNumber
    );
    console.log(cert);

    res
      .status(200)
      .json({
        code: 200,
        message: `Certificate data set for ${name} created`,
      })
      .on(() => {
        console.log("Certificate data set for ${name} created");
      });
    res.status(404).json({ code: 404, message: "An error was encountered." });
    res.status(500).json({ code: 500, message: "Server error." });
  } catch (error) {
    next(error);
  }
};



exports.readCert = async (req, res, next) => {
  try {
    const { refNumber } = req.body;

    let certAvailable = await certService.readCert(refNumber);

    if (!certAvailable) {
      throw new Error("Certificate cannot be found");
    }

    if (res.statusCode === 200) {
      res.status(200).json({ code: res.statusCode, body: certAvailable });
      console.log(`${certAvailable}`);
    }
  } catch (error) {
    next(error);
  }
};

//Post used to get data from database
// exports.readCert = async (req, res, next) => {
//   try {
//     const { refNumber } = req.body;

//     let certAvailable = await certService.readCert(refNumber);

//     if (!certAvailable) {
//       throw new Error("Certificate cannot be found");
//     }

//     if (res.statusCode === 200) {
//       res.status(200).json({ code: res.statusCode, body: certAvailable });
//       console.log(`${certAvailable}`);
//     }
//   } catch (error) {
//     next(error);
//   }
// };
