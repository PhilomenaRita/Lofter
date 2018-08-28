/*function changeCss(obj){
    var alist = document.getElementsByTagName("a");
    for(var i =0;i < alist.Length;i++){
        alist[i].style.color = "#999"; //给所有a标签赋原色
    }
    obj.style.color = "#fff"; //令当前标签高亮
}*/

/*$("#hide").click(function(){
    $("#newleave").hide();
});
$("#show").click(function(){
    $("#newleave").show();
});*/

// new的显示和隐藏
$(document).ready(function(){
    $("#hide").click(function(){
        $("#newleave").toggle();
    });
});

//下拉菜单的显示隐藏
$(document).ready(function(){
    $("#demo").hide();
    $(".more").click(function(){
        $("#demo").toggle();
    });
});

$(document).ready(function(){
    $("#demo2").hide();
    $(".tbtag").click(function(){
        $("#demo2").toggle();
    });
});