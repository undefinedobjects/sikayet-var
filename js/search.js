window.onload = function() {

	function validURL(str) {

		var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
		  '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
		  '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
		  '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
		  '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
		  '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
		  
		return !!pattern.test(str);

	}

	function hostName(str) {

		let url = (new URL(str)).host.split('.');

		if (url.length <= 2) {
			
			return url[0];

		} else {
			
			return url[1];

		}

	}

	chrome.tabs.getSelected(null,function(tab) {
		
		if (validURL(tab.url)) {

			document.querySelector('#sikayetVar').src = "https://www.sikayetvar.com/" + hostName(tab.url);

		}

	});

  }