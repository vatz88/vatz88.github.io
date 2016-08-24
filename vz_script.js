//Add content
var content_about_me =

    "Engineering student at VIT University, Vellore campus.\
    Technology enthusiast and love coding.";

var content_connect_with_me =

    "I'm here!";

$("#AboutMeContent").text(content_about_me);
//$("#ConnectWithMeContent").text(content_connect_with_me);
$("#ConnectWithMeContent").hide();

//Add waves effect to collapsible-header
$(".collapsible-header").addClass("waves-effect waves-teal");

//Trigger modal
$(document).ready(function () {
    $('.modal-trigger').leanModal();
});

//Disable mouse right click
document.oncontextmenu = function () {
    return false;
};

//Dis able keyboard keys crtl+u and ctrl+shift+i
document.onkeydown = function (e) {
    if (e.ctrlKey && ((e.keyCode === 117 || e.keyCode === 85) || (e.shiftKey && (e.keyCode === 73 || e.keyCode === 105)))) {
        return false;
    } else {
        return true;
    }
};