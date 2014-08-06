
var j2 = jQuery.noConflict();

j2(document).ready(function () {

    if (j2('#hdfIE').val() == '1') {
        j2('.FeatureSlideshowControls').attr('style', 'margin-left:-' + (j2('.FeatureSlideshowControls').width() / 2) + 'px !important;');
    }

    ActivateHomeSlideshow();
    ActivateFeatureSlideshow();
    ActivateWatermarks();
    ActivateTweetCycle();
    ActivateFilters();
    ActivateLoaders();
    ActivateStatsCycle();
    ActivateNewsFilters();
});

/*-----  HOME SLIDESHOW  -----*/

var Delay = 8000;
var Duration = 500;
var HomeSlideCurrentIndex = null;
var HomeSlideNextIndex = null;
var HomeSlideTimer = null;


function ActivateHomeSlideshow() {

    HomeSlideTimer = setTimeout('HomeSlideNextSlide()', Delay);
    HomeSlideCurrentIndex = 1;
    HomeSlideNextIndex = 1;

    j2('.HomeSlideshow ul li').css({ opacity: 0.0 });
    j2("'.HomeSlideshow ul li:nth-child(" + HomeSlideNextIndex + ")'").addClass('Show').animate({ opacity: 1.0 }, Duration);

    j2('.HomeSlideshow ul li').click(function () {
        HomeSlideNextSlide();
    });

    j2('.HomeSlideshowControls ul li a').click(function () {
        if (j2(this).hasClass('Active')) {
            //do nothing
        }
        else {
            HomeSlideNextIndex = parseInt(j2(this).attr('class').replace(' Active', ''));
            HomeSlideShowSlide();
        }
    });

    j2('.HomeSlideshow, .HomeSlideshowControls').mouseenter(function () {
        PauseSlideshow();
    });

    j2('.HomeSlideshow, .HomeSlideshowControls').mouseleave(function () {
        ResumeSlideshow();
    });

}

function HomeSlideNextSlide() {

    if (j2('.HomeSlideshowState').html() == 'Playing') {
        HomeSlideNextIndex = HomeSlideCurrentIndex + 1;
        if (HomeSlideNextIndex > j2('.HomeSlideshow ul li').length) {
            HomeSlideNextIndex = 1;
        }
        j2("'.HomeSlideshow ul li:nth-child(" + HomeSlideNextIndex + ")'").addClass('Show').animate({ opacity: 1.0 }, 800);
        j2("'.HomeSlideshow ul li:nth-child(" + HomeSlideCurrentIndex + ")'").animate({ opacity: 0.0 }, Duration).removeClass('Show');
        HomeSlideCurrentIndex = HomeSlideNextIndex;

        j2('.HomeSlideshowControls ul li a.Active').removeClass('Active');
        j2('.HomeSlideshowControls ul li a.' + HomeSlideCurrentIndex).addClass('Active');

        j2('.HomeSlideshowControls ul li a span.Active').removeClass('Active');
        j2('.HomeSlideshowControls ul li a.' + HomeSlideCurrentIndex + ' span').addClass('Active');

        clearTimeout(HomeSlideTimer);
        HomeSlideTimer = setTimeout('HomeSlideNextSlide()', Delay);
    }
}

function HomeSlideShowSlide() {
    j2("'.HomeSlideshow ul li:nth-child(" + HomeSlideNextIndex + ")'").addClass('Show').animate({ opacity: 1.0 }, 800);
    j2("'.HomeSlideshow ul li:nth-child(" + HomeSlideCurrentIndex + ")'").animate({ opacity: 0.0 }, Duration).removeClass('Show');
    HomeSlideCurrentIndex = HomeSlideNextIndex;

    j2('.HomeSlideshowControls ul li a.Active').removeClass('Active');
    j2('.HomeSlideshowControls ul li a.' + HomeSlideCurrentIndex).addClass('Active');

    j2('.HomeSlideshowControls ul li a span.Active').removeClass('Active');
    j2('.HomeSlideshowControls ul li a.' + HomeSlideCurrentIndex + ' span').addClass('Active');

    clearTimeout(HomeSlideTimer);
    HomeSlideTimer = setTimeout('HomeSlideNextSlide()', Delay);
}

function PauseSlideshow() {
    j2('.HomeSlideshowState').html('Paused');
}

function ResumeSlideshow() {
    j2('.HomeSlideshowState').html('Playing');
    clearTimeout(HomeSlideTimer);
    HomeSlideTimer = setTimeout('HomeSlideNextSlide()', Delay);
}

