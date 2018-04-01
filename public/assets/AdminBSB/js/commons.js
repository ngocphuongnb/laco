if("undefined"==typeof jQuery)throw new Error("jQuery plugins need to be before this file");$.AdminBSB={},$.AdminBSB.options={colors:{red:"#F44336",pink:"#E91E63",purple:"#9C27B0",deepPurple:"#673AB7",indigo:"#3F51B5",blue:"#2196F3",lightBlue:"#03A9F4",cyan:"#00BCD4",teal:"#009688",green:"#4CAF50",lightGreen:"#8BC34A",lime:"#CDDC39",yellow:"#ffe821",amber:"#FFC107",orange:"#FF9800",deepOrange:"#FF5722",brown:"#795548",grey:"#9E9E9E",blueGrey:"#607D8B",black:"#000000",white:"#ffffff"},leftSideBar:{scrollColor:"rgba(0,0,0,0.5)",scrollWidth:"4px",scrollAlwaysVisible:!1,scrollBorderRadius:"0",scrollRailBorderRadius:"0",scrollActiveItemWhenPageLoad:!0,breakpointWidth:1170},dropdownMenu:{effectIn:"fadeIn",effectOut:"fadeOut"}},$.AdminBSB.leftSideBar={activate:function(){var o=this,n=$("body"),a=$(".overlay");$(window).click(function(e){var t=$(e.target);"i"===e.target.nodeName.toLowerCase()&&(t=$(e.target).parent()),!t.hasClass("bars")&&o.isOpen()&&0===t.parents("#leftsidebar").length&&(t.hasClass("js-right-sidebar")||a.fadeOut(),n.removeClass("overlay-open"))}),$.each($(".menu-toggle.toggled"),function(e,t){$(t).next().slideToggle(0)}),$.each($(".menu .list li.active"),function(e,t){var o=$(t).find("a:eq(0)");o.addClass("toggled"),o.next().show()}),$(".menu-toggle").on("click",function(e){var t=$(this),o=t.next();if($(t.parents("ul")[0]).hasClass("list")){var n=$(e.target).hasClass("menu-toggle")?e.target:$(e.target).parents(".menu-toggle");$.each($(".menu-toggle.toggled").not(n).next(),function(e,t){$(t).is(":visible")&&($(t).prev().toggleClass("toggled"),$(t).slideUp())})}t.toggleClass("toggled"),o.slideToggle(320)}),o.setMenuHeight(),o.checkStatuForResize(!0),$(window).resize(function(){o.setMenuHeight(),o.checkStatuForResize(!1)}),Waves.attach(".menu .list a",["waves-block"]),Waves.init()},setMenuHeight:function(e){if(void 0!==$.fn.slimScroll){var t=$.AdminBSB.options.leftSideBar,o=$(window).height()-($(".legal").outerHeight()+$(".user-info").outerHeight()+$(".navbar").innerHeight()),n=$(".list");if(n.slimscroll({height:o+"px",color:t.scrollColor,size:t.scrollWidth,alwaysVisible:t.scrollAlwaysVisible,borderRadius:t.scrollBorderRadius,railBorderRadius:t.scrollRailBorderRadius}),$.AdminBSB.options.leftSideBar.scrollActiveItemWhenPageLoad){var a=$(".menu .list li.active")[0].offsetTop;150<a&&n.slimscroll({scrollTo:a+"px"})}}},checkStatuForResize:function(e){var t=$("body"),o=$(".navbar .navbar-header .bars"),n=t.width();e&&t.find(".content, .sidebar").addClass("no-animate").delay(1e3).queue(function(){$(this).removeClass("no-animate").dequeue()}),n<$.AdminBSB.options.leftSideBar.breakpointWidth?(t.addClass("ls-closed"),o.fadeIn()):(t.removeClass("ls-closed"),o.fadeOut())},isOpen:function(){return $("body").hasClass("overlay-open")}},$.AdminBSB.rightSideBar={activate:function(){var o=this,n=$("#rightsidebar"),a=$(".overlay");$(window).click(function(e){var t=$(e.target);"i"===e.target.nodeName.toLowerCase()&&(t=$(e.target).parent()),!t.hasClass("js-right-sidebar")&&o.isOpen()&&0===t.parents("#rightsidebar").length&&(t.hasClass("bars")||a.fadeOut(),n.removeClass("open"))}),$(".js-right-sidebar").on("click",function(){n.toggleClass("open"),o.isOpen()?a.fadeIn():a.fadeOut()})},isOpen:function(){return $(".right-sidebar").hasClass("open")}};var $searchBar=$(".search-bar");$.AdminBSB.search={activate:function(){var t=this;$(".js-search").on("click",function(){t.showSearchBar()}),$searchBar.find(".close-search").on("click",function(){t.hideSearchBar()}),$searchBar.find('input[type="text"]').on("keyup",function(e){27==e.keyCode&&t.hideSearchBar()})},showSearchBar:function(){$searchBar.addClass("open"),$searchBar.find('input[type="text"]').focus()},hideSearchBar:function(){$searchBar.removeClass("open"),$searchBar.find('input[type="text"]').val("")}},$.AdminBSB.navbar={activate:function(){var e=$("body"),t=$(".overlay");$(".bars").on("click",function(){e.toggleClass("overlay-open"),e.hasClass("overlay-open")?t.fadeIn():t.fadeOut()}),$('.nav [data-close="true"]').on("click",function(){var e=$(".navbar-toggle").is(":visible"),t=$(".navbar-collapse");e&&t.slideUp(function(){t.removeClass("in").removeAttr("style")})})}},$.AdminBSB.input={activate:function(){$(".form-control").focus(function(){$(this).parent().addClass("focused")}),$(".form-control").focusout(function(){var e=$(this);e.parents(".form-group").hasClass("form-float")?""==e.val()&&e.parents(".form-line").removeClass("focused"):e.parents(".form-line").removeClass("focused")}),$("body").on("click",".form-float .form-line .form-label",function(){$(this).parent().find("input").focus()}),$(".form-control").each(function(){""!==$(this).val()&&$(this).parents(".form-line").addClass("focused")})}},$.AdminBSB.select={activate:function(){$.fn.selectpicker&&$("select:not(.ms)").selectpicker()}},$.AdminBSB.dropdownMenu={activate:function(){var o=this;$(".dropdown, .dropup, .btn-group").on({"show.bs.dropdown":function(){var e=o.dropdownEffect(this);o.dropdownEffectStart(e,e.effectIn)},"shown.bs.dropdown":function(){var e=o.dropdownEffect(this);e.effectIn&&e.effectOut&&o.dropdownEffectEnd(e,function(){})},"hide.bs.dropdown":function(e){var t=o.dropdownEffect(this);t.effectOut&&(e.preventDefault(),o.dropdownEffectStart(t,t.effectOut),o.dropdownEffectEnd(t,function(){t.dropdown.removeClass("open")}))}}),Waves.attach(".dropdown-menu li a",["waves-block"]),Waves.init()},dropdownEffect:function(e){var t=$.AdminBSB.options.dropdownMenu.effectIn,o=$.AdminBSB.options.dropdownMenu.effectOut,n=$(e),a=$(".dropdown-menu",e);if(0<n.length){var i=n.data("effect-in"),r=n.data("effect-out");void 0!==i&&(t=i),void 0!==r&&(o=r)}return{target:e,dropdown:n,dropdownMenu:a,effectIn:t,effectOut:o}},dropdownEffectStart:function(e,t){t&&(e.dropdown.addClass("dropdown-animating"),e.dropdownMenu.addClass("animated dropdown-animated"),e.dropdownMenu.addClass(t))},dropdownEffectEnd:function(e,t){e.dropdown.one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",function(){e.dropdown.removeClass("dropdown-animating"),e.dropdownMenu.removeClass("animated dropdown-animated"),e.dropdownMenu.removeClass(e.effectIn),e.dropdownMenu.removeClass(e.effectOut),"function"==typeof t&&t()})}};var edge="Microsoft Edge",ie10="Internet Explorer 10",ie11="Internet Explorer 11",opera="Opera",firefox="Mozilla Firefox",chrome="Google Chrome",safari="Safari";$.AdminBSB.browser={activate:function(){""!==this.getClassName()&&$("html").addClass(this.getClassName())},getBrowser:function(){var e=navigator.userAgent.toLowerCase();return/edge/i.test(e)?edge:/rv:11/i.test(e)?ie11:/msie 10/i.test(e)?ie10:/opr/i.test(e)?opera:/chrome/i.test(e)?chrome:/firefox/i.test(e)?firefox:navigator.userAgent.match(/Version\/[\d\.]+.*Safari/)?safari:void 0},getClassName:function(){var e=this.getBrowser();return e===edge?"edge":e===ie11?"ie11":e===ie10?"ie10":e===opera?"opera":e===chrome?"chrome":e===firefox?"firefox":e===safari?"safari":""}},$(function(){$.AdminBSB.browser.activate(),$.AdminBSB.leftSideBar.activate(),$.AdminBSB.rightSideBar.activate(),$.AdminBSB.navbar.activate(),$.AdminBSB.dropdownMenu.activate(),$.AdminBSB.input.activate(),$.AdminBSB.select.activate(),$.AdminBSB.search.activate(),setTimeout(function(){$(".page-loader-wrapper").fadeOut()},50)});
function skinChanger(){$(".right-sidebar .demo-choose-skin li").on("click",function(){var i=$("body"),e=$(this),a=$(".right-sidebar .demo-choose-skin li.active").data("theme");$(".right-sidebar .demo-choose-skin li").removeClass("active"),i.removeClass("theme-"+a),e.addClass("active"),i.addClass("theme-"+e.data("theme"))})}function setSkinListHeightAndScroll(i){var e=$(window).height()-($(".navbar").innerHeight()+$(".right-sidebar .nav-tabs").outerHeight()),a=$(".demo-choose-skin");i||(a.slimScroll({destroy:!0}).height("auto"),a.parent().find(".slimScrollBar, .slimScrollRail").remove()),a.slimscroll({height:e+"px",color:"rgba(0,0,0,0.5)",size:"6px",alwaysVisible:!1,borderRadius:"0",railBorderRadius:"0"})}function setSettingListHeightAndScroll(i){var e=$(window).height()-($(".navbar").innerHeight()+$(".right-sidebar .nav-tabs").outerHeight()),a=$(".right-sidebar .demo-settings");i||(a.slimScroll({destroy:!0}).height("auto"),a.parent().find(".slimScrollBar, .slimScrollRail").remove()),a.slimscroll({height:e+"px",color:"rgba(0,0,0,0.5)",size:"6px",alwaysVisible:!1,borderRadius:"0",railBorderRadius:"0"})}function activateNotificationAndTasksScroll(){$(".navbar-right .dropdown-menu .body .menu").slimscroll({height:"254px",color:"rgba(0,0,0,0.5)",size:"4px",alwaysVisible:!1,borderRadius:"0",railBorderRadius:"0"})}$(function(){skinChanger(),activateNotificationAndTasksScroll(),setSkinListHeightAndScroll(!0),setSettingListHeightAndScroll(!0),$(window).resize(function(){setSkinListHeightAndScroll(!1),setSettingListHeightAndScroll(!1)})}),addLoadEvent(loadTracking);var trackingId="UA-30038099-6";function addLoadEvent(i){var e=window.onload;"function"!=typeof window.onload?window.onload=i:window.onload=function(){e(),i()}}function loadTracking(){var i,e,a,t,o,n;i=window,e=document,a="script",t="ga",i.GoogleAnalyticsObject=t,i.ga=i.ga||function(){(i.ga.q=i.ga.q||[]).push(arguments)},i.ga.l=1*new Date,o=e.createElement(a),n=e.getElementsByTagName(a)[0],o.async=1,o.src="https://www.google-analytics.com/analytics.js",n.parentNode.insertBefore(o,n),ga("create",trackingId,"auto"),ga("send","pageview")}
function hexToRgb(a){var e=/^#([\da-fA-F]{2})([\da-fA-F]{2})([\da-fA-F]{2})$/.exec(a);return"rgb("+parseInt(e[1],16)+","+parseInt(e[2],16)+","+parseInt(e[3],16)+")"}function hexToRgba(a,e){var r=/^#([\da-fA-F]{2})([\da-fA-F]{2})([\da-fA-F]{2})$/.exec(a);return"rgba("+parseInt(r[1],16)+","+parseInt(r[2],16)+","+parseInt(r[3],16)+","+e+")"}
