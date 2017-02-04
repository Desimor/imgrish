var imgrishApp = {
    imgurls: [],
    init: function(){
        imgrishApp.cacheDOM();
        imgrishApp.addEventListeners();
        imgrishApp.render();
    },
    cacheDOM: function (){
        imgrishApp.picture = document.querySelector('#url');
        imgrishApp.createButton = document.querySelector('#create');
        imgrishApp.list = document.querySelector('#list');
    },
    addEventListeners: function(){
        imgrishApp.createButton.addEventListener('click', imgrishApp.addImg);
    },
    render: function (){
        imgrishApp.list.innerHTML = imgrishApp.imgurls.map(url => `<li><img src="${url}"></li>`).join('');
    },
    addImg: function(){
        imgrishApp.imgurls.push (imgrishApp.picture.value);
        imgrishApp.render();
    }
};

imgrishApp.init();