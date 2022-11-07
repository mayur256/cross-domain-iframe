(function(){
	const iframeName = "myiframe";

	// let the root document load
	window.onload = function() {
		// Generate and render an iframe element
		renderIframe();

		const iframeEl = document.querySelector(`[name=${iframeName}]`);
		iframeEl.onload = function() {
			// listen for the mesages sent by iframe contents
			window.addEventListener('message', handleIframeMsgEvent);
		}

	}

	// generates an iframe element and attaches it to the DOM
	function renderIframe() {
		// create an iframe
		const iframeContainer = document.querySelector('[data-frame-id=iframe]');
		const iframeEl = document.createElement('iframe');

		// set iframe dimensions
		iframeEl.height = "300";
		iframeEl.width = "100%";

		iframeEl.name = iframeName;
		iframeEl.src = iframeContainer.dataset.frameSrc;
		iframeEl.loading = "lazy";
		iframeEl.allowfullscren = "allowfullscren";
		iframeEl.style.margin = 0;
		iframeEl.scrolling = "no";

		iframeContainer.appendChild(iframeEl);
	}

	// waits for a mesage event on iframe
	function handleIframeMsgEvent(msgEvent) {
		const iframeEl = document.querySelector(`[name=${iframeName}]`);
		
		if ('height' in msgEvent.data) {
			iframeEl.height = msgEvent.data.height;
		}
	}
})();