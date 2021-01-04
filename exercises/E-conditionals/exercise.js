/*
  Conditionals
  ---------------------------------
  Add an if statement to check Daniel's role in a CYF class.
  If Daniel is a mentor, print out "Hi, I'm Daniel, I'm a mentor."
  If Daniel is a student, print out "Hi, I'm Daniel, I'm a student."
*/

var name = "Daniel";
var danielsRole = "student";

if (danielsRole === "mentor") {
    console.log(`Hi, I'm ${name}, I'm a mentor.`);
} else {
    console.log(`Hi, I'm ${name}, I'm a student.`);
}

// Or Ternary use of If statement
// danielsRole === "mentor" ? console.log(`Hi, I'm ${name}, I'm a mentor.`) :
//     console.log(`Hi, I'm ${name}, I'm a student`);

/* 
EXPECTED RESULT
---------------
Hi, I'm Daniel, I'm a mentor.
*/