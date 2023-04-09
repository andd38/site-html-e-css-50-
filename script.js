

function acao(){
   
    var nav = document.getElementById("nav");
    if( "block"== nav.style.display ){
        nav.style.display ="none";
        nav.style.transition="0.5s"

    }
    else{
        nav.style.display = "block"
        nav.style.transition="0.5s"
    }
}
   var nav = document.getElementById("nav");
   nav.style.display ='block';
   

   function subir(){
    var home = document.getElementById("home");
    home.style.transform = "translateY(15px)";
   }
   
   $("#gmail").click(function(){
    $("#msg").hide()
   })
  