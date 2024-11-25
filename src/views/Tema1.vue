<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Circuito eléctrico
    
    .row(data-aos="fade-up")
      .col-md-auto.d-none.d-md-block(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema1/1.svg")
      .col-md(style="place-self:center;")
        p.mb-0 #[strong Un circuito eléctrico] permite la interconexión de varios componentes, tales como resistencias, condensadores, inductores, fuentes de alimentación, interruptores y semiconductores, dentro de una trayectoria cerrada. Estos circuitos se clasifican según el tipo de señal eléctrica que emplean —ya sea corriente directa o alterna— y según sus elementos internos, que pueden ser exclusivamente eléctricos o incluir también componentes electrónicos. Los componentes electrónicos pueden ser analógicos, digitales o una combinación de ambos.
    
    p.mt-4(data-aos="fade-right") Para analizar los circuitos, es importante conocer su #[strong configuración] que permite evaluar su funcionamiento en distintas disposiciones, como se detalla a continuación:

    .col-xl-10.m-auto.mt-4
      .row.justify-content-center
        .col-lg.mb-4.col-md-9(data-aos="zoom-in")
          .cont_1_1.h-100.p-4
            figure.m-auto.col-10.mb-4
              img.d-inline(src="@/assets/curso/tema1/2.svg")
            p.mb-0 #[strong Circuito de corriente directa o alterna:] los circuitos se dividen según la señal eléctrica con la que operan.
        .col-lg.mb-4.col-md-9(data-aos="zoom-in")
          .cont_1_1.h-100.p-4
            figure.m-auto.col-10.mb-4
              img.d-inline(src="@/assets/curso/tema1/3.svg")
            p.mb-0 #[strong Circuito con elementos eléctricos o electrónicos:] puede estar compuesto solo por elementos eléctricos o incluir componentes electrónicos.
    
    p.mt-5(data-aos="fade-right") Al analizar un circuito eléctrico, también es fundamental considerar su configuración en serie, paralelo o mixta, ya que cada tipo tiene características particulares en la distribución de corriente y voltaje.

    Separador

    .titulo-segundo(data-aos="flip-up")
      h2#t_1_1 1.1 Circuitos en paralelo
    
    p(data-aos="fade-right") En un circuito en paralelo, todos los dispositivos conectados comparten los mismos terminales de entrada y salida. Esto mantiene un voltaje constante a través de cada elemento, mientras que la corriente se distribuye entre los componentes de acuerdo con su valor de resistencia. Este tipo de configuración es útil en sistemas como las luces de una casa, donde cada bombilla opera de manera independiente de las demás.

    .row.mt-5.justify-content-center
      .col-lg.mb-4.mb-lg-0.col-md-9(data-aos="zoom-in")
        .cont_1_2.h-100.p-4
          figure.mb-3
            img(src="@/assets/curso/tema1/4.svg")
          h5.mb-3 Voltaje
          p Es constante en todos los elementos conectados en paralelo.
      .col-lg.mb-4.mb-lg-0.col-md-9(data-aos="zoom-in")
        .cont_1_2.h-100.p-4
          figure.mb-3
            img(src="@/assets/curso/tema1/5.svg")
          h5.mb-3 Corriente
          p Se distribuye entre los componentes según el valor de cada uno, utilizando el divisor de corriente.
      .col-lg.mb-4.mb-lg-0.col-md-9(data-aos="zoom-in")
        .cont_1_2.h-100.p-4
          figure.mb-3
            img(src="@/assets/curso/tema1/6.svg")
          h5.mb-3 Ejemplo de comparación
          p Similar a dos tanques de agua conectados en paralelo, compartiendo entrada y salida comunes.
    
    .row.mt-5
      .col-lg-auto.d-none.d-lg-block(data-aos="fade-right")
        figure
          img(src="@/assets/curso/tema1/7.svg")
      .col-lg(data-aos="fade-left")
        p Para el análisis de circuitos eléctricos con componentes en paralelo, es fundamental calcular las resistencias y capacitancias equivalentes. Estas fórmulas permiten determinar el valor total de resistencia y capacitancia en un circuito en paralelo, facilitando el análisis del comportamiento general del sistema:
        .p-4.p-lg-5(style="background-color:#FFECF7;")
          .row
            .col-lg.mb-4.mb-lg-0
              figure
                img(src="@/assets/curso/tema1/8.svg")
            .col-lg
              figure
                img(src="@/assets/curso/tema1/9.svg")
    
    Separador

    .titulo-segundo(data-aos="flip-up")
      h2#t_1_2 1.2 Circuitos en serie
    
    p(data-aos="fade-right") En un circuito en serie, los componentes se conectan secuencialmente: la salida de cada elemento se conecta a la entrada del siguiente. En esta configuración, la corriente es constante en toda la trayectoria, mientras que el voltaje se distribuye proporcionalmente según la resistencia de cada componente. Un ejemplo de esta configuración es una cadena de luces navideñas, donde si un elemento falla, el flujo de corriente se interrumpe en toda la cadena.

    .row.mt-5.justify-content-center
      .col-lg.mb-4.mb-lg-0.col-md-9(data-aos="zoom-in")
        .cont_1_2.h-100.p-4
          figure.mb-3
            img(src="@/assets/curso/tema1/4.svg")
          h5.mb-3 Voltaje
          p Se distribuye entre los componentes según su resistencia.
      .col-lg.mb-4.mb-lg-0.col-md-9(data-aos="zoom-in")
        .cont_1_2.h-100.p-4
          figure.mb-3
            img(src="@/assets/curso/tema1/5.svg")
          h5.mb-3 Corriente
          p Es constante en toda la trayectoria del circuito en serie.
      .col-lg.mb-4.mb-lg-0.col-md-9(data-aos="zoom-in")
        .cont_1_2.h-100.p-4
          figure.mb-3
            img(src="@/assets/curso/tema1/6.svg")
          h5.mb-3 Ejemplo de comparación
          p Similar a tanques de agua en serie, donde el flujo pasa secuencialmente de uno al siguiente.
    
    .row.mt-5
      .col-lg(data-aos="fade-right")
        p En circuitos en serie, los componentes se conectan de manera secuencial, permitiendo que la corriente sea constante en todo el circuito. Para analizar estos circuitos, es fundamental calcular la resistencia y la capacitancia equivalentes, ya que estos valores determinan cómo se distribuye el voltaje en el sistema. A continuación, se presentan las fórmulas clave para obtener estos valores en una configuración en serie:
        .p-4.p-lg-5(style="background-color:#DDE9F7;")
          .row
            .col-lg.mb-4.mb-lg-0
              figure
                img(src="@/assets/curso/tema1/10.svg")
            .col-lg
              figure
                img(src="@/assets/curso/tema1/11.svg")
      .col-lg-auto.d-none.d-lg-block(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema1/12.svg")

    Separador
    
    .cont_1_3
      .titulo-segundo(data-aos="flip-up")
        h2#t_1_3 1.3 Circuitos mixtos
      
      p(data-aos="fade-right") Un circuito mixto combina elementos en serie y en paralelo, lo que permite aprovechar las características de ambas configuraciones. En este tipo de circuito, algunos componentes pueden funcionar de manera independiente, mientras que otros dependen de la continuidad de la corriente en la trayectoria.

      .col-xl-10.m-auto.mt-5
        .row
          .col-lg-auto.pe-lg-0(data-aos="fade-right")
            .h-100.p-4.d-flex.align-content-center.align-items-center(style="background-color:#FFD9EF;")
              figure.m-auto.col-9.col-md-7.col-lg-12
                img(src="@/assets/curso/tema1/14.svg")
          .col-lg.ps-lg-0(data-aos="fade-left")
            .h-100.p-4(style="background-color:#FFF5FA;")
              figure.mb-2
                img(src="@/assets/curso/tema1/15.svg" style="max-width:61px;")
              p.mb-5 #[strong Serie y paralelo.] Combina tramos en paralelo (funcionamiento independiente) y tramos en serie (dependen de la continuidad).
              figure.mb-2
                img(src="@/assets/curso/tema1/16.svg" style="max-width:61px;")
              p.mb-0 #[strong Resistencia equivalente.] Se calcula sumando las resistencias en serie y aplicando las reglas de resistencia en paralelo.
    
    .cont_decorativo.mb-4.mt-5(data-aos="fade-right")
      .row
        .col-auto.pe-0
          figure
            img(src="@/assets/curso/tema1/17.svg")
        .col.ps-2(style="place-self:end;")
          h3.mb-0.mb-lg-2.pe-4 Conceptos clave y leyes fundamentales
    
    p(data-aos="fade-left") Para un análisis completo de los circuitos, es importante considerar ciertos conceptos y leyes, incluyendo los siguientes:

    br
    .row.mt-4
      .col-md-6.col-lg.mb-5.mb-lg-0(data-aos="zoom-in")
        .cont_1_4.h-100.p-4.pt-0
          figure.mb-2
            img(src="@/assets/curso/tema1/18.svg")
          p.fw-bold.mb-0 Conductor
          p.mb-0 Cable de resistencia despreciable que conecta los elementos del circuito.
      .col-md-6.col-lg.mb-5.mb-lg-0(data-aos="zoom-in")
        .cont_1_4.h-100.p-4.pt-0
          figure.mb-2
            img(src="@/assets/curso/tema1/18.svg")
          p.fw-bold.mb-0 Rama
          p.mb-0 Conjunto de componentes entre dos nodos.
      .col-md-6.col-lg.mb-5.mb-lg-0(data-aos="zoom-in")
        .cont_1_4.h-100.p-4.pt-0
          figure.mb-2
            img(src="@/assets/curso/tema1/18.svg")
          p.fw-bold.mb-0 Malla
          p.mb-0 Grupo de ramas que forman un lazo en la red.
      .col-md-6.col-lg.mb-5.mb-lg-0(data-aos="zoom-in")
        .cont_1_4.h-100.p-4.pt-0
          figure.mb-2
            img(src="@/assets/curso/tema1/18.svg")
          p.fw-bold.mb-0 Nodo
          p.mb-0 Punto de unión de varios conductores en un circuito.

    p.mt-4.mt-lg-5(data-aos="fade-right") Para un análisis profundo de los circuitos eléctricos, es fundamental comprender las leyes que gobiernan el comportamiento de la corriente y el voltaje dentro de un circuito. Estas leyes permiten calcular y predecir cómo se distribuyen estos valores en diversas configuraciones de componentes y son esenciales en la resolución de circuitos complejos. A continuación, se presentan tres leyes clave para el análisis de circuitos eléctricos:

    .row.mt-5
      .col-lg-auto.d-none.d-lg-block(data-aos="fade-right")
        figure 
          img(src="@/assets/curso/tema1/19.png")
      .col-lg(data-aos="zoom-in")
        AcordionA(tipo="a" clase-tarjeta="tarjeta")
          .row.col-xl-11.m-auto(titulo="Ley de corriente de Kirchhoff")
            p La suma de las corrientes que ingresan a un nodo es igual a la suma de las que salen de él.
            figure
              img(src="@/assets/curso/tema1/20.svg" style="max-width:300px;")
          .row.col-xl-11.m-auto(titulo="Ley de tensión de Kirchhoff")
            p La suma de las tensiones en un lazo debe ser cero, garantizando la conservación de energía en un circuito.
            figure
              img(src="@/assets/curso/tema1/21.svg" style="max-width:300px;")
          .row.col-xl-11.m-auto(titulo="Ley de Ohm")
            p La tensión en una resistencia es el producto de la resistencia y la corriente que fluye a través de ella.
            figure
              img(src="@/assets/curso/tema1/22.svg" style="max-width:300px;")



      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
