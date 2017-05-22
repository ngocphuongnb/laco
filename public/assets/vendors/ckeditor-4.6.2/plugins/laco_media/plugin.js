CKEDITOR.plugins.add( 'laco_media', {
    icons: 'media',
    hidpi: true,
    init: function( editor ) {
        editor.addCommand('lacoOpenMediaBrowser', {
            exec : function(editor) {
                console.log('exec');
                new LacoModal({
                    isImmediate: true,
                    type: 'iframe',
                    src: `/admin/media/modal?target=__active_editor_${editor.name}&types=all&multi=1`
                });
            }
        });

        editor.ui.addButton( 'Media', {
            label: 'Insert Media',
            command: 'lacoOpenMediaBrowser',
            toolbar: 'insert,0'
        });
    }
});