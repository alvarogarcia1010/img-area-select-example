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
    var area = `<area class="map" alt="Si clías aquí irás a la portada" shape="rect" coords="${$('input[name="x1"]').val()},${$('input[name="y1"]').val()},${$('input[name="x2"]').val()},${$('input[name="y2"]').val()}" href="#">`
    $('#map').append(area);
  });

  ActualizarLink();
});

function ActualizarLink(){
  $('#map').on('click', '.map', function(e){
    e.preventDefault();
    alert("hola");
  });
};
