$(function(){
  $("a").click(function(event){
    if (this.hash !==""){
      event.preventDefault();

      var gato=this.hash;
      $("html, doby").animate({
        scrollTop: $(gato).offset().top
      }, 800, function(){
        window.location.hash = gato;
    });
   }
 });

  $('[data-toggle="popover"]').popover();

});
