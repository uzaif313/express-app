var socket = io();
	var chat_username = document.querySelector("#chat-username");
		var chat_message =document.querySelector("#chat-message")

socket.on('connect',function(){
	var chat_form = document.forms.chatForm;

	if (chat_form) {
	
		chat_form.addEventListener('submit',function(e){
			e.preventDefault();
			
			socket.emit('send_message',{
				username:chat_username.value,
				message:chat_message.value
			});



			chat_message.value ='';
			chat_message.focus();
		});

		socket.on("update_messages",function(data){
			showMessage(data);
		})

	}	

});

	function showMessage(data){
		var chat_display = document.querySelector(".chat-display");
		var new_message = document.createElement("p");
		if (chat_username.value == data.chat_username){
			new_message.className = 'bg-warning chat-text';

		}else{

			new_message.className = 'bg-success chat-text';
		}
		new_message.innerHTML = '<strong>'+data.username+'</strong>: '+ data.message;
		chat_display.insertBefore(new_message,chat_display.firstChild);
	}
