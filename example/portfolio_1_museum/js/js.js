$(document).ready(function(){

    //브라우저의 높이값 찾기
    let ht = $(window).height();

    // gnb의 높이를 찾아라
    let gnbht = $('#gnb').height();
    console.log(gnbht)

    //gnb의 가로값을 찾아라
    let gnbwd = $('#gnb').width();
    console.log(gnbwd)


    // 문제점: 화면크기가 조정될때마다 달라짐
    $('.main').height(ht);
    $('.category').height(ht);
    $('.info').height(ht);
    $('.reservation').height(ht);
    $('.floor').height(ht);
    $('.notice').height(ht);

    $('.road').height('1971px');




    // 해결책: 브라우저가 리사이즈 될때마다, 브라우저의 높이를 찾아 
    // section의 높이값에 대입해라
    $(window).resize(function(){

        let ht = $(window).height();
        $('.main').height(ht);
        $('.category').height(ht);
        $('.info').height(ht);
        $('.reservation').height(ht);
        $('.floor').height(ht);
        $('.notice').height(ht);

        $('.road').height('1971px');
    })


    // 스크롤바의 위치값 찾아내기
    $(window).scroll(function(){

        let sc = $(this).scrollTop();

        //$('h1').text(sc)

        
        let ht = $(window).height();


        //반복문 설정
        for(var ab=0; ab<9; ab++) {

            if(sc>=ht*ab && sc<ht*(ab+1)){

                $('section').removeClass('on')
                $('section').eq(ab).addClass('on')
            }
        }


    })

    //마우스에서 휠을 올렸을 떄, 내렸을 떄 움직인다.
    $('section').mousewheel(function(event,delta){

        if(delta>0) {

            //이전페이지로 이동
            let prev = $(this).prev().offset().top;
            $('html, body').stop().animate({scrollTop:prev}, 1400)
        }

        else if(delta<0) {

            //다음페이지로 이동
            let next = $(this).next().offset().top;
            $('html, body').stop().animate({scrollTop:next}, 1400)
            //animate 앞에는 stop을 항상 짝궁처럼 붙여다니기
        }
    })

})