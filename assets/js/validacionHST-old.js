$(document).ready(function() {

       

    //funcion para iniciar campos de formularios
//hola
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

           

            // ACEPTA SOLO LETRAS

            $( 'input[name=firstname], input[name=segundo_nombre], input[name=lastname], input[name=apellido_materno__c]' ).keypress(function(event)

            {                                                 

                /*inputValue = (event.which) ? event.which : event.keyCode;

                                               

                teclado = String.fromCharCode(inputValue).toLowerCase();

                teclas = "abcdefghijklmnopqrstuvwxyz";

                especiales = "8-32-37-38-46-164";

                teclado_especial = false;

               

                for ( var i in especiales){

                    if(inputValue == especiales [i] ){

                        teclado_especial = true;break;

                    }

                }

               

                if(teclas.indexOf(teclado)==-1 && !teclado_especial){

                    return false;

                }*/

               

                

                //josue

                //if((inputValue > 47 && inputValue < 58) && (inputValue != 32) && (inputValue < 97 /* a */ || inputValue > 122 /* z */) ) {

                  //  event.preventDefault();

                //}

               

                               

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

            $( 'input[name=firstname], input[name=segundo_nombre], input[name=lastname], input[name=apellido_materno__c]' ).keyup(function(){               

                caps = this.value;

                objts = this;

                capitalized = caps.charAt(0).toUpperCase() + caps.substring(1);

                $(objts).val(capitalized);

               

            });

           

            // ACEPTA SOLO NUMEROS       

            $('input[name=phone]').keypress(function(event) {

                //var $inputValue = event.which || event.KeyCode;

                //if (($inputValue > 64 && $inputValue < 91) || ($inputValue > 96 && $inputValue < 123)) {

                    //event.preventDefault();

                //}

               

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

                                $('input[name=firstname], input[name=segundo_nombre],input[name=lastname],input[name=apellido_materno__c]').blur(function (event)

                                                  {

                                                                  //console.log('Paso por el blur 2');                                                                          

                                                                  var $nombre = $('input[name=firstname]').val();

                                                                  var $segundoNombre = $('input[name=segundo_nombre]').val();

                                                                  var $apellidoPaterno = $('input[name=lastname]').val();

                                                                  var $apellidoMaterno = $('input[name=apellido_materno__c]').val();

                                                                 

                                                                  var longitud = $nombre.length;

                                                               

            

                                                                                if ((longitud<3)||(longitud>30))

                                                                                {

                                                                                                alert('Error: el nombre debe tener de ms de 2 letras y menos de 30');

                                                                                                setTimeout(function() {

                                                                                                                $('input[name=firstname]').focus();

                                                                                                }, 10);

                                                                                                e.stopImmediatePropagation();

                                                                                                e.preventDefault();

                                                                                                return false;

                                                                                }

                                                                  // nombre

                                                                  if (EsPalabraProhibida($nombre.toUpperCase()))

                                                                                {

                                                                                                $('input[name=firstname]').val("");

                                                                                                setTimeout(function() {

                                                                                                $('input[name=firstname]').focus();

                                                                                                }, 10);

                                                                                                e.stopImmediatePropagation();

                                                                                                e.preventDefault();

                                                                                                return false;

                                                                                }

                                                                                // segundo nombre

                                                                                if (EsPalabraProhibida($segundoNombre.toUpperCase()))

                                                                                {

                                                                                                $('input[name=segundo_nombre]').val("");

                                                                                                setTimeout(function()

                                                                                                {

                                                                                                                $('input[name=segundo_nombre]').focus();

                                                                                                }, 10);

                                                                                                e.stopImmediatePropagation();

                                                                                                e.preventDefault();

                                                                                                return false;

                                                                                }

                                                                               

                                                                                // apellido paterno

                                                                                

                                                                                if (EsPalabraProhibida($apellidoPaterno.toUpperCase()))

                                                                                {

                                                                                                $('input[name=lastname]').val("");

                                                                                                setTimeout(function() {

                                                                                                $('input[name=lastname]').focus();

                                                                                                }, 10);

                                                                                                e.stopImmediatePropagation();

                                                                                                e.preventDefault();

                                                                                                return false;

                                                                                }

                                                                                // apellido materno

                                                                               

                                                                                if (EsPalabraProhibida($apellidoMaterno.toUpperCase()))

                                                                                {

                                                                                                $('input[name=apellido_materno__c]').val("");

                                                                                                setTimeout(function() {

                                                                                                $('input[name=apellido_materno__c]').focus();

                                                                                                }, 10);

                                                                                                e.stopImmediatePropagation();

                                                                                                e.preventDefault();

                                                                                                return false;

                                                                                }

                                                                

                                                                });

           

            //REVISAMOS EN EL BLUR DEL CAMPO APELLIDO MATERNO SI SE REPITIO LO ESCRITO EN CAMPOS ANTERIORES

            $('input[name=apellido_materno__c]').blur(function (event){

               

                var $nombre = $.trim($('input[name=firstname]').val());

                var $segundoNombre = $.trim($('input[name=segundo_nombre]').val());

                var $apellidoPaterno = $.trim($('input[name=lastname]').val());

                var $apellidoMaterno = $.trim($('input[name=apellido_materno__c]').val());

                               

                if( $nombre == $segundoNombre && $segundoNombre == $apellidoPaterno && $apellidoPaterno == $apellidoMaterno ){

                    alert("Tus nombres no pueden ser iguales a tus apellidos.");               

                    

                    $('input[name=firstname]').val("");

                    $('input[name=segundo_nombre]').val("");

                    $('input[name=lastname]').val("");

                    $('input[name=apellido_materno__c]').val("");

                   

                     //$('input[name=firstname]').focus();

                   

                }

            });

           

            //QUITAMOS LA OPCION DE PEGAR EN LOS CAMPOS DE TEXTO

            $(function() {

                        $('input[name=firstname], input[name=segundo_nombre],input[name=lastname],input[name=apellido_materno__c], input[name=phone]').bind("cut copy paste",function(e) {

                                                        e.preventDefault();

                                        });

                        });

 

                                }//Termina el IF de inicializacion de formulario   

                }, 100);//termina setInterval

 

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

 

    //FUNCON PARA PALABRAS BASURA

    var EsPalabraProhibida = function (palabra)

    {

        var myArray = [ 'ASDASD','ASDASDASD','AAA','AAD','ABC','ADS','AEA','AHH','APELLIDO','ASD','ASF','ASJ','BBB','BFJ','BJK','BVH','CCC','CDS','CHC','CJU','CSD','CVB','CXZ','DADSA','DAS','DDD','DEE','DEMO','DFG','DJF','DJJ','DND','DRH','DSE','DSF','DSS','DSX','DVC','DXX','DYY','EEE','EEH','EWF','FFF','FGG','FGH','FGT','FHG','FJG','FJH','FKJ','FNH','FRG','GFL','GGG','GHB','GHH','GHK','GJS','GVK','HAH','HCH','HDJ','HGD','HGF','HHF','HHH','HJK','HJN','HOLA','IBF','IGH','IHI','III','IJI','IOJ','IPH','JAJ','JAJA','JHG','JHJ','JHN','JHR','JHU','JJJ','JJN','JKL','JLK','JOK','KBE','KHV','KJK','KJN','KJS','KKJ','KKK','KLK','KNK','LKH','LKJ','LLJ','LLL','LOL','LUU','MKK','MMM','MPM','NALGA','NEL','NJP','NKJ','NNN','NOMB','NUL','OIF','OIO','OOO','OUO','PAA','PERSONAL','PITO','PPP','QQQ','QWE','RGT','RRR','RTR','SDA','SDF','SDS','SFJ','SSS','SWS','TRIAL','TRR','TRT','TTT','UUU','VEE','VVV','WFE','WWW','XCV','XDE','XXX','XZZ','YRT','YYY','ZXC','ZYE','ZZZ','NONE','ASAS','FDS','JNK','JLL','RRB','PERRA','PUTA','CULO','CULIADA','MARICA','MAMAR','PUTO','PENDEJO','LDK','XOXO','RAMERA','HFF','VERGA','VERGA','MARICON','SUPERM','BATMAN','BATMAN', 'ZORRA', 'ZORRA', 'FUCKYOU', 'FUCKYOU','QWERTY','QWERTYU','UYTREWQ','POIUYTR','QWERT','QAZWSX','XSWZAQ','ASDFFGH','LKJH','MNBVCXZ','ZXCVBNM','ZXCV','BNM','PLOKM','IJNMKO','SDFGHJKL','EDCRFV','UHBYGV','TGBUHB','VFRBHU','NJICDEBUH','EDCIJN','EDCIJN','YTRUIE','AQSW','PLOK','RWEIOP','POQWIEHBF','POIUYT' , 'PRUEBA', 'ALGO', 'JOTO' ];

       

        if ($.inArray(palabra, myArray) !== -1) {

            alert('Palabra Prohibida');

            return true;

        }else{

            return false;   

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

});//cerramos funcion de document.ready
