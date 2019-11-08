function crea_elemento(tipo){
	
	crea_titulo();	
	var nombre = prompt("Introduce el nombre del elemento");

	if (nombre !==undefined){
		//Obtenemos el nodo del formulario en el que queremos incluir el elemento
		var contenedor = document.querySelector("#generado") ;
		//Creamos un elemento div
		var caja = document.createElement("div");
		//Cremaos en elemento etiqueta
		var etiqueta = document.createElement("label");
		//Asociamos la etiqueta al elemento y añadimos el nombre como texto
		etiqueta.setAttribute("for", nombre);
		etiqueta.textContent=nombre;
		//En función del tipo de elemento que queremos crear (pasado como parámetro), seleccionamos una de las siguientes opciones
		switch(tipo){
			//En caso de crear un campo para introducir texto
			case 'texto':
			//Creamos el elemento input
			var elemento = document.createElement("input");
			//Añadimos diferentes clases al elemento y a la etiqueta
			elemento.classList.add("input-texto");
			etiqueta.classList.add("label-texto");
			//Asignamos el tipo de control al elemento
			elemento.setAttribute("type", "text");
			break;
			
			//En caso de crear un campo para introducir numeros
			case 'numero':
			//Creamos el elemento input
			var elemento = document.createElement("input");
			//Añadimos diferentes clases al elemento y a la etiqueta
			elemento.classList.add("input-numero");
			etiqueta.classList.add("label-numero");
			//Asignamos el tipo de control al elemento
			elemento.setAttribute("type", "number");
			break;
			
			//En caso de crear un campo para introducir email
			case 'email':
			var elemento = document.createElement("input");
			//Añadimos diferentes clases al elemento y a la etiqueta
			elemento.classList.add("input-email");
			etiqueta.classList.add("label-email");
			//Asignamos el tipo de control al elemento
			elemento.setAttribute("type", "email");
			break;
			
			//En caso de crear una lista deplegable
			case 'lista':
			//Creamos el elemento select
			var elemento = document.createElement("select");
			//Obtenemos el número de opciones que contendrá la lista
			var opciones = prompt("¿Cuantos elementos tendrá la lista?");
			//Añadimos diferentes clases al elemento y a la etiqueta
			elemento.classList.add("select-lista");
			etiqueta.classList.add("label-lista");
			//Comprobamos si el dato introducido es un número
			if (Number.isInteger(opciones/1)){
				//En caso afirmativo comenzamos un bucle que se repetirá las veces indicadas
				for (i=1;i<=opciones;i++){
					//Creamos el elemento option
					var opc = document.createElement("option");
					//Obtenemos el valor que se le asignará a la opción
					var txt = prompt("Introduce el elemento número " + i);
					//Asignamos el valor obtenido a la opción
					opc.setAttribute("value", txt);
					//Añadimos el texto para que sea visible en el menú desplegable
					opc.textContent=txt;
					//Añadimos la opción al elemento select
					elemento.appendChild(opc);
				}
			//En caso de introducir un valor no númerico
			}else{
				//Mostramos una alerta para que el usuario sea consciente del error y salimos de la función
				alert("Tienes que introducir un número entero. Tendrás que volver a empezar.");
				return;
			}
			break;

			//En caso de crear una lista de opciones no exclusivas
			case 'opc_no_exc':
			//Creamos el elemento div que contendrá las opciones y las etiquetas
			var elemento = document.createElement("div");
			//Obtenemos el número de opciones que contendrá la lista
			var opciones = prompt("¿Cuantas opciones quieres incluir?");
			//Ejecutamos una función para crear elementos con opciones, exclusivas o no exclusivas
			//Esta función puede retornar un error, en ese caso se sale de la función
			//Pasamos como atributo el elemento en el que se almacenan las opciones, el número de opciones, el tipo de opciones(exclusivas o no exclusivas) y el nombre del elemento
			if (crea_opciones(elemento,opciones,"checkbox",nombre)=="error"){
				return;
			}
			//Añadimos una clase a la etiqueta generada
			etiqueta.classList.add("label-opciones");
			//Asignamos un valor de altura mínimo en función del número de opciones
				caja.style.minHeight= opciones*20 + "px";
			break;

			//En caso de crear una lista de opciones exclusivas
			case 'opc_exc':
			//Creamos el elemento div que contendrá las opciones y las etiquetas
			var elemento = document.createElement("div");
			//Obtenemos el número de opciones que contendrá la lista
			var opciones = prompt("¿Cuantas opciones quieres incluir?");
			//Ejecutamos una función para crear elementos con opciones, exclusivas o no exclusivas
			//Esta función puede retornar un error, en ese caso se sale de la función
			//Pasamos como atributo el elemento en el que se almacenan las opciones, el número de opciones, el tipo de opciones(exclusivas o no exclusivas) y el nombre del elemento
			if (crea_opciones(elemento,opciones,"radio",nombre)=="error"){
				return;
			}
			//Añadimos una clase a la etiqueta generada
			etiqueta.classList.add("label-opciones");
			//Asignamos un valor de altura mínimo en función del número de opciones
			caja.style.minHeight = opciones*20 +"px";
			break;
		}

		//Añadimos clases a la caja que contendrá el elemento
		caja.classList.add("gen-caja")
		caja.classList.add(tipo)

		//Asignamos el valor del atributo name al alemento
		elemento.setAttribute("name", nombre);

		//Añadimos la etiqueta y el elemento a la caja contenedora
		caja.appendChild(etiqueta);
		caja.appendChild(elemento);

		//Comprobamos si existe un botón ya generado
		if (document.querySelector(".boton-generado")){
			//Si existe, obtenemos su nodo y añadimos el elemento justo antes del botón
			var boton = document.querySelector(".boton-generado");
			contenedor.insertBefore(caja,boton);
		}else{
			//Si no existe, lo añadimos a continuación del último elemento del formulario
			contenedor.appendChild(caja);
		}
	}
}

