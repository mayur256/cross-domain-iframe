(function(){
	window.onload = function() {
		let payload = {
			height: document.body.scrollHeight
		};

		window.top.postMessage(payload, '*');
	}
})();