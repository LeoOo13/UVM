window.onload = function(e){        
                    
            $('input[name=lastname], input[name=apellido_materno__c]').attr('disabled','disabled');
            $('input[name=firstname], input[name=lastname], input[name=apellido_materno__c]' ).attr('maxLength','30');                    
                            
            $('input[name=phone]').attr('maxLength','10');                                

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
                

            // ACEPTA SOLO LETRAS
            $( 'input[name=firstname],input[name=segundo_nombre], input[name=lastname], input[name=apellido_materno__c]' ).keypress(function(event) 
            {                                                                                                 
                elinput= this;
                
                var validoT= false; 
                opc = true;                
                tecla = (event.which) ? event.which : event.keyCode;

                validoT = calc_numVecestexto(tecla, elinput);                
                              
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
            $( 'input[name=firstname],input[name=segundo_nombre], input[name=lastname], input[name=apellido_materno__c]' ).keyup(function(){                
                caps = this.value;
                objts = this;
                capitalized = caps.charAt(0).toUpperCase() + caps.substring(1);
                $(objts).val(capitalized);                
            });
            //TERMINA LETRA MAYUSCULA
            
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
                
            });
            //Termina validacion de solo Numeros
            
                        
            //QUITAMOS LA OPCION DE PEGAR EN LOS CAMPOS DE TEXTO
            $(function() {
                $('input[name=firstname],input[name=segundo_nombre],input[name=lastname],input[name=apellido_materno__c], input[name=phone]').bind("cut copy paste",function(e) {
                e.preventDefault();
                });
            });
        
                                                                                    
    /* ************************
        Funciones por separado
    ************************* */
    $('input[name=firstname]').focusout(function (event) {              
              //console.log('Paso por el blur 2');                                                                          
              var $nombre = $('input[name=firstname]').val();              
                                         
              var longitud = $nombre.length;
            
                if ((longitud<3)||(longitud>30)) 
                {                                
                  alert('Error: el nombre debe tener de mas de 2 letras y menos de 30');
                    
                  event.stopImmediatePropagation();
                  event.preventDefault(function(){this.focus()});

                  return false;
                     
                }else
                {

                    $('input[name=lastname], input[name=apellido_materno__c]').prop('disabled', false);
                }



                
            });

        
    $('input[name=lastname]').focusout(function(event) {                      
              //console.log('Paso por el blur 2');                                                                          
              var $nombre = $('input[name=lastname]').val();              
                                         
              var longitud = $nombre.length;
            

                if ((longitud<3)||(longitud>30))                           
                {
                   
                    alert('Error: el apellido Paterno debe tener de mas de 2 letras y menos de 30');    
                    event.stopImmediatePropagation();
                    event.preventDefault(function(){this.focus()});

                    return true;                      
                }

            });
    

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

    //FUNCON PARA PALABRAS BASURA
    var EsPalabraProhibida = function (palabra) {
        var myArray = [ 'ASDASD','ASDASDASD','AAA','AAD','ABC','ADS','AEA','AHH','APELLIDO','ASD','ASF','ASJ','BBB','BFJ','BJK','BVH','CCC','CDS','CHC','CJU','CSD','CVB','CXZ','DADSA','DAS','DDD','DEE','DEMO','DFG','DJF','DJJ','DND','DRH','DSE','DSF','DSS','DSX','DVC','DXX','DYY','EEE','EEH','EWF','FFF','FGG','FGH','FGT','FHG','FJG','FJH','FKJ','FNH','FRG','GFL','GGG','GHB','GHH','GHK','GJS','GVK','HAH','HCH','HDJ','HGD','HGF','HHF','HHH','HJK','HJN','HOLA','IBF','IGH','IHI','III','IJI','IOJ','IPH','JAJ','JAJA','JHG','JHJ','JHN','JHR','JHU','JJJ','JJN','JKL','JLK','JOK','KBE','KHV','KJK','KJN','KJS','KKJ','KKK','KLK','KNK','LKH','LKJ','LLJ','LLL','LOL','LUU','MKK','MMM','MPM','NALGA','NEL','NJP','NKJ','NNN','NOMB','NUL','OIF','OIO','OOO','OUO','PAA','PERSONAL','PITO','PPP','QQQ','QWE','RGT','RRR','RTR','SDA','SDF','SDS','SFJ','SSS','SWS','TRIAL','TRR','TRT','TTT','UUU','VEE','VVV','WFE','WWW','XCV','XDE','XXX','XZZ','YRT','YYY','ZXC','ZYE','ZZZ','NONE','ASAS','FDS','JNK','JLL','RRB','PERRA','PUTA','CULO','CULIADA','MARICA','MAMAR','PUTO','PENDEJO','LDK','XOXO','RAMERA','HFF','VERGA','MI VERGA','MARICON','SUPERM','BATMAN','BATMAN', 'ZORRA', 'ZORRA', 'FUCKYOU', 'FUCKYOU','QWERTY','QWERTYU','UYTREWQ','POIUYTR','QWERT','QAZWSX','XSWZAQ','ASDFFGH','ï¿½LKJH','MNBVCXZ','ZXCVBNM','ZXCV','BNM','ï¿½PLOKM','IJNMKO','SDFGHJKLï¿½','EDCRFV','UHBYGV','TGBUHB','VFRBHU','NJICDEBUH','EDCIJN','EDCIJN','YTRUIE','AQSW','PLOK','RWEIOP','POQWIEHBF','POIUYT' , 'PRUEBA', 'ALGO', 'JOTO' ];
        
        if ($.inArray(palabra, myArray) !== -1) {
            bootbox.alert('Palabra Prohibida');
            return true;
        }else{
            return false;    
        }        
    }

    inicializarCampos = setInterval(function (){
        clearInterval(inicializarCampos); 
        $('input[name="trackid"]').val(sessvars.trackid).change();
        console.log( $('input[name="trackid"]').val() );
    }, 100);//termina setInterval

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
        
}
//cerramos window.onload




