const { Router } = require('express');
const router = new Router();
const validaMXController = require("./app/controllers/validaMXController");

router.post("/valida-mx", validaMXController.index)

module.exports = router;