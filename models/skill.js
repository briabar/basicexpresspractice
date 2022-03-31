const skillsObj = [
    {id : 0, skillName : 'JavaScript', level : 5
    },

];

module.exports = {
    getAll,
    getOne,
    addItem,
    deleteSkill,
    editSkill
}

function getAll() {
    return skillsObj;
}

function getOne(id) {
    return skillsObj.find(skill => skill.id === parseInt(id));
}

function addItem(req) {
    let last_item = skillsObj[skillsObj.length -1];
    console.log(last_item);
    let new_id = last_item.id += 1;
    console.log(new_id)
    skillsObj.push({id: new_id, skillName: req.skill, level: 0})
}

function deleteSkill(id) {
    let index = skillsObj.findIndex(skill => skill.id === parseInt(id));
    skillsObj.splice(index, 1);
}

function editSkill(skillId, skillName, skillLevel) {
    let index = skillsObj.findIndex(skill => skill.id === parseInt(skillId));
    skillsObj[index].skillName = skillName;
    skillsObj[index].level = skillLevel;
}