//Función para crear elementos con opciones exclusivas y no exclusivas
function crea_opciones(elemento,opciones,tipo_opcion, nombre){
	
	//Comprobamos que el valor opciones es un número entero
	if (Number.isInteger(opciones/1)){

		//Añadimos una clase al elemento
		elemento.classList.add("opciones");
		//Creamos un bucle que se repetirá el número de opciones que queremos
		for (i=1;i<=opciones;i++){
			//Cremaos la opción con un elemento input, el elemento etiqueta que se asociará y un salto de linea
			var opc = document.createElement("input");
			var opc_label = document.createElement("label");
			var br = document.createElement("br");
			//Obtenemos el nombre que se asignará a la opción
			var txt = prompt("Introduce opción número " + i);
			//Asignamos el atributo for a la etiqueta y el texto de esta
			opc_label.setAttribute("for", txt);
			opc_label.textContent = txt;
			//Asignamos los diferentes atributos a la opción
			opc.setAttribute("name", nombre);
			opc.setAttribute("type", tipo_opcion);
			opc.setAttribute("value", txt);
			opc.setAttribute("id", txt);
			//Añadimos la opción, la etiqueta y el salto de línea al elemento que hemos creado
			elemento.appendChild(opc);
			elemento.appendChild(opc_label);
			elemento.appendChild(br);
		}
	//En caso de haber introducido un número de opciones no válido
	}else{
		//Mostramos una alerta para que el usuario sea consciente del error y devolvemos el valor error como resultado de la función
		alert("Tienes que introducir un número entero. Tendrás que volver a empezar.");
		return "error";
	}
}

//Función para comprobar si hay título y crearlo
function crea_titulo(){
	//Buscamos el nodo del formulario creado
	var formulario = document.querySelector("#generado");
	//Lo hacemos visible ya que al cargar la página es invisible
		formulario.style.visibility ="visible";
	//Buscamos el nodo del título del formulario generado
	var titulo = document.querySelector("#titulo-formulario-gen");

	//En caso de no tener texto lo creamos
	if (titulo.textContent == ""){
		//Obtenemos el título que quiere poner el usuario
		var nombre_form = prompt("Primero introduce un título para el formulario");
		//Asignamos el título al elemento de la página
		titulo.textContent=nombre_form;
	}
}

//Función para crear un botón
function nuevo_boton(){
	//Ejecutamos la función para añadir título al formulario generado
	crea_titulo();
	//Obtenemos el texto que el usuario quiere que tenga el botón
	var txt = prompt("Introduce el texto del boton");
	//Comprobamos que el usuario a pulsado el botón aceptar
	if (txt !== undefined){
		//Obtenemos el nodo del formulario en el que crearemos el botón
		var contenedor = document.querySelector("#generado");
		//Creamos la caja contenedora y el elemento input
		var caja = document.createElement("div");
		var boton = document.createElement("input");
		//Añadimos una clase a la caja y atributos al elemento input
		caja.classList.add("boton-generado");
		boton.setAttribute("id", txt);
		boton.setAttribute("type", "submit");
		boton.setAttribute("value", txt);
		//Añadimos la caja al formulario y el elemento input a dicha caja
		contenedor.appendChild(caja);
		caja.appendChild(boton);
	}
}

