$(document).ready(function(){

    var now = new Date();

    var hr =now.getHours()
    var min =now.getMinutes()
    var sec =now.getSeconds()





    setInterval(function(){
        var now = new Date();

        var hr =now.getHours()
        var min =now.getMinutes()
        var sec =now.getSeconds()
        

        if(sec>=10){
           sec =sec


        }else {
            sec='0'+sec

        }

        if(hr>=10){
            hr =hr
 
 
         }else {
             hr='0'+hr
 
         }
    
         
         if(min>=10){
            min =min
 
 
         }else {
             min='0'+min
 
         }
     
    
    
        $('.mobile p').children('span').eq(0).text(hr);
        $('.mobile p').children('span').eq(1).text(min)
        $('.mobile p').children('span').eq(2).text(sec)
        
    },1000);



// 시간이 16시가 되면 wrap에 class가 evenig 으로 변해라.

if(hr>=04 && hr<10) {
    $('#wrap').removeClass()
    $('#wrap').addClass('morning')
}
else if(hr>=10 && hr<16) {
    $('#wrap').removeClass()
    $('#wrap').addClass('afternoon')
}

else if(hr>=16 && hr<22) {
    $('#wrap').removeClass()
    $('#wrap').addClass('evening')
}

else if(hr>=22 && hr<04) {
    $('#wrap').removeClass()
    $('#wrap').addClass('night')
};

    
$('nav li').click(function(){


    var className = $(this).children('a').text();

    $('#wrap').removeClass()
    $('#wrap').addClass(className)
   
})


$('nav li a').click(function(e){
    e.preventDefault();
    


})





   
})