$(function() {
//setup
    var $list, $newItemForm, $newItemButton; 
    var item = ''; //item is an empty string
    $list = $('ul'); //cache the unordered list
    $newItemForm = $('#newItemForm'); //cache form to add new items
    $newItemButton = $('#newItemButton'); //cache the button to show form 
   $('li').hide().each(function(index) { //hide list items
       $(this).delay(450 * index).fadeIn(1600); //fade the list items in
   });
    //GOT TO HERE ---------------------------------------
    //item counter 
    function updateCount()
    
})