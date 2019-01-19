const video={
    title:'title',
    tags:['a','b','c',{title:'k'}],
    showTags:function(){
    console.log(this.title);
    this.tags.forEach(function (tag) {
        console.log(tag);
    })
}
};

video.showTags();
