# JS-Pr-ctica-final
Ejercicio Final Generador Formulario
Vamos a crear un generador de formularios. Un poco rústico, eso sí, pero nos va a servir para poner en práctica muchos conceptos de los aprendidos.
Vamos a tener una lista de selección donde se expondrán los tipos de elementos que podemos crear:

Campo de texto
Campo de número
Campo para introducir email
Lista de selección
Campo para incluir unas opciones no exclusivas de selección
Campo para incluir opciones exclusivas de selección.
El usuario podrá elegir el tipo de control que desea añadir y podrá modificar ciertas características según el tipo de elemento que escoja. Así serán las opciones a tener en cuenta:

En todos los casos, elija el tipo de elemento que elija, se pedirá como primer paso un literal que servirá como etiqueta del control que vayamos a incluir. Por ejemplo, si elegimos “Campo de Texto” nos saldrá un text donde tendremos que introducir el valor para su etiqueta. Por ejemplo: “Nombre”. Así para ese campo de texto, su etiqueta correspondiente tendrá “Nombre” como valor y como indicación de qué es lo que tiene que introducir en el propio control de texto.
Si elige campo de: texto, email o número, añadiremos tanto el label correspondiente, como su control de formulario del tipo correcto.
Si elige el campo lista de selección, el usuario será preguntado por la lista de valores a incluir en la misma. Se añadirá, al final, tanto la etiqueta asociada a la lista, como la lista con los valores.
En el caso de opciones no exclusivas, también se pedirán los valores correspondientes y se realizará una inclusión uno a uno de dichos valores.
Lo mismo pasa con las opciones exclusivas.
El penúltimo paso ha de ser incluir un botón de envío donde se requerirá, por parte del usuario, que introduzca el valor del literal que iría dentro del botón.

Al final, el resultado ha de ser la formación de un formulario, con sus etiquetas correspondientes, y los controles que -dinámicamente- se han introducido a través de nuestro pequeño “motorcillo” de formularios y que, además, estamos viendo en tiempo real (wow).

Esta práctica requiere también de entendimiento de requisitos. En el mundo de la empresa muchas veces hay que hacer un esfuerzo extra para entender exactamente lo que se está pidiendo (no sirve con  hacer nuestra versión interpretada de las cosas).
