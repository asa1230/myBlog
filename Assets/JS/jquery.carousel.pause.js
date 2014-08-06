

var slidewidth, slideheight;

(function ($) {                                          // Compliant with jquery.noConflict()
    $.fn.jCarouselLite = function (o) {
        o = $.extend({
            btnPrev: null,
            btnNext: null,
            btnGo: null,
            mouseWheel: false,
            auto: null,
            speed: 200,
            easing: null,
            vertical: false,
            circular: true,
            visible: 3,
            start: 0,
            scroll: 1,
            pauseOnHover: false,
            paginationContainer: null,
            beforeStart: null,
            afterEnd: null,
            slideheight: null,
            slidewidth: null
        }, o || {});

        slidewidth = o.slidewidth;
        slideheight = o.slideheight;

        return this.each(function () {                           // Returns the element collection. Chainable.

            var running = false, animCss = o.vertical ? "top" : "left", sizeCss = o.vertical ? "height" : "width";
            var div = $(this), ul = $("ul", div), tLi = $("li", ul), tl = tLi.size(), v = o.visible, paused = 0;

            if (o.circular) {
                ul.prepend(tLi.slice(tl - v - 1 + 1).clone())
			  .append(tLi.slice(0, v).clone());
                o.start += v;
            }

            var next = $(o.btnNext);
            var prev = $(o.btnPrev);

            var nextOverlay = $(".NextArrowOverlay");
            var prevOverlay = $(".PrevArrowOverlay");
            var clicked = 0;
            var autoInterval = '';

            var paginationContainer = $(o.paginationContainer);

            // Set pause flag

            if (o.pauseOnHover) {
                o.pauseOnHover ? next.hover(function () { paused = 1 }, function () { paused = 0 }) : "";
                o.pauseOnHover ? prev.hover(function () { paused = 1 }, function () { paused = 0 }) : "";

                o.pauseOnHover ? nextOverlay.hover(function () { paused = 1 }, function () { paused = 0 }) : "";
                o.pauseOnHover ? prevOverlay.hover(function () { paused = 1 }, function () { paused = 0 }) : "";

                o.pauseOnHover ? paginationContainer.hover(function () { paused = 1 }, function () { paused = 0 }) : "";

                o.pauseOnHover ? ul.hover(function () { paused = 1 }, function () { paused = 0 }) : "";
            }

            var li = $("li", ul), itemLength = li.size(), curr = o.start;
            div.css("visibility", "visible");

            li.css({ overflow: "hidden", 'float': o.vertical ? "none" : "left" });
            ul.css({ margin: "0", padding: "0", position: "relative", "list-style-type": "none", "z-index": "1" });
            div.css({ overflow: "hidden", position: "relative", "z-index": "2", left: "0px" });

            var liSize = o.vertical ? height(li) : width(li);   // Full li size(incl margin)-Used for animation
            var ulSize = liSize * itemLength;                   // size of full ul(total length, not just for the visible items)
            var divSize = liSize * v;                           // size of entire div(total length for just the visible items)

            li.css({ width: li.width(), height: li.height() });
            ul.css(sizeCss, ulSize + "px").css(animCss, -(curr * liSize));

            div.css(sizeCss, divSize + "px");                     // Width of the DIV. length of visible images

            if (o.btnPrev)
                $(o.btnPrev).click(function () {
                    paused = 0;
                    clicked = 1;
                    return go(curr - o.scroll);
                });

            if (o.btnNext)
                $(o.btnNext).click(function () {
                    paused = 0;
                    clicked = 1;
                    return go(curr + o.scroll);
                });

            if (o.btnGo)
                $.each(o.btnGo, function (i, val) {
                    $(val).click(function () {
                        paused = 0;
                        clicked = 1;
                        return go(o.circular ? o.visible + i : i);
                    });
                });

            if (o.mouseWheel && div.mousewheel)
                div.mousewheel(function (e, d) {
                    return d > 0 ? go(curr - o.scroll) : go(curr + o.scroll);
                });

            if (o.auto)
                autoInterval = setInterval(function () {
                    go(curr + o.scroll);
                }, o.auto + o.speed);


            function vis() {
                return li.slice(curr).slice(0, v);
            };

            function go(to) {
                if (!running && !paused) {

                    if (o.beforeStart)
                        o.beforeStart.call(this, vis());

                    if (o.circular) {            // If circular we are in first or last, then goto the other end
                        if (to <= o.start - v - 1) {           // If first, then goto last
                            ul.css(animCss, -((itemLength - (v * 2)) * liSize) + "px");
                            // If "scroll" > 1, then the "to" might not be equal to the condition; it can be lesser depending on the number of elements.
                            curr = to == o.start - v - 1 ? itemLength - (v * 2) - 1 : itemLength - (v * 2) - o.scroll;
                        } else if (to >= itemLength - v + 1) { // If last, then goto first
                            ul.css(animCss, -((v) * liSize) + "px");
                            // If "scroll" > 1, then the "to" might not be equal to the condition; it can be greater depending on the number of elements.
                            curr = to == itemLength - v + 1 ? v + 1 : v + o.scroll;
                        } else curr = to;
                    } else {                    // If non-circular and to points to first or last, we just return.
                        if (to < 0 || to > itemLength - v) return;
                        else curr = to;
                    }                           // If neither overrides it, the curr will still be "to" and we can proceed.

                    running = true;

                    ul.animate(
					animCss == "left" ? { left: -(curr * liSize)} : { top: -(curr * liSize) }, o.speed, o.easing,
					function () {
					    if (o.afterEnd)
					        o.afterEnd.call(this, vis());
					    running = false;

					    if (clicked == 1) {
					        if (o.pauseOnHover) { 
                                paused = 1;
                            }
					        
					        clicked = 0;

					        if (o.auto) {
					            clearInterval(autoInterval);
					            autoInterval = setInterval(function () { go(curr + o.scroll); }, o.auto + o.speed);
					        }
					    }




					}
				);
                    // Disable buttons when the carousel reaches the last/first, and enable when not
                    if (!o.circular) {
                        $(o.btnPrev + "," + o.btnNext).removeClass("Disabled");
                        $((curr - o.scroll < 0 && o.btnPrev)
						||
					   (curr + o.scroll > itemLength - v && o.btnNext)
						||
					   []
					 ).addClass("Disabled");
                    }

                }
                return false;
            };
        });
    };

    function css(el, prop) {
        return parseInt($.css(el[0], prop)) || 0;
    };
    function width(el) {
        return slidewidth;  //el[0].offsetWidth + css(el, 'marginLeft') + css(el, 'marginRight');
    };
    function height(el) {
        return slideheight; //el[0].offsetHeight + css(el, 'marginTop') + css(el, 'marginBottom');
    };

})(jQuery);