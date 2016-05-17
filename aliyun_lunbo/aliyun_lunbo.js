/**
 * Created by liuyanhao on 15/5/16.
 */
// window.load=movePic();
$(".change").click(function () {
    movePic();
})
function movePic() {
    $(".img").animate({opacity:"0",top:"0px"},"slow")
}