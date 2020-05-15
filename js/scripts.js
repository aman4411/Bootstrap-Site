$(document).ready(function(){
    $("#mycarousel").carousel( { interval: 2000 } );
    $("#carouselButton").click(function(){
        if($("#carouselButton").children('span').hasClass('fa-pause')){
            $("#mycarousel").carousel('pause');
            $("#carouselButton").removeClass('btn-danger');
            $("#carouselButton").addClass('btn-success');
            $("#carouselButton").children('span').removeClass('fa-pause');
            $("#carouselButton").children('span').addClass('fa-play');
        }else{
            $("#mycarousel").carousel('cycle');
            $("#carouselButton").removeClass('btn-success');
            $("#carouselButton").addClass('btn-danger');
            $("#carouselButton").children('span').removeClass('fa-play');
            $("#carouselButton").children('span').addClass('fa-pause');
        }
    })
    // Launching Login modal
    $("#button-login").click(function(){ 
        $("#loginmodal").modal('show');
    })
    //Launching Reserve modal
    $("#button-reserve").click(function(){
        $("#reservemodal").modal('show');
    })
});