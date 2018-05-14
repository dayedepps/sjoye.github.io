$(document).ready(function(){
    $("#imgbox img").fadeOut(0).eq(0).fadeIn(0);
    var i = 0;
    setInterval(function(){
        if($("#imgbox img").length > (i+1)){
            $("#imgbox img").eq(i).fadeOut(666).next("img").fadeIn(1888);
            i++;
        }
        else{
            $("#imgbox img").eq(i).fadeOut(666).siblings("img").eq(0).fadeIn(1888);
            i = 0;
        }
    },6888);
});