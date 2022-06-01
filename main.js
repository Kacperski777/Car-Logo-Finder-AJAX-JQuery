const mq = window.matchMedia( "(max-width: 960px)" );



$(document).ready(function(){
  sue();
  if (mq.matches) {
    $(".view").append("Mobile View")
    $(".para-view").append("Welcome to the Mobile Version of this website ;)")
    $(".para-view").css("font-size", "1.5rem");
    $("#random").css("font-size", "1.5rem");
    $("#pic").css("width", "70%")
    $(".view-2").css("font-size", "3rem")
    $(".view").css("font-size", "1rem")
    $("#title").css("font-size", "2.5rem")
    $(".desktop-only").hide();
  }
  else{
      $(".view").append("Desktop View")
      $(".para-view").append("Welcome to the Desktop Version of this website ;)")
      $("#random").css("font-size", "2rem")
  }
})





function sue(){
  let rando = Math.floor(Math.random() * 373);
  console.log(rando)


   


    $("#random").on("click", function(){
      fetch("./logos/data.json")
      .then(function(response) {
     return response.json();
    
      })

      .then(function(jsondata){
 
          $("#car").hide().slideDown("fast").delay("100");
          $("#title").html(jsondata[rando].name) + $("#pic").attr("src", jsondata[rando].image.source);
         
 
      
      } 
  )


})
};



$("#random").on("click", function(){
  sue();
 

  
})