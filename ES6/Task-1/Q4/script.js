var form = document.forms[0];

var course;

function saveCourseDetails({
  courseName = "ES6",
  courseDuration = "3 days",
  courseOwner = "Anonymous",
} = {}) {
  return `Hello  this is  course ${courseName}  its duration is  ${courseDuration} and the course owner is ${courseOwner}`;
}
function createCourse() {
  //We have to declare the object in function to assign form inputs in it
  course = {
    courseName: form.courseName.value,
    courseDuration: form.courseDuration.value,
    courseOwner: form.courseOwner.value,
  };

  alert(saveCourseDetails(course));
}
