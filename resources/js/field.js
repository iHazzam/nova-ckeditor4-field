Nova.booting((Vue, router) => {
    Vue.component('index-nova-ckeditor', require('./components/IndexField'));
    Vue.component('detail-nova-ckeditor', require('./components/DetailField'));
    Vue.component('form-nova-ckeditor', require('./components/FormField'));
})
CKEDITOR.plugins.addExternal('texttransform','/plugins/texttransform/','plugin.js');
CKEDITOR.replace('editor1',{extraPlugins: 'texttransform'});
CKEDITOR.replace( 'editor1', {
    skin: 'icy_orange,/skins/icy_orange/'
} );