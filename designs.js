// Select color input
// Select size input
$(document).ready(function() {
  var columnWidthCount =16;
  var columnHeightCount =16;
  

// When size is submitted by the user, call makeGrid()

function makeGrid() {

// Your code goes here!
  var boxCount = columnWidthCount * columnHeightCount;
  for( var i = 0;i < boxCount; i++)
  {
       $("<div class='squares'></div>").appendTo('#main');
  }
  $(".squares").width((780 / columnWidthCount) - 2);
  $(".squares").width((780 / columnHeightCount) - 2);
  $('.squares').hover(
    function() {
      $(this).addClass('hover');
    }
    );
}
makeGrid();
$('button').on("click",function() {
  $('div').remove('.squares');
  var squareHigh =prompt("How many squares high?(must be a number)");
  var squareWide =prompt("How many squares wide?(must be a number)");
  
  columnWidthCount = parseInt(squaresWide);
  columnHeightCount = parseInt(squaresHigh);
    makeGrid();
  
  
  

}
