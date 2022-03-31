var express = require('express');
var router = express.Router();
const skillsController = require('../controllers/skills')

/* GET users listing. */
router.get('/', skillsController.index);

router.get('/new_skill', skillsController.newSkill);

router.get('/list_skills/:id', skillsController.listSkills);

router.post('/', skillsController.makeSkill)

router.delete('/:id', skillsController.deleteSkill)

router.put('/:id', skillsController.editSkill)

// router.delete('/skills/:id', skillsController.deleteSkill)
module.exports = router;
