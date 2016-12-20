$(function(){
// --------------------------------
var sideWidth = $('#sideMenu').width();
 $('#sideMenu').animate({left:-sideWidth});

    $('.menu').on('click',function(){
       $('#sideMenu').animate({left:0});
    });

$('.sub_menu').hide();
$('.mainmenu').find('strong').on('click',function(e) {
    e.preventDefault();
    var subMenu = $(this).next('.sub_menu');
    var subMenuView = subMenu.css('display');
    if(subMenuView == 'none'){
        $('.sub_menu').slideUp();
    }
    $(this).next('.sub_menu').slideDown();
});


    
// ----------------------------------- 


 $('#sideMenu>button').on('click', function(e){
     e.preventDefault();
     $('#sideMenu').animate({left:-sideWidth});
 });   
});








//  장바구니 --------------------------------------------

$(function(){
// --------------------------------
var cartWidth = $('#sideCart').width();
 $('#sideCart').animate({right:-cartWidth});

    $('.cart').on('click',function(){
       $('#sideCart').animate({right:0});
    });
    
// ----------------------------------- 


 $('#sideCart>button').on('click', function(e){
     e.preventDefault();
     $('#sideCart').animate({right:'-310px'});
 });   
});


