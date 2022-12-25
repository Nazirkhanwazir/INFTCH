//$(document).ready(function(){
    $('#top_menu_container').append("<div class='s_share_1 text-left' data-snippet='s_share' data-name='Social Media'><div class='row'><p style='color: rgb(157, 55, 33);margin-top:15px;margin-right:5px;'>Follow us</p><a href='/website/social/facebook' class='s_share_facebook' target='_blank'><i class='fa fa-facebook rounded-circle shadow-sm'/></a><a href='/website/social/instagram' class='s_share_instagram' target='_blank'><i class='fa fa-instagram rounded-circle shadow-sm'/></a></div></div>")
    $('.s_share').remove();
    $('.carousel').carousel({
      interval: 7000
    })
//});