$( document ).ready(function() {
    third_cena();
});
function first_cena() {
  $('#background-first').fadeOut(3000);
  $('#text-first').hide();
  $('#bg-first').hide();
  $('#background-second').fadeIn(1500);
  $('#bg-second').show();
  $('#text-second').show();
  tid = setTimeout(second_cena, 5000); 
}
function second_cena() {
  $('#background-second').fadeOut(3000);
  $('#text-second').hide();
  $('#bg-second').hide();
  $('#background-third').fadeIn(1500);
  $('#bg-third').show();
  $('#text-third').show();
  tid = setTimeout(third_cena, 5000); 
}
function third_cena() {
  $('#background-third').fadeOut(3000);
  $('#text-third').hide();
  $('#bg-third').hide();
  $('#background-first').fadeIn(1500);
  $('#bg-first').show();
  $('#text-first').show();
  tid = setTimeout(first_cena, 5000); 
}
function abortTimer() {
  clearTimeout(tid);
}