<?php
  header('Access-Control-Allow-Origin: *'); 

    $action = (isset($_GET['action']) && !empty($_GET['action'])) ? $_GET['action'] : 'default';
    $id = (isset($_GET['id']) && !empty($_GET['id'])) ? $_GET['id']-1 : 0;

    $verticales = array(
      array(
        "id" => 1,
        "value" => "Vertical 1",
        "thumb" =>"../../assets/img/component-cpm-1-img.png"
      ),
      array(
        "id" => 2,
        "value" => "Vertical 2",
        "thumb" =>"../../assets/img/component-cpm-1-img.png"
      ),
      array(
        "id" => 3,
        "value" => "Vertical 3",
        "thumb" =>"../../assets/img/component-cpm-1-img.png"
      ),
      array(
        "id" => 4,
        "value" => "Vertical 4",
        "thumb" =>"../../assets/img/component-cpm-1-img.png"
      )
    );

    $licenciaturasByVertical = array(
      array(
         array(
            "id" => 1,
            "value" => "Vertical 1 Licenciatura 1"
          ),
          array(
            "id" => 2,
            "value" => "Vertical 1 Licenciatura 2"
          ),
          array(
            "id" => 3,
            "value" => "Vertical 1 Licenciatura 3"
          ),
          array(
            "id" => 4,
            "value" => "Vertical 1 Licenciatura 4"
          )
      ),
      array(
         array(
            "id" => 5,
            "value" => "Vertical 2 Licenciatura 1"
          ),
          array(
            "id" => 6,
            "value" => "Vertical 2 Licenciatura 2"
          ),
          array(
            "id" => 7,
            "value" => "Vertical 2 Licenciatura 3"
          ),
          array(
            "id" => 8,
            "value" => "Vertical 2 Licenciatura 4"
          )
      ),
       array(
         array(
            "id" => 9,
            "value" => "Vertical 3 Licenciatura 1"
          ),
          array(
            "id" => 10,
            "value" => "Vertical 3 Licenciatura 2"
          ),
          array(
            "id" => 11,
            "value" => "Vertical 3 Licenciatura 3"
          ),
          array(
            "id" => 12,
            "value" => "Vertical 3 Licenciatura 4"
          )
      ),
        array(
         array(
            "id" => 13,
            "value" => "Vertical 4 Licenciatura 1"
          ),
          array(
            "id" => 14,
            "value" => "Vertical 4 Licenciatura 2"
          ),
          array(
            "id" => 15,
            "value" => "Vertical 4 Licenciatura 3"
          ),
          array(
            "id" => 16,
            "value" => "Vertical 4 Licenciatura 4"
          )
      )
    );

    $licenciaturaBasic = array(
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
        "planes" => array( array("id" => 1, "titulo" => "Plan 1"), array("id" => 2, "titulo" => "Plan 2") )
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
          "planes" => array( array("id" => 1, "titulo" => "Plan 1"), array("id" => 2, "titulo" => "Plan 2"))
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
          "planes" => array( array("id" => 1, "titulo" => "Plan 1"), array("id" => 2, "titulo" => "Plan 2") )
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
          "planes" => array( array("id" => 1, "titulo" => "Plan 1") )
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
          "planes" => array( array("id" => 1, "titulo" => "Plan 1") )
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
          "planes" => array( array("id" => 1, "titulo" => "Plan 1"), array("id" => 2, "titulo" => "Plan 2") )
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
          "planes" => array( array("id" => 1, "titulo" => "Plan 1") )
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
          "planes" => array( array("id" => 1, "titulo" => "Plan 1") )
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
          "planes" => array( array("id" => 1, "titulo" => "Plan 1") )
        )
        ,
        array(
          "id" => 10,
          "titulo" => "Vertical 3 Licenciatura 2",
          "descripcion" => "L10 La orientación estratégica de la carrera, fundamentada en nuevos modelos de negocio y certificaciones internacionales brindan una clara ventaja competitiva a nuestros egresados.",
          "thumb" => "../../assets/img/back-component-c7.png",
          "video" => array("video" => "https://www.youtube.com/embed/_CEIuHbyksI", "titulo" => "Video Carrera", "subtitulo" => "Otra Carrera Seleccionada", "extra" => "Otra cosa" ),
          "duracion" => array(
              array("titulo" => "Semestral", "duracion" => "(9 meses a 1 año)"),
              array("titulo" =>"Cuatrimestral", "duracion" => "(6 meses)" )
          ),
          "planes" => array( array("id" => 1, "titulo" => "Plan 1") )
        )
        ,
        array(
          "id" => 11,
          "titulo" => "L 11 Vertical 3 Licenciatura 3",
          "descripcion" => "La orientación estratégica de la carrera, fundamentada en nuevos modelos de negocio y certificaciones internacionales brindan una clara ventaja competitiva a nuestros egresados.",
          "thumb" => "../../assets/img/back-component-c7.png",
          "video" => array("video" => "https://www.youtube.com/embed/_CEIuHbyksI", "titulo" => "Video Carrera", "subtitulo" => "Otra Carrera Seleccionada", "extra" => "Otra cosa" ),
          "duracion" => array(
              array("titulo" => "Semestral", "duracion" => "(9 meses a 1 año)"),
              array("titulo" =>"Cuatrimestral", "duracion" => "(6 meses)" )
          ),
          "planes" => array( array("id" => 1, "titulo" => "Plan 1") )
        )
        ,
        array(
          "id" => 12,
          "titulo" => "L 12Vertical 3 Licenciatura 4",
          "descripcion" => "La orientación estratégica de la carrera, fundamentada en nuevos modelos de negocio y certificaciones internacionales brindan una clara ventaja competitiva a nuestros egresados.",
          "thumb" => "../../assets/img/back-component-c7.png",
          "video" => array("video" => "https://www.youtube.com/embed/_CEIuHbyksI", "titulo" => "Video Carrera", "subtitulo" => "Otra Carrera Seleccionada", "extra" => "Otra cosa" ),
          "duracion" => array(
              array("titulo" => "Semestral", "duracion" => "(9 meses a 1 año)"),
              array("titulo" =>"Cuatrimestral", "duracion" => "(6 meses)" )
          ),
          "planes" => array( array("id" => 1, "titulo" => "Plan 1") )
        )
        ,
        array(
          "id" => 13,
          "titulo" => "L 13 Vertical 4 Licenciatura 1",
          "descripcion" => "La orientación estratégica de la carrera, fundamentada en nuevos modelos de negocio y certificaciones internacionales brindan una clara ventaja competitiva a nuestros egresados.",
          "thumb" => "../../assets/img/back-component-c7.png",
          "video" => array("video" => "https://www.youtube.com/embed/_CEIuHbyksI", "titulo" => "Video Carrera", "subtitulo" => "Otra Carrera Seleccionada", "extra" => "Otra cosa" ),
          "duracion" => array(
              array("titulo" => "Semestral", "duracion" => "(9 meses a 1 año)"),
              array("titulo" =>"Cuatrimestral", "duracion" => "(6 meses)" )
          ),
          "planes" => array( array("id" => 1, "titulo" => "Plan 1") )
        )
        ,
        array(
          "id" => 14,
          "titulo" => "Vertical 4 Licenciatura 2",
          "descripcion" => "L 14 La orientación estratégica de la carrera, fundamentada en nuevos modelos de negocio y certificaciones internacionales brindan una clara ventaja competitiva a nuestros egresados.",
          "thumb" => "../../assets/img/back-component-c7.png",
          "video" => array("video" => "https://www.youtube.com/embed/_CEIuHbyksI", "titulo" => "Video Carrera", "subtitulo" => "Otra Carrera Seleccionada", "extra" => "Otra cosa" ),
          "duracion" => array(
              array("titulo" => "Semestral", "duracion" => "(9 meses a 1 año)"),
              array("titulo" =>"Cuatrimestral", "duracion" => "(6 meses)" )
          ),
          "planes" => array( array("id" => 1, "titulo" => "Plan 1") )
        )
        ,
        array(
          "id" => 15,
          "titulo" => "L 15 Vertical 4 Licenciatura 3",
          "descripcion" => "La orientación estratégica de la carrera, fundamentada en nuevos modelos de negocio y certificaciones internacionales brindan una clara ventaja competitiva a nuestros egresados.",
          "thumb" => "../../assets/img/back-component-c7.png",
          "video" => array("video" => "https://www.youtube.com/embed/_CEIuHbyksI", "titulo" => "Video Carrera", "subtitulo" => "Otra Carrera Seleccionada", "extra" => "Otra cosa" ),
          "duracion" => array(
              array("titulo" => "Semestral", "duracion" => "(9 meses a 1 año)"),
              array("titulo" =>"Cuatrimestral", "duracion" => "(6 meses)" )
          ),
          "planes" => array( array("id" => 1, "titulo" => "Plan 1") )
        )
        ,
        array(
          "id" => 16,
          "titulo" => "Vertical 4 Licenciatura 4",
          "descripcion" => "La orientación estratégica de la carrera, fundamentada en nuevos modelos de negocio y certificaciones internacionales brindan una clara ventaja competitiva a nuestros egresados.",
          "thumb" => "../../assets/img/back-component-c7.png",
          "video" => array("video" => "https://www.youtube.com/embed/_CEIuHbyksI", "titulo" => "Video Carrera", "subtitulo" => "Otra Carrera Seleccionada", "extra" => "Otra cosa" ),
          "duracion" => array(
              array("titulo" => "Semestral", "duracion" => "(9 meses a 1 año)"),
              array("titulo" =>"Cuatrimestral", "duracion" => "(6 meses)" )
          ),
          "planes" => array( array("id" => 1, "titulo" => "Plan 1") )

        )
    );

    $planesBasic = array(
        array(
          "puntos" => array(
              array(
                "titulo" => "Absolutamente si tienes...",
                "color" => "backred-7", 
                "thumb" =>"icon i-lamp", 
                "descripcion" =>"P1 Iniciativa, Capacidad de síntesis, proactividad, crea- tividad, valores éticos, suficiencia oral y escrita, dis- posición para trabajar en equipo e interés por la investigación."
              ),
              array(
                "titulo" => "Especialmente si quieres...",
                "color" => "backred-5", 
                "thumb" =>"icon i-doctor", 
                "descripcion" =>"P1 Desarrollar la capacidad para la toma de decisio- nes, gestión, investigación, e innovación en las organizaciones y para optimizar sus recursos con organizaciones de calidad."
              ),
              array(
                "titulo" => "Dónde podrás trabajar...",
                "color" => "backred-3", 
                "thumb" =>"icon i-building2", 
                "descripcion" =>"P1 Iniciativa, Capacidad de síntesis, proactividad, crea- tividad, valores éticos, suficiencia oral y escrita, dis- posición para trabajar en equipo e interés por la investigación."
              )
          ),
          "liga" => "#",
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
        ),
        array(
          "puntos" => array(
              array(
                "titulo" => "Absolutamente si tienes...",
                "color" => "backred-7", 
                "thumb" =>"icon i-lamp", 
                "descripcion" =>"P2 Iniciativa, Capacidad de síntesis, proactividad, crea- tividad, valores éticos, suficiencia oral y escrita, dis- posición para trabajar en equipo e interés por la investigación."
              ),
              array(
                "titulo" => "Especialmente si quieres...",
                "color" => "backred-5", 
                "thumb" =>"icon i-doctor", 
                "descripcion" =>"P2 Desarrollar la capacidad para la toma de decisio- nes, gestión, investigación, e innovación en las organizaciones y para optimizar sus recursos con organizaciones de calidad."
              ),
              array(
                "titulo" => "Dónde podrás trabajar...",
                "color" => "backred-3", 
                "thumb" =>"icon i-building2", 
                "descripcion" =>"P2 Iniciativa, Capacidad de síntesis, proactividad, crea- tividad, valores éticos, suficiencia oral y escrita, dis- posición para trabajar en equipo e interés por la investigación."
              )
          ),
          "liga" => "#",
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
                )
              )
            )
          )
        ),
        array(
          "puntos" => array(
              array(
                "titulo" => "Absolutamente si tienes...",
                "color" => "backred-7", 
                "thumb" =>"icon i-lamp", 
                "descripcion" =>"P2 Iniciativa, Capacidad de síntesis, proactividad, crea- tividad, valores éticos, suficiencia oral y escrita, dis- posición para trabajar en equipo e interés por la investigación."
              ),
              array(
                "titulo" => "Especialmente si quieres...",
                "color" => "backred-5", 
                "thumb" =>"icon i-doctor", 
                "descripcion" =>"P2 Desarrollar la capacidad para la toma de decisio- nes, gestión, investigación, e innovación en las organizaciones y para optimizar sus recursos con organizaciones de calidad."
              ),
              array(
                "titulo" => "Dónde podrás trabajar...",
                "color" => "backred-3", 
                "thumb" =>"icon i-building2", 
                "descripcion" =>"P2 Iniciativa, Capacidad de síntesis, proactividad, crea- tividad, valores éticos, suficiencia oral y escrita, dis- posición para trabajar en equipo e interés por la investigación."
              )
          ),
          "liga" => "#",
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
                )
              )
            )
          )
        ),
        array(
          "puntos" => array(
              array(
                "titulo" => "Absolutamente si tienes...",
                "color" => "backred-7", 
                "thumb" =>"icon i-lamp", 
                "descripcion" =>"P2 Iniciativa, Capacidad de síntesis, proactividad, crea- tividad, valores éticos, suficiencia oral y escrita, dis- posición para trabajar en equipo e interés por la investigación."
              ),
              array(
                "titulo" => "Especialmente si quieres...",
                "color" => "backred-5", 
                "thumb" =>"icon i-doctor", 
                "descripcion" =>"P2 Desarrollar la capacidad para la toma de decisio- nes, gestión, investigación, e innovación en las organizaciones y para optimizar sus recursos con organizaciones de calidad."
              ),
              array(
                "titulo" => "Dónde podrás trabajar...",
                "color" => "backred-3", 
                "thumb" =>"icon i-building2", 
                "descripcion" =>"P2 Iniciativa, Capacidad de síntesis, proactividad, crea- tividad, valores éticos, suficiencia oral y escrita, dis- posición para trabajar en equipo e interés por la investigación."
              )
          ),
          "liga" => "#",
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
                )
              )
            )
          )
        ),
        array(
          "puntos" => array(
              array(
                "titulo" => "Absolutamente si tienes...",
                "color" => "backred-7", 
                "thumb" =>"icon i-lamp", 
                "descripcion" =>"P2 Iniciativa, Capacidad de síntesis, proactividad, crea- tividad, valores éticos, suficiencia oral y escrita, dis- posición para trabajar en equipo e interés por la investigación."
              ),
              array(
                "titulo" => "Especialmente si quieres...",
                "color" => "backred-5", 
                "thumb" =>"icon i-doctor", 
                "descripcion" =>"P2 Desarrollar la capacidad para la toma de decisio- nes, gestión, investigación, e innovación en las organizaciones y para optimizar sus recursos con organizaciones de calidad."
              ),
              array(
                "titulo" => "Dónde podrás trabajar...",
                "color" => "backred-3", 
                "thumb" =>"icon i-building2", 
                "descripcion" =>"P2 Iniciativa, Capacidad de síntesis, proactividad, crea- tividad, valores éticos, suficiencia oral y escrita, dis- posición para trabajar en equipo e interés por la investigación."
              )
          ),
          "liga" => "#",
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
                )
              )
            )
          )
        ),
        array(
          "puntos" => array(
              array(
                "titulo" => "Absolutamente si tienes...",
                "color" => "backred-7", 
                "thumb" =>"icon i-lamp", 
                "descripcion" =>"P2 Iniciativa, Capacidad de síntesis, proactividad, crea- tividad, valores éticos, suficiencia oral y escrita, dis- posición para trabajar en equipo e interés por la investigación."
              ),
              array(
                "titulo" => "Especialmente si quieres...",
                "color" => "backred-5", 
                "thumb" =>"icon i-doctor", 
                "descripcion" =>"P2 Desarrollar la capacidad para la toma de decisio- nes, gestión, investigación, e innovación en las organizaciones y para optimizar sus recursos con organizaciones de calidad."
              ),
              array(
                "titulo" => "Dónde podrás trabajar...",
                "color" => "backred-3", 
                "thumb" =>"icon i-building2", 
                "descripcion" =>"P2 Iniciativa, Capacidad de síntesis, proactividad, crea- tividad, valores éticos, suficiencia oral y escrita, dis- posición para trabajar en equipo e interés por la investigación."
              )
          ),
          "liga" => "#",
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
                )
              )
            )
          )
        )
      );
    
    $data = array();
    switch($action):
      case 'getVerticales':
        $data = $verticales;
      break;

      case 'getLicenciaturas':
        $data = $licenciaturasByVertical[$id];
      break;

      case 'getLicenciaturasInfo':
        $data = $licenciaturaBasic[$id];
      break;

      case 'getPlanesInfo':
        $data = $planesBasic[$id];
      break;

      case 'default':
        $data = array();
      break;

    endswitch;



  header('Content-Type: application/json');

  echo json_encode($data);