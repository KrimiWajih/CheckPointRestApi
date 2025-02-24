const express = require("express");
const {
  signupuser,
  verifyEmailU,
  updateOneUser,
  signupcompany,
  signinuser,
  signincompany,
  addjob,
  verifyEmailC,
  updateOneCompany,
  deletejobC,
  deletejobU,
  updatejobC,
  applytojob,
  getuserdata,
  getcompanydata,
  getjobdata,
  getCurrent,
} = require("../controller/control");
const { signupvalidation, validation } = require("../middleware/verif");
const { isauth } = require("../middleware/isAuth");
const { isauthC } = require("../middleware/isAuthC");
const CRouter = express.Router();

//User
CRouter.post("/signupuser", signupvalidation, validation, signupuser);
CRouter.post("/signin", signupvalidation, validation, signinuser);
CRouter.put("/updateuser", isauth, updateOneUser);
CRouter.get("/verifyU/:token", verifyEmailU);
CRouter.delete("/deletejobu", isauth, deletejobU);
CRouter.post("/applytojob", isauth, applytojob);
CRouter.get("/getcurrentU", isauth, getCurrent);

//Anyone
CRouter.get("/userdata", getuserdata);
CRouter.get("/companydata", getcompanydata);
CRouter.get("/jobdata", getjobdata);


//Company
CRouter.post("/signupcompany", signupvalidation, validation, signupcompany);
CRouter.post("/signincompany", signupvalidation, validation, signincompany);
CRouter.put("/updatecompany", isauthC, updateOneCompany);
CRouter.get("/verifyC/:token", verifyEmailC);
CRouter.delete("/deletejob", isauthC, deletejobC);
CRouter.put("/updatejobc", isauthC, updatejobC);
CRouter.get("/getcurrentC", isauthC, getCurrent);
CRouter.post("/addjob", isauthC, addjob);

module.exports = CRouter;
