//------------------------ LOGIN -------------------------------------
// Llamamos al boton del elemento del DOM cuando hacemos click sobre el 	  
document.getElementById("buttonLogin").onclick = function(evt) {
	// Capturamos el evento de hacer submit sobre el formulario y lo paramos
	evt.preventDefault();
    // Creamos la variable booleana que es la que nos hará de control de envio,
    // Si se cumple se envia, si en algún campo no se cumple, no se envia
	let boolean = true;
	// ---- Limpiamos las classes 'is-invalid' y 'is-valid' ----
	this.form.querySelectorAll("*").forEach(function(item) {  //aplicamos la funcion para cada elemento, seleccionados todos los elementos del formulario
		item.className = item.className.replace(/(is-valid|is-invalid)/g, '');  //indicamos que reemplace la classe is-valid por is-invalid, y la is-invalid por is-invalid
	});
	// ------------------------- EMAIL -----------------------------------
	this.form.email.value = this.form.email.value.trim();
	let email = this.form.email.value;
	let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; // Formato mail, con un simbolo de arroba obligatorio, el punto obligatorio, y despues 2 o 3 caracteres despues del punto
	if (email == "") {
        this.form.email.className += " is-invalid ";
        $('.email-alert-format').hide();
        $('.email-alert-empty').show();  
		boolean = false;
	} else if (!emailRegex.test(email)) {
        this.form.email.className += " is-invalid ";
        $('.email-alert-empty').hide();
        $('.email-alert-format').show(); 
		boolean = false;
    } else {
		this.form.email.className += " is-valid ";
	}
    // ------------------------ CONTRASEÑA ---------------------------------
    let password = this.form.password.value;
	if (password == "") {
        this.form.password.className += " is-invalid ";
        $('.password-alert-format').hide();
        $('.password-alert-empty').show();  
		boolean = false;
	} else if (password.length > 12){
        this.form.password.className += " is-invalid ";
        $('.password-alert-empty').hide();
        $('.password-alert-format').show(); 
		boolean = false;
    } else {
		this.form.password.className += " is-valid ";
    }
    // ------------------------ CONFIRMAR CONTRASEÑA ---------------------------------
    if (this.form.password2.value == ""){
        this.form.password2.className += " is-invalid ";
        $('.password2-alert-format').hide();
        $('.password2-alert-empty').show(); 
		boolean = false;
    }
    else if (this.form.password2.value !== password) {
        this.form.password2.className += " is-invalid ";
        $('.password2-alert-empty').hide();
        $('.password2-alert-format').show(); 
		boolean = false;
	} else {
		this.form.password2.className += " is-valid ";
	}
	//Creamos la condición final de si se cumple todo, se envia el formulario al hacer click en el button
	if (boolean == true) {
		this.form.submit(); //Disparamos el evento de enviar el formulario validado
	}
}