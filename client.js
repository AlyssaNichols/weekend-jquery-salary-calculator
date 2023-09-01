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

        if(!firstName || !lastName || !idNumber || !jobTitle || !annualSalary){
            alert('Missing input field')
            return;
           }

        $("#tableBody").append(`      
        <tr>
            <td>${firstName}</td>
            <td>${lastName}</td>
            <td>${idNumber}</td>
            <td>${jobTitle}</td>
            <td id ="salary" >${annualSalary}</td>
            <td><button type ="button" class="deleteButton">Delete</button></td>
          </tr>`);
          let monthlySalary = Math.round(totalSalary + Number(annualSalary) / 12) ; // 12 months in a year
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
    }

    