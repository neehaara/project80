function searching() {
    var s= document.getElementById("s1").value; 
    var found=0; 
    console.log("s=", 1);
    var j;
    // for(j=0; j<names_of_people.length; j++) 
    for(j=0; j<name_of_the_student_array.length; j++) 
    {   
        //console.log('Array ' ,j, "=", names_of_people[j])
        // if(s==names_of_people[j]){ found=found+1; } }
        console.log('Array ' ,j, "=", name_of_the_student_array[j])
        if(s==name_of_the_student_array[j])
        { 
         found=found+1; 
        } 
    }
 document.getElementById("p2").innerHTML="name found "+found+" time/s"; console.log("found name "+found+" time/s"); 
}
name_of_the_student_array=[];
function submit(){
    var display_student_array=[];
    for(var j=1; j<= 4;j++){
        var name_of_the_student=document.getElementById("name_of_the_student_"+j).value;
        console.log(name_of_the_student);
        name_of_the_student_array.push(name_of_the_student)
    }
    console.log(name_of_the_student_array);

    var length_of_name_of_students_array=name_of_the_student_array.length;
    console.log(length_of_name_of_students_array);
    for (var k=0;k<length_of_name_of_students_array;k++){
        display_student_array.push("<h3>NAME-"+name_of_the_student_array[k]+"</h3>");
        console.log(display_student_array);
    }
    document.getElementById("display_name_with_commas").innerHTML=display_student_array;
    var remove_commas=display_student_array.join(" ");
    console.log(remove_commas);
    document.getElementById("display_name_without_commas").innerHTML=remove_commas;
    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block";
}
function sorting(){
    name_of_the_student_array.sort();
    console.log(name_of_the_student_array);
    var display_student_array_sorting=[];

    var length_of_name_of_students_array=name_of_the_student_array.length;
    console.log(length_of_name_of_students_array);
    console.log('in sorting')
    for (var k=0;k<length_of_name_of_students_array;k++){
        display_student_array_sorting.push("<h3>NAME-"+name_of_the_student_array[k]+"</h3>");
        console.log(display_student_array_sorting);
    }
    document.getElementById("display_name_with_commas").innerHTML=display_student_array_sorting;
    var remove_commas=display_student_array_sorting.join(" ");
    console.log(remove_commas);
    document.getElementById("display_name_without_commas").innerHTML=remove_commas;
}