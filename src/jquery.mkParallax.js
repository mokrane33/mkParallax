/**
 * Created by Mokrane on 17/09/2018.
 */
(function( $ ) {
    $.fn.mkParallax=function(params){
        var container=$(this);
       image= container.attr("data-image");
       var el=document.createElement("div");
        $(el).css("background-image", "url('"+image+"')");
        $(el).css("background-size", "cover");
        $(el).css("height", "0");
        $(el).css("width", "100%");
        // $(el).css("z-index", "-1");
        $(el).css("position", "absolute");
        $(el).css("top", container.offset().top);
        // el.attr("id","kkkk");
        $("body").prepend(el);
        $(window).scroll(function () {
            if(
                ($(window).scrollTop()>(container.offset().top-$(window).height()))
                &&
                ( $(window).scrollTop()<(container.offset().top+container.height())
                )){
                    $(el).css("position", "fixed");
                    $(el).css("top", 0);
                $(el).css("height", $(window).height());

            }else{
                $(el).css("position", "absolute");
                $(el).css("top", container.offset().top);
                $(el).css("height", "0");
            }
        });
        $(window).resize(function(){
            $(el).css("height", $(window).height());
            $(el).css("top", container.offset().top);
        });
        return this;
    }
}( jQuery ));