/*-----  FEATURE SLIDESHOW  -----*/

var FeatureDelay = 8000;
var FeatureDuration = 500;
var FeatureSlideCurrentIndex = null;
var FeatureSlideNextIndex = null;
var FeatureSlideTimer = null;


function ActivateFeatureSlideshow() {

    FeatureSlideTimer = setTimeout('FeatureSlideNextSlide()', FeatureDelay);
    FeatureSlideCurrentIndex = 1;
    FeatureSlideNextIndex = 1;

    j2('.FeatureSlideshow ul li').css({ opacity: 0.0 });
    j2("'.FeatureSlideshow ul li:nth-child(" + FeatureSlideNextIndex + ")'").addClass('Show').animate({ opacity: 1.0 }, FeatureDuration);

    j2('.FeatureSlideshow ul li').click(function () {
        FeatureSlideNextSlide();
    });

    j2('.FeatureSlideshowControls ul li a').click(function () {
        if (j2(this).hasClass('Active')) {
            //do nothing
        }
        else {
            FeatureSlideNextIndex = parseInt(j2(this).attr('class').replace(' Active', ''));
            FeatureSlideShowSlide();
        }
    });



    j2('.FeatureSlideshow, .FeatureSlideshowControls').mouseenter(function () {
        PauseFeatureSlideshow();
    });

    j2('.FeatureSlideshow, .FeatureSlideshowControls').mouseleave(function () {
        ResumeFeatureSlideshow();
    });

}

function FeatureSlideNextSlide() {

    if (j2('.FeatureSlideshowState').html() == 'Playing') {
        FeatureSlideNextIndex = FeatureSlideCurrentIndex + 1;
        if (FeatureSlideNextIndex > j2('.FeatureSlideshow ul li').length) {
            FeatureSlideNextIndex = 1;
        }
        j2("'.FeatureSlideshow ul li:nth-child(" + FeatureSlideNextIndex + ")'").addClass('Show').animate({ opacity: 1.0 }, 800);
        j2("'.FeatureSlideshow ul li:nth-child(" + FeatureSlideCurrentIndex + ")'").animate({ opacity: 0.0 }, FeatureDuration).removeClass('Show');
        FeatureSlideCurrentIndex = FeatureSlideNextIndex;

        j2('.FeatureSlideshowControls ul li a.Active').removeClass('Active');
        j2('.FeatureSlideshowControls ul li a.' + FeatureSlideCurrentIndex).addClass('Active');

        j2('.FeatureSlideshowControls ul li a span.Active').removeClass('Active');
        j2('.FeatureSlideshowControls ul li a.' + FeatureSlideCurrentIndex + ' span').addClass('Active');

        clearTimeout(FeatureSlideTimer);
        FeatureSlideTimer = setTimeout('FeatureSlideNextSlide()', FeatureDelay);
    }
}

function FeatureSlideShowSlide() {
    j2("'.FeatureSlideshow ul li:nth-child(" + FeatureSlideNextIndex + ")'").addClass('Show').animate({ opacity: 1.0 }, 800);
    j2("'.FeatureSlideshow ul li:nth-child(" + FeatureSlideCurrentIndex + ")'").animate({ opacity: 0.0 }, FeatureDuration).removeClass('Show');
    FeatureSlideCurrentIndex = FeatureSlideNextIndex;

    j2('.FeatureSlideshowControls ul li a.Active').removeClass('Active');
    j2('.FeatureSlideshowControls ul li a.' + FeatureSlideCurrentIndex).addClass('Active');

    j2('.FeatureSlideshowControls ul li a span.Active').removeClass('Active');
    j2('.FeatureSlideshowControls ul li a.' + FeatureSlideCurrentIndex + ' span').addClass('Active');

    clearTimeout(FeatureSlideTimer);
    FeatureSlideTimer = setTimeout('FeatureSlideNextSlide()', FeatureDelay);
}

function PauseFeatureSlideshow() {
    j2('.FeatureSlideshowState').html('Paused');
}

function ResumeFeatureSlideshow() {
    j2('.FeatureSlideshowState').html('Playing');
    clearTimeout(FeatureSlideTimer);
    FeatureSlideTimer = setTimeout('FeatureSlideNextSlide()', FeatureDelay);
}

//-----  TEXTBOX WATERMARKS  -----//

