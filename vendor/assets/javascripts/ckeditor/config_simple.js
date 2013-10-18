CKEDITOR.editorConfig = function(config){
    config.language='zh-cn';
    config.toolbar ="Simple";
    config.toolbar_Simple =
	[
	    ['Source','Bold','Italic','Underline','Strike','-','Subscript','Superscript'],
	    ['FontSize','TextColor','BGColor'],
	    ['NumberedList','BulletedList','-'],
	    ['JustifyLeft','JustifyCenter','JustifyRight','JustifyBlock'],
	    ['Table','Image']

	];

}
/*
CKEDITOR.replace('ckeditor',{filebrowserUploadUrl : '/ckeditor/ckeditor/uploader?Type=File',
filebrowserImageUploadUrl : '/ckeditor/ckeditor/uploader?Type=Image',
filebrowserFlashUploadUrl : '/ckeditor/ckeditor/uploader?Type=Flash'
        });
*/%