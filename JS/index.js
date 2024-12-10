$(function () {
    $(".right li img").hover(function () {
        $(this).attr("src", $(this).attr("src").replace("_off.png", "_active.png"));
    }, function () {
        $(this).attr("src", $(this).attr("src").replace("_active.png", "_off.png"));
    });
    $(".header_box .third_header ul li").hover(
        function() {
        $(this).find("img").attr("src", "img/down_arrow_hover.png");  // 마우스를 올리면 이미지 변경
        }, 
        function() {
        $(this).find("img").attr("src", "img/down_arrow.png");  // 마우스를 떼면 원래 이미지로 돌아옴
        }
    );
    $(".third_header > ul > li").hover(
        function() {
        $(this).find(".inner_menu").stop().slideToggle(300);  // 마우스를 올리면 이미지 변경
        }
    );
});