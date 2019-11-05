$( document ).ready(function()
{
  var sup = $('sup');
  sup.addClass('popup');

  sup.on('click', function(self){popupToggle(this);});
  $('sup span').addClass('popup-text');
});

function popupToggle(self)
{
  var sup = $(self).children('.popup-text').toggleClass('show');
}
