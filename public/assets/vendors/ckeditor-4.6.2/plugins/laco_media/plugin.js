CKEDITOR.plugins.add( 'laco_media', {
    icons: 'media',
    hidpi: true,
    init: function( editor ) {
        editor.ui.addButton( 'Media', {
            label: 'Insert Media',
            command: 'media',
            toolbar: 'insert,0'
        });
    }
});