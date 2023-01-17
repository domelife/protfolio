$(document).ready(function(){

    // 버튼을 클릭했을 때 box가 돌아라. 45deg씩
    let i = 0
    $('.left').click(function(){
        i++;
        $('.box').css({'transform':'rotateY('+45*i+'deg)'})
    })

    $('.right').click(function(){
        i--;
        $('.box').css({'transform':'rotateY('+45*i+'deg)'})
    })





    function timer(){
        $('.left').trigger('click')}
        // 오른쪽 방향으로 돌게 하고싶으면 right 트리거를 하면 됨.


    let slide = setInterval(timer,2000);

    // 마우스가 inner에 들어갔을 때, interval이 지워져라.
    $('.inner').mouseenter(function(){

        clearInterval(slide)
    })

    // 마우스가 떠났을 때, setInterval이 작동해라.
    $('.inner').mouseleave(function(){

        slide = setInterval(timer,2000);
    })


})