student_array = [];

function submit() {

 var name_1 = document.getElementById("student1").value;
 var name_2 = document.getElementById("student2").value;
 var name_3 = document.getElementById("student3").value;
 var name_4 = document.getElementById("student4").value;   

 student_array.push(name_1);
 student_array.push(name_2);
 student_array.push(name_3);
 student_array.push(name_4);

 console.log(student_array);


 document.getElementById("display_name").innerHTML = student_array;
 document.getElementById("sub").style.display = "none";
 document.getElementById("sort").style.display = "inline-block";   
}

function sort()
{
student_array.sort();
document.getElementById("display_name").innerHTML = student_array;
}


