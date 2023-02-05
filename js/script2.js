/* Funcion para agregar elementos
$("$shoppingForm").on('submit', function(e){
   var text = $('#addToList').val();
   $('#shoppingList').append('<li>'+text+'<li>');
   e.preventDefault()
})}*/

// Funcion para remover elementos
function removeLi() {
   $(this).parent().remove();
 }

 // Funcion para hacer línea 
function strikeThrough() {
   if ($(this).parent().css('textDecoration') == 'line-through') {
     $(this).parent().css('textDecoration', 'none');
   } else {
     $(this).parent().css('textDecoration', 'line-through');
   }
 } 

 //Funcion para agregar elementos
 $(document).ready(function() {
   $('ButtonPost').click(function() {
     var text = $('#addToList').val();
     $('.shoppingList').append('<li>' + '<input class="check" type="checkMark"/>' + text + '<button class="deleteButton btn-danger">x</button>' + '</li>');
     $('#addToList').val('').focus();
     $(document).on('click', '.delete', removeLi);
     $(document).on('click', '.check', strikeThrough);
   });
 });

