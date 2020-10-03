$(function(){
    
    $('.op-modal').click(function(){
        $('#modal').show();
    });

    $('#cl-modal').click(function(){
        $('#modal').hide();
    });

   /* $('#op-slide-menu').click(function(){
        $('#slide-menu').slideDown();
    });

    $('#cl-slide-menu').click(function(){
        $('#slide-menu').slideUp();
    }); */

    $('#op-slide-menu').click(function(){
        if($(this).hasClass('open')){
            $(this).removeClass('open');
            $(this).removeClass('fa-angle-up');
            $(this).addClass('fa-angle-down');
            $('#slide-menu').slideUp();
            $('.icon-color').css('color','white');
        }else{
            $(this).addClass('open');
            $(this).removeClass('fa-angle-down');
            $(this).addClass('fa-angle-up');
            $('#slide-menu').slideDown();
            $('.icon-color').css('color','#008b8b');
            }

        if($(window).width() >= 900){
            $('.icon-color').css('color','#008b8b');
        }else{
            
        }        
        //この条件式ではスマホ版の検証画面閉じたときにPC版のアイコンが白変してしまう
    });

});