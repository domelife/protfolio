$(document).ready(function(){

    let imgs=""

    for(var i = 0; i<200; i++) {

        console.log(i);

        imgs+='<img src="img/pic'+i+'.jpg">'
        // 따옴표가 여러개일때 짝궁을 몹시 잘 찾아줘야함.

        $('section').html(imgs)

    };




    $(window).mousemove(function(e){

        let x = e.pageX;
        let wd = $(window).width()


        // 최대 움직인 거리에서 내가 움직인 거리를 나누고 *200
        // 움직인 거리(x값) / 최대거리(window의 가로값)
        // 연산식은 아래
        let number = Math.floor((x/wd)*200) 
        
        // $('h1').text(number);

        $('section img').hide()
        $('section img').eq(number).show()
    })


})