$(document).ready(function(){

    // 갤러리 이미지 움직임 설정

    // 왼쪽 버튼을 클릭 시, 이미지가 왼쪽으로 이동.
    
    let i = 0

    $('.gallery .left').click(function(){
        
        if(i<5) i++;
    
        let gwd = $('.gallery li').width()

        $('.gallery ul').stop().animate({'left':i*-(gwd+5)},200)
        
        $('gallery li').removelass('on')
        $('gallery li').eq(i).addClass('on')
        $('gallery li').eq(i-1).animate({'opacity':0},100)


    })


    // 오른쪽 버튼을 클릭 시, 이미지가 오른쪽으로 이동.
    $('.gallery .right').click(function(){
        
        if(i>0) i--;
    
        let gwd = $('.gallery li').width()

        $('.gallery ul').stop().animate({'left':i*-(gwd+5)},200)
        
        $('gallery li').removeClass('on')
        $('gallery li').eq(i).addClass('on')
        $('gallery li').eq(i).animate({'opacity':0},100)


    })


    // 리뷰버튼
    // 왼쪽 버튼을 클릭 시, 이미지가 왼쪽으로 이동.

    // let a = 0
    // $('.review .left').click(function(){

    //     if(a<5) a++;

    //     let rwd = $('.review li').width()

    //     $('.review ui').stop().animate({'left':a*-(rwd+5),200})

        


    // })








})