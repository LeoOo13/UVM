var comparador = ( function( window, undefined ) {
	var is_comparador = false;
	var $component = $('#component-comparador');
	var sliderMobile = null;
	var planesId = [];

	function initComparador(){

  		if($component.length>0){
  			isComparador = true;
  			initComparadorDesktop();
  			setTimeout(function(){ 
  				appendMobileComparador();
  			 }, 1000);

  			componentActions();
  		}
	}

	function initCompardorDesktop(){
		var $content = $('.component-cp .cont-information');
	  	var $content1 = $('.component-cp .cont-information .component-cp1');
	  	var $content2 = $('.component-cp .cont-information .component-cp-info');
	  	
		$content.hide();
		$content1.hide();
		$content2.hide();
	}

	function initComparadorMobile(){
		var steps = $('#component-cpm .step');
		updateMobileOptions();
		initSlider('#component-cpm');
		
		hideAllB(steps);
		showStep(0);
	}

	function componentActions(){

		$('.component-cp .cont-select').on('change', 'select', function() {
			updateMobileOptions();

	 	if(validOptions()){
		 		gethtmlInfo($('#licenciatura1 select').val() , $('#licenciatura2 select').val());
		 		
		 		$content.show();
		 		$content1.show();

		 		var steps = $('#component-cpm .step');
				hideAllB(steps);
				showStep(5);

		 	}
		 	else{
		 		$content.hide();
		 		$content1.hide();
		 		$content2.hide();
		 	}

		 	
		});
		

		$('.component-cp .component-cp1 .final-select').on('change', 'select', function() {
				
		 	if(validOptionsPlanes()){
		 		gethtmlInfo2(planesId[0] , planesId[1]);
		 		$content2.show();
		 	}
		 	else{
		 		$content2.hide();
		 	}

		});

		$('#component-cpm').on( "click", '.actionStep', function(e) {
	  				
			var show = $(this).data('show')-1;
			var hide = $(this).parent().parent('.step').index();
			
			hideStep(hide);
			showStep(show);
		});

		$('.pick-carrer').on( "click", '>li', function(e) {
		//$('.line-carrer, .pick-carrer').on( "click", '>li', function(e) {

			$($(this).data('selector') + ' select').val($(this).data('value')).change();

			addActiveClass($(this));

			var hide = $(this).data('step');
			var show = hide+1;

			hideStep(hide);
			showStep(show);
			// beginSlide(0);
		});

		$('.line-carrer >li, .pick-carrer >li').on( "click", 'a', function(e) {
			e.preventDefault();
		});

		$('.step').on( 'click' , '.beginSlide', function(){
			beginSlide(0);
		});

		$('.swiper-slide.two .select-field').on('change', 'select', function() {

			$('.component-cp .component-cp1 .final-select select').eq($(this).parent().data('key')).val($(this).val()).change();

	});
	}

	function validOptionsPlanes(){
		var $selects = $('.component-cp .component-cp1 .final-select select');
		var valid = true;

		planesId = [];

		$selects.each(function(i, e) {
			planesId.push($(e).val());
			if($(e).val()=='' || $(e).val()== 0){
				valid = false;
				return;
			}
		});

		return valid;
	}

	function validOptions(){
		var selects = ['#vertical1', '#licenciatura1', '#vertical2', '#licenciatura2'];
		var valid = true;
		selects.forEach(function(selector) {

			if($(selector + ' select').val()=='' || $(selector + ' select').val()== 0){
				valid = false;
				return;
			}
		});

		return valid;
	}
	
	function gethtmlInfo(lid1, lid2){
		var $container = $('.component-cp .cont-information .component-cp1');
		var source = $container.data('source');
		var licenciaturas =[lid1, lid2];
		var innerContainers = [''];
		var meta = {};
		$.each( licenciaturas, function( key, val ) {

			$.getJSON( source , {
		    id: val
		  },function( data ) {

			meta = data;


			}).always(function() {

				var $main = $('.component-cp1 .content-cp').eq(key);

				var $mainmobile1 = $('.step-6 .one .divided-c .halff').eq(key);
				var $mainmobile2 = $('.step-6 .two .divided-c .halff').eq(key);
				var $mainmobile3 = $('.step-6 .three .divided-c .halff').eq(key);
				
				$main.children('.cont-img').html('<img src="'+meta.thumb+'"/>');
				$main.children('.mode-description').html(meta.descripcion);
				$main.children('.duracion').html('<p><strong>Duración</strong></p>');

				$mainmobile1.children('.title').html('<strong>'+meta.titulo+'<strong>');
				$mainmobile1.children('.description').html(meta.descripcion);

				$mainmobile2.children('.title').html('<strong>'+meta.titulo+'<strong>');
				$mainmobile2.children('.duracion').html('<p><strong>Duración</strong></p>');

				$.each(meta.duracion, function(key1, duracion){
					$main.children('.duracion').append('<p>'+duracion.titulo+' '+ duracion.duracion +'</p>');
					$mainmobile2.children('.duracion').append('<p>'+duracion.titulo+' '+ duracion.duracion +'</p>');

				});

				var options = [];

				$.each(meta.planes, function(key3, plan){
					options.push('<option value="'+plan.id+'">'+plan.titulo+'</option>')
				});

				$main.find('.final-select').html('<select name="plan-de-estudios" class="swiper-no-swiping"><option value="0">Elige una el plan de estudios</option>'+options.join("")+'</select>');
				$mainmobile2.find('.select-field').html('<select name="plan-de-estudios-m" class="swiper-no-swiping"><option value="0">Elige una el plan de estudios</option>'+options.join("")+'</select>');		  			

				$mainmobile3.children('.title').html('<strong>'+meta.titulo+'<strong>');

				sliderMobile.update();

			});
		});
	}

	function gethtmlInfo2(pid1, pid2){

			var $container = $('.component-cp .cont-information .component-cp-info');
			var source = $container.data('source');
			var planes =[pid1, pid2];
			var meta = {};

			$.each( planes, function( key, val ) {

				$.getJSON( source , {
			    id: val
			  },function( data ) {

				meta = data;

			}).always(function() {

				console.log('meta', meta);

				var $main = $('.component-cp-info >div .incontent-cp2 .content-cp').eq(key);
				var $main2 = $('.component-cp-info >div .incontent-cp3 .content-cp3').eq(key);
				var $mainmobile3 = $('.step-6 .three .divided-c .halff').eq(key);

				var $puntosContainer = $main.find('.cont-points-container');
				var $puntosContainerM = $mainmobile3.find('.cont-points-container');
				
				var $ligaContainer = $main.find('.discover-cp2 a');
				$ligaContainer.html($ligaContainer.data('title'));

				var $campusContainer = $main2.find('.campus-container');
				var $campusContainerM = $('.step-6 .campus-slide .divided-c .halff').eq(key).find('.campus-container');
				
				
				var $mainmobile3 = $('.step-6 .three .divided-c .halff').eq(key);
				
				if(key==0){
					appendSlidesPuntos(meta.puntos.length);
				}

				var $puntosM = $('.step-6 .swiper-slide.punto');
					$.each(meta.puntos, function(key1, punto){
					var puntoHTML = '<div class="col-sm-12 cont-points">';
					puntoHTML+='<h4>'+punto.titulo+'</h4>';
					puntoHTML+='<div class="col-sm-3">';
					puntoHTML+='<div class="icon-circle '+punto.color+'">';
					puntoHTML+='<img src="'+punto.thumb+'"/>';
					puntoHTML+='</div>';
					puntoHTML+='</div>';
					puntoHTML+='<div class="col-sm-9">';
					puntoHTML+= '<p>'+punto.descripcion+'</p>';
					puntoHTML+='</div>';
					puntoHTML+='</div>';
					

					var $puntosContainerM = $($puntosM[key1]).find('.divided-c .halff').eq(key);
					$puntosContainer.append(puntoHTML);
					$puntosContainerM.find('.cont-points-container').append(puntoHTML);

				});

				$ligaContainer.prop('href', meta.liga);
				
				$campusContainer.html('');
				$campusContainerM. html('');
				$.each(meta.campus, function(key, campus){
					

					var campusHTML = '<div class="col-sm-6">';
					campusHTML+='<ul>';
					campusHTML+='<li class="tittle"><p>'+ campus.titulo+ '</p></li>';
					
					$.each(campus.campus, function(key, sede){
					
						campusHTML+='<li><a href="'+sede.liga+'">'+ sede.titulo+ '</a></li>';

					});

					campusHTML+='</ul>';
					campusHTML+='</div>';


					$campusContainer.append(campusHTML);
					$campusContainerM.append(campusHTML);
				});
	              

	            var $colegiaturaContainer = $main2.find('.colegiatura-container');
	            var $colegiaturaContainerM = $('.step-6 .colegiatura-slide .divided-c .halff').eq(key).find('.colegiatura-container');

	            $colegiaturaContainer.find('.lite strong').html(meta.colegiatura.monto);
	            $colegiaturaContainerM.find('.lite strong').html(meta.colegiatura.monto);
	            
	            var $ligaColegiatura = $main2.find('.links-container .calcular');
				$ligaColegiatura.html($ligaColegiatura.data('title'));
				$ligaColegiatura.prop('href', meta.colegiatura.colegiatura);
				
				var $ligaPrograma = $main2.find('.links-container .programa');
				$ligaPrograma.html($ligaPrograma.data('title'));
				$ligaPrograma.prop('href', meta.colegiatura.programa);


				var $ligaColegiaturaM = $colegiaturaContainerM.find('.links-container .calcular');
				$ligaColegiaturaM.html($ligaColegiaturaM.data('title'));
				$ligaColegiaturaM.prop('href', meta.colegiatura.colegiatura);
				
				var $ligaProgramaM = $colegiaturaContainerM.find('.links-container .programa');
				$ligaProgramaM.html($ligaProgramaM.data('title'));
				$ligaProgramaM.prop('href', meta.colegiatura.programa);

			});
		});
	}

  	function appendSlidesPuntos(count){

		$('.step-6 .swiper-slide.punto').remove();

		var $slider = $('.step-6 .swiper-container .swiper-slide.two');
		var slideP = '<div class="swiper-slide punto">';
		slideP+='<div class="in-content">';
		slideP+='<div class="divided-c">';
		slideP+='<div class="halff">';
		slideP+='<p class="title"></p>';
		slideP+='<div class="cont-points-container">';
		slideP+='</div>';
		slideP+='</div>';
		slideP+='<div class="halff">';
		slideP+='<p class="title"></p>';
		slideP+='<div class="cont-points-container">';
		slideP+='</div>';
		slideP+='</div>';
		slideP+='</div>';
		slideP+='</div>';
		slideP+='</div>';

		var slides = slideP.repeat(count);

		$(slides).insertAfter($slider);
		
		sliderMobile.update();
	}

	function addActiveClass(element){
		element.addClass('active').siblings().removeClass('active');
	}


	function initSlider(selector){

  		sliderMobile = new Swiper(selector +' .step .swiper-container', {
	        pagination: selector + ' .swiper-pagination',
	        paginationClickable: true,
	        nextButton: '.swiper-button-next',
        	prevButton: '.swiper-button-prev',
        	autoHeight : true
	    });

  	}

  	function beginSlide(index){
  		sliderMobile.slideTo(index);
  	}

	return {
		finitComparador : initComparador
	}

} )( window );


$(function() {

	function init(){
		comparador.finitComparador();
	}

	init();

});