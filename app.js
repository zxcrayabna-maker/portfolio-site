$(document).ready(function(){
   $('header').mouseenter(function () {
    $('.line').css("border-bottom", "2px solid rgb(250, 253, 160)")
    $('.leftSide').css("border-left", "2px solid rgb(250, 253, 160)")
    $('.rightSide').css("border-right", "2px solid rgb(250, 253, 160)") 
    $('#p1').css("color", "rgb(250, 253, 160)") 
});

   $('header').mouseleave(function () {
    $('.line').css("border-bottom", "2px solid rgba(248, 250, 187, 0.266)")
    $('.leftSide').css("border-left", "2px solid rgba(248, 250, 187, 0.266)")
    $('.rightSide').css("border-right", "2px solid rgba(248, 250, 187, 0.266)") 
    $('#p1').css("color", "rgba(248, 250, 187, 0.266)") 
});

   $('.leftSide').mouseenter(function () {
    $('.line').css("border-bottom", "2px solid rgb(250, 253, 160)")
    $('.leftSide').css("border-left", "2px solid rgb(250, 253, 160)")
    $('.rightSide').css("border-right", "2px solid rgb(250, 253, 160)") 
    $('#p1').css("color", "rgb(250, 253, 160)") 
    
});

   $('header').mouseleave(function () {
    $('.line').css("border-bottom", "2px solid rgba(248, 250, 187, 0.266)")
    $('.leftSide').css("border-left", "2px solid rgba(248, 250, 187, 0.266)")
    $('.rightSide').css("border-right", "2px solid rgba(248, 250, 187, 0.266)") 
    $('#p1').css("color", "rgba(248, 250, 187, 0.266)") 
});


   $('.rightSide').mouseenter(function () {
    $('.line').css("border-bottom", "2px solid rgb(250, 253, 160)")
    $('.leftSide').css("border-left", "2px solid rgb(250, 253, 160)")
    $('.rightSide').css("border-right", "2px solid rgb(250, 253, 160)") 
    $('#p1').css("color", "rgb(250, 253, 160)") 
});

   $('.rightSide').mouseleave(function () {
    $('.line').css("border-bottom", "2px solid rgba(248, 250, 187, 0.266)")
    $('.leftSide').css("border-left", "2px solid rgba(248, 250, 187, 0.266)")
    $('.rightSide').css("border-right", "2px solid rgba(248, 250, 187, 0.266)") 
    $('#p1').css("color", "rgba(248, 250, 187, 0.266)") 
});

   $('.container').mouseenter(function () {
    $(".container").css("border", "2px solid  rgb(250, 253, 160)")
    $('#p2').css("color", "rgb(250, 253, 160)") 
    $('.p1').css("color", "rgba(250, 253, 160, 0.8)") 
    $('.p2').css("color", "white")     
    $('span').css("color", "white") 
    $(".first").css("border", "2px solid  rgb(250, 253, 160)")
    $(".second").css("border", "2px solid  rgb(250, 253, 160)")
    $(".third").css("border", "2px solid  rgb(250, 253, 160)")
});

   $('.container').mouseleave(function () {
    $(".container").css("border", "2px solid rgba(248, 250, 187, 0.266)")
    $('.p1').css("color", "rgba(248, 250, 187, 0.266)") 
    $('.p2').css("color", "rgba(255, 255, 255, 0.347)") 
    $('#p2').css("color", "rgba(255, 255, 255, 0.347)") 
    $('span').css("color", " rgba(255, 255, 255, 0.347)") 
    $('.first').css("border", "2px solid rgba(248, 250, 187, 0.266)")
    $('.second').css("border", "2px solid rgba(248, 250, 187, 0.266)")
    $('.third').css("border", "2px solid rgba(248, 250, 187, 0.266)") 
});
});