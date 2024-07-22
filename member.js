function skillsMember() {
  var member = document.getElementById('member');
  var memberValue = member.options[member.selectedIndex].value;
  var memberText = member.options[member.selectedIndex].text;
  var memberSkill = document.getElementById('memberSkill');
  var memberSkillValue = memberSkill.options[memberSkill.selectedIndex].value;
  var memberSkillText = memberSkill.options[memberSkill.selectedIndex].text;

  if (memberSkillValue == 0) {
    alert('Please select a skill');
  } else {
    var newMember = document.createElement('div');
    newMember.innerHTML = memberText + ' - ' + memberSkillText;
    document.getElementById('memberList').appendChild(newMember);
  }
}