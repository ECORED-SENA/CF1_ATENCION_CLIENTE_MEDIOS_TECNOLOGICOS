export default {
  global: {
    componenteFormativo:
      'Factores y herramientas tecnológicas para la atención al cliente',
    descripcionCurso:
      'Los temas que se encuentran en este componente formativo, permiten identificar y conocer los factores y herramientas tecnológicas para la atención al cliente. Para su desarrollo, se estudiarán los medios tecnológicos, las redes sociales, la organización, el manual de funciones y procedimientos, el portafolio de servicios, la comunicación y atención al cliente.',
    imagenBannerPrincipal: '',
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Medios tecnológicos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Redes sociales y canales de comunicación',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'La organización',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Manual de funciones y procedimientos ',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Portafolio de servicios',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Clientes',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema7',
        icono: 'far fa-file-alt',
        numero: '7',
        titulo: 'Atención al cliente',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema8',
        icono: 'far fa-file-alt',
        numero: '8',
        titulo: 'Comunicación',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Sintesis',
        nombreRuta: 'sintesis',
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Asaftei, L. P. (2018). La atención al cliente en los medios Sociales.',
      link: '',
    },
    {
      referencia:
        'Brown, A. (1992). Gestión de la atención al cliente. Ediciones Díaz de Santos.',
      link: '',
    },
    {
      referencia:
        'Chaclón, C. O. (2013). La atención al cliente y el servicio postventa. Ediciones Diaz de Santos.',
      link: '',
    },
    {
      referencia:
        'Chiavenato, I. (2000). La organización. Introducción a la Teoría General de la Organización.(p 245). Bogotá: Mc Graw Hill.',
      link: '',
    },
    {
      referencia:
        'García Ortíz, F., GARCÍA ORTIZ, P. P., & GIL MUELA, M. A. R. I. O. (2007). Técnicas de servicio y atención al cliente. Editorial Paraninfo.',
      link: '',
    },
    {
      referencia:
        'Garrido, F. J., & Javier, F. (2004). Comunicación estratégica. Gestión 2000. ',
      link: '',
    },
    {
      referencia:
        'Real Academia Española: Diccionario de la lengua española, 23.ª ed., [versión 23.4 en línea]. <https://dle.rae.es> [julio de 2021].',
      link: '',
    },
    {
      referencia:
        'Wolton, D. (2007). Pensar la comunicación. Prometeo Libros Editorial.',
      link: '',
    },
  ],
  glosario: [
    {
      termino: 'Atención',
      significado: 'Cortesía, urbanidad, demostración de respeto u obsequio.',
    },
    {
      termino: 'Cliente',
      significado:
        'Persona que utiliza los servicios de un profesional o de una empresa, especialmente la que lo hace regularmente.',
    },
    {
      termino: 'Medios tecnológicos',
      significado:
        'Son los medios que requieren la intervención de un instrumento para poder transmitir un mensaje.',
    },
    {
      termino: 'Redes sociales',
      significado:
        'Son plataformas digitales conformadas por individuos con diferentes intereses, actividades o relaciones en común. Estas permiten la comunicación e intercambio de información entre las personas.',
    },
  ],
  complementario: [
    {
      texto:
        'Chiavenato, I. (2000). Introducción a la Teoría General de la Organización. ',
      tipo: 'Documento',
      link:
        'https://esmirnasite.files.wordpress.com/2017/07/i-admon-chiavenato.pdf',
    },
    {
      texto: 'Garrido, F. J., & Javier, F. (2004). Comunicación estratégica.',
      tipo: 'Artículo',
      link:
        'https://www.researchgate.net/profile/Francisco-Garrido-4/publication/31735796_Comunicacion_estrategica_FJ_Garrido_M/links/56d8484108aee1aa5f7c3055/Comunicacion-estrategica-FJ-Garrido-M.pdf',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Anderson Ferney Archila Calixto',
        cargo: 'Experto Temático',
        centro:
          'Regional Norte de Santander – Centro de la Industria de la Empresa y los Servicios - CIES',
      },
      {
        nombre: 'Paola Andrea Quintero Aguilar',
        cargo: 'Diseñadora Instruccional',
        centro: 'Regional Distrito Capital - Centro de Gestión Industrial',
      },
      {
        nombre: 'Ana Catalina Córdoba Sus',
        cargo: 'Revisora metodológica y pedagógica',
        centro:
          'Regional Distrito Capital – Centro para la Industria de la Comunicación Gráfica',
      },
      {
        nombre: 'Sandra Patricia Hoyos Sepúlveda',
        cargo: 'Revisión y corrección de estilo',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Distrito capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'María Natalia Maldonado Delgado',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Carmen Alicia Martínez Torres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Erika Viviana Sandoval Rojas',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Jaime Enrique Díaz Reyes',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Lady Adriana Ariza Luque',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Miguel Guerrero Gutiérrez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Luis Jesús Pérez Madariaga',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Emilsen Bautista',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
