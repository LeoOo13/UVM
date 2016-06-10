var mapaUVM = (function () {
	var markers = [];
	var lastinfowindow = null;
	var map = null;
	var mapas = [];
	var mapsingle = null;

	// var mapElements = {
	// 	'mapcontainer' : $(".component-c9 .iframe"),
	// 	'singlemapcontainer' : $(".componente-mi .iframe")
	// };
	var mapElements = [$(".component-c9 .iframe")];
	var current = 'list';

		return {
			initialize : function () {
				// Petición para obtener el script del mapa
				$.ajax({
				  url: 'https://maps.googleapis.com/maps/api/js?v=3.exp&#038;signed_in=true',
				  dataType: "script"
				}).
				// Al ser satisfactoria inicializamos el mapa
				done(function(){
					mapaUVM.setMapOptions();
				}).
				fail(function(){
					throw new NuevoError("No se pudo cargar la API de Google Maps, algunas funciones no estarán disponibles en la página.");
				});
			},
			setMapOptions : function(){

				// if($(".componente-mi .iframe").length>0){
				// 	mapsingle = new google.maps.Map(document.getElementById('map-canvas-single'), mapOptions);
				// 	mapsingle.setOptions({ minZoom: 3 });
				// 	mapaUVM.drawMarkers();
				// 	mapaUVM.setResize(mapsingle);
				// }
				
				if($(".component-c9 .iframe").length>0){
					mapaUVM.initMapas();
					// map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
					// map.setOptions({ minZoom: 3 });
				}

				
			},
			initMapas : function(){

				mapElements.forEach(function($selector) {
		  			if ($selector.length > 0){
		  				mapaUVM.initMapa($selector);
		  			}
		  		});

			},
			initMapa : function($mapIframe){
				$mapIframe.each(function(i, $selector) {
		  			mapaUVM.generateMapa($selector, i, this);
				});
			},
			generateMapa: function($selector, i, mapthis){
				var myLatlng = new google.maps.LatLng(21.5121499,-109.8253327);
				var mapOptions = {
					scrollwheel: false,
					zoom: 4,
					center: myLatlng
				};

				var mapId = 'map-canvas-'+i;
				$(mapthis).attr('id', mapId).addClass('map-iframe');
				var map = new google.maps.Map(document.getElementById(mapId), mapOptions);
				map.setOptions({ minZoom: 3 });
				mapas.push({ id : mapId ,mapa: map, markers: [] });
				mapaUVM.getMarkers(i);
				mapaUVM.setResize(i);
				mapaUVM.acciones(i);
				mapaUVM.reset(i);

			},
			reset: function(i){
				if($(".component-c57 .component-c9 .iframe").length>0){
					$('.component-c57 .component-c9').on( "click", ".btn-map", function(event) {
						event.stopPropagation();
						var center = mapas[i].mapa.getCenter();
						google.maps.event.trigger(mapas[i].mapa, 'resize');
						mapas[i].mapa.setCenter(center);
					});
				}
				
			},
			setResize: function(i){
				google.maps.event.addDomListener(window, "resize", function() {
					var center = mapas[i].mapa.getCenter();
					google.maps.event.trigger(mapas[i].mapa, "resize");
					mapas[i].mapa.setCenter(center); 
				});
			},
			responsivemap : function(){
				mapElements.mapcontainer.css("height", elements.dependant.height()).css("overflow", "hidden");
				google.maps.event.trigger(map, 'resize');
				map.setZoom(map.getZoom());		    
			},
			drawMarkers : function(){
				var count = 0;
				var bounds = new google.maps.LatLngBounds();
				var newcenter; 
				var zoomval = 4;
				var infowindow;
				var mapMarkers = $(".componente-mi .iframe").data("markers");
				mapMarkers.forEach(function(markerSingle) {

					var lat = markerSingle.lat;
					var lng = markerSingle.lon;
					var title = markerSingle.titulo;

					if( lng && lat )
					{
						
	                    var marker = 'pin.png';
	                    
	                    var myLatlng = new google.maps.LatLng(lat,lng);

	      				var image = {
						    url: 'http://multiplicamx.com/cliente/2016/UVM/avance/assets/img/cursor.png',
						    scaledSize : new google.maps.Size(40, 45)
						 };

	                      var marker = new google.maps.Marker({
	                        position: myLatlng,
	                        map: mapsingle,
	                        title: title,
	                        animation: google.maps.Animation.DROP,
	                        icon:image
	                      });


                        var info= '<div class="map-window">'
                        +'<h1>'+title+'</h1>'
                        // +'<p>'+suc.description+'</p>'
                        +'</div>';

						markers[count] = marker;  

						bounds.extend(myLatlng);

						if(count==0){
		                    newcenter =  myLatlng;
		                }

		                count++;
					}
				});

				mapaUVM.setCenterMapM(newcenter, zoomval, mapsingle);
			},
			getMarkers : function(index){
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
						    url: 'http://multiplicamx.com/cliente/2016/UVM/assets/img/cursor.png',
						    scaledSize : new google.maps.Size(40, 45)
						 };

                      var marker = new google.maps.Marker({
                        position: myLatlng,
                        map: mapas[index].mapa,
                        title: title,
                        animation: google.maps.Animation.DROP,
                        icon:image
                      });


                        var info= '<div class="map-window">'
                        +'<h1>'+title+'</h1>'
                        // +'<p>'+suc.description+'</p>'
                        +'</div>';

                       

                        google.maps.event.addListener(marker, 'click', function() {
						   	event.preventDefault();
							$(".tabss, .main-tabss").hide();
							$(selector).slideDown();
							current= 'map';
						  });

						mapas[index].markers = marker;  

						bounds.extend(myLatlng);

						if(count==1){
		                    newcenter =  myLatlng;
		                }

					}
				});

				mapaUVM.setCenterMapM(newcenter, zoomval, mapas[index].mapa);

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
			setCenterMapM : function(center, zoom, mapa){
				mapa.setCenter(center);
				zoomChangeBoundsListener = 
				google.maps.event.addListenerOnce(mapa, 'bounds_changed', function(event) {
					if (this.getZoom()){
						this.setZoom(zoom);
					}
				});

				setTimeout(function(){google.maps.event.removeListener(zoomChangeBoundsListener); }, 2000);
			},
			acciones : function (i){
				var $componentMap = $('#'+mapas[i].id).closest('.component-c9');

				$componentMap.on("click", ".btn-cont .btn", function() {
					$componentMap.find('.btn-cont .btn').removeClass("active");
					// $(".component-c9 .btn-cont .btn").removeClass("active");
					$(this).addClass("active");
				});

				$componentMap.on("click", ".btn-map", function() {
					$componentMap.find('.tab-map').addClass("active");
					$componentMap.find('.tab-list').removeClass("active");
					// $(".component-c9 .tab-map").addClass("active");
					// $(".component-c9 .tab-list").removeClass("active");
				});

				$componentMap.on("click", ".btn-list", function() {
					$componentMap.find('.tab-list').addClass("active");
					$componentMap.find('.tab-map').removeClass("active");
					// $(".component-c9 .tab-list").addClass("active");
					// $(".component-c9 .tab-map").removeClass("active");
				});

				/*Para pequeño modal que despliega el detalle de cada campus*/
				$componentMap.on("click", ".campus-a", function(e){
					e.preventDefault();
					$componentMap.find('.tabss, .main-tabss').hide();
					// $(".component-c9 .tabss, .main-tabss").hide();
					$($(this).attr("href")).slideDown();
					current = 'list';
				});

				$componentMap.on("click", ".tabss .btn-modal", function(){
					$componentMap.find('.tabss').slideUp();
					$componentMap.find('.main-tabss').fadeIn();
					// $(".component-c9 .tabss").slideUp();
					// $(".component-c9 .main-tabss").fadeIn();
				});

				if($(".component-c57 .component-c9 .iframe").length>0){
					$(".component-c9").on("click", ".close", function(){
						setTimeout(function(){
							$(".component-c57 .buttons-zone .flange:last-child").addClass('active');
							$(".component-c57 .cont-expanded .expanded-link:last-child").show();
							$(".component-c57 .component-c9 .btn-"+current).addClass('active');
							$(".component-c57 .component-c9 .tab-"+current).addClass('active');
						}, 100);
						
					});
				}
			}

		}; // end of the return
	}());

	
mapaUVM.initialize();