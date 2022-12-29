$(document).ready(function(){

    // 브라우저의 높이값 찾기
    let ht = $(window).height();
    console.log(ht)

    // 리사이즈 될떄마다 높이값에 대입하라
    $(window).resize(function(){

        let ht = $(window).height();
        $('section').height(ht)
    })




    //li를 클릭했을 때, scrollTop을 해당 높이로 가게 만들어라.
    $('header li').click(function(){

        //클릭했을 떄 나의 순번찾기
        let i = $(this).index();

        let ht = $(window).height();
        let oht= $('section').eq(i).offset().top

        $('html, body').stop().animate({'scrollTop':ht*i}, 1400,'easeOutBounce')
        $('section').eq(i).text(oht)
    })


    //마우스에서 휠을 올렸을 떄 내렸을 때, 움직인다.
    $('section').mousewheel(function(event,delta){

        if(delta>0) {
            //이전페이지로 이동

            let prev = $(this).prev().offset().top;
            $('html, body').stop().animate({'scrollTop':prev}, 1400,'easeOutBounce')
        }
        
        
        
        else if(delta<0) {
            //다음페이지로 이동

            let next = $(this).next().offset().top;
            $('html, body').stop().animate({'scrollTop':next}, 1400,'easeOutBounce')
        }
    })


})