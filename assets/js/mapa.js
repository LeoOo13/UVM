var mapaUVM = (function () {
	var markers = [];
	var lastinfowindow = null;
	var map = null;
	var elements = {
		'mapcontainer' : $(".component-c9 .iframe")
	};

		return {
			initialize : function () {

				var myLatlng = new google.maps.LatLng(21.5121499,-109.8253327);

				var mapOptions = {
					scrollwheel: false,
					zoom: 4,
					center: myLatlng
				};

				map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
				map.setOptions({ minZoom: 3 });
				// mapaUVM.responsivemap();

				mapaUVM.getMarkers();

				google.maps.event.addDomListener(window, "resize", function() {
					var center = map.getCenter();
					google.maps.event.trigger(map, "resize");
					map.setCenter(center); 
				});

				mapaUVM.acciones();
			},
			responsivemap : function(){
				elements.mapcontainer.css("height", elements.dependant.height()).css("overflow", "hidden");
				google.maps.event.trigger(map, 'resize');
				map.setZoom(map.getZoom());		    
			},
			getMarkers : function(){

				var count = 0;
				var bounds = new google.maps.LatLngBounds();
				var newcenter; 
				var zoomval = 4;
				var infowindow;
				var $markers = $('.component-c9 a.campus-a');
					
				$markers.each(function(i, $element) {

					var lat = $(this).data("lat");
					var lng = $(this).data("lng");
					var title = $(this).text();
					var selector = $(this).data("container");

					if( lng && lat )
					{
						count++;
	                    var marker = 'pin.png';
	                    
	                    var myLatlng = new google.maps.LatLng(lat,lng);

	      				var image = {
						    url: 'http://multiplicamx.com/cliente/2016/UVM/avance/assets/img/cursor.png',
						    scaledSize : new google.maps.Size(40, 45)
						 };

                        var marker = new google.maps.Marker({
                        position: myLatlng,
                        map: map,
                        title: title,
                        animation: google.maps.Animation.DROP,
                        icon:image
                      });


                        var info= '<div class="map-window">'
                        +'<h1>'+title+'</h1>'
                        // +'<p>'+suc.description+'</p>'
                        +'</div>';

                       

                        google.maps.event.addListener(marker, 'click', function() {
         //                	if (infowindow) infowindow.close();
         //                	 infowindow = new google.maps.InfoWindow({
							  //     content: info
							  // });
                        	 
						   //  infowindow.open(map,marker);
						   	event.preventDefault();
							$(".tabss, .main-tabss").hide();
							$(selector).slideDown();

						  });

						markers[i] = marker;  

						bounds.extend(myLatlng);

						if(count==1){
		                    newcenter =  myLatlng;
		                }

					}
				});
				mapaUVM.setCenterMapM(newcenter, zoomval);

			},
			clearMarkers : function() {
			  mapaUVM.setAllMap(null);
			},
			deleteMarkers: function() {
			  mapaUVM.clearMarkers();
			  markers = [];
			},
			setAllMap: function(map) {
				markers.forEach(function (marker, i) {
				     markers[i].setMap(map);
				});
			},
			setCenterMapM : function(center, zoom){
				map.setCenter(center);
				zoomChangeBoundsListener = 
				google.maps.event.addListenerOnce(map, 'bounds_changed', function(event) {
					if (this.getZoom()){
						this.setZoom(zoom);
					}
				});

				setTimeout(function(){google.maps.event.removeListener(zoomChangeBoundsListener); }, 2000);
			},
			acciones : function (){

				$( ".btn-cont .btn" ).click(function() {
					$(".btn-cont .btn").removeClass("active");
					$(this).addClass("active");
				});

				$( ".btn-map" ).click(function() {
					$(".tab-map").addClass("active");
					$(".tab-list").removeClass("active");
				});

				$( ".btn-list" ).click(function() {
					$(".tab-list").addClass("active");
					$(".tab-map").removeClass("active");
				});

				/*Para pequeño modal que despliega el detalle de cada campus*/
				$(".campus-a").click(function(e){
					event.preventDefault();
					$(".tabss, .main-tabss").hide();
					$($(this).attr("href")).slideDown();
				});

				$(".tabss .btn-modal").click(function(){
					$(".tabss").slideUp();
					$(".main-tabss").fadeIn();
				});
			}

		}; // end of the return
	}());

	mapaUVM.initialize();