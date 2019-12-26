$(function () {
	console.log(window.location.pathname);
	if(window.location.pathname.includes('/about.html') || 
		window.location.pathname.includes('/education.html') ||
		window.location.pathname.includes('/experience.html') ||
		window.location.pathname.includes('/skills.html')){
		$("#navigation").html(
		'<div id="colorlib-page">' + 
			'<header>' + 
				'<div class="container">' + 
					'<div class="row">' +
						'<div class="col-md-12">' +
							'<div class="colorlib-navbar-brand">' +
								'<a class="" href="index.html"> <span class="back">BACK</span></a>' +
							'</div>' +
						'</div>' +
				'</div>' +
			'</div>' +
		'</header>')
	}
});