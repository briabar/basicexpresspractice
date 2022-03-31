const Skill = require('../models/skill');

module.exports = {
    index,
    listSkills,
    newSkill,
    makeSkill,
    deleteSkill,
    editSkill
}

function listSkills(req, res) {
    res.render('skills/list_skills', {
        skill: Skill.getOne(req.params.id)
    });
}

function index(req, res) {
    res.render('skills/index', {
        allSkills : Skill.getAll()
    });
}

function makeSkill(req, res) {
    Skill.addItem(req.body);
    res.redirect('skills/')
}

function newSkill(req, res) {
    res.render('skills/new_skill')
}

function deleteSkill(req, res) {
    console.log('controller');
    Skill.deleteSkill(req.params.id);
    res.redirect('/skills');
}

function editSkill(req, res) {
    let skillId = req.params.id;
    let skillName = req.body.skill;
    let skillLevel = parseInt(req.body.level);
    Skill.editSkill(skillId, skillName, skillLevel);
    res.redirect('/skills')
}

// Hey Jay! Can you tell me why this doesn't work? 
// function newSkill(req, res) { 
//     if (req.method === 'POST') {
//         console.dir(req)
//         Skill.addItem(req.body);
//         res.redirect('skills/')
//     } 
//     res.render('skills/new_skill')
// }