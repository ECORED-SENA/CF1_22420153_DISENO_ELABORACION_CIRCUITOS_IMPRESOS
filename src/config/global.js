export default {
  global: {
    componenteFormativo: 'Diseño y elaboración de circuitos impresos',
    descripcionCurso:
      'Un circuito eléctrico conecta componentes como resistencias, condensadores e inductores en una trayectoria cerrada. Puede operar con corriente directa o alterna y configurarse en serie, paralelo o mixto, afectando la distribución de corriente y voltaje. Los componentes incluyen resistencias, inductores, capacitores, diodos y transistores, fundamentales para controlar, almacenar o amplificar la electricidad en sistemas electrónicos.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
    ],
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
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Circuito eléctrico ',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Circuitos en paralelo ',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Circuitos en serie ',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Circuitos mixtos ',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Componentes activos ',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Diodos ',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Transistores ',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Amplificadores operacionales ',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Componentes pasivos ',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Componentes básicos de un circuito eléctrico ',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Elementos de un circuito eléctrico ',
            hash: 't_3_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
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
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
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
  complementario: [
    {
      tema: 'Circuito eléctrico ',
      referencia:
        'A Cierta Ciencia. (2022). ¿Qué son los Circuitos Eléctricos? Y sus tipos: Serie y Paralelo. [Archivo de video] Youtube.   ',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=GUESpG6inds&ab_channel=ACiertaCiencia  ',
    },
    {
      tema: 'Componentes activos ',
      referencia:
        'Manik (2020). COMPONENTES ELECTRÓNICOS - Resumen / Idea intuitiva. [Archivo de video] Youtube.   ',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=1NRFL6YYtzg&t=25s&ab_channel=Manik  ',
    },
    {
      tema: 'Diodos ',
      referencia:
        'Mentalidad De Ingeniería (2020). Diodos Explicados. [Archivo de video] Youtube. ',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=aPY3I8pG478&ab_channel=MentalidadDeIngenier%C3%ADa  ',
    },
    {
      tema: 'Transistores ',
      referencia:
        'Mentalidad De Ingeniería (2021). Transistor Explicado - Cómo Funcionan los Transistores. [Archivo de video] Youtube. ',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=zh7PeHAZRLY&ab_channel=MentalidadDeIngenier%C3%ADa  ',
    },
    {
      tema: 'Amplificadores operacionales ',
      referencia:
        'Electronica Spicus99 (2021). ¿Qué es un amplificador operacional? [Archivo de video] Youtube. ',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=mESXqQ-gfcg&ab_channel=ElectronicaSpicus99  ',
    },
    {
      tema: 'Componentes pasivos ',
      referencia:
        'Ricardo Luna-Rubio (2021). ELEMENTOS PASIVOS | CIRCUITOS ELÉCTRICOS [Archivo de video] Youtube. ',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=Ub9yprH9IJo&ab_channel=RicardoLuna-Rubio  ',
    },
  ],
  glosario: [
    {
      termino: 'Circuito eléctrico',
      significado:
        'sistema cerrado que permite el flujo de corriente eléctrica. ',
    },
    {
      termino: 'Corriente directa (DC)',
      significado: 'tipo de corriente que fluye en una sola dirección. ',
    },
    {
      termino: 'Corriente alterna (AC)',
      significado: 'tipo de corriente que cambia de dirección periódicamente. ',
    },
    {
      termino: 'Componente activo',
      significado:
        'elemento que amplifica o genera energía en el circuito, como diodos y transistores. ',
    },
    {
      termino: 'Componente pasivo',
      significado:
        'elemento que almacena o conduce energía sin amplificar, como resistencias y condensadores. ',
    },
    {
      termino: 'Diodo',
      significado:
        'dispositivo semiconductor que permite el flujo de corriente en una sola dirección. ',
    },
    {
      termino: 'Transistor',
      significado:
        'dispositivo semiconductor usado para amplificar o conmutar señales en un circuito. ',
    },
    {
      termino: 'Filtro',
      significado:
        'componente que permite el paso de ciertas frecuencias y bloquea otras. ',
    },
    {
      termino: 'LED',
      significado:
        'diodo emisor de luz que se enciende al polarizarse en un circuito. ',
    },
    {
      termino: 'Interruptor',
      significado:
        'dispositivo que permite abrir o cerrar el circuito para controlar el flujo de corriente. ',
    },
  ],
  referencias: [
    {
      referencia:
        'Alexander, C. K., & Sadiku, M. N. O. (2017). Fundamentals of Electric Circuits (6th ed.). McGraw-Hill Education.',
      link: '',
    },
    {
      referencia:
        'Boylestad, R. L., & Nashelsky, L. (2020). Electronic Devices and Circuit Theory (12th ed.). Pearson Education.',
      link: '',
    },
    {
      referencia:
        'Dorf, R. C., & Svoboda, J. A. (2020). Introduction to Electric Circuits (10th ed.). Wiley. ',
      link: '',
    },
    {
      referencia:
        'Floyd, T. L. (2019). Principles of Electric Circuits (10th ed.). Pearson Education. ',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Francisco Arnaldo Vargas Bermúdez ',
          cargo: 'Experto temático  ',
          centro: 'Centro de Comercio y Servicios - Regional Tolima ',
        },
        {
          nombre: 'Paola Alexandra Moya Peralta',
          cargo: 'Evaluadora instruccional ',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Juan Daniel Polanco Muñoz',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Luis Jesús Pérez Maadariaga',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Jaime Hernán Tejada Llano',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Margarita Marcela Medrano Gómez',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
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
