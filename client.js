let totalSalary = 0;


$(document).ready(readyNow);
function readyNow(){
    addToTable();
    $("#tableBody").on("click", ".deleteButton", onDelete);
    
}
function addToTable(){
    // click listener for the submit button to update the values of each variable
        $(".submitButton").on("click", function(){
        const firstName = $("#firstName").val();
        const lastName = $("#lastName").val();
        const idNumber = $("#idNumber").val();
        const jobTitle = $("#jobTitle").val();
        let annualSalary = $("#annualSalary").val();
// if any fields are left blank- alert missing input field
        if(!firstName || !lastName || !idNumber || !jobTitle || !annualSalary){
            alert('Missing input field')
            return;
           }
// append the values of each variable to a row in the table body
// add delete button to each row as well so we can delete a single employees information
        $("#tableBody").append(`      
        <tr>
            <td>${firstName}</td>
            <td>${lastName}</td>
            <td>${idNumber}</td>
            <td>${jobTitle}</td>
            <td id ="salary" >${annualSalary}</td>
            <td><button type ="button" class="deleteButton">Delete</button></td>
          </tr>`);
       // update the total salary when a new employee's information is added
       // we are wanting monthly cost so we take the total salary divided by 12 (12 months per year)   
          totalSalary = totalSalary + Number(annualSalary);
          let monthlySalary = Math.round(totalSalary / 12) ;
          $('#totalDollarAmount').text(monthlySalary);
// if monthly salary is above $20,000 it will alert the user by changing the background color
// of the total red
          if (monthlySalary > 20000){
            $("#totalDollarAmount").css("background-color", "red");
          }
  // reset the values to blank strings for easier use
        $("#firstName").val("");
        $("#lastName").val("");
        $("#idNumber").val("");
        $("#jobTitle").val("");
        $("#annualSalary").val("");
        });
    }
// making the delete button functional
// deleting the row that the button lives in
// after deleting the row it updates the total monthly salary to not include that employees data anymore
    function onDelete(event) {
        const button = event.target;
        $(button).closest("tr").remove();

        let annualSalary = $(event.target).closest("tr").find("#salary").text();
        
        totalSalary -= Number(annualSalary);
        let monthlySalary = Math.round(totalSalary / 12);
        $("#totalDollarAmount").text(monthlySalary);
        // change the css of the total monthly salary back to normal when it drops
        // below $20,000 
        if (monthlySalary < 20000){
          $("#totalDollarAmount").css("background-color", "white");
          return true
          }
        }

  