CKEDITOR.basePath = '/assets/vendors/ckeditor-4.6.2/';
CKEDITOR.plugins.basePath = '/assets/vendors/ckeditor-4.6.2/plugins/';
CKEDITOR.config.extraPlugins = 'autogrow,fixed,laco_media';

CKEDITOR.editorConfig = function( config ) {
	config.entities_latin = false;
	config.autoGrow_minHeight = 200;
	//config.autoGrow_maxHeight = 800;
	config.fixed_top = '50px';
	config.filebrowserImageBrowseUrl = '/admin/media/modal?target=image&types=image&multi=0';
	config.toolbarGroups = [
		{ name: 'clipboard', groups: [ 'undo', 'clipboard' ] },
		{ name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ] },
		{ name: 'editing', groups: [ 'find', 'selection', 'spellchecker', 'editing' ] },
		{ name: 'insert', groups: [ 'insert' ] },
		{ name: 'forms', groups: [ 'forms' ] },
		{ name: 'tools', groups: [ 'tools' ] },
		{ name: 'document', groups: [ 'document', 'doctools', 'mode' ] },
		'/',
		{ name: 'paragraph', groups: [ 'list', 'indent', 'align', 'bidi', 'blocks', 'paragraph' ] },
		{ name: 'links', groups: [ 'links' ] },
		{ name: 'colors', groups: [ 'colors' ] },
		{ name: 'styles', groups: [ 'styles' ] },
		{ name: 'others', groups: [ 'others' ] },
		{ name: 'about', groups: [ 'about' ] }
	];

	config.removeButtons = 'Save,NewPage,Print,Form,Checkbox,Radio,TextField,Textarea,Select,Button,HiddenField,About,Cut,Copy,Paste,SelectAll,Scayt,Flash,Language,CreateDiv';
};
