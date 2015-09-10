$('.carousel').carousel({
	interval:3000
})

/*para el tooltip de las anotaciones*/
$(function () {
	  $('[data-toggle="tooltip"]').tooltip()
	})
	
/*Para el objeto del menu desplegable*/
function abrirMenu(pagina) {
	$("#contenido").attr("data",pagina);
    /*document.getElementById("contenido").data = pagina;*/
} 