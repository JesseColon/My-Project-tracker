$(function () {

var currentdate = dayjs().format("ddd, MMMM D YYYY");

var savedText = [];


    $('#currentDay').text(currentdate);
  
  $("time-block").each(function(){

      var hour = parseInt($(this).attr("id").split("-")[1]);
      var currentHour = dayjs().format('H');
       console.log(textInput);
      if(hour === currentHour ){
        $(this).removeClass("past future").addClass("present");
     }else if(hour < currentHour){
        $(this).removeClass("present future").addClass("past");
     }else{
        $(this).removeClass("past present").addClass("future");
    }
    console.log(hour)
    console.log(currentHour);


  });

  $('.time-block').each(function() {
    var hour = $(this).attr('id');
    var savedDescription = localStorage.getItem(hour);
    if (savedDescription) {
      $(this).find('.description').val(savedDescription);
    }
  });


 function storeText() {
    localStorage.setItem("saveText", JSON.stringify(savedText));
 }


$('.saveBtn').on('click', function() {
  var hour = $(this).parent().attr("id");
  var description = $(this).siblings(".description").val();
  localStorage.setItem(hour, description);
  savedText.push(description);
  storeText();
});

  
function showSavedText() {
  var storedText = JSON.parse(localStorage.getItem("savedText"))
  if (storedText !== null) {
    savedText = storedText
  }
}

showSavedText();




});