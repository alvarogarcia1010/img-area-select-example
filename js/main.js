$(document).ready(function(){

  $('img#photo').imgAreaSelect({
      handles: true,
      onSelectEnd:  function (img, selection) {
        $('input[name="x1"]').val(selection.x1);
        $('input[name="y1"]').val(selection.y1);
        $('input[name="x2"]').val(selection.x2);
        $('input[name="y2"]').val(selection.y2);
      }
  });

  $('#agregar').click(function(e){
    e.preventDefault();
    var area = `<area class="harea tooltip" alt="Banskobystrický kraj" title="Banskobystrický kraj" data-img="" data-ref=""  alt="Si clías aquí irás a la portada" shape="rect" coords="${$('input[name="x1"]').val()},${$('input[name="y1"]').val()},${$('input[name="x2"]').val()},${$('input[name="y2"]').val()}" href="#">`
    $('#map').append(area);
  });

  ActualizarLink();
});

function ActualizarLink(){

  $("#map").mapoid({
   width : 540,
   strokeColor: 'blue',
   strokeWidth: 2,
   fillColor: 'rgb(19, 84, 251)',
   fillOpacity: 0.5,
   selectedArea: true,
   selectOnClick: false,
   deselect: function(){alert('deselect')},
    click: function(){alert('click')}});



};
