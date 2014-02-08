(function()
{
    var contentWidth = 550;
    var width = window.innerWidth;
    if (width / 3 >= contentWidth)
	contentWidth = width / 3;
    var marginWidth = width / 5;
    document.body.style.width = contentWidth + 'px';
    document.body.style.marginLeft = marginWidth + 'px';
    document.body.style.fontSize = 'large';
    return;
})();
