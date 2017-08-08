  $(document).ready(function() {      
    //funcion para iniciar campos de formularios 
    inicializarCampos = setInterval(function () 
    {
            if ($('.hs-form').length > 0) {            
              // Form is rendered, stop looking
              clearInterval(inicializarCampos);    
              
              //Asignar variable de sesion al campo oculto de trackid (Omar Rojas Rodriguez Febrero 2017)
            $('input[name="trackid"]').val(sessvars.trackid).change();

              //Agregado por Camilo: Noviembre 11
            //Cambios en opciones de seleccion segun IDs de campus de SalesForce
            $("select[name=campus_interes] option").each(function(index,element){
                if($(this).text()=='001o000000etAAaAAM'){$(this).text('Aguascalientes')}
                if($(this).text()=='001o000000etBQkAAM'){$(this).text('Chapultepec')}
                if($(this).text()=='001o000000etAAxAAM'){$(this).text('Chihuahua')}
                if($(this).text()=='001o000000etAAyAAM'){$(this).text('Coyoacan')}
                if($(this).text()=='001o000000etAAVAA2'){$(this).text('Cuernavaca')}
                if($(this).text()=='001o000000etAAtAAM'){$(this).text('Cumbres')}
                if($(this).text()=='001o000000etAAnAAM'){$(this).text('Guadalajara Norte')}
                if($(this).text()=='001o000000etAAYAA2'){$(this).text('Guadalajara Sur')}
                if($(this).text()=='001o000000etAAbAAM'){$(this).text('Hermosillo')}
                if($(this).text()=='001o000000etAAhAAM'){$(this).text('Hispano')}
                if($(this).text()=='001o000000etAAkAAM'){$(this).text('Lago De Guadalupe')}
                if($(this).text()=='001o000000etAAcAAM'){$(this).text('Lomas Verdes')};
                if($(this).text()=='001o000000etAArAAM'){$(this).text('Merida')};
                if($(this).text()=='001o000000etAAXAA2'){$(this).text('Mexicali')};
                if($(this).text()=='001o000000etAAoAAM'){$(this).text('Monterrey')};
                if($(this).text()=='001o000000etAAqAAM'){$(this).text('Nogales')};
                if($(this).text()=='001o000000etAAUAA2'){$(this).text('Puebla')};
                if($(this).text()=='001o000000etAAZAA2'){$(this).text('Queretaro')};
                if($(this).text()=='001o000000etAAuAAM'){$(this).text('Reynosa')};
                if($(this).text()=='001o000000etAAiAAM'){$(this).text('Roma')};
                if($(this).text()=='001o000000etAAgAAM'){$(this).text('Saltillo')};
                if($(this).text()=='001o000000etAAWAA2'){$(this).text('San Angel')};
                if($(this).text()=='001o000000etAATAA2'){$(this).text('San Luis Potosi')};
                if($(this).text()=='001o000000etAASAA2'){$(this).text('San Rafael')};
                if($(this).text()=='001o000000etAApAAM'){$(this).text('Santa Fe')};
                if($(this).text()=='001o000000etAAwAAM'){$(this).text('Tampico')};
                if($(this).text()=='001o000000etAAdAAM'){$(this).text('Texcoco')};
                if($(this).text()=='001o000000etAAjAAM'){$(this).text('Tlalpan')};
                if($(this).text()=='001o000000etAAeAAM'){$(this).text('Toluca')};
                if($(this).text()=='001o000000etAAfAAM'){$(this).text('Torreon')};
                if($(this).text()=='001o000000etAAmAAM'){$(this).text('Tuxtla')};
                if($(this).text()=='001o000000etAAzAAM'){$(this).text('Veracruz')};
                if($(this).text()=='001o000000etAAvAAM'){$(this).text('Victoria')};
                if($(this).text()=='001o000000etAAlAAM'){$(this).text('Villahermosa')};
                if($(this).text()=='001o000000etAAsAAM'){$(this).text('Zapopan')};
            })


              //MODIFICACION DE ATRIBUTOS  (Omar Basurto Agosto 2017)  
              //---------------------------------------------------------------------------
              $('input[name=phone]').attr('maxLength','10');          
              $('#nivel_de_interes-503b06c6-4374-4adf-af28-954acff43536').empty();
              $('#nivel_de_interes-503b06c6-4374-4adf-af28-954acff43536').append('<option value="0" disabled=""  selected="selected" data-reactid=".hbspt-forms-0.0:$2.1:$nivel_de_interes.$nivel_de_interes.0.0">- Por favor, elige -</option>');
              $('input[type=submit]').attr('class','btn btn-primary btn-block');        
              $('select[name=campus_interes]').change(function(){
                validaSeleccion(this.value);          
              });
              //---------------------------------------------------------------------------
            }

             $( 'input[name=firstname], input[name=lastname], input[name=apellido_materno__c]' ).keypress(function(event) 
            {                                                                                                 
                elinput= this;
                
                var validoT= false; 
                opc = true;
                //espacio = "";
                tecla = (event.which) ? event.which : event.keyCode;
                validoT = calc_numVecestexto(tecla, elinput);
                //validoT = true;
               
               
                if (tecla == 8 ){
                    return true;
                }
                else if (tecla == 13 && elinput.value.length > 0){
                    espacio = true;
                    return;
                }                
                else if(validoT ==true){    
                    if(tecla == 32 && espacio== true){
                        espacio = false;
                        return true;
                    }else if (espacio= false && tecla ==32 ){
                        return false;
                    }       
                    if((tecla!=32) && !((tecla > 8 && tecla < 33) || (tecla < 65 && tecla > 31) || (tecla > 90 && tecla < 97) || tecla > 122)){
                        espacio= true;
                    }   
                    if ((tecla > 8 && tecla < 33) || (tecla < 65 && tecla > 31) || (tecla > 90 && tecla < 97) || tecla > 122 ){
                        return  false;
                    }   
                
                    return true;
                }                
                else{ 
                    return false;
                }
                
            });
            
            //LA PRIMERA LETRA EN MAYUSCULA
            $( 'input[name=firstname], input[name=lastname], input[name=apellido_materno__c]' ).keyup(function(){                
                caps = this.value;
                objts = this;
                capitalized = caps.charAt(0).toUpperCase() + caps.substring(1);
                $(objts).val(capitalized);                
            });
            
            // ACEPTA SOLO NUMEROS        
            $('input[name=phone]').keypress(function(event) {                
                
                inputValue = (event.which) ? event.which : event.keyCode;
                if ( inputValue == 32  ){
                    return false;
                }
                if ( inputValue == 8 ) {
                    return true;
                }
                if(this.value.length == 0  && inputValue == 48 ){
                    return false;
                }
                if (inputValue > 31 && (inputValue < 48 || inputValue > 57)){
                    return false;
                }
                
            });//Termina validacion de solo Numeros
            
            
            // Aqui estan las validaciones pero ligadas al metodo blur
            //REVISMOS LA LONGITUD DE LA CADENA Y REVISAMOS PALABRAS BASURA
            $('input[name=firstname]').blur(function (event) 
            {
              //console.log('Paso por el blur 2');                                                                          
              var $nombre = $('input[name=firstname]').val();              
                                         
              var longitud = $nombre.length;
            

                            if ((longitud<3)||(longitud>30)) 
                            {
                                            bootbox.alert('Error: el nombre debe tener de mas de 2 letras y menos de 30');                                                                                    
                                            return false;
                            }                            
                                                                                                       
            });

      // apellido paterno                            
      $('input[name=lastname]').blur(function (event) 
            {
              var $apellidoPaterno = $('input[name=lastname]').val();

              var longitud = $apellidoPaterno.length;
            

                            if ((longitud<3)||(longitud>30)) 
                            {
                                            bootbox.alert('Error: el apellido paterno debe tener de mas de 2 letras y menos de 30');                                            
                                                                                                                                                                                                                                    
                                            return false;
                            }
           
            });                      
    });                                                          
});//cerramos funcion de document.ready
  


