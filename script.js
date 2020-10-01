$(function(){
    $('.op-modal').click(function(){
        $('#modal').show();
    });

    $('#cl-modal').click(function(){
        $('#modal').hide();
    });

    $('#op-slide-menu').click(function(){
        $('#id-slide-menu').slideDown();
    });

    $('#cl-slide-menu').click(function(){
        $('#id-slide-menu').slideUp();
    });
});