function ActivateWatermarks() {

    j2('.Textbox').each(function () {

        if (j2(this).attr('title') != j2(this).val()) {

            j2(this).addClass('Focus');
        }
    });

    j2('.Textbox').focus(function () {

        if (j2(this).attr('title') == j2(this).val()) {

            j2(this).fadeOut(200, function () {
                j2(this).val('');
                j2(this).addClass('Focus');
                j2(this).fadeIn(0);
                j2(this).focus();
            });

        }

    });

    j2('.Textbox').blur(function () {

        if (!j2(this).attr('title') == j2(this).val()) {

            if (j2(this).val() == '') {
                j2(this).fadeOut(0, function () {
                    j2(this).val(j2(this).attr('title'));
                    j2(this).removeClass('Focus');
                    j2(this).fadeIn(200);
                });
            }
        }

    });

    j2('.ClearText').click(function () {
        j2(this).prev().fadeOut(200, function () {
            j2(this).val('');
            j2(this).addClass('Focus');
            j2(this).fadeIn(0);
            j2(this).focus();
            SearchProjects();
        });
    });

}

function ActivateTweetCycle() {

    j2('.Tweets').html(j2('.TwitterFeed').html());

    var MaxHeight = 0;

    j2('.Tweets li').each(function () {
        if (j2(this).height() > MaxHeight) {
            MaxHeight = j2(this).height();
        }
    });

    j2('.Tweets li').attr('style', 'height:' + parseInt(MaxHeight + 30) + 'px');

    j2('.Tweets li span').prepend('<a href="http://www.twitter.com/mobedia" class="WhiteLink" target="_blank">@Mobedia</a> ')
    j2('.TwitterFeed li span').prepend('<div class="HR Small"></div><a href="http://www.twitter.com/mobedia" class="WhiteLink" target="_blank">@Mobedia</a> ')

    j2('.Tweets li a').attr('target', '_blank');
    j2('.Tweets li a').attr('style', '');

    j2('.TwitterFeed li a').attr('target', '_blank');
    j2('.TwitterFeed li a').attr('style', '');

    j2('.Tweets').jCarouselLite({
        scroll: 1,
        visible: 1,
        easing: 'linear',
        circular: true,
        speed: 200,
        auto: 6000,
        pauseOnHover: true,
        slidewidth: 205
    });

}

function ActivateFilters() {

    if (j2('#hdfSearchCriteria').length != 0) {
        if (j2('#hdfSearchCriteria').val() == '') {
            j2('#WorkGrid').load('' + j2('#hdfLoadPath').val() + '');

        }
        else {
            SearchProjects();
        }

    }


    j2('#lnkFilters').click(function () {

        if (j2(this).hasClass('Pressed')) {
            j2(this).removeClass('Pressed');
            j2('#pnlFiltersPanel').addClass('NoBorder');
            setTimeout("j2('#pnlFiltersPanel').slideUp(500, 'easeInOutQuart');", 300);

        }
        else {
            j2(this).addClass('Pressed');
            j2('#pnlFiltersPanel').slideDown(500, 'easeInOutQuart');
            j2('#pnlFiltersPanel').removeClass('NoBorder');
        }
    });

    j2('.WorkFilters #lnkAllProjects').click(function (event) {
        event.preventDefault();
        try {
            window.history.pushState("string", "Project", j2('#hdfDomain').val() + '/Work/');
        }
        catch (err) { }
        j2(this).removeClass('PlainButton');
        j2('#lnkCaseStudies').addClass('PlainButton');
        j2('.ServiceList li a').addClass('PlainButton');
        j2('#WorkGrid').load(j2('#hdfDomain').val() + "/Work/WorkLoader.aspx");
        j2('.Filters .Title').removeClass('Hidden');
        j2('.Filters .BackToProjects').addClass('Hidden');
        j2('.Filters .Title h2').html('All Projects');
        if (j2('#txtSearch').val() != 'Search...') {
            j2('#txtSearch').fadeOut(200, function () {
                j2('#txtSearch').val('Search...');
                j2('#txtSearch').fadeIn(0);
            });
        }

    });

    j2('.WorkFilters .ServiceList li a').click(function (event) {


        event.preventDefault();
        try {
            window.history.pushState("string", "Project", j2('#hdfDomain').val() + j2(this).attr('href'));
        }
        catch (err) { }

        j2('.ServiceList li a').addClass('PlainButton');
        j2(this).removeClass('PlainButton');
        j2('#lnkAllProjects').addClass('PlainButton');
        j2('#lnkCaseStudies').addClass('PlainButton');
        j2('#WorkGrid').load(j2('#hdfDomain').val() + "/Work/WorkLoader.aspx?ServiceID=" + j2(this).next().html());
        j2('.Filters .Title').removeClass('Hidden');
        j2('.Filters .BackToProjects').addClass('Hidden');
        j2('.Filters .Title h2').html(j2(this).next().next().html() + " Projects");
        if (j2('#txtSearch').val() != 'Search...') {
            j2('#txtSearch').fadeOut(200, function () {
                j2('#txtSearch').val('Search...');
                j2('#txtSearch').fadeIn(0);
            });
        }
    });

    j2('.WorkFilters #txtSearch').keyup(function (event) {
        if (event.keyCode == 13) {
            SearchProjects();
        }
        else {
            if (j2('#txtSearch').val() == '') {
                SearchProjects();
            }
        }

    });
}

