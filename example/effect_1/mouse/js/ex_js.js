$(document).ready(function(){

    // 브라우저의 높이값 찾기
    let ht = $(window).height();

    $('section').height(ht)

    // 리사이즈 될떄마다 높이값에 대입하라
    $(window).resize(function(){

        let ht = $(this).height();
        $('section').height(ht)
    })




    //li를 클릭했을 때, scrollTop을 해당 높이로 가게 만들어라.
    $('header li').click(function(){

        //클릭했을 떄 나의 순번찾기
        let i = $(this).index();

        let ht = $(window).height();

        $('html, body').stop().animate({'scrollTop':ht*i}, 1100)
        
    })


    //마우스에서 휠을 올렸을 떄 내렸을 때, 움직인다.
    $('section').mousewheel(function(event,delta){

        if(delta>0) {
            //이전페이지로 이동

            let prev = $(this).prev().offset().top;
            $('html, body').stop().animate({'scrollTop':prev}, 1100)
        }
        
        
        
        else if(delta<0) {
            //다음페이지로 이동

            let next = $(this).next().offset().top;
            $('html, body').stop().animate({'scrollTop':next}, 1100)
        }
    })


    // 스크롤바의 위치를 찾아내라.
    $(window).scroll(function(){

        let sc = $(this).scrollTop();
        let ht = $(window).height();

        if(sc>=0 && sc<ht) {
            $('header li').removeClass('on')
            $('header li').eq(0).addClass('on')
        }

        if(sc>=ht && sc<ht*2) {
            $('header li').removeClass('on')
            $('header li').eq(1).addClass('on')
        }

        if(sc>=ht*2 && sc<ht*3) {
            $('header li').removeClass('on')
            $('header li').eq(2).addClass('on')
        }

        if(sc>=ht*3 && sc<ht*4) {
            $('header li').removeClass('on')
            $('header li').eq(3).addClass('on')
        }

        if(sc>=ht*4 && sc<ht*5) {
            $('header li').removeClass('on')
            $('header li').eq(4).addClass('on')
        }

        if(sc>=ht*5 && sc<ht*6) {
            $('header li').removeClass('on')
            $('header li').eq(5).addClass('on')
        }

        if(sc>=ht*6 && sc<ht*7) {
            $('header li').removeClass('on')
            $('header li').eq(6).addClass('on')
        }

        if(sc>=ht*7 && sc<ht*8) {
            $('header li').removeClass('on')
            $('header li').eq(7).addClass('on')
        }

    })


})