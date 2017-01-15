$(".collapsible-header").addClass("waves-effect waves-teal");
$(document).ready(function() {
    $(".modal-trigger").leanModal();
    if (window.location.href.indexOf("#resume") != -1) {
        $("#resume").openModal()
    }
});
document.oncontextmenu = function() {
    return false
};
document.onkeydown = function(b) {
    if (b.ctrlKey && ((b.keyCode === 117 || b.keyCode === 85) || (b.shiftKey && (b.keyCode === 73 || b.keyCode === 105)))) {
        return false
    } else {
        return true
    }
};
