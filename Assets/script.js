//Logs current hour to console and store in variable
var currentHour = console.log(dayjs().hour());

//Sets current date to top of page
var today = dayjs()
$('#currentDay').text(today.format('dddd, MMMM D'));

//Declared Variables
var hoursArray = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];
var timeBlocks = $('#time-blocks');

//Loops through each of the hours within the scheduler, adding hour, text box and save button
$.each(hoursArray, function(i, hours) {
   
    var timeBlock = $('<form>');
    timeBlock.addClass('row time-block');

//Adds each hour to page
    var hour = $('<label>');
    hour.addClass('col-2 col-md-1 hour text-center py-3');
    hour.text(hours);

//Converts each hour to 24 hour time with AM/PM
    var blocksTime = dayjs(hours, "h A");
//Gets description for timeblock from local storage
    var blockDescription = JSON.parse(localStorage.getItem("blockDescription"));
//Adds styling to timeblock
    var desc = $("<input>");
    desc.addClass("col-8 col-md-10 description");
    desc.attr("id", "desc" + i);
    desc.val(blockDescription[i]);
    console.log(i,blockDescription[i]);

//Sets styling of present, past & future classes to timeblock based on current hour of the day
  if (currentHour = blocksTime) {
    desc.addClass("present")
  }
  else if (blocksTime < currentHour) {
    desc.addClass("past")
  }
  else if (blocksTime > currentHour) {
    desc.addClass("future")
  }
//Adds styling to save button for each time block
  var saveBtn = $("<button>");
  saveBtn.addClass("btn saveBtn col-2 col-md-1");
  saveBtn.attr("data-index", i);
  saveBtn.html('<i class="fas fa-save"></i>')
//Appends hour, description and save button to html
  timeBlock.append(hour, desc, saveBtn);
  timeBlocks.append(timeBlock);
});

//Save text in local storage that is entered into timeblock
function saveItem(event) {
    event.preventDefault();
    alert("Note Saved to Local Storage!")

    var btnClicked = $(event.target);
    var btnIndex = 0;
//If save button is clicked we get undefined so we check the parent item for what is entered
    if (btnClicked.attr("data-index") === undefined) {
      console.log(btnClicked.parent().attr("data-index"));
      btnIndex = btnClicked.parent().attr("data-index");
}
//Log out button index along with entered description
    else {
      console.log(btnClicked.attr("data-index"));
      btnIndex = btnClicked.attr("data-index");
    }
//Get description from local storage
    var blockDescription = JSON.parse(localStorage.getItem("blockDescription"));

//Send descriptions for all timeblocks to local storage
    blockDescription[btnIndex] = $("desc" + btnIndex).val();
    console.log($("desc" + btnIndex).val());
    localStorage.setItem("blockDescription", JSON.stringify(blockDescription))
  }

//Event listener on click for save button for each timeblock
timeBlocks.on("click", ".saveBtn", saveItem);

