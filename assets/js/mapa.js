var mapaUVM = (function () {
	var markers = [];
	var lastinfowindow = null;
	var map = null;
	var mapas = [];
	var mapsingle = null;

	var mapElements = [$(".component-c9 .iframe"), $(".componente-mi .iframe")];
	var current = 'list';

		return {
			initialize : function () {

				mapaUVM.setLoaders();

				// Petición para obtener el script del mapa
				$.ajax({
				  url: 'https://maps.googleapis.com/maps/api/js?v=3.exp&#038;signed_in=true',
				  dataType: "script"
				}).
				// Al ser satisfactoria inicializamos el mapa
				done(function(){
					mapaUVM.setMaps();
				}).
				fail(function(){
					throw new NuevoError("No se pudo cargar la API de Google Maps, algunas funciones no estarán disponibles en la página.");
				});
			},
			setMaps : function(){

				mapaUVM.initMapas();
				
			},

			setLoaders : function(){
				var $elements = $(".componente-mi, .component-c9").find('.iframe');
				var html_loader = '<div class="loader"><div class="loaderG_container"><div class="bullet1"></div> <div class="bullet2"></div> <div class="bullet3"></div> <div class="bullet4"></div> <div class="bullet5"></div> <div class="bullet6"></div> <div class="bullet7"></div> <div class="bullet8"></div> </div></div>';

				$elements.each(function(){
					$(this).append(html_loader);
				});

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
		  			mapaUVM.generateMapa($selector, this);
				});
			},
			generateMapa: function($selector, mapthis){
				var myLatlng = new google.maps.LatLng(21.5121499,-109.8253327);
				var mapOptions = {
					scrollwheel: false,
					zoom: 4,
					center: myLatlng
				};

				var i = mapas.length;

				var mapId = 'map-canvas-'+i;
				$(mapthis).attr('id', mapId).addClass('map-iframe');
				//$( "<p class='map-loader "+mapId+"'>Loading....</p>" ).insertBefore( "#"+mapId );

				var map = new google.maps.Map(document.getElementById(mapId), mapOptions);
				map.setOptions({ minZoom: 3 });
				mapas.push({ id : mapId ,mapa: map, markers: [] });

				google.maps.event.addListenerOnce(mapas[i].mapa, 'idle', function(){
				    console.log('finish loading');
				    //$('.'+mapId).hide();
				    $(this).find('.loader').hide();
				});

				if($(mapthis).closest('.component-c9').length){
					mapaUVM.getMarkers(i);
				}
				else{
					mapaUVM.drawMarkers(i);
				}
				

				mapaUVM.setResize(i);
				mapaUVM.acciones(i);
				mapaUVM.reset(i);

			},
			closeInfoWindows : function(){
				marker.infowindow.close();
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
			drawMarkers : function(index){
				var count = 0;
				var bounds = new google.maps.LatLngBounds();
				var newcenter; 
				var zoomval = 4;
				var infowindow;
				var $mapaE = $('#'+mapas[index].id);
				var $mapMarkers = $mapaE.data("markers");

				$mapMarkers.forEach(function(markerSingle) {

					var lat = markerSingle.lat;
					var lng = markerSingle.lon;
					var title = markerSingle.titulo;
					var info = markerSingle.info;

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
	                        map: mapas[index].mapa,
	                        title: title,
	                        animation: google.maps.Animation.DROP,
	                        icon:image
	                      });


                        var infoText= '<div class="map-window">'
                        +'<h3>'+title+'</h3>'
                        +'<p>'+info+'</p>'
                        +'</div>';

						var infowindow = new google.maps.InfoWindow({
							content: infoText
						});

						marker.addListener('click', function() {
						    infowindow.open(mapas[index].mapa, marker);
						});

						mapas[index].markers[count] = marker;  

						bounds.extend(myLatlng);

						if(count==0){
		                    newcenter =  myLatlng;
		                }

		                count++;
					}
				});

				mapaUVM.setCenterMapM(newcenter, zoomval, mapas[index].mapa);
			},
			getMarkers : function(index){
				var count = 0;
				var bounds = new google.maps.LatLngBounds();
				var newcenter; 
				var zoomval = 4;
				var infowindow;
				var $mapaE = $('#'+mapas[index].id).closest('.component-c9');
				var $markers = $mapaE.find('a.campus-a'); 

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
						   	//event.preventDefault();
							$mapaE.find(".tabss, .main-tabss").hide();
							$(selector).slideDown();
							current= 'map';
						  });

						mapas[index].markers[count] = marker;  

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
							$(".component-c57 .expanded-link >div:nth-child(1)").addClass('active');
						}, 100);
						
					});
				}
			}

		}; // end of the return
	}());

	
mapaUVM.initialize();