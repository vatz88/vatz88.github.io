$(document).ready(function () {
    $('.modal').modal();
    if (window.location.href.indexOf("#resume") != -1) {
        $("#resume").modal('open');
    }
    $(".collapsible-header").addClass("waves-effect waves-teal");
    $('a').attr("target", "_blank");
});

window.onhashchange = function () {
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

document.onkeydown = function (e) {
    if (e.ctrlKey && ((e.keyCode === 117 || e.keyCode === 85) || (e.shiftKey && (e.keyCode === 73 || e.keyCode === 105)))) {
        return false;
    } else {
        return true;
    }
};