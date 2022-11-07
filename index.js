(function(){
	// let the root document load
	window.onload = function() {
		// Generate and render an iframe element
		renderIframe();
	}

	function renderIframe() {
		// create an iframe
		const iframeContainer = document.querySelector('[data-frame-id=iframe]');
		const iframeEl = document.createElement('iframe');

		// set iframe dimensions
		iframeEl.height = "200";
		iframeEl.width = "100%";

		iframeEl.name = "myiframe";
		iframeEl.src = iframeContainer.dataset.frameSrc;
		iframeEl.loading = "lazy";
		iframeEl.allowfullscren = "allowfullscren";
		iframeEl.style.margin = 0;

		iframeContainer.appendChild(iframeEl);
	}
})();