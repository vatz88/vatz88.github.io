//Add content
var content_about_me =
    
    "I'm VaTz88. Engg stud at VIT.";

var content_connect_with_me =

    "I'm there everywhere.";

$("#AboutMeContent").text(content_about_me);
$("#ConnectWithMeContent").text(content_connect_with_me);//--Add content

//Add waves effect to collapsible-header
$(".collapsible-header").addClass("waves-effect waves-teal");//--Add waves effect to collapsible-header

//Disable mouse right click
document.oncontextmenu = function(){
    return false;
};//--Disable mouse right click

//Dis able keyboard keys crtl+u and ctrl+shift+i
document.onkeydown = function(e){
    if(e.ctrlKey && ((e.keyCode === 117 || e.keyCode === 85) || (e.shiftKey && (e.keyCode === 73 || e.keyCode === 105)))){
        return false;
    }else{
        return true;
    }
};
//--Dis able keyboard keys crtl+u and ctrl+shift+i