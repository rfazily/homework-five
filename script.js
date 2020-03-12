

// Activating moment to set the times where noted
const m = moment();

// Variables for on save button click 
var words;
var hourInfo;


// Displaying the current day at the top of the application using moment 
console.log(m.format("dddd, MMMM Do"));

$("#currentDay").text(m.format("dddd, MMMM Do"));



//INSERTING ALL FUNCTIONS
$(document).ready( function() {
    colorChange ();
    renderText ();
});

// This should change the color of the rows as time goes on

function colorChange () {
    
    var realTime = moment().hours();
    // console.log("Time test" + timeTest);
    console.log("Current Time" + realTime);
    

    $(".input").each(function () {
        var timeTest = parseInt($(this).attr("id"));
        console.log(timeTest);
        
        if (realTime > timeTest) {
            $(this).removeClass("future");
            $(this).removeClass("present");
            $(this).addClass("past");
        } else if (realTime < timeTest) {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
        } else {
            $(this).removeClass("future");
            $(this).removeClass("past");
            $(this).addClass("present");
        }
    });
}

// This activates the Save Button feature and change the color of the button 

$(".saveBtn").click(function() {
    words = $(this).siblings(".input").val();
    console.log(words);
    hourInfo = $(this).siblings(".hour").text();
    console.log(hourInfo);
    localStorage.setItem(hourInfo, JSON.stringify(words));
    
    colorChange ();
    // renderText ();
})

// This function should save our text that is placed within the timeblocks in localstorage so that if you type in your text, click the save button and refresh the page, the text is there there. For some reason i cannot get the text to save. This is not functioning properly. Instead when you click the save button, it makes your text vanish which is the opposite of what I'm trying to accomplish?

// function renderText () {
//     var saveText9 = JSON.parse(localStorage.getItem("9:00 am"));
//     $("#9am").val("");
//     $("#9am").val(saveText9);
    
//     var saveText10 = JSON.parse(localStorage.getItem("10:00 am"));
//     $("#10am").val("");
//     $("#10am").val(saveText10);
    
//     var saveText11 = JSON.parse(localStorage.getItem("11:00 am"));
//     $("#11am").val("");
//     $("#11am").val(saveText11);
    
//     var saveText12 = JSON.parse(localStorage.getItem("12:00 pm"));
//     $("#12pm").val("");
//     $("#12pm").val(saveText12);
    
//     var saveText1 = JSON.parse(localStorage.getItem("1:00 pm"));
//     $("#1pm").val("");
//     $("#1pm").val(saveText1);

//     var saveText2 = JSON.parse(localStorage.getItem("2:00 pm"));
//     $("#2pm").val("");
//     $("#2pm").val(saveText2);

//     var saveText3 = JSON.parse(localStorage.getItem("3:00 pm"));
//     $("#3pm").val("");
//     $("#3pm").val(saveText3);

//     var saveText4 = JSON.parse(localStorage.getItem("4:00 pm"));
//     $("#4pm").val("");
//     $("#4pm").val(saveText4);

//     var saveText5 = JSON.parse(localStorage.getItem("5:00 pm"));
//     $("#5pm").val("");
//     $("#5pm").val(saveText5);
// }


// here is an alternative option to the one above to save values in local storage and this one seems to be working instead of the one above but when i refresh the values disappear
var availableHours = {};

//this is supposed to save value to local storage on click but it doesnt work for some reason!?
$('.save-button').on('click', function(event){
    event.preventDefault();

    // this should also save the user input to local sorage
    localStorage.setItem('availableHours', JSON.stringify(availableHours))

});