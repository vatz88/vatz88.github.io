document.oncontextmenu = function(){
    return false;
};

document.onkeydown = function(e){
    if(e.ctrlKey && ((e.keyCode === 117 || e.keyCode === 85) || (e.shiftKey && (e.keyCode === 73 || e.keyCode === 105)))){
        return false;
    }else{
        return true;
    }
};