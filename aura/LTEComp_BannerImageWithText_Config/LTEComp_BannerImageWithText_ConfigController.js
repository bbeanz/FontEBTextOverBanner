({
    validate : function(Component) {
        Component.find('image').validate();
        Component.set('v.validated',Component.find('image').get('v.validated'));
        Component.find('overImage').validate();
        Component.set('v.validated',Component.find('overImage').get('v.validated'));
    }
})