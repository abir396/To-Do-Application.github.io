var addLoopCount=0;
var slLoopCount =0;

//BlankCheck for Text
function blankcheck(){
    var x = document.forms["new-task-form"]["task"].value;
    //alert (x);
    if (x == "") {
        alert("Task must be filled out");
        return false;
     }
}
// Preview task and Description
function previewForm(){
    addLoopCount=addLoopCount+1;
    slLoopCount=slLoopCount+1;

    var table = document.getElementById("tableContainer");

    var row = table.insertRow(addLoopCount); // for sl.no.
    // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
    var cell1 = row.insertCell(0);   //for sl no 
    var cell2 = row.insertCell(1);   //for task title 
    var cell3 = row.insertCell(2);   //for task description 
    var cell4 = row.insertCell(3);   //for completed 
    var cell5 = row.insertCell(4);   //for delete

    // Add some text to the new cells:
    cell1.innerHTML = slLoopCount;
    cell2.innerHTML = document.forms["new-task-form"]["task"].value;
    cell3.innerHTML = document.forms["new-task-form"]["description"].value;
    cell4.innerHTML = "<button onclick='Completed("+addLoopCount+"); return false;'>Completed</button>";
    cell5.innerHTML = "<button onclick='Delete("+addLoopCount+"); return false;'>Delete</button>";

    return false;

}
//comlete button function
function Completed(count){
    alert("Task no : "+count+" is completed");
    var x = document.getElementById("tableContainer").getElementsByTagName("tr");
    x[count].style.backgroundColor = "green";   
    return false;
   
}
// Delete button function
function Delete(count){
    alert("Are you sure to delete task no : "+count+" ?");
	document.getElementById("tableContainer").deleteRow(count);
    addLoopCount=addLoopCount-1;
    return false;
}

//For validate  blank check and peview 
function validateForm(){
    blankcheck();
    previewForm();
    return false;
   
}


