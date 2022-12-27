$(document).ready(function(){

    //  커서가 마우스를 따라다녀라
    $(window).mousemove(function(e){

        $('.cursor').css({'cursor':'none'})

        let x = e.pageX
        let y = e.pageY


        //같은 말임 = .count p:nth-child(1) em {}
        $('.count p').eq(0).children('em').text(x)


        $('.count p').eq(1).children('em').text(y)
    

        $('.cursor').css({'left': x-25, 'top': y-25})


    

        
    })

    //span 중 style1 안으로 들어갔을 때 cursor에
    //style1이라는 클래스 특징을 더해라.

    $('.style1').mouseenter(function() {
            $('.cursor').addClass('style1')
        }) 

    $('.style1').mouseenter(function() {
            $('.cursor').removeClass('style1')
        }) 


})