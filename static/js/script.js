/* Author: YOUR NAME HERE
*/

var socket = io.connect();

$(document).ready(function() {   

  $('#sender').bind('click', function() {
   socket.emit('message', 'Message Sent on ' + new Date());     
  });

  socket.on('server_message', function(data){
   $('#receiver').append('<li>' + data + '</li>');  
  });
});

function startVM(name){
  socket.emit('startVM',name);
  console.log('name');
}