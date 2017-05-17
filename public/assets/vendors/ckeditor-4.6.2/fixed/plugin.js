/*
*   Plugin developed by Netbroad, C.B.
*
*   LICENCE: GPL, LGPL, MPL
*   NON-COMMERCIAL PLUGIN.
*
*   Website: netbroad.eu
*   Twitter: @netbroadcb
*   Facebook: Netbroad
*   LinkedIn: Netbroad
*
*/

CKEDITOR.plugins.add( 'fixed', {
    init: function( editor ) {
        editor.on( 'instanceReady', function() {
            var editorElm = $('#cke_' + editor.name);
            window.addEventListener('scroll', function() {
                var toolbar = $('.cke_top', editorElm);
                var currentScroll = $(window).scrollTop();
                var editorOffsetTop = editorElm.offset().top - toolbar.height();
                var editorBottomOffsetTop = editorElm.offset().top + editorElm.height() - toolbar.height() - 60;

                if(currentScroll - editorOffsetTop > parseInt(editor.config.fixed_top)){
                    toolbar.css({
                        position: 'fixed',
                        left: editorElm.offset().left + 1,
                        width: editorElm.width(),
                        top: editor.config.fixed_top,
                        'box-sizing': 'border-box'
                    });
                }
                else {
                    toolbar.css({
                        position: 'relative',
                        top: 'auto',
                        left: 'auto'
                    });
                }
                toolbar.css('display', currentScroll <= editorBottomOffsetTop ? 'block' : 'none');
            }, false);
        } );
        
    }
});