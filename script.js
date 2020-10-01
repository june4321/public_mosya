$(function(){
    $('.op-modal').click(function(){
        $('#modal').show();
    });

    $('#cl-modal').click(function(){
        $('#modal').hide();
    });

    $('#btn-slide-menu').click(function(){
        if(window.matchMedia('(min-width: 900px)').matches){
            ;
            //処理なし
        }else if(window.matchMedia('(min-width: 375px)').matches){
            if($('#btn-slide-menu').hasClass('open')){
                $('#btn-slide-menu').removeClass('open');
                $('#id-slide-menu').slideUp();
                $('.btn-color').css('color','white');
            }  
            else{
                $('#btn-slide-menu').addClass('open'); 
                $('#id-slide-menu').slideDown();
                $('.btn-color').css('color','#008489');    
            }
        }else{
            ; 
            //処理なし
        }
    });
});