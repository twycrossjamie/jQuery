$(function() {
//SETUP
    var $list, $newItemForm, $newItemButton; 
    var item = ''; //item is an empty string
    $list = $('ul'); //cache the unordered list
    $newItemForm = $('#newItemForm'); //cache form to add new items
    $newItemButton = $('#newItemButton'); //cache the button to show form 
   $('li').hide().each(function(index) { //hide list items
       $(this).delay(450 * index).fadeIn(1600); //fade the list items in
   });
    //ITEM COUNTER 
    function updateCount() { //declare function
        var items = $('li[class!=complete]').length; //number of items in list by checking if class is complete
        $('#counter').text(items); //added complete items into counter circle
    }
    updateCount(); //call the function 
    
    //SETUP FORM FOR NEW ITEMS
    $newItemButton.show(); //show the button
    $newItemForm.hide(); //hide the form
    $('#showForm').on('click',function() {
        $newItemButton.hide(); //hide the button
        $newItemForm.show(); //show the form
    });
    //ADDING A NEW LIST ITEM 
    $newItemForm.on('submit', function(e) { //when a new item is submitted
        e.preventDefault(); //prevent form from submitting
        var text = $('input:text').val(); //get value of text input
        $list.append('<li>' + text + '</li>'); //add item to end of the list 
        $('input:text').val(''); //empty the text input
        updateCount(); //update the count
                    });
    //CLICK HANDLING - USES DELEGATION ON <ul> ELEMENT
    $list.on('click', 'li', function() {
        var $this = $(this); //cache the element in a jQuery object
        var complete = $this.hasClass('complete'); //is item complete
        
        if (complete === true) { //check if item is complete
            $this.animate({ //if so animate opacity + padding
                opacity: 0.0,
                paddingLeft: '+=180'
            }, 500, 'swing', function() { //use a callback when animation is complete
                $this.remove(); //
            });
        } else { //otherwise indicate it is complete
            item = $this.text(); //get the text from the list item 
            $this.remove(); //remove the list item
            $list //add back to end of list as complete 
            .append('<li class=\"complete\">' + item + '</li>') //hide it so it can be faded in 
            .hide().fadeIn(300);
            updateCount();  //update the counter
        } //end of else options
    }); //end of event handler 
});