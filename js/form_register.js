//------------------------ VALIDACION REGISTRO -------------------------------------
// Llamamos al boton del elemento del DOM cuando hacemos click sobre el 	  
document.getElementById("buttonSubmit").onclick = function(evt) {
	// Capturamos el evento de hacer submit sobre el formulario y lo paramos
	evt.preventDefault();
    // Creamos la variable booleana que es la que nos hará de control de envio,
    // Si se cumple se envia, si en algún campo no se cumple, no se envia
	let boolean = true;
	// ---- Limpiamos las classes 'is-invalid' y 'is-valid' ----
	this.form.querySelectorAll("*").forEach(function(item) {  //aplicamos la funcion para cada elemento, seleccionados todos los elementos del formulario
		item.className = item.className.replace(/(is-valid|is-invalid)/g, '');  //indicamos que reemplace la classe is-valid por is-invalid, y la is-invalid por is-invalid
	});
	// ------------------------ NOMBRE --------------------
	this.form.nombre.value = this.form.nombre.value.trim();  
	let nombre = this.form.nombre.value;
	let nombreRegex = /[a-zA-Z]+/g; 
	if (nombre == "") {
        this.form.nombre.className += ' is-invalid';
        $('.name-alert-format').hide();
        $('.name-alert-empty').show();         
		boolean = false;
	} else if (!nombreRegex.test(nombre)) {
        this.form.nombre.className += ' is-invalid';
        $('.name-alert-empty').hide();
        $('.name-alert-format').show();         
        boolean = false;
    } else {
		this.form.nombre.className += ' is-valid';
    }
    // ------------------------ APELLIDOS --------------------
    this.form.apellidos.value = this.form.apellidos.value.trim();  
	let apellidos = this.form.apellidos.value;
	let apellidosRegex = /[a-zA-Z]+/g; 
	if (apellidos == "") {
        this.form.apellidos.className += ' is-invalid';
        $('.surname-alert-format').hide();
        $('.surname-alert-empty').show();                
		boolean = false;
	} else if (!apellidosRegex.test(apellidos)) {
            this.form.apellidos.className += ' is-invalid';
            $('.surname-alert-empty').hide();
            $('.surname-alert-format').show();         
            boolean = false;
    } else {
		this.form.apellidos.className += ' is-valid';
    }



    // ------------------------ PROVINCIA ---------------------------------
	if (this.form.provincia.value == "" ) {
		this.form.provincia.className += " is-invalid ";
		boolean = false;
	} else {
		this.form.provincia.className += " is-valid ";
	}
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
        $('.password2-format-empty').hide();
        $('.password-alert-empty').show();  
		boolean = false;
	} else if (password.length > 12){
        this.form.password.className += " is-invalid ";
        $('.password-alert-empty').hide();
        $('.password2-format-empty').show(); 
		boolean = false;
    } else {
		this.form.password.className += " is-valid ";
    }
    // ------------------------ CONFIRMAR CONTRASEÑA ---------------------------------
    if (this.form.password2.value == ""){
        this.form.password2.className += " is-invalid ";
        $('.password2-format-empty').hide();
        $('.password2-alert-empty').show(); 
		boolean = false;
    }
    else if (this.form.password2.value !== password) {
        this.form.password2.className += " is-invalid ";
        $('.password2-alert-empty').hide();
        $('.password2-format-empty').show(); 
		boolean = false;
	} else {
		this.form.password2.className += " is-valid ";
	}
	//Creamos la condición final de si se cumple todo, se envia el formulario al hacer click en el button
	if (boolean == true) {
		this.form.submit(); //Disparamos el evento de enviar el formulario validado
	}
}