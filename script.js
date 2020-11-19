$(document).ready(function () {
    $('.bar-value').css('display', 'block');
    $('.bar-value').each(function(){
        var $this = $(this);
        var val = $this.attr('val');
        $this.css("width",val+'%');
        $({animatedValue: 0}).animate({animatedValue: val},{
            duration: 2000,
        });
    });
});