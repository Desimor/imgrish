var imgrishApp = {
    imgurl: [],
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
        imgrishApp.list.innerHTML = imgrishApp.imgurl.map(url => `<li><img src="${url}"></li>`).join{''};
    },
    addImg: function(){
        imgrishApp.imgurl.push (imgrishApp.picture.value);
        imgrishApp.render();
    }
};

imgrishApp.init();