<?php
  header('Access-Control-Allow-Origin: *'); 

    $action = (isset($_GET['action']) && !empty($_GET['action'])) ? $_GET['action'] : 'default';
    $id = (isset($_GET['id']) && !empty($_GET['id'])) ? $_GET['id']-1 : 0;

    $opciones = array(
      array(
        "id" => 1,
        "value" => "Opciones 1"
      ),
      array(
        "id" => 2,
        "value" => "Opciones 2"
      ),
      array(
        "id" => 3,
        "value" => "Opciones 3"
      ),
      array(
        "id" => 4,
        "value" => "Opciones 4"
      )
    );

    $info = array(
      array(
        "id" => 1,
        "titulo" => "Vertical 1 Licenciatura 1",
        "descripcion" => "L1 La orientación estratégica de la carrera, fundamentada en nuevos modelos de negocio y certificaciones internacionales brindan una clara ventaja competitiva a nuestros egresados.",
        "thumb" => "../../assets/img/back-component-c7.png",
        "video" => array("video" => "https://www.youtube.com/embed/Wh_NaAK9FvA", "titulo" => "Video Cesar", "subtitulo" => "Carrera Seleccionada", "extra" => "Algo más"),
        "duracion" => array(
            array("titulo" => "Semestral", "duracion" => "(10 meses a 1 año)"),
            array("titulo" =>"Cuatrimestral", "duracion" => "(6 meses)" )
        ),
        "planes" => array( array("id" => 1, "titulo" => "Plan 1"), array("id" => 2, "titulo" => "Plan 2") ),
        "extra" => "*La orientación estratégica de la carrera, fundamentada en nuevos modelos de negocio y certificaciones internacionales brindan una clara ventaja competitiva a nuestros egresados.",
        "url" => array("materias" => "#", "calendario" => "#"),
        "colegiatura" => array("monto" => "4,000", "colegiatura" => "#", "programa" => "#"),
          "campus" => array(
            array(
              "titulo" => "DF y Área Metropolitana",
              "campus" => array(
                array(
                  "titulo" =>"Chapultepec",
                  "liga" => "#"
                ),
                array(
                  "titulo" =>"Coyoacán",
                  "liga" => "#"
                ),
                array(
                  "titulo" =>"Lago de Guadalupe",
                  "liga" => "#"
                ),
                array(
                  "titulo" =>"Lomas Verdes",
                  "liga" => "#"
                ),
                array(
                  "titulo" =>"Roma",
                  "liga" => "#"
                ),
                array(
                  "titulo" =>"Tlalpán",
                  "liga" => "#"
                )
              )
            ),
            array(
              "titulo" => "Jalisco",
              "campus" => array(
                array(
                  "titulo" =>"Guadalajara",
                  "liga" => "#"
                ),
                array(
                  "titulo" =>"Zapopán",
                  "liga" => "#"
                )
              )
            ),
            array(
              "titulo" => "Veracruz",
              "campus" => array(
                array(
                  "titulo" =>"Boca del río",
                  "liga" => "#"
                ),
                array(
                  "titulo" =>"Córdoba",
                  "liga" => "#"
                ),
                array(
                  "titulo" =>"Orizaba",
                  "liga" => "#"
                )
              )
            )
          )
        )
      ,
        array(
          "id" => 2,
          "titulo" => "Vertical 1 Licenciatura 2",
          "descripcion" => "L2 La orientación estratégica de la carrera, fundamentada en nuevos modelos de negocio y certificaciones internacionales brindan una clara ventaja competitiva a nuestros egresados.",
          "thumb" => "../../assets/img/back-component-c7.png",
          "video" => array("video" => "https://www.youtube.com/embed/Wh_NaAK9FvA", "titulo" => "Video Cesar", "subtitulo" => "Carrera Seleccionada", "extra" => "Algo más"),
          "duracion" => array(
              array("titulo" => "Semestral", "duracion" => "(11 meses a 1 año)"),
              array("titulo" =>"Cuatrimestral", "duracion" => "(3 meses)" )
          ),
          "planes" => array( array("id" => 1, "titulo" => "Plan 1"), array("id" => 2, "titulo" => "Plan 2")),
           "extra" => "*La orientación estratégica de la carrera, fundamentada en nuevos modelos de negocio y certificaciones internacionales brindan una clara ventaja competitiva a nuestros egresados.",
           "url" => array("materias" => "#", "calendario" => "#"),
           "colegiatura" => array("monto" => "4,000", "colegiatura" => "#", "programa" => "#"),
          "campus" => array(
            array(
              "titulo" => "DF y Área Metropolitana",
              "campus" => array(
                array(
                  "titulo" =>"Chapultepec",
                  "liga" => "#"
                ),
                array(
                  "titulo" =>"Coyoacán",
                  "liga" => "#"
                ),
                array(
                  "titulo" =>"Lago de Guadalupe",
                  "liga" => "#"
                ),
                array(
                  "titulo" =>"Lomas Verdes",
                  "liga" => "#"
                ),
                array(
                  "titulo" =>"Roma",
                  "liga" => "#"
                ),
                array(
                  "titulo" =>"Tlalpán",
                  "liga" => "#"
                )
              )
            ),
            array(
              "titulo" => "Jalisco",
              "campus" => array(
                array(
                  "titulo" =>"Guadalajara",
                  "liga" => "#"
                ),
                array(
                  "titulo" =>"Zapopán",
                  "liga" => "#"
                )
              )
            ),
            array(
              "titulo" => "Veracruz",
              "campus" => array(
                array(
                  "titulo" =>"Boca del río",
                  "liga" => "#"
                ),
                array(
                  "titulo" =>"Córdoba",
                  "liga" => "#"
                ),
                array(
                  "titulo" =>"Orizaba",
                  "liga" => "#"
                )
              )
            )
          )
        )
        ,
        array(
          "id" => 3,
          "titulo" => "Vertical 1 Licenciatura 3",
          "descripcion" => "L3 La orientación estratégica de la carrera, fundamentada en nuevos modelos de negocio y certificaciones internacionales brindan una clara ventaja competitiva a nuestros egresados.",
          "thumb" => "../../assets/img/back-component-c7.png",
          "video" => array("video" => "https://www.youtube.com/embed/Wh_NaAK9FvA", "titulo" => "Video Cesar", "subtitulo" => "Carrera Seleccionada", "extra" => "Algo más"),
          "duracion" => array(
              array("titulo" => "Semestral", "duracion" => "(9 meses a 1 año)"),
              array("titulo" =>"Cuatrimestral", "duracion" => "(6 meses)" )
          ),
          "planes" => array( array("id" => 1, "titulo" => "Plan 1"), array("id" => 2, "titulo" => "Plan 2") ),
           "extra" => "*La orientación estratégica de la carrera, fundamentada en nuevos modelos de negocio y certificaciones internacionales brindan una clara ventaja competitiva a nuestros egresados.",
           "url" => array("materias" => "#", "calendario" => "#"),
           "colegiatura" => array("monto" => "4,000", "colegiatura" => "#", "programa" => "#"),
          "campus" => array(
            array(
              "titulo" => "DF y Área Metropolitana",
              "campus" => array(
                array(
                  "titulo" =>"Chapultepec",
                  "liga" => "#"
                ),
                array(
                  "titulo" =>"Coyoacán",
                  "liga" => "#"
                ),
                array(
                  "titulo" =>"Lago de Guadalupe",
                  "liga" => "#"
                ),
                array(
                  "titulo" =>"Lomas Verdes",
                  "liga" => "#"
                ),
                array(
                  "titulo" =>"Roma",
                  "liga" => "#"
                ),
                array(
                  "titulo" =>"Tlalpán",
                  "liga" => "#"
                )
              )
            ),
            array(
              "titulo" => "Jalisco",
              "campus" => array(
                array(
                  "titulo" =>"Guadalajara",
                  "liga" => "#"
                ),
                array(
                  "titulo" =>"Zapopán",
                  "liga" => "#"
                )
              )
            ),
            array(
              "titulo" => "Veracruz",
              "campus" => array(
                array(
                  "titulo" =>"Boca del río",
                  "liga" => "#"
                ),
                array(
                  "titulo" =>"Córdoba",
                  "liga" => "#"
                ),
                array(
                  "titulo" =>"Orizaba",
                  "liga" => "#"
                )
              )
            )
          )
        )
        ,
        array(
          "id" => 4,
          "titulo" => "Vertical 1 Licenciatura 4",
          "descripcion" => "L4 La orientación estratégica de la carrera, fundamentada en nuevos modelos de negocio y certificaciones internacionales brindan una clara ventaja competitiva a nuestros egresados.",
          "thumb" => "../../assets/img/back-component-c7.png",
          "video" => array("video" => "https://www.youtube.com/embed/Wh_NaAK9FvA", "titulo" => "Video Cesar", "subtitulo" => "Carrera Seleccionada", "extra" => "Algo más"),
          "duracion" => array(
              array("titulo" => "Semestral", "duracion" => "(9 meses a 2 años)"),
              array("titulo" =>"Cuatrimestral", "duracion" => "(6 meses)" )
          ),
          "planes" => array( array("id" => 1, "titulo" => "Plan 1") ),
          "extra" => "*La orientación estratégica de la carrera, fundamentada en nuevos modelos de negocio y certificaciones internacionales brindan una clara ventaja competitiva a nuestros egresados.",
          "url" => array("materias" => "#", "calendario" => "#"),
          "colegiatura" => array("monto" => "4,000", "colegiatura" => "#", "programa" => "#"),
          "campus" => array(
            array(
              "titulo" => "DF y Área Metropolitana",
              "campus" => array(
                array(
                  "titulo" =>"Chapultepec",
                  "liga" => "#"
                ),
                array(
                  "titulo" =>"Coyoacán",
                  "liga" => "#"
                ),
                array(
                  "titulo" =>"Lago de Guadalupe",
                  "liga" => "#"
                ),
                array(
                  "titulo" =>"Lomas Verdes",
                  "liga" => "#"
                ),
                array(
                  "titulo" =>"Roma",
                  "liga" => "#"
                ),
                array(
                  "titulo" =>"Tlalpán",
                  "liga" => "#"
                )
              )
            ),
            array(
              "titulo" => "Jalisco",
              "campus" => array(
                array(
                  "titulo" =>"Guadalajara",
                  "liga" => "#"
                ),
                array(
                  "titulo" =>"Zapopán",
                  "liga" => "#"
                )
              )
            ),
            array(
              "titulo" => "Veracruz",
              "campus" => array(
                array(
                  "titulo" =>"Boca del río",
                  "liga" => "#"
                ),
                array(
                  "titulo" =>"Córdoba",
                  "liga" => "#"
                ),
                array(
                  "titulo" =>"Orizaba",
                  "liga" => "#"
                )
              )
            )
          )
        )
        ,
        array(
          "id" => 5,
          "titulo" => "Vertical 2 Licenciatura 1",
          "descripcion" => "L5 La orientación estratégica de la carrera, fundamentada en nuevos modelos de negocio y certificaciones internacionales brindan una clara ventaja competitiva a nuestros egresados.",
          "thumb" => "../../assets/img/back-component-c7.png",
          "video" => array("video" => "https://www.youtube.com/embed/Wh_NaAK9FvA", "titulo" => "Video Cesar", "subtitulo" => "Carrera Seleccionada", "extra" => "Algo más"),
          "duracion" => array(
              array("titulo" => "Semestral", "duracion" => "(9 meses a 1 año)"),
              array("titulo" =>"Cuatrimestral", "duracion" => "(6 meses)" )
          ),
          "planes" => array( array("id" => 1, "titulo" => "Plan 1") ),
           "extra" => "*La orientación estratégica de la carrera, fundamentada en nuevos modelos de negocio y certificaciones internacionales brindan una clara ventaja competitiva a nuestros egresados.",
           "url" => array("materias" => "#", "calendario" => "#"),
           "colegiatura" => array("monto" => "4,000", "colegiatura" => "#", "programa" => "#"),
          "campus" => array(
            array(
              "titulo" => "DF y Área Metropolitana",
              "campus" => array(
                array(
                  "titulo" =>"Chapultepec",
                  "liga" => "#"
                ),
                array(
                  "titulo" =>"Coyoacán",
                  "liga" => "#"
                ),
                array(
                  "titulo" =>"Lago de Guadalupe",
                  "liga" => "#"
                ),
                array(
                  "titulo" =>"Lomas Verdes",
                  "liga" => "#"
                ),
                array(
                  "titulo" =>"Roma",
                  "liga" => "#"
                ),
                array(
                  "titulo" =>"Tlalpán",
                  "liga" => "#"
                )
              )
            ),
            array(
              "titulo" => "Jalisco",
              "campus" => array(
                array(
                  "titulo" =>"Guadalajara",
                  "liga" => "#"
                ),
                array(
                  "titulo" =>"Zapopán",
                  "liga" => "#"
                )
              )
            ),
            array(
              "titulo" => "Veracruz",
              "campus" => array(
                array(
                  "titulo" =>"Boca del río",
                  "liga" => "#"
                ),
                array(
                  "titulo" =>"Córdoba",
                  "liga" => "#"
                ),
                array(
                  "titulo" =>"Orizaba",
                  "liga" => "#"
                )
              )
            )
          )
        )
        ,
        array(
          "id" => 6,
          "titulo" => "Vertical 2 Licenciatura 2",
          "descripcion" => "L6 La orientación estratégica de la carrera, fundamentada en nuevos modelos de negocio y certificaciones internacionales brindan una clara ventaja competitiva a nuestros egresados.",
          "thumb" => "../../assets/img/back-component-c7.png",
          "video" => array("video" => "https://www.youtube.com/embed/Wh_NaAK9FvA", "titulo" => "Video Cesar", "subtitulo" => "Carrera Seleccionada", "extra" => "Algo más"),
          "duracion" => array(
              array("titulo" => "Semestral", "duracion" => "(6 meses a 1 año)"),
              array("titulo" =>"Cuatrimestral", "duracion" => "(6 meses)" )
          ),
          "planes" => array( array("id" => 1, "titulo" => "Plan 1"), array("id" => 2, "titulo" => "Plan 2") ),
           "extra" => "*La orientación estratégica de la carrera, fundamentada en nuevos modelos de negocio y certificaciones internacionales brindan una clara ventaja competitiva a nuestros egresados.",
           "url" => array("materias" => "#", "calendario" => "#"),
           "colegiatura" => array("monto" => "4,000", "colegiatura" => "#", "programa" => "#"),
          "campus" => array(
            array(
              "titulo" => "DF y Área Metropolitana",
              "campus" => array(
                array(
                  "titulo" =>"Chapultepec",
                  "liga" => "#"
                ),
                array(
                  "titulo" =>"Coyoacán",
                  "liga" => "#"
                ),
                array(
                  "titulo" =>"Lago de Guadalupe",
                  "liga" => "#"
                ),
                array(
                  "titulo" =>"Lomas Verdes",
                  "liga" => "#"
                ),
                array(
                  "titulo" =>"Roma",
                  "liga" => "#"
                ),
                array(
                  "titulo" =>"Tlalpán",
                  "liga" => "#"
                )
              )
            ),
            array(
              "titulo" => "Jalisco",
              "campus" => array(
                array(
                  "titulo" =>"Guadalajara",
                  "liga" => "#"
                ),
                array(
                  "titulo" =>"Zapopán",
                  "liga" => "#"
                )
              )
            ),
            array(
              "titulo" => "Veracruz",
              "campus" => array(
                array(
                  "titulo" =>"Boca del río",
                  "liga" => "#"
                ),
                array(
                  "titulo" =>"Córdoba",
                  "liga" => "#"
                ),
                array(
                  "titulo" =>"Orizaba",
                  "liga" => "#"
                )
              )
            )
          )
        )
        ,
        array(
          "id" => 7,
          "titulo" => "Vertical 2 Licenciatura 3",
          "descripcion" => "L7 La orientación estratégica de la carrera, fundamentada en nuevos modelos de negocio y certificaciones internacionales brindan una clara ventaja competitiva a nuestros egresados.",
          "thumb" => "../../assets/img/back-component-c7.png",
          "video" => array("video" => "https://www.youtube.com/embed/Wh_NaAK9FvA", "titulo" => "Video Cesar", "subtitulo" => "Carrera Seleccionada", "extra" => "Algo más"),
          "duracion" => array(
              array("titulo" => "Semestral", "duracion" => "(9 meses a 1 año)"),
              array("titulo" =>"Cuatrimestral", "duracion" => "(6 meses)" )
          ),
          "planes" => array( array("id" => 1, "titulo" => "Plan 1") ),
           "extra" => "*La orientación estratégica de la carrera, fundamentada en nuevos modelos de negocio y certificaciones internacionales brindan una clara ventaja competitiva a nuestros egresados.",
           "url" => array("materias" => "#", "calendario" => "#"),
           "colegiatura" => array("monto" => "4,000", "colegiatura" => "#", "programa" => "#"),
          "campus" => array(
            array(
              "titulo" => "DF y Área Metropolitana",
              "campus" => array(
                array(
                  "titulo" =>"Chapultepec",
                  "liga" => "#"
                ),
                array(
                  "titulo" =>"Coyoacán",
                  "liga" => "#"
                ),
                array(
                  "titulo" =>"Lago de Guadalupe",
                  "liga" => "#"
                ),
                array(
                  "titulo" =>"Lomas Verdes",
                  "liga" => "#"
                ),
                array(
                  "titulo" =>"Roma",
                  "liga" => "#"
                ),
                array(
                  "titulo" =>"Tlalpán",
                  "liga" => "#"
                )
              )
            ),
            array(
              "titulo" => "Jalisco",
              "campus" => array(
                array(
                  "titulo" =>"Guadalajara",
                  "liga" => "#"
                ),
                array(
                  "titulo" =>"Zapopán",
                  "liga" => "#"
                )
              )
            ),
            array(
              "titulo" => "Veracruz",
              "campus" => array(
                array(
                  "titulo" =>"Boca del río",
                  "liga" => "#"
                ),
                array(
                  "titulo" =>"Córdoba",
                  "liga" => "#"
                ),
                array(
                  "titulo" =>"Orizaba",
                  "liga" => "#"
                )
              )
            )
          )
        )
        ,
        array(
          "id" => 8,
          "titulo" => "Vertical 2 Licenciatura 4",
          "descripcion" => "L8 La orientación estratégica de la carrera, fundamentada en nuevos modelos de negocio y certificaciones internacionales brindan una clara ventaja competitiva a nuestros egresados.",
          "thumb" => "../../assets/img/back-component-c7.png",
          "video" => array("video" => "https://www.youtube.com/embed/Wh_NaAK9FvA", "titulo" => "Video Cesar", "subtitulo" => "Carrera Seleccionada", "extra" => "Algo más"),
          "duracion" => array(
              array("titulo" => "Semestral", "duracion" => "(9 meses a 1 año)"),
              array("titulo" =>"Cuatrimestral", "duracion" => "(6 meses)" )
          ),
          "planes" => array( array("id" => 1, "titulo" => "Plan 1") ),
           "extra" => "*La orientación estratégica de la carrera, fundamentada en nuevos modelos de negocio y certificaciones internacionales brindan una clara ventaja competitiva a nuestros egresados.",
           "url" => array("materias" => "#", "calendario" => "#"),
           "colegiatura" => array("monto" => "4,000", "colegiatura" => "#", "programa" => "#"),
          "campus" => array(
            array(
              "titulo" => "DF y Área Metropolitana",
              "campus" => array(
                array(
                  "titulo" =>"Chapultepec",
                  "liga" => "#"
                ),
                array(
                  "titulo" =>"Coyoacán",
                  "liga" => "#"
                ),
                array(
                  "titulo" =>"Lago de Guadalupe",
                  "liga" => "#"
                ),
                array(
                  "titulo" =>"Lomas Verdes",
                  "liga" => "#"
                ),
                array(
                  "titulo" =>"Roma",
                  "liga" => "#"
                ),
                array(
                  "titulo" =>"Tlalpán",
                  "liga" => "#"
                )
              )
            ),
            array(
              "titulo" => "Jalisco",
              "campus" => array(
                array(
                  "titulo" =>"Guadalajara",
                  "liga" => "#"
                ),
                array(
                  "titulo" =>"Zapopán",
                  "liga" => "#"
                )
              )
            ),
            array(
              "titulo" => "Veracruz",
              "campus" => array(
                array(
                  "titulo" =>"Boca del río",
                  "liga" => "#"
                ),
                array(
                  "titulo" =>"Córdoba",
                  "liga" => "#"
                ),
                array(
                  "titulo" =>"Orizaba",
                  "liga" => "#"
                )
              )
            )
          )
        )
        ,
        array(
          "id" => 9,
          "titulo" => "L9 Vertical 3 Licenciatura 1",
          "descripcion" => "La orientación estratégica de la carrera, fundamentada en nuevos modelos de negocio y certificaciones internacionales brindan una clara ventaja competitiva a nuestros egresados.",
          "thumb" => "../../assets/img/back-component-c7.png",
          "video" => array("video" => "https://www.youtube.com/embed/Wh_NaAK9FvA", "titulo" => "Video Cesar", "subtitulo" => "Carrera Seleccionada", "extra" => "Algo más"),
          "duracion" => array(
              array("titulo" => "Semestral", "duracion" => "(9 meses a 1 año)"),
              array("titulo" =>"Cuatrimestral", "duracion" => "(6 meses)" )
          ),
          "planes" => array( array("id" => 1, "titulo" => "Plan 1") ),
           "extra" => "*La orientación estratégica de la carrera, fundamentada en nuevos modelos de negocio y certificaciones internacionales brindan una clara ventaja competitiva a nuestros egresados.",
           "url" => array("materias" => "#", "calendario" => "#"),
           "colegiatura" => array("monto" => "4,000", "colegiatura" => "#", "programa" => "#"),
          "campus" => array(
            array(
              "titulo" => "DF y Área Metropolitana",
              "campus" => array(
                array(
                  "titulo" =>"Chapultepec",
                  "liga" => "#"
                ),
                array(
                  "titulo" =>"Coyoacán",
                  "liga" => "#"
                ),
                array(
                  "titulo" =>"Lago de Guadalupe",
                  "liga" => "#"
                ),
                array(
                  "titulo" =>"Lomas Verdes",
                  "liga" => "#"
                ),
                array(
                  "titulo" =>"Roma",
                  "liga" => "#"
                ),
                array(
                  "titulo" =>"Tlalpán",
                  "liga" => "#"
                )
              )
            ),
            array(
              "titulo" => "Jalisco",
              "campus" => array(
                array(
                  "titulo" =>"Guadalajara",
                  "liga" => "#"
                ),
                array(
                  "titulo" =>"Zapopán",
                  "liga" => "#"
                )
              )
            ),
            array(
              "titulo" => "Veracruz",
              "campus" => array(
                array(
                  "titulo" =>"Boca del río",
                  "liga" => "#"
                ),
                array(
                  "titulo" =>"Córdoba",
                  "liga" => "#"
                ),
                array(
                  "titulo" =>"Orizaba",
                  "liga" => "#"
                )
              )
            )
          )
        )
    );

    
    $data = array();
    switch($action):
      case 'getOpciones':
        $data = $opciones;
      break;

      case 'getInfo':
        $data = $info[$id];
      break;

      case 'default':
        $data = array();
      break;

    endswitch;



  header('Content-Type: application/json');

  echo json_encode($data);