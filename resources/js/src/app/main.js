vueApp = new Vue({
    el: "body"
});

// Frontend end scripts

(function($, window, document)
{

    function CallistoMain()
    {

        // Sticky sidebar single item
        if (window.matchMedia("(min-width: 768px)").matches)
        {
            var $singleRightside = $(".single-rightside");

            $singleRightside.stick_in_parent({});

            $singleRightside.on("sticky_kit:bottom", function()
            {
                $(this).parent().css("position", "static");
            })
                .on("sticky_kit:unbottom", function()
                {
                    $(this).parent().css("position", "relative");
                });
        }
        var $toggleListView      = $(".toggle-list-view");
        var $toggleBasketPreview = $("#toggleBasketPreview, #closeBasketPreview");
        var $mainNavbarCollapse  = $("#mainNavbarCollapse");

        $toggleBasketPreview.on("click", function(evt)
        {
            evt.preventDefault();
            $("body").toggleClass("open-right");
        });

        $toggleListView.on("click", function(evt)
        {
            evt.preventDefault();

            // Toggle its own state
            $toggleListView.toggleClass("grid");

            // Toggle internal style of thumbs
            $(".product-list, .cmp-product-thumb").toggleClass("grid");
        });

        $mainNavbarCollapse.collapse("hide");

        // Add click listener outside the navigation to close it
        $mainNavbarCollapse.on("show.bs.collapse", function()
        {
            $(".main").one("click", closeNav);
        });

        $mainNavbarCollapse.on("hide.bs.collapse", function()
        {
            $(".main").off("click", closeNav);
        });

        function closeNav()
        {
            $("#mainNavbarCollapse").collapse("hide");
        }

    }

    window.CallistoMain = new CallistoMain();

})(jQuery, window, document);
