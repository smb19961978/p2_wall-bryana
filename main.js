
//sticky nav code

// When the user scrolls the page, execute myFunction 
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementsByClassName("navbar")[0];

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position


function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}


//api code





var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var apiResult = JSON.parse(this.responseText);

        //Code Dealing With The API Data Goes Here
        
        var words = document.querySelectorAll("span")[0];
        
        function showMessage(){
            apiResult.sort(function(a,b){return 0.5 - Math.random()});
            var randomMessageParagraph = document.createElement ('p');
            words.appendChild(randomMessageParagraph);
            var randomeMessageText = document.createTextNode(apiResult[0].word);
            randomMessageParagraph.appendChild(randomeMessageText);
            
            
            
            
            console.log(apiResult);
        
       // words[0].appendChild(adjective);
        
       
        

    }
        showMessage();
};
};
xmlhttp.open('GET', 'https://api.datamuse.com/words?rel_syn=impressive', true);
xmlhttp.send();






//hamburger menu//

$( document ).ready(function() {

$( ".cross" ).hide();
$( ".menu" ).hide();
$( ".hamburger" ).click(function() {
$( ".menu" ).slideToggle( "slow", function() {
$( ".hamburger" ).hide();
$( ".cross" ).show();
});
});

$( ".cross" ).click(function() {
$( ".menu" ).slideToggle( "slow", function() {
$( ".cross" ).hide();
$( ".hamburger" ).show();
});
});

});

//contact form open/close

//if i click the #cross2 the contact form goes on visibility hidden 
var button = document.getElementsByTagName("button")[2];

var form = document.getElementsByClassName("container")[0];

button.addEventListener("click", function(){
    form.classList.remove("hidden");
    
});



//if I click on button[1] form appears

var cross = document.getElementById("cross2");

cross.addEventListener("click", function(){
    form.classList.add("hidden");   
});









 
        
        