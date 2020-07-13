//------------------------ VALIDACION FORM BAR SEARCH -------------------------------------
// Llamamos al boton del elemento del DOM cuando hacemos click sobre el 	  
document.getElementById("button-bar-search").onclick = function(evt) {
	// Capturamos el evento de hacer submit sobre el formulario y lo paramos
	evt.preventDefault();
    // Creamos la variable booleana que es la que nos hará de control de envio,
    // Si se cumple se envia, si en algún campo no se cumple, no se envia
	// ---- Limpiamos las classes 'is-invalid' y 'is-valid' ----
	this.form.querySelectorAll("*").forEach(function(item) {  //aplicamos la funcion para cada elemento, seleccionados todos los elementos del formulario
		item.className = item.className.replace(/(is-valid|is-invalid)/g, '');  //indicamos que reemplace la classe is-valid por is-invalid, y la is-invalid por is-invalid
	});
    // ------------------------- EMAIL -----------------------------------
    this.form.inputBarSearch.value = this.form.inputBarSearch.value.trim();
    let search = this.form.inputBarSearch.value;
    let boolean = true;
    if (search == "")  {
        boolean = false;
        this.form.inputBarSearch.className += " is-invalid ";
        $('.search-alert-empty').show();
        $('.search-alert-format').hide(); 
    } else if (search.length < 3) {
        boolean = false;
        this.form.inputBarSearch.className += " is-invalid ";
        $('.search-alert-format').show();
        $('.search-alert-empty').hide(); 
    }
    	//Creamos la condición final de si se cumple todo, se envia el formulario al hacer click en el button
	if (boolean == true) {
		this.form.submit(); //Disparamos el evento de enviar el formulario validado
    }
}