/* ************************
        Funciones por separado
    ************************* */
    
    //FUNCION PARA NO REPETIR TECLA 3 VECES
    function calc_numVecestexto(codigo, obj){
        if( obj.value.length==0){ keyAnt=codigo;vecesText=0;
            return true;
        }else if(keyAnt == codigo){
            if(vecesText>=1){ 
                return false;               
            }else if(vecesText!=1){ keyAnt=codigo; vecesText= vecesText+1;
                return true;
            }
        }else{
            if (keyAnt!=codigo){ 
                keyAnt=codigo; vecesText=0;
                return true;
            }
        }        
    }


    var getUrlParameter = function getUrlParameter(sParam) {
        var sPageURL = decodeURIComponent(window.location.search.substring(1)),
            sURLVariables = sPageURL.split('&'),
            sParameterName,
            i;
    
        for (i = 0; i < sURLVariables.length; i++) {
            sParameterName = sURLVariables[i].split('=');
    
            if (sParameterName[0] === sParam) {
                return sParameterName[1] === undefined ? true : sParameterName[1];
            }
        }
    };

    // asignar trackid de URL a la variable de sesion sessvars.trackid
    if(getUrlParameter('trackid')!=undefined){
        sessvars.trackid=getUrlParameter('trackid');
    }

  
  //METODO PARA VALIDAR LA SELECCION DE CAMPUS
  //---------------------------------------------------------------------------
  function validaSeleccion(idValue){      
  
  $('#nivel_de_interes-503b06c6-4374-4adf-af28-954acff43536').empty();
  $('#nivel_de_interes-503b06c6-4374-4adf-af28-954acff43536').append('<option value="0" disabled=""  selected="selected" data-reactid=".hbspt-forms-0.0:$2.1:$nivel_de_interes.$nivel_de_interes.0.0">- Por favor, elige -</option>');


  //Aguascalientes , Chapultepec, Chihuahua , Coyoacan ,Cuernavaca,Cumbres,Guadalajara Norte,Guadalajara Sur,Hermosillo
  //,Hispano,Lago De Guadalupe,Lomas Verdes,Merida,Mexicali,Monterrey,Nogales,Puebla,Queretaro,Reynosa,Roma,Saltillo
  //,San Angel,San Luis Potosi,San Rafael,Santa Fe,Tampico,Texcoco,Tlalpan,Toluca,Torreon,Tuxtla,Veracruz,Victoria
  //,Villahermosa,Zapopan

    if(idValue == "001o000000etAAaAAM" || idValue == "001o000000etBQkAAM" || idValue == "001o000000etAAxAAM" || idValue == "001o000000etAAyAAM" || idValue == "001o000000etAAVAA2" || idValue == "001o000000etAAtAAM" || idValue == "001o000000etAAYAA2" || idValue == "001o000000etAAbAAM" || idValue == "001o000000etAAhAAM" || idValue == "001o000000etAAcAAM" || idValue == "001o000000etAArAAM" || idValue == "001o000000etAAXAA2" || idValue == "001o000000etAAoAAM" || idValue == "001o000000etAAqAAM" || idValue == "001o000000etAAUAA2" || idValue == "001o000000etAAZAA2" || idValue == "001o000000etAAgAAM" || idValue == "001o000000etAATAA2" || idValue == "001o000000etAAdAAM" || idValue == "001o000000etAAjAAM" || idValue == "001o000000etAAfAAM" || idValue == "001o000000etAAmAAM" || idValue == "001o000000etAAzAAM" || idValue == "001o000000etAAsAAM" ){                

      var obj = {        
                  "Preparatoria": "Preparatoria",
                  "Licenciatura": "Licenciatura",
                  "Licenciatura Ejecutiva": "Licenciatura Ejecutiva",
                  "Posgrado": "Posgrado",
                  "Online LX": "Licenciatura Ejecutiva Online",
                  "Online Posgrado" : "Posgrado Online"
                };
      $.each( obj, function( key, value ) {

        $('#nivel_de_interes-503b06c6-4374-4adf-af28-954acff43536').append('<option value="' + key + '"  data-reactid=".hbspt-forms-0.0:$2.1:$nivel_de_interes.$nivel_de_interes.0.1:$ ' + key + '">' + value + '</option>'); 
        
      });
    
    //GUADALAJARA NORTE
    }else if(idValue == "001o000000etAAnAAM"){  

      var obj = {        
                  "Preparatoria": "Preparatoria",                
                  "Online LX": "Licenciatura Ejecutiva Online",
                  "Online Posgrado" : "Posgrado Online"
                };
      $.each( obj, function( key, value ) {

        $('#nivel_de_interes-503b06c6-4374-4adf-af28-954acff43536').append('<option value="' + key + '"  data-reactid=".hbspt-forms-0.0:$2.1:$nivel_de_interes.$nivel_de_interes.0.1:$ ' + key + '">' + value + '</option>'); 
        
      });

    
    }else if(idValue == "001o000000etAAkAAM"){

      var obj = {        
                  "Preparatoria": "Preparatoria",
                  "Licenciatura": "Licenciatura",
                  "Licenciatura Ejecutiva": "Licenciatura Ejecutiva",                  
                  "Online LX": "Licenciatura Ejecutiva Online",
                  "Online Posgrado" : "Posgrado Online"
                };
      $.each( obj, function( key, value ) {

        $('#nivel_de_interes-503b06c6-4374-4adf-af28-954acff43536').append('<option value="' + key + '"  data-reactid=".hbspt-forms-0.0:$2.1:$nivel_de_interes.$nivel_de_interes.0.1:$ ' + key + '">' + value + '</option>'); 
        
      });

    }else if(idValue == "001o000000etAAuAAM"){

      var obj = {        
                  "Preparatoria": "Preparatoria",
                  "Licenciatura": "Licenciatura",                  
                  "Posgrado": "Posgrado",
                  "Online LX": "Licenciatura Ejecutiva Online",
                  "Online Posgrado" : "Posgrado Online"
                };
      $.each( obj, function( key, value ) {

        $('#nivel_de_interes-503b06c6-4374-4adf-af28-954acff43536').append('<option value="' + key + '"  data-reactid=".hbspt-forms-0.0:$2.1:$nivel_de_interes.$nivel_de_interes.0.1:$ ' + key + '">' + value + '</option>'); 
        
      });

    }else if(idValue == "001o000000etAAiAAM"){

      var obj = {        
                  "Preparatoria": "Preparatoria",                  
                  "Licenciatura Ejecutiva": "Licenciatura Ejecutiva",                  
                  "Online LX": "Licenciatura Ejecutiva Online",
                  "Online Posgrado" : "Posgrado Online"
                };
      $.each( obj, function( key, value ) {

        $('#nivel_de_interes-503b06c6-4374-4adf-af28-954acff43536').append('<option value="' + key + '"  data-reactid=".hbspt-forms-0.0:$2.1:$nivel_de_interes.$nivel_de_interes.0.1:$ ' + key + '">' + value + '</option>'); 
        
      });

    }else if(idValue == "001o000000etAAWAA2" || idValue == "001o000000etAASAA2"  ){

      var obj = {        
                  "Licenciatura": "Licenciatura",
                  "Licenciatura Ejecutiva": "Licenciatura Ejecutiva",
                  "Posgrado": "Posgrado",
                  "Online LX": "Licenciatura Ejecutiva Online",
                  "Online Posgrado" : "Posgrado Online"
                };
      $.each( obj, function( key, value ) {

        $('#nivel_de_interes-503b06c6-4374-4adf-af28-954acff43536').append('<option value="' + key + '"  data-reactid=".hbspt-forms-0.0:$2.1:$nivel_de_interes.$nivel_de_interes.0.1:$ ' + key + '">' + value + '</option>'); 
        
      });

    }else if(idValue == "001o000000etAApAAM"){

      var obj = {              
                  "Licenciatura Ejecutiva": "Licenciatura Ejecutiva",
                  "Posgrado": "Posgrado",
                  "Online LX": "Licenciatura Ejecutiva Online",
                  "Online Posgrado" : "Posgrado Online"
                };
      $.each( obj, function( key, value ) {

        $('#nivel_de_interes-503b06c6-4374-4adf-af28-954acff43536').append('<option value="' + key + '"  data-reactid=".hbspt-forms-0.0:$2.1:$nivel_de_interes.$nivel_de_interes.0.1:$ ' + key + '">' + value + '</option>'); 
        
      });
      
  }else if(idValue == "001o000000etAAwAAM" || idValue == "001o000000etAAvAAM"){

      var obj = {        
                  "Preparatoria": "Preparatoria",
                  "Licenciatura": "Licenciatura",                
                  "Posgrado": "Posgrado",
                  "Online LX": "Licenciatura Ejecutiva Online",
                  "Online Posgrado" : "Posgrado Online"
                };
      $.each( obj, function( key, value ) {

        $('#nivel_de_interes-503b06c6-4374-4adf-af28-954acff43536').append('<option value="' + key + '"  data-reactid=".hbspt-forms-0.0:$2.1:$nivel_de_interes.$nivel_de_interes.0.1:$ ' + key + '">' + value + '</option>'); 
        
      });
    
  }else {

      var obj = {        
                  "Preparatoria": "Preparatoria",
                  "Licenciatura": "Licenciatura",
                  "Licenciatura Ejecutiva": "Licenciatura Ejecutiva",
                  "Posgrado": "Posgrado",
                  "Online LX": "Licenciatura Ejecutiva Online",
                  "Online Posgrado" : "Posgrado Online",
                  "Tecnico Superior" : "Técnico Superior"
                };
      $.each( obj, function( key, value ) {

        $('#nivel_de_interes-503b06c6-4374-4adf-af28-954acff43536').append('<option value="' + key + '"  data-reactid=".hbspt-forms-0.0:$2.1:$nivel_de_interes.$nivel_de_interes.0.1:$ ' + key + '">' + value + '</option>'); 
        
      });
  }                                      
}