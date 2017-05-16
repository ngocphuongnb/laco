CKEDITOR.basePath = '/assets/vendors/ckeditor-4.6.2/';
CKEDITOR.config.extraPlugins = 'autogrow,fixed';

CKEDITOR.editorConfig = function( config ) {
	config.autoGrow_minHeight = 450;
	//config.autoGrow_maxHeight = 800;
	config.fixed_top = '50px';
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
