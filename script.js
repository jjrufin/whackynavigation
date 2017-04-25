$(document).ready(function(){
$('li').css('width', '200px');
$('li').css('height', '50px');
$('li').hover(
  function () {$ (this).fadeTo('fast','0.25');},
  function () {$ (this).fadeTo('fast','1'); }
);


$('li').click(function(){
  $(this).css('background-color', 'yellow').append('<p>Clicked!</p>');
});


$('#h1').click(function(){
  $(this).toggleClass('clicked');
});

$('button').click(function(){
$('#h1').slideToggle();
$('button').text('click me again');
});








});
