$(document).ready(function () {
    $('.modal').modal();
    if (window.location.href.indexOf("#resume") != -1) {
        $("#resume").modal('open');
    }
    $(".collapsible-header").addClass("waves-effect waves-teal");
    $('a').attr("target", "_blank");
});

window.onhashchange = function locationHashChanged() {
    if (location.hash === "#resume") {
        $("#resume").modal('open');
    }
};

document.oncontextmenu = function (e) {
    if (e.target.href) {
        return true;
    } else {
        return false;
    }
};

document.onkeydown = function (b) {
    if (b.ctrlKey && ((b.keyCode === 117 || b.keyCode === 85) || (b.shiftKey && (b.keyCode === 73 || b.keyCode === 105)))) {
        return false;
    } else {
        return true;
    }
};