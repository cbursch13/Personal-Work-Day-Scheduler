
//Logs current hour to console and stored in variable
var currentHour = console.log(dayjs().hour());

//Sets current date to top of page
$('#currentDay').text(today.format('dddd, MMMM D'));

//Declared Variables
var saveButtonEl = $('#saveBtn');
var hoursArray = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];
var timeBlocks = $('#time-block');

//Loops through each of the hours within the scheduler, adding hour and text box
$.each(hoursArray, function(i, hours) {
    var timeBlock = $('<form>');
    timeBlock.addClass('row time-block');

    var hour = $('<label>');
    hour.addClass('col-2 col-md-1 hour text-center py-3');
    hour.text(hours);



})



// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

 // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  saveButtonEl.on('click', function () {
    
   });
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
// function all
  // If currentHour = hour ID then use present class
  // If currentHour is > hour ID then use past class
  // If currentHour is < hour ID then use future class

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.

