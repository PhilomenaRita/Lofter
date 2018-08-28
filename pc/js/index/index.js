//原生实现
//通过获取的鼠标下标
// $('#img').tooltip(function () {
//     $('#show').css('display','block');
// });
// $('.hover-info').mouseenter(function (e) {
//     const x = $(this).parent().find('.show');
//     x.css({
//         'top':$(this).offset().top +'px',
//         'left':$(this).offset().left+'px',
//         'display':'block'
//     });
// });
// $('.hover-info').mouseleave(function () {
//     $('.hover-info.show').css('display','none');
// });
    $('.no-follow').click(function () {
        $(this).css('display','none');
        $('.has-follow').css('display','block');
    });
    $('.has-follow').click(function () {
        $(this).css('display','none');
        $('.no-follow').css('display','block');
    });

    var status = 0;
    $('.like').click(function () {
        if(status == 0){
            $(this).find('span').removeClass();
            $(this).find('span').eq(0).addClass('like-act');
            $(this).addClass('link');
            status = 1;
        }else if(status == 1){
            $(this).removeClass('link');
            $(this).find('span').removeClass();
            $(this).find('span').eq(0).addClass('dislike-left');
            $(this).find('span').eq(1).addClass('dislike-right');
            status = 0;
        }
    });
