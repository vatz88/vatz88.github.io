$(function () {
  $('.modal').modal({
    ready: function () {
      if ($("#resume iframe").length === 0) {
        $("#resume .modal-content").html('<iframe src="https://docs.google.com/viewer?srcid=17SJXhb048iAt1bTxOR14O4VyAuik6nuqgC3-W1Sl740&pid=explorer&efh=false&a=v&chrome=false&embedded=true"></iframe>');
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

  // Night Mode
  $("#profilePic").click(function () {
    $("body").toggleClass("night");
  });
  var hour = (new Date()).getHours();
  if (hour < 5 || hour > 17) {
    $("body").addClass("night");
  }

  // typed.js
  var typed = new Typed('#typedText', {
    strings: ["Hi there!", "Good to see you here.", "I would love to hear from you.", "Connect with me @vatz88"],
    typeSpeed: 30,
    backSpeed: 10,
    startDelay: 4000,
    showCursor: true,
    cursorChar: " /",
    backDelay: 2000,
    // loop: true
    loop: false
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

var keydownflag = true;
document.onkeydown = function (e) {
  if (e.ctrlKey && ((e.keyCode === 117 || e.keyCode === 85) || (e.shiftKey && ((e.keyCode === 73 || e.keyCode === 105) || (e.keyCode === 67 || e.keyCode === 99))))) {
    if (keydownflag) {
      keydownflag = false;
      Materialize.toast('<h3>Loved it?</h3>', 2500, 'rounded', function () {
        Materialize.toast('<h3>Interested in code?</h3>', 2500, 'rounded', function () {
          Materialize.toast('<h3>Follow me on GitHub :)</h3>', 3000, 'rounded', function () {
            keydownflag = true;
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
setTimeout(function () {
  console.clear();
  console.log('%cvatz88', ['font-size: 64px', 'color: #757575'].join(';'));
  console.log('%cType play in the window ;)', ['font-size: 24px', 'color: #00BFA5'].join(';'));
}, 8800);
