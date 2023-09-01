$(document).ready(readyNow);
function readyNow(){
    addToTable();
}
function addToTable(){ //This flashes on the screen then goes blank
    console.log("wtf");
        $(".submitButton").on("click", function(){
        const firstName = $("#firstName").val();
        const lastName = $("#lastName").val();
        const idNumber = $("#idNumber").val();
        const jobTitle = $("#jobTitle").val();
        const annualSalary = $("#annualSalary").val();
        console.log(firstName, lastName, idNumber, jobTitle, annualSalary);
        $("#tableBody").append(`      
        <tr>
            <td>${firstName}</td>
            <td>${lastName}</td>
            <td>${idNumber}</td>
            <td>${jobTitle}</td>
            <td>${annualSalary}</td>
          </tr>`);
        });
    }

    