function SearchProjects() {

    if ((j2('#txtSearch').val() == 'Search...') || (j2('#txtSearch').val() == '')) {
        try {
            window.history.pushState("string", "Project", j2('#hdfDomain').val() + '/Work/');
        }
        catch (err) { }
        j2('.ServiceList li a').addClass('PlainButton');
        j2('#lnkAllProjects').removeClass('PlainButton');
        j2('#lnkCaseStudies').addClass('PlainButton');
        j2('#WorkGrid').load(j2('#hdfDomain').val() + "/Work/WorkLoader.aspx");
        j2('.Filters .Title').removeClass('Hidden');
        j2('.Filters .BackToProjects').addClass('Hidden');
        j2('.Filters .Title h2').html("All Projects");
    }
    else {

        j2('.ServiceList li a').addClass('PlainButton');
        j2('#lnkAllProjects').addClass('PlainButton');
        j2('#lnkCaseStudies').addClass('PlainButton');
        j2('#WorkGrid').load(j2('#hdfDomain').val() + "/Work/WorkLoader.aspx?Search=" + encodeURI(j2('#txtSearch').val().replace('Tag: ', '').replace('tag: ', '')));
        j2('.Filters .Title').removeClass('Hidden');
        j2('.Filters .BackToProjects').addClass('Hidden');

        if (j2('#txtSearch').val().indexOf('Tag:') > -1 || j2('#txtSearch').val().indexOf('tag:') > -1) {
            j2('.Filters .Title h2').html(j2('#txtSearch').val());
            try {
                window.history.pushState("string", "Project", j2('#hdfDomain').val() + '/Work/?search=' + encodeURI(j2('#txtSearch').val()));
            }
            catch (err) { }
        }
        else {
            j2('.Filters .Title h2').html("Search: " + j2('#txtSearch').val());
            try {

                window.history.pushState("string", "Project", j2('#hdfDomain').val() + '/Work/?search=' + encodeURI(j2('#txtSearch').val()));
            }
            catch (err) { }
        }
    }
}



