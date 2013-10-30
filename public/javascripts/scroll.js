$(document).ready(function (){
            $("#button").click(function (){
                //$(this).animate(function(){
                    $('html, body').animate({
                        scrollTop: $(".second_section").offset().top
                    }, 2000);
                //});
            });
        });