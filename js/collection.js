//  컬렉션 메뉴 -------------------------------------------
$('#content').hide();
$(function(){

//var collHeight = $('#content').height();
// $('#contetn').animate({bottom:-collHeight});
    
    $('.coll_btn').on('click', function(e){
        e.preventDefault();
        $('#content').slideDown(function(){
            $(window).scrollTop(800);
        });
        
    });
    
});


$('#footBox').hide();

//$(function(){
//   $(onmousewheel).slideDown(function){
//     $(window).scrollTop(1200);  
//   };
//});