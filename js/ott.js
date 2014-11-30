
$( document ).ready(function() {
	(function() { // Begin scoping function
	    var argazkiak = ['img/slide-2.jpg','img/slide-1.jpg','img/slide-3.jpg','img/slide-4.jpg','img/slide-5.jpg','img/slide-6.jpg','img/slide-7.jpg','img/slide-8.jpg','img/slide-9.jpg','img/slide-10.jpg','img/slide-11.jpg','img/slide-12.jpg'];
	    var i = 0;
	    background();
	    function background() {
	    	var oingua = argazkiak[i];
	        setTimeout(function(){
				$('#bg')
			    .animate({opacity: 0}, 'slow', function() {
			        $(this)
			            .css({'background-image': 'url('+oingua+')'})
			            .animate({opacity: 1});
			    });
			    i=i+1;
			    if (i==argazkiak.length) i=0;
			    background();
			},15000);
	    }
	})();
});