//METODO PARA VALIDAR LA SELECCION DE CAMPUS
  //---------------------------------------------------------------------------
  function validaSeleccionCampusInteres(idValue){      
  
      $('#campus_interes-1e3617d5-c2bd-4e61-ba76-13e24bfd61ac').empty();  

      //Cd. JuÃ¡rez, Ensenada, Guaymas, LeÃ³n, Matamoros, Nuevo Laredo, Santa Ana, Tijuana

        if(idValue == "Cd. Juarez" ){    
            $('#campus_interes-1e3617d5-c2bd-4e61-ba76-13e24bfd61ac').append('<option value="001o000000etAAxAAM"  data-reactid=".hbspt-forms-0.0:$3.1:$campus_interes.$campus_interes.0.1:$001o000000etAAxAAM">Chihuahua</option>'); 
            //Chihuahua
        }

        if(idValue == "Tijuana" || idValue == "Ensenada" ){
            $('#campus_interes-1e3617d5-c2bd-4e61-ba76-13e24bfd61ac').append('<option value="001o000000etAAXAA2"  data-reactid=".hbspt-forms-0.0:$3.1:$campus_interes.$campus_interes.0.1:$001o000000etAAXAA2">Mexicali</option>'); 
            //Mexicali
        }

        if(idValue == "Leon"  ){
            $('#campus_interes-1e3617d5-c2bd-4e61-ba76-13e24bfd61ac').append('<option value="001o000000etAAZAA2"  data-reactid=".hbspt-forms-0.0:$3.1:$campus_interes.$campus_interes.0.1:$001o000000etAAZAA2">Queretaro</option>'); 
            //QuerÃ©taro 
        }

        if(idValue == "Santa Ana" || idValue == 'Sonora' || idValue == "Guaymas" ){
            $('#campus_interes-1e3617d5-c2bd-4e61-ba76-13e24bfd61ac').append('<option value="001o000000etAAbAAM"  data-reactid=".hbspt-forms-0.0:$3.1:$campus_interes.$campus_interes.0.1:$001o000000etAAbAAM">Hermosillo</option>'); 
            //Hermosillo
        }
        
        if(idValue == "Matamoros" || idValue == "Nuevo Laredo" ){
            $('#campus_interes-1e3617d5-c2bd-4e61-ba76-13e24bfd61ac').append('<option value="001o000000etAAuAAM"  data-reactid=".hbspt-forms-0.0:$3.1:$campus_interes.$campus_interes.0.1:$001o000000etAAuAAM">Reynosa</option>'); 
            //Reynosa
        }
    }                                      


    function validaSeleccion(idValue){          
    
    //Aguascalientes , Chapultepec, Chihuahua , Coyoacan ,Cuernavaca,Cumbres,Guadalajara Norte,Guadalajara Sur,Hermosillo
  //,Hispano,Lago De Guadalupe,Lomas Verdes,Merida,Mexicali,Monterrey,Nogales,Puebla,Queretaro,Reynosa,Roma,Saltillo
  //,San Angel,San Luis Potosi,San Rafael,Santa Fe,Tampico,Texcoco,Tlalpan,Toluca,Torreon,Tuxtla,Veracruz,Victoria
  //,Villahermosa,Zapopan

    if(idValue == "001o000000etAAaAAM" || idValue == "001o000000etBQkAAM" || idValue == "001o000000etAAxAAM" || idValue == "001o000000etAAyAAM" || idValue == "001o000000etAAVAA2" || idValue == "001o000000etAAtAAM" || idValue == "001o000000etAAYAA2" || idValue == "001o000000etAAbAAM" || idValue == "001o000000etAAhAAM" || idValue == "001o000000etAAcAAM" || idValue == "001o000000etAArAAM" || idValue == "001o000000etAAXAA2" || idValue == "001o000000etAAoAAM" || idValue == "001o000000etAAqAAM" || idValue == "001o000000etAAUAA2" || idValue == "001o000000etAAZAA2" || idValue == "001o000000etAAgAAM" || idValue == "001o000000etAATAA2" || idValue == "001o000000etAAdAAM" || idValue == "001o000000etAAjAAM" || idValue == "001o000000etAAfAAM" || idValue == "001o000000etAAmAAM" || idValue == "001o000000etAAzAAM" || idValue == "001o000000etAAsAAM" ){
      
      $('#nivel_de_interes-503b06c6-4374-4adf-af28-954acff43536').empty();

      $('#nivel_de_interes-503b06c6-4374-4adf-af28-954acff43536').append('<option value="0" disabled=""  selected="selected" data-reactid=".hbspt-forms-0.0:$2.1:$nivel_de_interes.$nivel_de_interes.0.0">- Por favor, elige -</option>');
      $('#nivel_de_interes-503b06c6-4374-4adf-af28-954acff43536').append('<option value="Preparatoria" data-reactid=".hbspt-forms-0.0:$2.1:$nivel_de_interes.$nivel_de_interes.0.1:$Preparatoria">Preparatoria</option>');
      $('#nivel_de_interes-503b06c6-4374-4adf-af28-954acff43536').append('<option value="Licenciatura" data-reactid=".hbspt-forms-0.0:$2.1:$nivel_de_interes.$nivel_de_interes.0.1:$Licenciatura" >Licenciatura</option>');
      $('#nivel_de_interes-503b06c6-4374-4adf-af28-954acff43536').append('<option value="Licenciatura Ejecutiva" data-reactid=".hbspt-forms-0.0:$2.1:$nivel_de_interes.$nivel_de_interes.0.1:$Licenciatura Ejecutiva" >Licenciatura Ejecutiva</option>');
      $('#nivel_de_interes-503b06c6-4374-4adf-af28-954acff43536').append('<option value="Online LX" data-reactid=".hbspt-forms-0.0:$2.1:$nivel_de_interes.$nivel_de_interes.0.1:$Online LX" >Licenciatura Ejecutiva Online</option>');
      $('#nivel_de_interes-503b06c6-4374-4adf-af28-954acff43536').append('<option value="Posgrado" data-reactid=".hbspt-forms-0.0:$2.1:$nivel_de_interes.$nivel_de_interes.0.1:$Posgrado" >Posgrado</option>');
      $('#nivel_de_interes-503b06c6-4374-4adf-af28-954acff43536').append('<option value="Online Posgrado" data-reactid=".hbspt-forms-0.0:$2.1:$nivel_de_interes.$nivel_de_interes.0.1:$Online Posgrado" >Posgrado Online</option>');
        
    //GUADALAJARA NORTE
    }else if(idValue == "001o000000etAAnAAM"){  

      $('#nivel_de_interes-503b06c6-4374-4adf-af28-954acff43536').empty();

      $('#nivel_de_interes-503b06c6-4374-4adf-af28-954acff43536').append('<option value="0" disabled=""  selected="selected" data-reactid=".hbspt-forms-0.0:$2.1:$nivel_de_interes.$nivel_de_interes.0.0">- Por favor, elige -</option>');
      $('#nivel_de_interes-503b06c6-4374-4adf-af28-954acff43536').append('<option value="Preparatoria" data-reactid=".hbspt-forms-0.0:$2.1:$nivel_de_interes.$nivel_de_interes.0.1:$Preparatoria">Preparatoria</option>');
        
    }else if(idValue == "001o000000etAAkAAM"){

      $('#nivel_de_interes-503b06c6-4374-4adf-af28-954acff43536').empty();
        
      $('#nivel_de_interes-503b06c6-4374-4adf-af28-954acff43536').append('<option value="0" disabled=""  selected="selected" data-reactid=".hbspt-forms-0.0:$2.1:$nivel_de_interes.$nivel_de_interes.0.0">- Por favor, elige -</option>');
      $('#nivel_de_interes-503b06c6-4374-4adf-af28-954acff43536').append('<option value="Preparatoria" data-reactid=".hbspt-forms-0.0:$2.1:$nivel_de_interes.$nivel_de_interes.0.1:$Preparatoria">Preparatoria</option>');
      $('#nivel_de_interes-503b06c6-4374-4adf-af28-954acff43536').append('<option value="Licenciatura" data-reactid=".hbspt-forms-0.0:$2.1:$nivel_de_interes.$nivel_de_interes.0.1:$Licenciatura" >Licenciatura</option>');
      $('#nivel_de_interes-503b06c6-4374-4adf-af28-954acff43536').append('<option value="Licenciatura Ejecutiva" data-reactid=".hbspt-forms-0.0:$2.1:$nivel_de_interes.$nivel_de_interes.0.1:$Licenciatura Ejecutiva" >Licenciatura Ejecutiva</option>');
      $('#nivel_de_interes-503b06c6-4374-4adf-af28-954acff43536').append('<option value="Online LX" data-reactid=".hbspt-forms-0.0:$2.1:$nivel_de_interes.$nivel_de_interes.0.1:$Online LX" >Licenciatura Ejecutiva Online</option>');      
      $('#nivel_de_interes-503b06c6-4374-4adf-af28-954acff43536').append('<option value="Online Posgrado" data-reactid=".hbspt-forms-0.0:$2.1:$nivel_de_interes.$nivel_de_interes.0.1:$Online Posgrado" >Posgrado Online</option>');
        
    }else if(idValue == "001o000000etAAuAAM"){

      $('#nivel_de_interes-503b06c6-4374-4adf-af28-954acff43536').empty();

      $('#nivel_de_interes-503b06c6-4374-4adf-af28-954acff43536').append('<option value="0" disabled=""  selected="selected" data-reactid=".hbspt-forms-0.0:$2.1:$nivel_de_interes.$nivel_de_interes.0.0">- Por favor, elige -</option>');
      $('#nivel_de_interes-503b06c6-4374-4adf-af28-954acff43536').append('<option value="Preparatoria" data-reactid=".hbspt-forms-0.0:$2.1:$nivel_de_interes.$nivel_de_interes.0.1:$Preparatoria">Preparatoria</option>');
      $('#nivel_de_interes-503b06c6-4374-4adf-af28-954acff43536').append('<option value="Licenciatura" data-reactid=".hbspt-forms-0.0:$2.1:$nivel_de_interes.$nivel_de_interes.0.1:$Licenciatura" >Licenciatura</option>');
      $('#nivel_de_interes-503b06c6-4374-4adf-af28-954acff43536').append('<option value="Online LX" data-reactid=".hbspt-forms-0.0:$2.1:$nivel_de_interes.$nivel_de_interes.0.1:$Online LX" >Licenciatura Ejecutiva Online</option>');
      $('#nivel_de_interes-503b06c6-4374-4adf-af28-954acff43536').append('<option value="Posgrado" data-reactid=".hbspt-forms-0.0:$2.1:$nivel_de_interes.$nivel_de_interes.0.1:$Posgrado" >Posgrado</option>');
      $('#nivel_de_interes-503b06c6-4374-4adf-af28-954acff43536').append('<option value="Online Posgrado" data-reactid=".hbspt-forms-0.0:$2.1:$nivel_de_interes.$nivel_de_interes.0.1:$Online Posgrado" >Posgrado Online</option>');
        
    }else if(idValue == "001o000000etAAiAAM"){

      $('#nivel_de_interes-503b06c6-4374-4adf-af28-954acff43536').empty();
        
      $('#nivel_de_interes-503b06c6-4374-4adf-af28-954acff43536').append('<option value="0" disabled=""  selected="selected" data-reactid=".hbspt-forms-0.0:$2.1:$nivel_de_interes.$nivel_de_interes.0.0">- Por favor, elige -</option>');
      $('#nivel_de_interes-503b06c6-4374-4adf-af28-954acff43536').append('<option value="Preparatoria" data-reactid=".hbspt-forms-0.0:$2.1:$nivel_de_interes.$nivel_de_interes.0.1:$Preparatoria">Preparatoria</option>');      
      $('#nivel_de_interes-503b06c6-4374-4adf-af28-954acff43536').append('<option value="Licenciatura Ejecutiva" data-reactid=".hbspt-forms-0.0:$2.1:$nivel_de_interes.$nivel_de_interes.0.1:$Licenciatura Ejecutiva" >Licenciatura Ejecutiva</option>');
      $('#nivel_de_interes-503b06c6-4374-4adf-af28-954acff43536').append('<option value="Online LX" data-reactid=".hbspt-forms-0.0:$2.1:$nivel_de_interes.$nivel_de_interes.0.1:$Online LX" >Licenciatura Ejecutiva Online</option>');      
      $('#nivel_de_interes-503b06c6-4374-4adf-af28-954acff43536').append('<option value="Online Posgrado" data-reactid=".hbspt-forms-0.0:$2.1:$nivel_de_interes.$nivel_de_interes.0.1:$Online Posgrado" >Posgrado Online</option>');
        
    }else if(idValue == "001o000000etAAWAA2" || idValue == "001o000000etAASAA2"  ){

      $('#nivel_de_interes-503b06c6-4374-4adf-af28-954acff43536').empty();

      $('#nivel_de_interes-503b06c6-4374-4adf-af28-954acff43536').append('<option value="0" disabled=""  selected="selected" data-reactid=".hbspt-forms-0.0:$2.1:$nivel_de_interes.$nivel_de_interes.0.0">- Por favor, elige -</option>');      
      $('#nivel_de_interes-503b06c6-4374-4adf-af28-954acff43536').append('<option value="Licenciatura" data-reactid=".hbspt-forms-0.0:$2.1:$nivel_de_interes.$nivel_de_interes.0.1:$Licenciatura" >Licenciatura</option>');
      $('#nivel_de_interes-503b06c6-4374-4adf-af28-954acff43536').append('<option value="Licenciatura Ejecutiva" data-reactid=".hbspt-forms-0.0:$2.1:$nivel_de_interes.$nivel_de_interes.0.1:$Licenciatura Ejecutiva" >Licenciatura Ejecutiva</option>');
      $('#nivel_de_interes-503b06c6-4374-4adf-af28-954acff43536').append('<option value="Online LX" data-reactid=".hbspt-forms-0.0:$2.1:$nivel_de_interes.$nivel_de_interes.0.1:$Online LX" >Licenciatura Ejecutiva Online</option>');
      $('#nivel_de_interes-503b06c6-4374-4adf-af28-954acff43536').append('<option value="Posgrado" data-reactid=".hbspt-forms-0.0:$2.1:$nivel_de_interes.$nivel_de_interes.0.1:$Posgrado" >Posgrado</option>');
      $('#nivel_de_interes-503b06c6-4374-4adf-af28-954acff43536').append('<option value="Online Posgrado" data-reactid=".hbspt-forms-0.0:$2.1:$nivel_de_interes.$nivel_de_interes.0.1:$Online Posgrado" >Posgrado Online</option>');        
    }else if(idValue == "001o000000etAApAAM"){

      $('#nivel_de_interes-503b06c6-4374-4adf-af28-954acff43536').empty();
        $('#nivel_de_interes-503b06c6-4374-4adf-af28-954acff43536').append('<option value="0" disabled=""  selected="selected" data-reactid=".hbspt-forms-0.0:$2.1:$nivel_de_interes.$nivel_de_interes.0.0">- Por favor, elige -</option>');            
      $('#nivel_de_interes-503b06c6-4374-4adf-af28-954acff43536').append('<option value="Licenciatura Ejecutiva" data-reactid=".hbspt-forms-0.0:$2.1:$nivel_de_interes.$nivel_de_interes.0.1:$Licenciatura Ejecutiva" >Licenciatura Ejecutiva</option>');
      $('#nivel_de_interes-503b06c6-4374-4adf-af28-954acff43536').append('<option value="Online LX" data-reactid=".hbspt-forms-0.0:$2.1:$nivel_de_interes.$nivel_de_interes.0.1:$Online LX" >Licenciatura Ejecutiva Online</option>');
      $('#nivel_de_interes-503b06c6-4374-4adf-af28-954acff43536').append('<option value="Posgrado" data-reactid=".hbspt-forms-0.0:$2.1:$nivel_de_interes.$nivel_de_interes.0.1:$Posgrado" >Posgrado</option>');
      $('#nivel_de_interes-503b06c6-4374-4adf-af28-954acff43536').append('<option value="Online Posgrado" data-reactid=".hbspt-forms-0.0:$2.1:$nivel_de_interes.$nivel_de_interes.0.1:$Online Posgrado" >Posgrado Online</option>');   
        
    }else if(idValue == "001o000000etAAwAAM" || idValue == "001o000000etAAvAAM"){

    $('#nivel_de_interes-503b06c6-4374-4adf-af28-954acff43536').empty();
      
      $('#nivel_de_interes-503b06c6-4374-4adf-af28-954acff43536').append('<option value="0" disabled=""  selected="selected" data-reactid=".hbspt-forms-0.0:$2.1:$nivel_de_interes.$nivel_de_interes.0.0">- Por favor, elige -</option>');
      $('#nivel_de_interes-503b06c6-4374-4adf-af28-954acff43536').append('<option value="Preparatoria" data-reactid=".hbspt-forms-0.0:$2.1:$nivel_de_interes.$nivel_de_interes.0.1:$Preparatoria">Preparatoria</option>');
      $('#nivel_de_interes-503b06c6-4374-4adf-af28-954acff43536').append('<option value="Licenciatura" data-reactid=".hbspt-forms-0.0:$2.1:$nivel_de_interes.$nivel_de_interes.0.1:$Licenciatura" >Licenciatura</option>');      
      $('#nivel_de_interes-503b06c6-4374-4adf-af28-954acff43536').append('<option value="Online LX" data-reactid=".hbspt-forms-0.0:$2.1:$nivel_de_interes.$nivel_de_interes.0.1:$Online LX" >Licenciatura Ejecutiva Online</option>');
      $('#nivel_de_interes-503b06c6-4374-4adf-af28-954acff43536').append('<option value="Posgrado" data-reactid=".hbspt-forms-0.0:$2.1:$nivel_de_interes.$nivel_de_interes.0.1:$Posgrado" >Posgrado</option>');
      $('#nivel_de_interes-503b06c6-4374-4adf-af28-954acff43536').append('<option value="Online Posgrado" data-reactid=".hbspt-forms-0.0:$2.1:$nivel_de_interes.$nivel_de_interes.0.1:$Online Posgrado" >Posgrado Online</option>');
    
        
  }else {

    $('#nivel_de_interes-503b06c6-4374-4adf-af28-954acff43536').empty();

      $('#nivel_de_interes-503b06c6-4374-4adf-af28-954acff43536').append('<option value="0" disabled=""  selected="selected" data-reactid=".hbspt-forms-0.0:$2.1:$nivel_de_interes.$nivel_de_interes.0.0">- Por favor, elige -</option>');
      $('#nivel_de_interes-503b06c6-4374-4adf-af28-954acff43536').append('<option value="Preparatoria" data-reactid=".hbspt-forms-0.0:$2.1:$nivel_de_interes.$nivel_de_interes.0.1:$Preparatoria">Preparatoria</option>');
      $('#nivel_de_interes-503b06c6-4374-4adf-af28-954acff43536').append('<option value="Tecnico Superior" data-reactid=".hbspt-forms-0.0:$2.1:$nivel_de_interes.$nivel_de_interes.0.1:$Tecnico Superior" >TÃ©cnico Superior</option>');
      $('#nivel_de_interes-503b06c6-4374-4adf-af28-954acff43536').append('<option value="Licenciatura" data-reactid=".hbspt-forms-0.0:$2.1:$nivel_de_interes.$nivel_de_interes.0.1:$Licenciatura" >Licenciatura</option>');
      $('#nivel_de_interes-503b06c6-4374-4adf-af28-954acff43536').append('<option value="Licenciatura Ejecutiva" data-reactid=".hbspt-forms-0.0:$2.1:$nivel_de_interes.$nivel_de_interes.0.1:$Licenciatura Ejecutiva" >Licenciatura Ejecutiva</option>');
      $('#nivel_de_interes-503b06c6-4374-4adf-af28-954acff43536').append('<option value="Online LX" data-reactid=".hbspt-forms-0.0:$2.1:$nivel_de_interes.$nivel_de_interes.0.1:$Online LX" >Licenciatura Ejecutiva Online</option>');
      $('#nivel_de_interes-503b06c6-4374-4adf-af28-954acff43536').append('<option value="Posgrado" data-reactid=".hbspt-forms-0.0:$2.1:$nivel_de_interes.$nivel_de_interes.0.1:$Posgrado" >Posgrado</option>');
      $('#nivel_de_interes-503b06c6-4374-4adf-af28-954acff43536').append('<option value="Online Posgrado" data-reactid=".hbspt-forms-0.0:$2.1:$nivel_de_interes.$nivel_de_interes.0.1:$Online Posgrado" >Posgrado Online</option>');

  }                                      
}
