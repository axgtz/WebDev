var listElements = $('div');

var articleItems = $('.article-item');

var nav = $('#nav');

//Transversing the DOM
var articleList= $('.article-list');
var h1 = articleList.prev();
var kids = articleList.children();
var parents = articleList.parents('div');

//Challenge 1
    //Seleccionar el articulo con clase featured
var art2 = $('.featured');
    //Seleccionar el siguiente articulo con clase featured
var art3 = art2.prev();
    //Usar toggleClass();
art2.toggleClass('featured');
art3.toggleClass('featured');
   
//Challenge 2
    //Encontrar el primer navItem
var navFirst = $('.nav-item').first();
var link = navFirst.find('a');
link.attr('href', 'http://www.google.com');

//Challenge 3
    //Encontrar los elementos con clase article-item
articleItems.css('font-size','20px');

//Events
$('input').on('change', function(){
    console.log("Input Changed");
    var dc = $('.articles');
    dc.css('font-size','2px');
});

$('p').each(function(){
    var text = $(this).text();
    $(this).append(text.length);
});//Al final de cada parrafo se pone el tamaño

$('.featured').on('click', function(){
   $(this).remove(); 
    var dc = $('.container');
    dc.css('color','red');
});

$(document).on('click', function(e){
    console.log(e.pageX, e.pageY);
    console.log(e.target.nodeName);
});