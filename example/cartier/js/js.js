$(document).ready(function(){

    // 마우스가 들어갔을 때 옆으로 열려라.
    $('article').mouseenter(function(){
        let vid = $(this).find('video').get(0)
        vid.currentTime=0
        vid.play()
        

        $(this).stop().animate({'width':'35%'},1000)
        $(this).find('video').animate({'opacity':1},1200)

        $(this).find('h3').stop().animate({'right':'50px'},800)
        $(this).find('p').stop().animate({'right':'50px'},1000)
    })

    // 마우스가 빠지면 애니메이션 멈춰라.
    $('article').mouseleave(function(){
        let vid = $(this).find('video').get(0)
        vid.pause()

        $('article').stop().animate({'width':'12%'},1000)
        $(this).find('video').animate({'opacity':0},1200)

        $(this).find('h3').stop().animate({'right':'-300px'},800)
        $(this).find('p').stop().animate({'right':'-300px'},1000)
    })

    // --> 위에꺼 두개(마우스 엔터/리브)는 세트임 세트.





})