function ActivateNewsFilters() {

    j2('#NewsLoader').load('' + j2('#hdfLoadPath').val() + '');
    setTimeout('SetLoadMore();', 500);

    j2('.NewsDefault .NewsCategories a.Button').each(function () {

        j2(this).addClass('PlainButton');

        if (j2(this).attr('href') == '#' + j2('#hdfCategoryID').val()) {
            j2(this).removeClass('PlainButton');
        }

    });

    j2('.NewsDefault .NewsMonths a.Button').each(function () {

        j2(this).addClass('PlainButton');

        if (j2(this).attr('href') == '#' + j2('#hdfYear').val() + '/' + j2('#hdfMonth').val()) {
            j2(this).removeClass('PlainButton');
        }

    });

    j2('.NewsDefault .NewsCategories a.Button').click(function (event) {
        event.preventDefault();
        j2('.LoadMore').addClass('Hidden');
        j2('.NewsCategories a.Button').addClass('PlainButton');
        j2(this).removeClass('PlainButton');
        j2('#hdfResultCount').val('5');
        j2('#hdfCategoryID').val(j2(this).attr('href').replace('#', ''));
        j2('#hdfCategoryName').val(j2(this).find('span').find('span').html());
        j2('#NewsLoader').load(j2('#hdfDomain').val() + '/News/NewsLoader.aspx?CategoryID=' + j2('#hdfCategoryID').val() + '&Return=5&Month=' + j2('#hdfMonth').val() + '&Year=' + j2('#hdfYear').val());

        if (j2('#hdfMonth').val() == '-3') {
            try {
                if (j2('#hdfCategoryID').val() == '-3') {
                    window.history.pushState("string", "News", j2('#hdfDomain').val() + '/news/');
                }
                else {
                    window.history.pushState("string", "News", j2('#hdfDomain').val() + '/news/' + j2('#hdfCategoryName').val().toLowerCase().replace(/ /g, '-') + '/');
                }

            }
            catch (err) { }
        }
        else {
            try {
                if (j2('#hdfCategoryID').val() == '-3') {
                    window.history.pushState("string", "News", j2('#hdfDomain').val() + '/news/' + j2('#hdfYear').val() + '/' + j2('#hdfMonth').val() + '/');
                }
                else {
                    window.history.pushState("string", "News", j2('#hdfDomain').val() + '/news/' + j2('#hdfCategoryName').val().toLowerCase().replace(/ /g, '-') + '/' + j2('#hdfYear').val() + '/' + j2('#hdfMonth').val() + '/');
                }

            }
            catch (err) { }
        }

        setTimeout('SetLoadMore();', 500);

    });

    j2('.NewsDefault .NewsMonths a.Button').click(function (event) {
        event.preventDefault();
        j2('.LoadMore').addClass('Hidden');
        j2('.NewsMonths a.Button').addClass('PlainButton');
        j2(this).removeClass('PlainButton');
        j2('#hdfResultCount').val('5');

        if (j2(this).attr('href').replace('#', '') == '-3/-3') {

            j2('#hdfMonth').val('-3');
            j2('#hdfYear').val('-3');

            try {
                if (j2('#hdfCategoryID').val() == '-3') {
                    window.history.pushState("string", "News", j2('#hdfDomain').val() + '/news/');
                }
                else {
                    window.history.pushState("string", "News", j2('#hdfDomain').val() + '/news/' + j2('#hdfCategoryName').val().toLowerCase().replace(/ /g, '-') + '/');
                }

            }
            catch (err) { }
        }
        else {

            var str = j2(this).attr('href').replace('#', '');
            var arr = str.split('/');

            j2('#hdfMonth').val(arr[1]);
            j2('#hdfYear').val(arr[0]);


            try {
                if (j2('#hdfCategoryID').val() == '-3') {
                    window.history.pushState("string", "News", j2('#hdfDomain').val() + '/news/' + j2('#hdfYear').val() + '/' + j2('#hdfMonth').val() + '/');
                }
                else {
                    window.history.pushState("string", "News", j2('#hdfDomain').val() + '/news/' + j2('#hdfCategoryName').val().toLowerCase().replace(/ /g, '-') + '/' + j2('#hdfYear').val() + '/' + j2('#hdfMonth').val() + '/');
                }

            }
            catch (err) { }
        }

        j2('#NewsLoader').load(j2('#hdfDomain').val() + '/News/NewsLoader.aspx?CategoryID=' + j2('#hdfCategoryID').val() + '&Return=5&Month=' + j2('#hdfMonth').val() + '&Year=' + j2('#hdfYear').val());



        setTimeout('SetLoadMore();', 500);


    });

    j2('.LoadMore').click(function () {
        j2('#hdfResultCount').val(parseInt(j2('#hdfResultCount').val()) + 5);
        j2('#NewsLoader').load(j2('#hdfDomain').val() + '/News/NewsLoader.aspx?CategoryID=' + j2('#hdfCategoryID').val() + '&Return=' + j2('#hdfResultCount').val() + '&Month=' + j2('#hdfMonth').val() + '&Year=' + j2('#hdfYear').val());
        setTimeout('SetLoadMore();', 500);
    });



}

function SetLoadMore() {

    if (parseInt(j2('#hdfResultCount').val()) < parseInt(j2('#hdfTotalCount').val())) {
        j2('.LoadMore').removeClass('Hidden');
    }
    else {
        j2('.LoadMore').addClass('Hidden');
    }

    if (parseInt(j2('#hdfTotalCount').val()) < 5) {
        j2('.LoadMore').addClass('Hidden');
    }

}


function ActivateLoaders() {
    j2('.LoadPosts').click(function () {
        j2('.MorePosts').load("http://mob.mobedia.net/PostLoader.aspx?Start=" + j2('.Posts h1').length + "");
        j2('.MorePosts').removeClass('MorePosts');
        j2('.Posts').append('<div class="MorePosts"></div>')
    });
}

function ActivateStatsCycle() {
    j2('.StatsArea').jCarouselLite({
        scroll: 1,
        visible: 2,
        easing: 'linear',
        circular: true,
        speed: 300,
        auto: 7000,
        pauseOnHover: true,
        slidewidth: 420,
        btnNext: ".StatsNextArrow",
        btnPrev: ".StatsPrevArrow"
    });
}

