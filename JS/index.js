$(function () {
    //메뉴 호버시 이미지 attr 변경
    $(".right li img").hover(function () {
        $(this).attr("src", $(this).attr("src").replace("_off.png", "_active.png"));
    }, function () {
        $(this).attr("src", $(this).attr("src").replace("_active.png", "_off.png"));
    });
    $(".header_box .third_header ul li").hover(
        function() {
        $(this).find("img").attr("src", "img/down_arrow_hover.png"); 
        }, 
        function() {
        $(this).find("img").attr("src", "img/down_arrow.png");
        }
    );
    $(".third_header > ul > li").hover(
        function() {
        $(this).find(".inner_menu").stop().slideToggle(300);
        }
    );

    //footer family 사이트
    $(".btn .family_site").click(function () {
        $(".column_box_right .family_list").stop().toggle();
        $(this).toggleClass('on');
    });
});