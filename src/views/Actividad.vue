<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
export default {
  name: 'ActividadDidactica',
  data: () => ({
    cuestionario: {
      tema: 'Introducción al análisis de circuitos eléctricos y electrónicos ',
      titulo: 'Cuestionario',
      introduccion:
        'Identificar  los conceptos básicos de los circuitos eléctricos y sus componentes, explorando sus configuraciones y funciones. ',
      barajarPreguntas: true,
      preguntas: [
        {
          id: 1,
          texto: '¿Cuál es la principal función de un circuito eléctrico? ',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Conectar dispositivos de manera aleatoria. ',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Crear una trayectoria cerrada para el flujo de corriente. ',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Reducir la resistencia en los componentes. ',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Permitir únicamente la conexión de resistencias. ',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            'En un circuito en paralelo, ¿qué se mantiene constante en todos los componentes? ',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Corriente. ', esCorrecta: false },
            { id: 'b', texto: 'Voltaje. ', esCorrecta: true },
            { id: 'c', texto: 'Potencia. ', esCorrecta: false },
            { id: 'd', texto: 'Resistencia. ', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Qué tipo de circuito combina elementos en serie y en paralelo? ',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Circuito de corriente alterna. ',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Circuito de corriente directa. ',
              esCorrecta: false,
            },
            { id: 'c', texto: 'Circuito mixto. ', esCorrecta: true },
            { id: 'd', texto: 'Circuito único. ', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Qué ley establece que la suma de corrientes en un nodo es cero? ',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ley de voltaje de Kirchhoff. ',
              esCorrecta: false,
            },
            { id: 'b', texto: 'Ley de Ohm. ', esCorrecta: false },
            {
              id: 'c',
              texto: 'Ley de corriente de Kirchhoff. ',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Ley de tensión de Kirchhoff. ',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Qué tipo de diodo emite luz cuando es polarizado directamente? ',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Diodo LED. ', esCorrecta: true },
            { id: 'b', texto: 'Diodo Zener. ', esCorrecta: false },
            { id: 'c', texto: 'Diodo Schottky. ', esCorrecta: false },
            { id: 'd', texto: 'Fotodiodo. ', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            'En un circuito en serie, ¿qué característica es constante en todos los componentes? ',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Voltaje. ', esCorrecta: false },
            { id: 'b', texto: 'Potencia. ', esCorrecta: false },
            { id: 'c', texto: 'Corriente. ', esCorrecta: true },
            { id: 'd', texto: 'Capacitancia. ', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto: '¿Cuál de los siguientes no es un tipo de filtro activo? ',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Filtro pasa bajo. ', esCorrecta: false },
            { id: 'b', texto: 'Filtro rechaza banda. ', esCorrecta: false },
            { id: 'c', texto: 'Filtro amplificador. ', esCorrecta: true },
            { id: 'd', texto: 'Filtro pasa alto. ', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Qué tipo de transistor controla la corriente a través de la tensión en la puerta? ',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Transistor de efecto de campo (FET). ',
              esCorrecta: true,
            },
            { id: 'b', texto: 'Transistor bipolar (BJT). ', esCorrecta: false },
            { id: 'c', texto: 'Fototransistor. ', esCorrecta: false },
            { id: 'd', texto: 'Transistor láser. ', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            'Un circuito en paralelo permite el funcionamiento independiente de los dispositivos conectados. ',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'c', texto: 'Verdadero.', esCorrecta: true },
            { id: 'd', texto: 'Falso.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            'En un circuito en serie, el fallo de un componente no afecta a los demás. ',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'b', texto: 'Verdadero.', esCorrecta: false },
            { id: 'a', texto: 'Falso.', esCorrecta: true },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto: 'Un diodo permite el paso de corriente en ambas direcciones. ',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'c', texto: 'Verdadero.', esCorrecta: false },
            { id: 'd', texto: 'Falso.', esCorrecta: true },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            'Los filtros activos permiten el paso o bloqueo de señales en función de su frecuencia. ',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'c', texto: 'Verdadero.', esCorrecta: true },
            { id: 'd', texto: 'Falso.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto:
            'Los circuitos eléctricos se utilizan exclusivamente para transportar electricidad. ',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'd', texto: 'Verdadero. ', esCorrecta: false },
            { id: 'c', texto: 'Falso.', esCorrecta: true },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto:
            'En un circuito mixto, la corriente se distribuye igual en todos los componentes. ',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'b', texto: 'Verdadero. ', esCorrecta: false },
            { id: 'a', texto: 'Falso.', esCorrecta: true },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto:
            'Los amplificadores operacionales pueden realizar operaciones matemáticas analógicas. ',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'b', texto: 'Verdadero. ', esCorrecta: true },
            { id: 'c', texto: 'Falso.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
