var funcionamientos = ( function( window, undefined ) {
	
	var isComparador = false;
	var sliders = []; //Variable que contendrá los sliders

	function initExpandForm(){
		$('.component-f1').find('form').addClass('collapse-form');

		$('.component-f1 .data-write').on('click', '>*',function(){
			$(this).parents('form').removeClass('collapse-form');
		});	

	}

	function initCalendario(){

		if ($('.component-c32').length > 0){

	      $calendarios = $('.component-c32');

	      for (var i = 0; i < $calendarios.length; i++) {

	        var id = 'ccalendar-' + (i+1);

	        $($calendarios[i]).find('.calendar-container').attr('id', id);
	        var $calendario = $($calendarios[i]).find('.calendar-container'),
	        	informacionCalendario = {
					//JSON.parse($calendario.data('eventos'))
					activo: ($calendario.data('actual')) ? $calendario.data('actual') : 'month',
					eventos: ($calendario.data('eventos') && $calendario.data('eventos').length > 0) ? $calendario.data('eventos') : [],
					fechaInicio: ($calendario.data('fechainicio')) ? $calendario.data('fechainicio') : moment().format('YYYY-MM-DD')
				};

	        $('#' + id).fullCalendar({
	          lang: 'es',

	          header: {
	            left: 'prev,next',
	            center: 'title',
	            right: 'today, month, basicWeek, basicDay'
	          },
	          defaultDate: informacionCalendario.fechaInicio,
	          editable: false,
	          eventLimit: false,
	          events: informacionCalendario.eventos
	        });
	      }
	    }
	}
	function isMobile(){

		var width = $(window).width();

		if(width<830){
			return true;
		}

		return false;
	}

	function sliderData(){

		var $slides = $('.carousel .carousel-inner .item');
		
		$slides.each(function(i, $slider) {
			if($(this).data("json").date == dates.today) offers.push($(this).data("json"));
		});
	}

	function menuMobile(){

		$('nav').on( "click", ".menu-mobile-button", function(event) {
			event.stopPropagation();
			$('.nav-section').toggleClass('mobile-active');
			$('#bg-popup').toggleClass('mobile-active');
		});

		$('nav').on("click", ".menu-change-soy", function(event){
			event.stopPropagation();
			$('.nav-section').toggleClass('mobile-menu-soy');
		});

		$('#menu-soy').on("click", "li", function(event){
			event.stopPropagation();
			var soy = { 'slug' : $(this).data('soy'), 'name' : $(this).children('a').text()};
			sessionStorage.setItem("soy", JSON.stringify(soy));
			location.reload();
		});

		setMenu();

	}

	function setMenu(){
		var soy = sessionStorage.getItem("soy");
		soy = soy==null ? {'slug' : 'general', 'name' : 'Soy Público en General' } :  JSON.parse(soy) ;
		$('#menu-change-soy a').text(soy.name);
		
	}

	var componentsSelect = [
		{ selector : '.component-d4', active : '.select-field', data : null },
		{ selector : '.component-cp', active : '.select-field', data : 'thumb' }
	];

	var componentsForm = [
  		{ selector : '.component-f2' },
  		{ selector : '.component-f1' },
  		{ selector : '.component-c22' },
  		{ selector : '.component-c4' },
  		{ selector : '.component-c49' },
  		{ selector : '.component-c72' }
  	];

  	function initSelectDependants(){

  		componentsSelect.forEach(function(selector) {
  			if ($(selector.selector).length > 0){
  				initSelect(selector);
  			}
  		});

  		function initSelect(selector){
  			var $selects = $(selector.selector + ' ' + selector.active);

	  		$selects.each(function(i, $selector) {
	  			generateSelects(selector, $selector, this);
			});
  		}

  		function generateSelects(selector, $selector, element){

  			var dependant = $(element).data("dependant");
  			var source = $(element).data("source");
  			var title = $(element).data("title");

  			if( dependant ){
  				var select = '<select><option value="0">'+title+'</option>';
	  			select += '</select>';

	  			$($selector).html(select);

	  			$(dependant).on('change', 'select' ,function() {
	
	  				if($(this).val() != 0){
				 		createSelect(selector.data, $selector, title, source, $(this).val());
				 	}
				 	else{
				 		var select = '<select><option value="0">'+title+'</option>';
			  			select += '</select>';
			  			$($selector).html(select);
		  			
				 	}
				});
				
			}else if(source){
				createSelect(selector.data, $selector, title, source , 0);
			}
  		}

  		function createSelect(theData, element, name, source, value){
  			
  			var options = [];

  			$.getJSON( source , {
			    id: value
			  },function( data ) {

			  $.each( data, function( key, val ) {
				  	
				  	if(theData){
				  		options.push( "<option value='" + val.id + "' data-"+theData+"='"+val[theData]+"'>" + val.value + "</option>" );
				  	}
				  	else{
				  		options.push( "<option value='" + val.id + "'>" + val.value + "</option>" );
				  	}
			    
			  });


			}).always(function() {
			    var select = '<select><option value="0">'+name+'</option>';
	  			select += options.join( "" );
	  			select += '</select>';

	  			$(element).html(select);

	  			if(isComparador){
	  				updateMobileOptions();
	  			}
	  			
	  				  			

			});

  		}


  	}
  	function initLoadMore(){
  		var $loadMore = $('.btn-cont .load-more');

		
		$loadMore.each(function(i, $slider) {
			if($(this).data("show")){
				var $show = $($(this).data('show'));
				$show.hide();
			}
		});

  		$('.btn-cont').on("click", ".load-more", function(event){
			event.stopPropagation();
			$(this).hide();
			var $show = $($(this).data('show'));
			$show.show();
		});
  	}

	function initFormGeneral(){

  		componentsForm.forEach(function(selector) {
  			if ($(selector.selector).length > 0){
  				initForm(selector);
  			}
  		});

  		function initForm(selector){
  			var $form = $( selector.selector );
  			var $success = $( selector.selector + ' .cont-send-alert');
			var $fail = $( selector.selector + ' .cont-failed-alert');

  			$success.hide();
  			$fail.hide();
  			
  			$form.submit(function( event ) {
			  event.preventDefault();
			  postForm(selector);
			});
  		}

  		function postForm(selector){

			var self = $(selector.selector).serialize();
			var $success = $( selector.selector + ' .cont-send-alert');
			var $fail = $( selector.selector + ' .cont-failed-alert');
			var $form = $( selector.selector + ' form');

			$success.hide();
  			$fail.hide();

			$.ajax({ 
		         data: self,
		         type: 'POST',
		         url: 'http://multiplicamx.com/cliente/2016/UVM/servicios/form.php',
		         dataType: 'json',
		         success: function(data) {
		    
		         	if(data.success){
		         		$form.hide();
		         		$success.show();
		         	}
		         	else{
		         		$fail.show();
		         	}

		        },
		        error: function(jqXHR, textStatus, errorThrown) {
		        	console.log(jqXHR, textStatus, errorThrown);
				}
		    });
		}

  	}
	
  /*Funciónes generales*/
  	function scrollToElement(element){
  		// Visibilidad del menú mobile
  		var menu_mobile = ($('.mobile-head').css('display') == 'block'),
  		// Adición del height del menu fixed al scroll
  			adicion = ($('.component-m2'). length > 0 ) ? ($('.component-m2').height()) : 0;

  		// Si hay menú mobile se cambia la adición al alto del menú (el menú fixed m2 desaparece)
  		if (menu_mobile)
  		{
  			adicion = $('.mobile-head').height();
  		}

  		//Realizamos el posicionamiento del scroll
		$('html, body').animate({
			scrollTop: element.offset().top - adicion
		}, 500);
  	}

  	function popClass(element){
		element.addClass('mobile-open-pop').addClass('active');
	}

	//Remover clases
	function removerClase(element,clase){
		element.removeClass(clase);
	}

	function closeElement(component, elementToHide, elementRemoveClass){
		component.on( "click", ".close", function() {
		  elementToHide.hide();


		  	if(typeof elementRemoveClass != 'undefined'){
				//elementRemoveClass.removeClass('active');
				removerClase(elementRemoveClass, 'active');
			}

			//Buscar elemento que lo activo para removerle la clase
			var $parent_active = elementRemoveClass.parent().find('.active');

			if ($parent_active.length > 0)
			{
				removerClase($parent_active, 'active');
			}
		});

	}

	// Mostrar conenido
	// Se añade tercer parametro parent_element, si existe, se hará scroll a ese elemento.
	function showCurrentContent(element, scroll, parent_element){

		if(typeof scroll == 'undefined'){
			scroll = true;
		}

		if(typeof element != 'undefined' && element.length>0){
			element.show().siblings().hide();

			if(scroll){
				var scroll_element = (!parent_element) ? element : parent_element;
				scrollToElement(scroll_element);
			}
		}
	}

	function hideAllB(element){
		element.hide();
	}

  /*Funciónes por componentes*/



	function mComponentMenu(){

		var menu = $('.nav-section .container >ul >li');
		var submenu = $('.nav-section .container >ul >li .submenu .opc-1 .particular-item');
		var timerId;
		var timer = 0;
		var time = 10;

		menu.mouseover(function () {
			if(!isMobile()){
				timer = 0;
				clearInterval(timerId);
				menu.removeClass('hover');
			    $(this).addClass('hover');
			}
		});

		menu.mouseleave(function () {
			if(!isMobile()){
				var element = $(this);
				timerId = setInterval(function(){
					closeMenu(element);	
				}, time);
			}
		});

		menu.click(function(){

			if(isMobile()){
				var element = $(this);

				if(!element.hasClass('hover')){
					menu.removeClass('hover');
				    element.addClass('hover');
				}
				else{
					element.removeClass('hover');
				}
			}
		});

		function closeMenu(element){
			if (timer == 60) {
				element.removeClass('hover');
				clearInterval(timerId);
			} else {
				timer++;  
			}
		}

		submenu.click(function(event) {
			event.stopPropagation();
			if($(this).hasClass('active')){
				$(this).removeClass('active').find(".children-item").slideUp();
			}
			else{
				submenu.removeClass('active').find(".children-item").slideUp();
				$(this).addClass('active').find(".children-item").slideDown();
			}

		});

	}

	function mComponentSlideDown(){

		var submenu = $('.c-slideDown >a');

		submenu.click(function(event) {
			event.preventDefault();
			event.stopPropagation();

			if($(this).hasClass('active')){
				$(this).removeClass('active');
			}
			else{
				submenu.removeClass('active');
				$(this).addClass('active');
			}

		});
	}

	function mComponentC27() {

		var componentC27 = $('.component-c27');
		var botonesContainer = $('.component-c27 .buttons-zone');
		var tabs = $('.component-c27 .tab-zone >div');



		hideAllB(tabs);

		botonesContainer.on( "click", ">a", function(e) {
			e.preventDefault();
			var index = $('.component-c27 .buttons-zone >a').index(this);
			addActiveClass($(this));

			var element = tabs.eq(index);

			showCurrentContent(element); 
		});

		function addActiveClass(element){
			element.addClass('active').siblings().removeClass('active');
		}

	}

  function mComponentC29() {

    var botonesContainer = $('.component-c29 >ul.buttons-zone li');
    var botones = $('.component-c29 >ul.buttons-zone li >a');
    var tabs = $('.component-c29 .cont-expanded .expanded-link');

    hideAllB(tabs);
    appendSelectElements();
    componentActions();

	function componentActions(){

		botonesContainer.on( "click", ">a", function(e) {
	    	e.preventDefault();
		 	var index = $('.component-c29 .buttons-zone li >a').index(this);
		 	var parent = $(this).parents('.component-c29');
		 	addActiveClass($(this));

		 	var element = tabs.eq(index);
		 	showCurrentContent(element);
		});

		var selectContainer = $('.component-c29 .select-field');

		selectContainer.on('change', 'select' ,function() {
		 	var index = $(this).val();
		 	var parent = $(this).parents('.component-c29');
		 	var element = tabs.eq(index);
		 	showCurrentContent(element);
		});
	}

	function addActiveClass(element){
		botones.removeClass('active');
		element.addClass('active');
	}

	function appendSelectElements(){
		
		var $botonesPB = $('.component-c29 >ul.buttons-zone');
		var opciones = getSelectOptions();
		var t = 0;
		
		$botonesPB.each(function(i, $e) {
			var total = $($e).children('li').length;
			var opcionesSelect = '';

			for (var j = 0; j < total; j++) {
				opcionesSelect+= '<option value="'+t+'">'+opciones[t]+'</option>';
				t++;
			}

			appentToSelect(opcionesSelect, $($e));

		});

	}

	function appentToSelect(opciones, $elemento){
		$elemento.parent().prepend('<div class="col-xs-12 visible-sm-block visible-xs-block hidden-md hidden-lg"><div class="data-write select-field"><select class="">'+opciones+'</select></div></div>');
	}


	function getSelectOptions(){

  		var $menuElements = botones;
  		var opciones = [];

  		$menuElements.each(function(i, e) {
  			var opcion = $(e).text();
  			opciones.push(opcion);
		});

		return opciones;

  	}

  }
  var componentMenuM1 = [
  		{ selector : '.less-imp-topics'},

  		
  	];

  	function initMenuM1(){

  		componentMenuM1.forEach(function(selector) {
  			if ($(selector.selector).length > 0){
	  			initMenu(selector);
	  		}
  		});

  		function initMenu(selector){
  			componentActions(selector);


  		}

  		function componentActions(selector){

  			$(selector.selector).on( "click", '.language >a', function(e) {
	  				e.preventDefault();
		  			$(this).parent().siblings().removeClass('active');
		  			$(this).parent().toggleClass('active');
			});

			$(selector.selector).on( "click", '.language .data-languages >a', function(e) {
	  				e.preventDefault();
		  			$(this).parent().parent().find('.current').text($(this).text());
		  			$(this).parent().parent().siblings().removeClass('active');
		  			$(this).parent().parent().toggleClass('active');
			});

  			$(selector.selector).on( "click", '.search a', function(e) {
  				e.preventDefault();
	  			$(this).parent().siblings().removeClass('active');
	  			$(this).parent().toggleClass('active');
			});
  		}
  	}

  	var mobileComponentsSelectorPop = [
  		{ selector : '.component-c34', active : '>div', 'showFirst' : false },
  		{ selector : '.component-c38', active : '>div', 'showFirst' : false },
  		{ selector : '.component-c41', active : '>div', 'showFirst' : false },
  		{ selector : '.component-c46', active : '.int a', 'showFirst' : false }, 
  		{ selector : '.component-c47', active : '>div a', 'showFirst' : false },
  		{ selector : '.component-c53', active : '>div', 'showFirst' : false },
  		{ selector : '.component-c55', active : '>div a', 'showFirst' : false },
  		{ selector : '.component-c63', active : '>div', 'showFirst' : true, scrollToButtonsArea: true },
  		{ selector : '.component-c63a', active : '>div', 'showFirst' : true, scrollToButtonsArea: true },
  		{ selector : '.component-c64', active : '>div', 'showFirst' : true, scrollToButtonsArea: true },
  		{ selector : '.component-c67', active : '>div', 'showFirst' : false },
  		{ selector : '.component-c68', active : '>div', 'showFirst' : false, scrollToActiveButton: true },
  		{ selector : '.component-c20', active : '>div', 'showFirst' : false},
  		{ selector : '.component-c15', active : '.cont-btn', 'showFirst' : false},
  		{ selector : '.component-c61', active :'>div', 'showFirst' : true, scrollToButtonsArea: true},
  		{ selector : '.component-c57', active :'>div', 'showFirst' : true, scrollToButtonsArea: true},
  		{ selector : '.component-c50', active : '.more', 'showFirst' : false},
  		{ selector : '.component-c72', active : 'li a', 'showFirst' : false}
  	];

  	var componentsCerrar = [
  		{ selector : '.component-c22', active : '>div'},
  		{ selector : '.component-c49', active : '>div'},
  		{ selector : '.component-ah', active : '>div'},
  		{ selector : '.component-ac', active : '>div'},
  		{ selector : '.component-pha', active : '>div'}
  	];

  	var componentsPestana = [
  		{ selector : '.component-c27', active : '>a'},
  		{ selector : '.component-c48', active : '>a'},
  		{ selector : '.component-m3', active :' >div.cont-button'},
  		{ selector : '.component-m4', active :' >div.cont-button'}
  	];

  	var componentsSlider = [
  		{ selector : '.slider-i5', thumbnail : false },
  		{ selector : '.slider-c54', thumbnail : false },
  		{ selector : '.slider-c19', thumbnail : true },
  		{ selector : '.slider-c20', thumbnail : false },
  		{ selector : '.slider-c28', thumbnail : false },
  		{ selector : '.slider-i13', thumbnail : false }
  		
  	];

  	var componentsMenuInteractivo = [
  		{ selector : '.component-c57' }
  	];

  	function initSliderGeneral(){

  		componentsSlider.forEach(function(selector) {
  			if ($(selector.selector).length > 0){
	  			initSlider(selector);
	  		}
  		});

  		function initSlider(selector){

  			var $slides = $(selector.selector + ' .swiper-wrapper .swiper-slide');

	  		$slides.each(function(i, e) {

	  			var $element = $(e);
	  			var image = $element.data("img");
	  			var excerpt = $element.data("excerpt");

	  			var insert = '<img src="'+image+'"/>';

	  			if(excerpt){
	  				insert+= '<p>'+excerpt+'</p>';
	  			}
				
				$element.append(insert);

				if(selector.thumbnail){
					var insert = '<div class="swiper-slide thumb"><img src="'+image+'"></div>';
					$(selector.selector + ' .gallery-thumbs .swiper-wrapper').append(insert);
				}
			});	

		    if(selector.thumbnail){

		    	var galleryTop = new Swiper(selector.selector + ' .gallery-top', {
			        nextButton: '.swiper-button-next',
			        prevButton: '.swiper-button-prev',
			        spaceBetween: 10,
			        loop:true,
			        loopedSlides: 5, //looped slides should be the same     
			    });
			    var galleryThumbs = new Swiper(selector.selector + ' .gallery-thumbs', {
			        spaceBetween: 10,
			        slidesPerView: 4,
			        touchRatio: 0.2,
			        loop:true,
			        loopedSlides: 5, //looped slides should be the same
			        slideToClickedSlide: true
			    });
			    
			    galleryTop.params.control = galleryThumbs;
			    galleryThumbs.params.control = galleryTop;

		    }
		    else{

	  			//creamos un nuevo swiper en nuestro arreglo de sliders por cada .swipercontainer
	  			$(selector.selector + ' .swiper-container').each(function(){
	  				$(this).attr('data-slider-id', sliders.length);
			  		sliders.push(new Swiper(this, {
				        pagination: selector.selector + ' .swiper-pagination',
				        paginationClickable: true,
				        nextButton: selector.selector + ' .swiper-button-next',
			        	prevButton: selector.selector + ' .swiper-button-prev',
			        	autoHeight : true
				    }));
	  			})



		  		

		    }

	  	}
  	}


  	function updateMobileOptions(){
		var selects = ['#vertical1', '#licenciatura1', '#vertical2', '#licenciatura2'];

		var selectsMobile = ['.step-2 .line-carrer', '.step-3 .pick-carrer', '.step-4 .line-carrer', '.step-5 .pick-carrer'];

		selects.forEach(function( selector, key ) {
		var options = $(selector +' select option');
			$(selectsMobile[key]).html('');
			
			var step = key + 1;

			var values = $.map(options ,function(option) {
				if(option.value!=0){	
					var $option = $(option);
					var titulo = $option.text();
					var html = '<li data-selector="'+selector+'" data-value="'+option.value+'" data-step="'+step+'"><a href="#">';
					
					if($option.data('thumb') !='undefined'){                 
		            	html+='<img src="'+$option.data('thumb')+'" alt="'+titulo+'">';
		            }
		            html+='<p>'+titulo+'</p></a>';
		           	html+='</li>';

		           	$(selectsMobile[key]).append(html);
		         }
	  
			});
		
		});
		
	}

function initComparadorGeneral(){

	var sliderMobile = null;
	var planesId = [];
	var steps = $('#component-cpm .step');
	initComparador();

	function initComparador(){
		var $component = $('#component-comparador');

  		if($component.length>0){

  			isComparador = true;
  			initComparadorDesktop();
  			setTimeout(function(){ 
  				appendMobileComparador();
  			 }, 1000);

  		}
	}

	function appendMobileComparador(){
		var $component = $('#component-comparador');
		$.get( "template/comparador-mobile.html", function( data ) {
		  	$component.append( data );
		  	initComparadorMobile();
		});

	}

	function initComparadorDesktop(){
		var $content = $('.component-cp .cont-information');
	  	var $content1 = $('.component-cp .cont-information .component-cp1');
	  	var $content2 = $('.component-cp .cont-information .component-cp-info');
	  	
	  	componentActions();

		$content.hide();
		$content1.hide();
		$content2.hide();

		function componentActions(){

			$('.component-cp .cont-select').on('change', 'select', function() {
				updateMobileOptions();

		 	if(validOptions()){
			 		gethtmlInfo($('#licenciatura1 select').val() , $('#licenciatura2 select').val());
			 		
			 		$content.show();
			 		$content1.show();

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
		}
	}

	function initComparadorMobile(){
		steps = $('#component-cpm .step');
		componentActions();
		updateMobileOptions();
		initSlider('#component-cpm');

		hideAllB(steps);
		showStep(0);
		
		function componentActions(){

			$('#component-cpm').on( "click", '.actionStep', function(e) {
	  				
				var show = $(this).data('show')-1;
				var hide = $(this).parent().parent('.step').index();
				
				hideStep(hide);
				showStep(show);
			});

			$('.line-carrer, .pick-carrer').on( "click", '>li', function(e) {

				$($(this).data('selector') + ' select').val($(this).data('value')).change();

				addActiveClass($(this));

				var hide = $(this).data('step');
				var show = hide+1;

				hideStep(hide);
				showStep(show);
				// beginSlide(0);
			});

			$('.step').on( 'click' , '.beginSlide', function(){
				beginSlide(0);
			});

			$('.swiper-slide.two .select-field').on('change', 'select', function() {

				$('.component-cp .component-cp1 .final-select select').eq($(this).parent().data('key')).val($(this).val()).change();

			});
		}
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
				console.log(meta);
				var $main = $('.component-cp1 .content-cp').eq(key);

				var $mainmobile1 = $('.step-6 .one .divided-c .halff').eq(key);
				var $mainmobile2 = $('.step-6 .two .divided-c .halff').eq(key);
				var $mainmobile3 = $('.step-6 .three .divided-c .halff').eq(key);
				var $mainmobile4 = $('.step-6 .video-slide .divided-c .halff').eq(key);
				
				$main.children('.cont-img').html('<img src="'+meta.thumb+'"/>');
				$main.children('.mode-description').html(meta.descripcion);
				$main.children('.duracion').html('<p><strong>Duración</strong></p>');

				$mainmobile1.children('.title').html('<strong>'+meta.titulo+'<strong>');
				$mainmobile1.children('.t-descripcion').html(meta.descripcion);

				$mainmobile2.children('.title').html('<strong>'+meta.titulo+'<strong>');
				$mainmobile2.children('.duracion').html('<p><strong>Duración</strong></p>');

				$mainmobile4.children('.title').html('<strong>'+meta.titulo+'<strong>');
				$mainmobile4.find('.iframe-sec').html('<iframe class="video" data-tipo="general" width="754" height="424" src="'+meta.video.video+'?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" allowfullscreen=""></iframe>');
				$mainmobile4.find('.description-iframe .tittle-i').html(meta.video.titulo);
				$mainmobile4.find('.description-iframe .subtittle-i').html(meta.video.subtitulo);
				$mainmobile4.find('.description-iframe .date-i').html(meta.video.extra);

				$.each(meta.duracion, function(key1, duracion){
					$main.children('.duracion').append('<p>'+duracion.titulo+' '+ duracion.duracion +'</p>');
					$mainmobile2.children('.duracion').append('<p>'+duracion.titulo+' '+ duracion.duracion +'</p>');

				});

				var options = [];

				$.each(meta.planes, function(key3, plan){
					options.push('<option value="'+plan.id+'">'+plan.titulo+'</option>')
				});

				$main.find('.final-select').html('<select><option value="0">Elige una el plan de estudios</option>'+options.join("")+'</select>');
				$mainmobile2.find('.select-field').html('<select><option value="0">Elige una el plan de estudios</option>'+options.join("")+'</select>');		  			

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
					puntoHTML+='<span class="'+punto.thumb+'"></span>';
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

  	function showStep(index){
		var element = steps.eq(index);
		showCurrentContent(element, false);
	}

	function hideStep(index){
		var element = steps.eq(index);
		element.hide();
	}
  }

	//Inicialización menú interactivo
	function initMenuInteractivo(){
		componentsMenuInteractivo.forEach(function(selector) {
			if ($(selector.selector).length > 0){
				mMenuInteractivo(selector);
			}
		});
	}

	//Componente menú interactivo
	function mMenuInteractivo(selector){

		var $contenedores = $(selector.selector + ' *[data-type="container"]');
		var enlaces = $contenedores.find('.options-container a');
		var contenidos = $contenedores.find('.options-container');


		//html boton regresar
		var $boton_regresar = '<a href="#regresar" class="btn-return"><span class="icon i-arrow-left"></span><p>Regresar</p></a>';

		//Insertar el boton regresar a los contenedores a excepción del primero
		$contenedores.each(function(index,value){
			if (index != 0){
				$(this).prepend($boton_regresar);
			}
		});

		$(contenidos).hide(); // Esconder contenedores al inicializar

		init(); //Inicialización para mostrar el primer contenedor


		//Adición del click regresar
		$contenedores.on( "click", '>a.btn-return' , function(e) {
			e.preventDefault();
			$contenedores.removeClass('active');
			var index = $(this).parent().index() - 1;
			$contenedores.eq(index).addClass('active');

		});

		//Adición del click
		$contenedores.find('.options-container').on( "click", 'a' , function(e) {
			
			if( $(this).data('action')){
				e.preventDefault();
			}

			var destino = $(this).data('action');

			//Si tiene el atributo accion y existe el contenedor, se añade clase active y se ejecuta la función de selectOption
			if (destino && isMenu(destino)){
				addClassActive($(this));
				selectOption(destino);
			}

		});

		//Función de inicialización
		function init(){
			selectOption('initial');
		}

		//Función para conocer si un menú existe en el dom
		function isMenu(destiny){
			return ($(selector.selector + ' *[data-id="' + destiny +'"]').length > 0);
		}

		//Función de selección
		function selectOption(destiny_id, container_origin){

			$contenedor = $contenedores.removeClass('active').find('*[data-id="' + destiny_id +'"]');

			var index =$contenedor.parents('[data-type="container"]').index(); //Index del contenedor padre

			$contenedores.eq(index).addClass('active').find('.options-container').hide();

			$contenedor.show();
			newSelection(index);
		}

		//Función para una nueva selección, borrar estado de activo y ocultar menús posteriores
		function newSelection(index){
			for (var i = 0; i < $contenedores.length; i++) {
				
				//Remover estado activo en mismo nivel o mayor
				if(i >= index){
					removeClassActive($contenedores.eq(i).find('.active'));
				}

				//Ocultar contenedor en nivel mayor y remover clase activa
				if(i > index){
					removeClassActive($contenedores.eq(i))
					$contenedores.eq(i).find('.options-container').hide();
				}
				
			}
		}

		function addClassActive(element){
			element.addClass('active').siblings().removeClass('active');
		}

		function removeClassActive(element){
			element.removeClass('active');
		}

	}

	
	//Inicialización componentes de pestaña
  	function initComponentPestana() {

  		componentsPestana.forEach(function(selector) {
  			if ($(selector.selector).length > 0){
	  			mComponentPestana(selector);
	  		}
  		});

	}

	//Componentes pestaña
	function mComponentPestana(selector) {

		var $component = $(selector.selector);
		var botonesContainer = $(selector.selector + ' .buttons-zone, ' + selector.selector + ' .tab-zone');
		var tabs = $(selector.selector + ' .tab-zone >div');
		
		appendMenuElements();
		hideAllB(tabs);

		init(); //Inicializar función

		//Adición del click
		botonesContainer.on( "click", selector.active , function(e) {
			e.preventDefault();

			action($(this), true);
		});

		// Función para incializar el primer tab
		function init(){
			action($(selector.selector + ' .buttons-zone ' + selector.active ).first(), false);
		}

		// Acción del boton, @elemento : elemento disparador, @scroll si se deberá scrollear
		function action(element, scroll){
			
			if(element.parent().hasClass('buttons-zone')){
				var index = $(selector.selector + ' .buttons-zone ' + selector.active ).index(element);
				var b = $( selector.selector + ' .tab-zone >a');
			}
			else{
				var index = $(selector.selector + ' .tab-zone '+ selector.active ).index(element);
				var b = $(selector.selector + ' .buttons-zone >a');
			}

			addActiveClass(element);
			addActiveClass(b.eq(index));

			var active_element = tabs.eq(index);

			showCurrentContent(active_element, false);

			// Scroll a elemento?
			if (scroll){
				scrollToElement(element);
			}
		}


		function addActiveClass(element){
			element.addClass('active').siblings().removeClass('active');
		}

		function appendMenuElements(){

	  		var $menuElements = $(selector.selector + ' .buttons-zone' + selector.active);

	  		$menuElements.each(function(i, e) {
	  			var $element = $(e).clone();
	  			$(e).addClass('hidden-xs');
				var tab = tabs.eq(i);
				$element.insertBefore(tab).addClass('hidden-md hidden-lg hidden-sm visible-xs-block');
			});	
	  	}

	}

  	function initComponentCerrar() {

  		componentsCerrar.forEach(function(selector) {
  			if ($(selector.selector).length > 0){
	  			mComponentCerrar(selector);
	  		}
  		});

	}

	function mComponentCerrar(selector){
		
		var $component = $(selector.selector);
		var $elementToHide = $(selector.selector + selector.active );

		closeElement($component, $elementToHide);

	}

  	function initMobileComponentsSelectorPop(){

  		mobileComponentsSelectorPop.forEach(function(selector) {
  			if ($(selector.selector).length > 0){
	  			mComponentSelectorPop(selector);
	  		}
  		});	
  	}
  	
  	function mComponentSelectorPop(selector) {

	    var $component = $(selector.selector);
	    var botonesContainer = $(selector.selector + ' .buttons-zone');
	    var tabs = $(selector.selector + ' .cont-expanded .expanded-link');
	    var $elementToHide = $(selector.selector + ' .cont-expanded .expanded-link');
	    var botones = $(selector.selector + ' .buttons-zone ' + selector.active);

	    hideAllB(tabs);

	    if(selector.showFirst){
	    	showFirst();
	    }

	    botonesContainer.on( "click", selector.active, function(e) {
	    	console.log('ASDF')

	    	e.preventDefault();
		 	var index = $(selector.selector + ' .buttons-zone ' + selector.active).index(this);
		 	addActiveClass($(this));
		 	
		 	var element = tabs.eq(index);

		 	updateSliders(element); //Actualización de sliders

		 	if(!selector.showFirst){
		 		popClass(element.parent());
		 	}

		 	// Si hay propiedad scrollToButtonsArea, a showCurrentContent se le manda el tercer parametro del contenedor de botones 
		 	if(selector.scrollToButtonsArea){
		 		showCurrentContent(element, true, botonesContainer);
		 	}
		 	// Si hay propiedad scrollToActiveButton se manda tercer parametro con el elemento del boton
		 	else if(selector.scrollToActiveButton){
		 		var active_button = botonesContainer.find('.active button');

		 		showCurrentContent(element, true, active_button);
		 	} else {
		 		showCurrentContent(element);
		 	}
		});

		closeElement($component, $elementToHide, $elementToHide.parent());

		//Función para actualizar Sliders en el elemento
		function updateSliders(element){

			sliders_inside = element.find('.swiper-container');

			//Ciclo para cada slider
			for (var i = 0; i < sliders_inside.length; i++) {
				var i_slider = $(sliders_inside[i]).data('slider-id'); 
				
				// Si se tiene el indice del slider y ese indice existe en el arreglo de sliders, con diferenciacion de tiempo se ejecuta una actualización del slider
				if (i_slider && sliders[i_slider]){
					
					setTimeout(sliders[i_slider].update, 100);
					
					/*setTimeout((function(i){
						console.log('A', i)
						sliders[i].update();
					})(i_slider), 101);*/
				}
			}
		}


		function addActiveClass(element){
			botones.removeClass('active');
			element.addClass('active');
		}

		function showFirst(){

			var element = $(selector.selector + ' .buttons-zone '+selector.active).eq(0);
			addActiveClass(element);

			var element = tabs.eq(0);
			showCurrentContent(element, false);

		}

  }

	function mComponentC48() {

		var componentC48 = $('.component-c48');
		var botonesContainer = $('.component-c48 .buttons-zone');
		var tabs = $('.component-c48 .cont-expanded >div');
		var botones = $('.component-c48 .buttons-zone a');

		hideAllB(tabs);

		botonesContainer.on( "click", ">div", function(e) {
			e.preventDefault();
		 	var index = $('.component-c48 .buttons-zone >div').index(this);
		 	addActiveClass($(this));

		 	var element = tabs.eq(index);
		 	showCurrentContent(element);
		});

		function addActiveClass(element){
			botones.removeClass('active');
			element.children('a').addClass('active');
		}

  }


  function scrollMenu(){
  	var initialPosition;

  	 if($('.component-m2').length>0){
  	 	var initialPosition = $('.component-m2').offset();
  	 }

	$(window).scroll(function(){
        if($('.component-m2').length>0){
        	$(this).scrollTop()>initialPosition.top ? ($('.component-m2').addClass('fixed-element')) : ($('.component-m2').removeClass('fixed-element'));
        }  
    });
  }

  function mComponentM2(){

  	var $componentM2 = $('.component-m2');
  	
  	if($componentM2.length>0){
  		appendMenuElements();
  		openElement();
  	}

  	function appendMenuElements(){

  		var $menuElements = $('.component-m2 ul li');

  		$menuElements.each(function(i, e) {
  			var $element = $(e);
  			var $section = $($element.data("container"));
  			var insert = '<a href="'+$element.data("container")+'">'+$element.data("title")+'</a>';
			
			$element.append(insert);
			$section.addClass('fixed-menu-section');
			$($section.parent()).prepend('<div class="fixed-menu-a header-title hidden-sm visible-xs-block hidden-md" data-container="'+$element.data("container")+'">'+insert+'</div>');
		});	
  	}

  	function openElement(){

  		$(".fixed-menu-a").on("click","a",function(e) {
  			e.preventDefault(); //Evitamos que el anchor haga el brinco al div

			var $element = $($(this).parent().data('container'));
			$element.toggleClass('active');
			addActiveClass($(this).parent());

			//Si tiene la clase active hacemos scroll;
			if($(this).parent().hasClass('active')){
				scrollToElement($(this));
			}

			setHash($(this).attr('href')); //Seteamos el anchor en la url
		});

  	}

  	function setHash(link){
  		var hashlink = link.split('#');

  		//De tener habilitado history en nuestro navegador y el enlace contener un #, se declará un nuevo estado en el history con la url para evitar un brinco al contenedor
  		if (history && history.pushState && hashlink.length > 1)
  		{
  			history.pushState({}, '', link);
  		}
  	}

  	function addActiveClass(element){
		element.toggleClass('active');
	}

  }

 	//Función para devolver el calculo de dimensiones para los videos
	function calcularDimensionesVideo(ancho, tipo){

		var dimensionesBase  = {
				header: {
					ancho: 1280,
					alto: 440
				},

				general: {
					ancho: 548,
					alto: 245					
				}
			},

			tipoSeleccionado = (dimensionesBase[tipo]) ? dimensionesBase[tipo] : dimensionesBase.general,

			dimensiones = {
				ancho: ancho,
				alto: Math.floor((ancho*tipoSeleccionado.alto) / tipoSeleccionado.ancho)
			};

		return dimensiones;

	}


	//Funciones para los iframe con clase video
	function iframeVideos(){
		if ($('iframe.video').length > 0){
			$('iframe.video').each(function(){

				var clase = ($(this).data('tipo')) ? $(this).data('tipo') : 'general',
					dimensiones = calcularDimensionesVideo($(this).width(), clase);

				if ($.isNumeric(dimensiones.alto)){
					$(this).height(dimensiones.alto);
				}
			});
		}
	} 

	//Funciones para ejecutar en redimensión
	function resize(){
		$(window).resize(function(){
			iframeVideos();
		});
	}

	//Función para preguntas freceuntes

	function initFAQ(){
		$('.component-pf .cont-inf ul> li > a').on('click',function(e){
	        e.preventDefault();
	        var activo = $(this).parent().hasClass('active');
	        
	        if (activo){
	            $(this).parent().removeClass('active');
	        } else{
	            $(this).parent().addClass('active');
	        }

	    });
	}


  return {
  	fComponentMenu : mComponentMenu,
    finitComponentPestana : initComponentPestana,
    fComponentC29 : mComponentC29,
    fMobileMenu : menuMobile,
    fscrollMenu : scrollMenu,
    fcomponentM2 : mComponentM2,
    finitMobileComponentsSelectorPop : initMobileComponentsSelectorPop,
    finitComponentCerrar : initComponentCerrar,
    finitComparadorGeneral : initComparadorGeneral,
    finitSliderGeneral : initSliderGeneral,
    fComponentSlideDown : mComponentSlideDown,
    finitFormGeneral : initFormGeneral,
    finitLoadMore : initLoadMore,
    finitCalendario : initCalendario,
    finitVideos : iframeVideos,
    finitResize : resize,
    finitSelectDependants : initSelectDependants,
    finitMenuM1 : initMenuM1,
    finitFAQ: initFAQ,
    finitMenuInteractivo : initMenuInteractivo,
    fexpandForm : initExpandForm
  };
  
} )( window );


$(function() {

	function init(){
		funcionamientos.fComponentMenu();
		funcionamientos.finitComponentPestana(); //pestañas
		funcionamientos.fComponentC29(); //selects
		funcionamientos.fMobileMenu();
		funcionamientos.fscrollMenu();
		funcionamientos.fcomponentM2();
		funcionamientos.finitMobileComponentsSelectorPop();
		funcionamientos.finitComponentCerrar();
		funcionamientos.finitComparadorGeneral();
		funcionamientos.finitSliderGeneral();
		funcionamientos.fComponentSlideDown();
		funcionamientos.finitFormGeneral();
		funcionamientos.finitLoadMore();
		funcionamientos.finitCalendario();
		funcionamientos.finitVideos();
		funcionamientos.finitResize();
		funcionamientos.finitSelectDependants();
		funcionamientos.finitMenuM1();
		funcionamientos.finitFAQ();
		funcionamientos.finitMenuInteractivo();
		funcionamientos.fexpandForm();

	}

	init();

});