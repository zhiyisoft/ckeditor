CKEDITOR.editorConfig = function(config){
    config.language='zh-cn';
    config.toolbar ="Simple";
    config.filebrowserUploadUrl="/uploads/upload"; /*图片上传地址 */
    config.toolbar_Simple =
	[
	    ['Source','Bold','Italic','Underline','Strike','-','Subscript','Superscript'],
	    ['FontSize','TextColor','BGColor'],
	    ['NumberedList','BulletedList','-'],
	    ['JustifyLeft','JustifyCenter','JustifyRight','JustifyBlock'],
	    ['Table','Image']

	];

}
