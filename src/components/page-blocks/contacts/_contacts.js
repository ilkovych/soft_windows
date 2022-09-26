function rudr_favorite(e) {
	pageTitle=document.title;
	pageURL=document.location;
	try {
		// Internet Explorer solution
		eval("window.external.AddFa-vorite(pageURL, pageTitle)".replace(/-/g,''));
	}
	catch (e) {
		try {
			// Mozilla Firefox solution
			window.sidebar.addPanel(pageTitle, pageURL, "");
		}
		catch (e) {
			// Opera solution
			if (typeof(opera)=="object") {
				e.rel="sidebar";
				e.title=pageTitle;
				e.url=pageURL;
				return true;
			} else {
				// The rest browsers (i.e Chrome, Safari)
				alert('Press ' + (navigator.userAgent.toLowerCase().indexOf('mac') != -1 ? 'Cmd' : 'Ctrl') + '+D to bookmark this page.');
			}
		}
	}
	return false;
}

document.querySelector('.contacts__favorites-button').addEventListener('click', rudr_favorite);