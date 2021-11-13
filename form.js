'use strict'

 window.addEventListener('load', function () {

     var formulario = document.querySelector('#form');

     formulario.addEventListener('submit', function () {



         var enviarForm = document.querySelector('#formEnviar');
         var errorForm = document.querySelector('#errorForm');

         var numero = 541133497050;
         var nombre = document.querySelector('#nombre').value
         var apellido = document.querySelector("#apellido").value;
         var mensaje = document.querySelector('#mensaje').value;

        
         const enviarMensaje = () => {
             var win = window.open(`https://wa.me/${numero}?text=Hola, soy%20${nombre}%20${apellido}, Consulta:%20${mensaje} Muchas gracias`, '_blank');
         }

         enviarForm.addEventListener('click', enviarMensaje);
     });

     formulario.event.preventDefault();

 });