$(function () {
    var $onclick = $(".recommended-button");
    $onclick.click(function () {       //定义了对应的单击事件，也就是类别的单击事件。
        $(this).addClass("hidden");
    });
});