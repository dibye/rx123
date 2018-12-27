(function($){
    jQuery(document).ready(function(){
        jQuery(window).scroll(function() {
        if (jQuery(this).scrollTop() > 1){  
            jQuery('header').addClass("sticky");
            }
            else{
            jQuery('header').removeClass("sticky");
            }
        });
        jQuery('.menu-open').click(function(){
          jQuery('body').css("overflow", "hidden");
          jQuery('.top-menu').show();
        });

        jQuery('.menu-close').click(function(){
          jQuery('body').css("overflow", "inherit");
          jQuery('.top-menu').hide();
        });

        $('.top-menu').find('li a').click(function(){
          $('body').css("overflow", "inherit");
          $('.top-menu').hide();
        }); 
				// script for desktop carousel   
    });
      
       
})(jQuery);


function playslider(){ 
  jQuery('.one').fadeIn(800).delay(50000).fadeOut(100);
  jQuery('.two').delay(5000).fadeIn(800).delay(40000).fadeOut(100);
  jQuery('.three').delay(10000).fadeIn(800).delay(30000).fadeOut(100);
}   
setInterval( function(){
  playslider(); 
}, 55000);

//  function cityStatePopulate() {
 
// 		// IMPORTANT: Fill in your client key
// 		var clientKey = "EhRRTj0v4vrxbCMGxniiFMEbzRVxXzWkk0dn53jHcH1thSqVY7OMJQulBIkpkOaE";
// 		var city_val;
// 		var cache = {};
// 		var container = $(document);
// 		var errorDiv = container.find("div.text-error");
		
// 		/* Handle successful response */
// 		function handleResp(data)
// 		{
// 			// Check for error
// 			if (data.error_msg)
// 				errorDiv.text(data.error_msg);
// 			else if ("city" in data)
// 			{
// 				//var state_name = getCityFullName(data.state);
// 				// Set city and state
// 				//container.find("#city").val(data.city);
// 				//container.find("#state_short").val(data.state);
// 				//container.find("#state").val(state_name);
// 			}
// 			console.log('data.city',data.city);
// 			return data.city;
// 		}
		
// 		// Set up event handlers
// 		container.on("keyup", "#zipcode", function() { 
// 			// Get zip code
// 			var zipcode = $(this).val();
// 			if (zipcode.length == 5 && /^[0-9]+$/.test(zipcode))
// 			{	console.log('zipcode',zipcode);
// 				// Clear error
// 				errorDiv.empty();
				
// 				// Check cache
// 				if (zipcode in cache)
// 				{
// 					city_val = handleResp(cache[zipcode]);
// 					console.log('city_val',city_val);
// 					return city_val;
// 				}
// 				else
// 				{
// 					// Build url
// 					var url = "https://www.zipcodeapi.com/rest/"+clientKey+"/info.json/" + zipcode + "/radians";
					
// 					// Make AJAX request
// 					$.ajax({
// 						"url": url,
// 						"dataType": "json"
// 					}).done(function(data) {
						
// 					//	handleResp(data);
						
// 						// Store in cache
// 						cache[zipcode] = data;
// 						console.log('data',data);
// 						return data.city;
// 					}).fail(function(data) {
// 						if (data.responseText && (json = $.parseJSON(data.responseText)))
// 						{
// 							// Store in cache
// 							cache[zipcode] = json;
							
// 							// Check for error
// 							if (json.error_msg)
// 								errorDiv.text(json.error_msg);
// 						}
// 						else
// 							errorDiv.text('Request failed.');
// 					});
// 				}
// 			}
// 		});
// 		console.log('city_val',city_val);
// 	return city_val;
//  }

// function getCityFullName(key) {
// 	var retval;
// 	var array=[ 
// 		{code:'AL', name:'Alabama'},
// 		{code:'AK', name:'Alaska'},
// 		{code:'AZ', name:'Arizona'} 
// 	]; 

// 	$.each(array, function() { 
// 			if(this.code == key){ console.log(this.name);
// 					retval = this.name;
// 					//return false; 
// 			} 
// 	});
// 	return retval; 
// }