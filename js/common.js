
// Event handler for side bar navigation links
// Expands/collapses the sub menu on click
$('#sidebar ul.main-menu > li a').on('click',function(){
	if($(this).parent().find('ul.sub-menu').length > 0) {
		$(this).parent().find('ul.sub-menu').slideToggle();
	}
	return false;
});

// Event handler for opening the image in the lightbox
$('.lightbox-link').on('click',function(){
	$('#lightbox .content img').attr('src',$(this).children('img').attr('src'));
	$('#lightbox .content').width($(this).children('img').width()+30);
	$('#lightbox').fadeIn(300);
});

// Event handler for closing the lightbox
$('#lightbox .content a.close-btn').on('click',function(){
	$('#lightbox').fadeOut(300);
});

// Pair of focusin/focusout handlers to provide hint text for the search input field
$('input[name="search-field"]').on('focusin',function(){
	if($(this).val()=='Enter search term...')
		$(this).val('');
});

$('input[name="search-field"]').on('focusout',function(){
	if($(this).val()=='')
		$(this).val('Enter search term...');
});

$('.body-menu-link a').on('click',function() {
	$('nav#sidebar').slideToggle(300);
	return false;
});