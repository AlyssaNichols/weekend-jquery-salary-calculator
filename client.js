let totalSalary = 0;


$(document).ready(readyNow);
function readyNow(){
    addToTable();
    $("#tableBody").on("click", ".deleteButton", onDelete);
    
}
function addToTable(){
    
        $(".submitButton").on("click", function(){
        const firstName = $("#firstName").val();
        const lastName = $("#lastName").val();
        const idNumber = $("#idNumber").val();
        const jobTitle = $("#jobTitle").val();
        let annualSalary = $("#annualSalary").val();

        // if(!firstName || !lastName || !idNumber || !jobTitle || !annualSalary){
        //     alert('Missing input field')
        //     return;
        //    }

        $("#tableBody").append(`      
        <tr>
            <td>${firstName}</td>
            <td>${lastName}</td>
            <td>${idNumber}</td>
            <td>${jobTitle}</td>
            <td id ="salary" >${annualSalary}</td>
            <td><button type ="button" class="deleteButton">Delete</button></td>
          </tr>`);
          
          totalSalary = Math.round(totalSalary + Number(annualSalary));
          let monthlySalary = totalSalary / 12 ;
          $('#totalDollarAmount').text(monthlySalary);

          if (monthlySalary > 20000){
            $("#totalDollarAmount").css("background-color", "red");
          }
  
        $("#firstName").val("");
        $("#lastName").val("");
        $("#idNumber").val("");
        $("#jobTitle").val("");
        $("#annualSalary").val("");
        });
    }

    function onDelete(event) {
        const button = event.target;
        $(button).closest("tr").remove();

        let annualSalary = $(event.target).closest("tr").find("#salary").text();
        
        totalSalary -= Number(annualSalary);
        let monthlySalary = totalSalary / 12;
        console.log(monthlySalary);
        $("#totalDollarAmount").text(monthlySalary);

        if (monthlySalary < 20000){
        $("#totalDollarAmount").css("background-color", "white");
            }
          }

    

    // function deleteCohort(event) {
    //   // Update the global count
    //   // Walk the DOM: Go from button (event.target) UP to the list-item (.cohort)
    //   // then search down for the td that has the current cohort count (.current-count)
    //   // then, grab the text value (number), convert it to a number, subtract
    //   // that value from the global count, and update the DOM
    //   const currentCount = $(event.target).closest('.cohort').find('.current-count').text();
    //   studentCount -= Number(currentCount);
    //   $('#totalStudents').text(studentCount);


    
