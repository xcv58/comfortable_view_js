(function()
{
    var contentWidth = 550;
    var width = window.innerWidth;
    var marginWidth = width / 5;
    if (width / 3 >= contentWidth)
	contentWidth = width / 3;
    if (width <= contentWidth * 1.5) {
	marginWidth = 32;
	contentWidth = width - 64;
    }
    document.body.style.width = contentWidth + 'px';
    document.body.style.marginLeft = marginWidth + 'px';
    document.body.style.fontSize = '19px';
    return;
})();
