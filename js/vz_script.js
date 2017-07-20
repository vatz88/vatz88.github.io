$(function () {
	$('.modal').modal({
		ready: function () {
			if ($("#resume iframe").length === 0) {
				$("#resume .modal-content").html('<iframe src="https://docs.google.com/viewer?srcid=1mayR9xRDXRXmHcmGClmzXFbbOZsCA86jjjVTfSbDobg&pid=explorer&efh=false&a=v&chrome=false&embedded=true"></iframe>');
				// ga event
				ga('send', {
					hitType: 'event',
					eventCategory: 'Resume',
					eventAction: 'open'
				});
			}
		},
		complete: function () {
			// remove hash sign without reloading the window
			history.pushState("", document.title, window.location.pathname + window.location.search);
		}
	});
	window.onhashchange = (function () {
		if ((window.location.hash).toLowerCase() === "#resume") {
			$("#resume").modal('open');
		} else if (window.location.hash !== "") {
			Materialize.toast('<h4>Err, try #resume</h4>', 3500, 'rounded');
		}
		return arguments.callee;
	})();

	// typed.js
	$("#typedText").typed({
		strings: ["Tech enthusiast.", "Enjoy coding.", "Swimming, football, chess, etc.", "Stay connected!"],
		typeSpeed: 0,
		startDelay: 800,
		showCursor: true,
		cursorChar: " /",
		backDelay: 1400,
		loop: true
	});

	/* I'm is watching you! */
	var isTouchDevice = 'ontouchstart' in document.documentElement;
	if (!isTouchDevice) {
		var $profilePic = $('#profilePic');
		var dh = $(document).height() / 2;
		var dw = $(document).width() / 2;
		var maxRotate = 20;
		window.onresize = function (event) {
			dh = $(document).height() / 2;
			dw = $(document).width() / 2;
		};
		$(document).mousemove(function (event) {
			var Xdeg = 90 - (event.pageY * 90) / dh;
			var Ydeg = -90 + (event.pageX * 90) / dw;
			if (Xdeg > 0) {
				Xdeg = Xdeg > maxRotate ? maxRotate : Xdeg % maxRotate;
			} else {
				Xdeg = Xdeg < -maxRotate ? -maxRotate : -(-Xdeg % maxRotate);
			}
			if (Ydeg > 0) {
				Ydeg = Ydeg > maxRotate ? maxRotate : Ydeg % maxRotate;
			} else {
				Ydeg = Ydeg < -maxRotate ? -maxRotate : -(-Ydeg % maxRotate);
			}
			$profilePic.css('transform', 'translateZ( -200px ) perspective( 600px ) rotateY( ' + Ydeg + 'deg ) rotateX( ' + Xdeg + 'deg )');
		});
		// show vzplay on hover on profile pic
		$("#profilePic").hover(function () {
			$("#vzplay").slideDown();
		}, function () {
			$("#vzplay").slideUp();
		});
	} else {
		$('.tooltipped').tooltip('remove');
	}

	// Google analytics - add events
	$("#resumeDownloadBtn").click(function () {
		ga('send', {
			hitType: 'event',
			eventCategory: 'Resume',
			eventAction: 'download'
		});
	});
	$("#socialMediaButtons").on("click", "a", function () {
		var eventName = $(this).data("tooltip");
		console.log(eventName);
		ga('send', {
			hitType: 'event',
			eventCategory: 'Connect',
			eventAction: eventName
		});
	});
});

document.oncontextmenu = function (e) {
	if (e.target.href) {
		return true;
	} else {
		return false;
	}
};

var onkeydownT = true;
document.onkeydown = function (e) {
	if (e.ctrlKey && ((e.keyCode === 117 || e.keyCode === 85) || (e.shiftKey && ((e.keyCode === 73 || e.keyCode === 105) || (e.keyCode === 67 || e.keyCode === 99))))) {
		if (onkeydownT) {
			onkeydownT = false;
			Materialize.toast('<h3>Loved it?</h3>', 2500, 'rounded', function () {
				Materialize.toast('<h3>Interested in code?</h3>', 2500, 'rounded', function () {
					Materialize.toast('<h3>Follow me on GitHub :)</h3>', 3000, 'rounded', function () {
						onkeydownT = true;
					});
				});
			});
		}
		return false;
	} else {
		return true;
	}
};

// console message
var consolestyles = ['font-size: 46px', 'color: #757575'].join(';');
console.log('%cVaTz88', consolestyles);