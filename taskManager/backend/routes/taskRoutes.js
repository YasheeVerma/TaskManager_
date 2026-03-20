const router = require("express").Router();
const ctrl = require("../controllers/taskController");

router.get("/", ctrl.getTasks);
router.post("/", ctrl.createTask);
router.delete("/:id", ctrl.deleteTask);
router.patch("/:id/toggle", ctrl.toggleTask);
router.put("/:id", ctrl.updateTask);
module.exports = router;