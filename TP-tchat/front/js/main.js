let form = document.getElementById('form');
let input = document.getElementById('input');

form.addEventListener('submit', event=>{
  event.preventDefault();
  if(input.value){
    socket.emit('message', input.value);
    input.calue = '';
  }
});
