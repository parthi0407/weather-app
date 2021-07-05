// starting line of jQuery
// document refers the HTML file

$(document).ready(function () {

    // givin the action for the button by refering the ID
    $("#srhBtn").click(function () {
        $("#result").text("Loading....")
        // location variable is saved
        var location = $("#location").val();
        // if value is not given in the searchbox, it will display
        if(!location){
            alert("Please enter the city name");
            return;
        }
        // For calling jquery in front end, we will use ajax
        $.ajax({
            url: `/api/weather?location=${location}`, // give the url the location is called dynamically
            type: 'GET', // type of the method
            success: function(res) {
                // showing the result in the page by using the p tag
                $("#result").text(res.forecast) // using the text function we are displaying the value
                $("#location").val(''); // to display the text area in empty after getting the result
            },
            error: function(error){
                console.log("error",error);
                $("#result").text("Please enter valid city name")
            }
        });
    })

});