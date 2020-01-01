
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
  }
  $(document).ready(function(){
  $(".dropdown").click(function(){
      $(this).find(".dropdown-menu").slideToggle("fast");
  });
});


$(document).on("click", function(event){
  var $trigger = $(".dropdown");
  if($trigger !== event.target && !$trigger.has(event.target).length){
      $(".dropdown-menu").slideUp("fast");
  }            
});


window.onload = function () {
    scrollSpy('#mainNav', {
    sectionClass: '.scrollspy',
    menuActiveTarget: 'li > a',
    offset: 100,
    activeClass: 'active',
    })
}

$('.navTrigger').click(function () {
    
    $(this).toggleClass('active');
    $("#mainListDiv").toggleClass("show_list");
    $("#mainListDiv").fadeIn();
});

baguetteBox.run('.tz-gallery');
var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 550,  
});

var linear = new SmoothScroll('[data-easing="linear"]', {easing: 'linear'});

filterSelection("all")
        function filterSelection(c) {
          var x, i;
          x = document.getElementsByClassName("filterDiv");
          console.log(x);
          
          if (c == "all") c = "all";
          for (i = 0; i < x.length; i++) {
            RemoveClass(x[i], "show");
            if (x[i].className.indexOf(c) > -1) {
               AddClass(x[i], "show");};
          }
        }
        
        function AddClass(element, name) {
          var i, arr1, arr2;
          arr1 = element.className.split(" ");
          arr2 = name.split(" ");
          for (i = 0; i < arr2.length; i++) {
            if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
          }
        }
        
        function RemoveClass(element, name) {
          var i, arr1, arr2;
          arr1 = element.className.split(" ");
          arr2 = name.split(" ");
          for (i = 0; i < arr2.length; i++) {
            while (arr1.indexOf(arr2[i]) > -1) {
              arr1.splice(arr1.indexOf(arr2[i]), 1);     
            }
          }
          element.className = arr1.join(" ");
        }
        
        // Add active class to the current button (highlight it)
        var btnContainer = document.getElementById("myBtnContainer");
        var btns = btnContainer.getElementsByClassName("btn");

        for (var i = 0; i < btns.length; i++) {
          btns[i].addEventListener("click", function(){
            var current = document.getElementsByClassName("active");
            current[0].className = current[0].className.replace("active"," ");
            this.className += " active";
          });
        }



