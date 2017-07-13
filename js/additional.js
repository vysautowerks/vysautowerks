if (document.getElementById("year").addEventListener)
{
	document.getElementById("year").addEventListener("keypress", function (evt) {
	    if (evt.which < 48 || evt.which > 57)
	    {
	        evt.preventDefault();
	    }
	});
}
else if (document.getElementById("year").attachEvent)
{
	document.getElementById("year").attachEvent("onkeypress", function (evt) {
	    if (evt.which < 48 || evt.which > 57)
	    {
	        evt.preventDefault();
	    }
	});
}

(function() {
	var messageVar = document.getElementById("message");
	var form = document.getElementById('contactForm');

	var checkMessageValidity = function() {
		if (messageVar.value.trim().replace(" ", "").length == 0)
		{
			messageVar.setCustomValidity('Message cannot be blank.');
			messageVar.value = "";
			updateErrorMessage();
		}
		else
		{
			messageVar.setCustomValidity('');
		}
	};
	
	var updateErrorMessage = function() {
	    form.getElementsByClassName('error')[0].innerHTML = messageVar.validationMessage;
	};
	
	messageVar.addEventListener('change', checkMessageValidity, false);
/*	messageVar.getElementById('content').addEventListener('keydown', function (e){
		messageVar.setCustomValidity('');
		messageVar.blur();
		messageVar.focus();
	}, false);

	form.addEventListener('submit', function() {
		checkMessageValidity();
	    if (!this.checkValidity()) {
	        event.preventDefault();
	        updateErrorMessage();
	        messageVar.focus();
	    }
	}, false);
*/
}());
