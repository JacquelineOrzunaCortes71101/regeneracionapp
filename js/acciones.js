//JavaScript Document

$(document).ready(function(e){
	var citas =[];
	$('#enviar').on('click', function(){
		//mostrar el gif		
		$.when($.post("http://192.168.4.98/regeneracion/buscarcitas.php",{usuario: $('#usuario').val(),password: $('#pass').val()})).then(
		function exito(datos) {
		alert (datos);
		},
		function error(){
			alert ("error, no se puede alcancaz el servidor");
		}
		



);//then when
}); //click enviar
});
