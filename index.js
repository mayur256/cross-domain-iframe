(function(){
	const iframeName = "myiframe";

	// let the root document load
	window.onload = function() {
		// 1. Generate and render an iframe element
		const iframeContainer = document.querySelector('[data-frame-id]');

		renderIframe();
		// generates an iframe element and attaches it to the DOM
		function renderIframe() {
			// create an iframe
			const iframeEl = document.createElement('iframe');

			// set minimum iframe dimensions
			iframeEl.height = "100%";
			iframeEl.width = "100%";

			iframeEl.name = iframeName;
			iframeEl.src = iframeContainer.dataset.frameSrc;
			iframeEl.loading = "lazy";
			iframeEl.allowfullscren = "allowfullscren";
			iframeEl.style.margin = 0;
			iframeEl.scrolling = "no";

			iframeContainer.appendChild(iframeEl);
		}

		// create a reference to iframe element
		const iframeEl = document.querySelector(`[name=${iframeName}]`);

		// wait for iframe to load before attaching message event listener
		iframeEl.onload = function() {
			// listen for the mesages sent by iframe contents
			window.addEventListener('message', handleIframeMsgEvent);
		}


		// waits for a mesage event on iframe
		function handleIframeMsgEvent(msgEvent) {			
			if (msgEvent.data?.hasOwnProperty('height')) {
				const newHeight = msgEvent.data.height;
				
				iframeEl.height = newHeight;
			}
		}

	}
	
})();
