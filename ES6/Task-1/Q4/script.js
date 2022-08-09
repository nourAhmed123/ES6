function CourseDetails(evnt,{
  courseName = document.getElementById("courseName").value,
  courseDuration = document.getElementById("courseDuration").value,
  //   supervisor = "Anonymous",
} = {}) 
evnt.preventDefault();
{
  return `Hello  this is  course ${courseName} and its duration ${courseDuration} and the course owner is ${courseOwner}`;
}
alert(CourseDetails());
