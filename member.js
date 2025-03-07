function skillsMember() {
  var member = document.getElementById('member');
  var skills = document.getElementById('skills');
  var memberOffset = member.getBoundingClientRect().top;
  var skillsOffset = skills.getBoundingClientRect().top;
  var scroll = window.scrollY;

  if (scroll > skillsOffset) {
    skills.classList.add('skills__active');
  } else {
    skills.classList.remove('skills__active');
  }
}