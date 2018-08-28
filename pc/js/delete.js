var remove = function($el){
    $el.remove();
};
$(".delete").click(function(){
    var $pel = $(this).parent().parent();
    remove($pel);
});