<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Componentes pasivos
    
    .row
      .col-lg-auto.d-none.d-lg-block.pe-lg-0
        div(style="background-color:#FFA3D9;height:35px;width:100px;top:35%;position:relative;")
          p.mb-0 &nbsp;
      .col-lg.ps-lg-0(data-aos="fade-up")
        .p-4(style="background-color:#DDE9F7;border-radius:20px;")
          .row
            .col-md-auto.d-none.d-md-block(style="place-self:center;")
              figure
                img(src="@/assets/curso/tema3/1.svg")
            .col-md(style="place-self:center;")
              p.mb-0 Los componentes electrónicos pasivos son aquellos que, a diferencia de los activos, no producen amplificación y se encargan de controlar la electricidad en un circuito, contribuyendo al mejor funcionamiento de los elementos activos, conocidos también como semiconductores.
    
    .cont_decorativo.mb-4.mt-5(data-aos="fade-right")
      .row
        .col-auto.pe-0
          figure
            img(src="@/assets/curso/tema1/17.svg")
        .col.ps-2(style="place-self:end;")
          h3.mb-0.mb-lg-2.pe-4 Circuito eléctrico
    
    p(data-aos="fade-right") Un circuito eléctrico se define como una serie de elementos o componentes eléctricos o electrónicos, tales como resistencias, inductancias (bobinas), condensadores, fuentes y dispositivos electrónicos semiconductores, conectados eléctricamente entre sí. La finalidad de un circuito eléctrico es generar, transportar o modificar señales electrónicas o eléctricas. Al suministrar energía eléctrica a un elemento pasivo de un circuito, este puede comportarse de distintas formas:

    .row.mt-4.justify-content-center
      .col-lg.mb-4.mb-lg-0.col-md-9(data-aos="zoom-in")
        .h-100.p-4.cont_3_1
          span 01
          p.mb-0.mt-3 Si disipa la energía, el elemento es #[strong resistivo puro].
      .col-lg.mb-4.mb-lg-0.col-md-9(data-aos="zoom-in")
        .h-100.p-4.cont_3_1
          span 02
          p.mb-0.mt-3 Si almacena la energía en un campo magnético, se comporta como una #[strong bobina pura].
      .col-lg.mb-4.mb-lg-0.col-md-9(data-aos="zoom-in")
        .h-100.p-4.cont_3_1
          span 03
          p.mb-0.mt-3 Si acumula energía en un campo eléctrico, actúa como un #[strong condensador puro].
    
    p.mt-4(data-aos="fade-right") Un mismo componente de un circuito puede presentar más de uno de estos comportamientos, e incluso los tres simultáneamente, aunque generalmente predomina uno de estos efectos.

    Separador
    
    .titulo-segundo(data-aos="flip-up")
      h2#t_3_1 3.1 Componentes básicos de un circuito eléctrico
    
    .row
      .col-lg.mb-4.mb-lg-0(data-aos="zoom-in")
        .h-100.p-4(style="background-color:#FFECF7;border-radius:14px;")
          p.mb-0  Un conductor eléctrico es un material que, al entrar en contacto con un cuerpo cargado de electricidad, permite transmitir esta carga a todos los puntos de su superficie. Está compuesto de materiales, aleaciones o compuestos con electrones libres, lo que facilita el movimiento de cargas. Estos materiales ofrecen una baja resistencia al paso de la corriente eléctrica.
      .col-lg-3.mb-4.mb-lg-0.d-none.d-lg-block(data-aos="zoom-in" data-aos-duration="900")
        figure
          img(src="@/assets/curso/tema3/2.svg")
      .col-lg(data-aos="zoom-in")
        p #[strong Generador o acumulador:] Estos dispositivos mantienen una diferencia de potencial entre los extremos de un conductor. Los generadores se clasifican en:
        ul.lista-ul.mt-3
          li.d-flex.mb-3
            i.fas.fa-check-circle(style="color:#17A197;")
            span #[strong Generadores primarios:] de un solo uso, como las pilas.
          li.d-flex.mb-0
            i.fas.fa-check-circle(style="color:#17A197;")
            span #[strong Generadores secundarios:] recargables, como las baterías o acumuladores.

    .cont_decorativo.mb-4.mt-5(data-aos="fade-right")
      .row
        .col-auto.pe-0
          figure
            img(src="@/assets/curso/tema1/17.svg")
        .col.ps-2(style="place-self:end;")
          h3.mb-0.mb-lg-2.pe-4 Receptores
    
    p(data-aos="fade-right") Un receptor eléctrico es cualquier dispositivo, aparato o máquina capaz de transformar la energía eléctrica en otro tipo de energía. Existen varios tipos de receptores según la energía producida:

    .row.mt-5
      .col-lg.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src="@/assets/curso/tema3/14.svg")
      .col-lg(data-aos="fade-left")
        .h-100.p-4(style="background-color:#D2FAF7;border-radius:14px;")
          p Ejemplos de receptores incluyen #[strong motores, resistencias y bombillas].
          .col-10.m-auto.col-md-7.col-lg-10
            figure
              img(src="@/assets/curso/tema3/3.svg")

    .cont_decorativo.mb-4.mt-5(data-aos="fade-right")
      .row
        .col-auto.pe-0
          figure
            img(src="@/assets/curso/tema1/17.svg")
        .col.ps-2(style="place-self:end;")
          h3.mb-0.mb-lg-2.pe-4 Elementos de control o maniobra
    
    p(data-aos="fade-right") Los elementos de control o maniobra son dispositivos que permiten abrir o cerrar el circuito cuando sea necesario. Existen varios tipos de elementos de control, cada uno con características específicas:

    .row.mt-4.justify-content-center
      .col-lg.mb-4.mb-lg-0.col-md-9(data-aos="zoom-in")
        .cont_3_2.h-100.p-4
          figure.mb-4
            img(src="@/assets/curso/tema3/4.svg")
          h5.mb-3 Pulsadores
          p.mb-0.text-start Permiten abrir o cerrar el circuito solo mientras se mantienen pulsados.
      .col-lg.mb-4.mb-lg-0.col-md-9(data-aos="zoom-in")
        .cont_3_2.h-100.p-4
          figure.mb-4
            img(src="@/assets/curso/tema3/5.svg")
          h5.mb-3 Interruptores
          p.mb-0.text-start  Permiten abrir o cerrar el circuito, permaneciendo en la misma posición hasta que se actúa sobre él nuevamente.
      .col-lg.mb-4.mb-lg-0.col-md-9(data-aos="zoom-in")
        .cont_3_2.h-100.p-4
          figure.mb-4
            img(src="@/assets/curso/tema3/6.svg")
          h5.mb-3 Conmutadores
          p.mb-0.text-start  Permiten abrir o cerrar el circuito desde distintos puntos. Un tipo especial es el conmutador de cruce, que invierte la polaridad del circuito para invertir el giro de motores.

    Separador
    
    .titulo-segundo(data-aos="flip-up")
      h2#t_3_2 3.2 Elementos de un circuito eléctrico
    
    p(data-aos="fade-right") Cada componente en un circuito eléctrico cumple una función específica y se clasifica en elementos resistivos, inductivos o capacitivos. A continuación se describe cada uno de estos elementos:

    .cont_decorativo.mb-4.mt-5(data-aos="fade-right")
      .row
        .col-auto.pe-0
          figure
            img(src="@/assets/curso/tema1/17.svg")
        .col.ps-2(style="place-self:end;")
          h3.mb-0.mb-lg-2.pe-4 Elementos resistivos (resistencias) 
    
    .row(style="background-color:#FFECF7;border-radius:14px;")
      .col-lg-auto.d-none.d-lg-block.pe-lg-0.ps-lg-0(data-aos="fade-right")
        .h-100.d-flex.align-content-center.p-3.pb-0(style="background-color:#BDD4F0;border-radius:14px;")
          figure
            img(src="@/assets/curso/tema3/7.svg")
      .col-lg.ps-lg-0(data-aos="fade-left")
        .p-4
          p La resistencia eléctrica (R) es la que dificulta o se opone al paso de una corriente eléctrica. La resistencia se mide en ohmios (Ω), lo que corresponde a la resistencia de un elemento que, al aplicarle una diferencia de potencial (d.d.p.) de 1 volt, circula por él 1 amperio, es decir, 1 Ω = 1 V/A.
          .row.mt-4
            .col-md-auto
              p.fw-bold Matemáticamente, se expresa así:
            .col-md-auto
              figure
                img(src="@/assets/curso/tema3/8.svg" style="max-width:350px;")
    
    .cont_titulo_3.mt-5.mb-4.ps-3.pe-3.p-2(data-aos="flip-up")
      h5.mb-0 Código de colores en un resistor:
    
    p(data-aos="fade-up") Para facilitar la identificación del valor de la resistencia, se usa un código de colores pintado en bandas sobre el resistor. Cada color representa un número o factor que se usa para obtener el valor final del resistor.

    .cont_3_3.mt-5
      .col-xl-10.m-auto
        .titulo-sexto.color-acento-contenido(data-aos="fade-down")
          h5 Tabla 1.
          span Código de colores en un resistor
        .tabla-a.color-acento-botones(data-aos="fade-up")
          table
            thead(style="border:0;")
              tr.text-center(style="background-color:#FFA3D9;")
                th(style="border:0;") Color
                th(style="border:0;") 1ra y 2da banda
                th(style="border:0;") 3ra banda (Factor multiplicador)
                th(style="border:0;") 4ta banda (Tolerancia %)
            tbody.text-center
              tr.fw-bold(style="background-color:#F6F6F6;")
                td.p-3(style="background-color:#BFBFBF;border:0;border-right:1px #AFAFAF solid;") Plata
                td.p-3(style="border:0;border-right:1px #AFAFAF solid;") 
                td.p-3(style="border:0;border-right:1px #AFAFAF solid;") 0.01
                td.p-3(style="border:0;") +/-10
              tr.fw-bold(style="background-color:#FFF;")
                td.p-3(style="background-color:#FFC000;border:0;border-right:1px #AFAFAF solid;") Oro
                td.p-3(style="border:0;border-right:1px #AFAFAF solid;") 
                td.p-3(style="border:0;border-right:1px #AFAFAF solid;") 0.1
                td.p-3(style="border:0;") +/-5
              tr.fw-bold(style="background-color:#F6F6F6;")
                td.p-3.text-white(style="background-color:#000;border:0;border-right:1px #AFAFAF solid;") Negro
                td.p-3(style="border:0;border-right:1px #AFAFAF solid;") 0
                td.p-3(style="border:0;border-right:1px #AFAFAF solid;") X1
                td.p-3(style="border:0;") Sin color +/-20
              tr.fw-bold(style="background-color:#FFF;")
                td.p-3.text-white(style="background-color:#996633;border:0;border-right:1px #AFAFAF solid;") Marrón
                td.p-3(style="border:0;border-right:1px #AFAFAF solid;") 0
                td.p-3(style="border:0;border-right:1px #AFAFAF solid;") X10
                td.p-3(style="border:0;") Plateado +/-1
              tr.fw-bold(style="background-color:#F6F6F6;")
                td.p-3(style="background-color:#FF0000;border:0;border-right:1px #AFAFAF solid;") Rojo
                td.p-3(style="border:0;border-right:1px #AFAFAF solid;") 2
                td.p-3(style="border:0;border-right:1px #AFAFAF solid;") X100
                td.p-3(style="border:0;") Dorado +/-2
              tr.fw-bold(style="background-color:#FFF;")
                td.p-3(style="background-color:#FF6600;border:0;border-right:1px #AFAFAF solid;") Naranja
                td.p-3(style="border:0;border-right:1px #AFAFAF solid;") 3
                td.p-3(style="border:0;border-right:1px #AFAFAF solid;") X1.000
                td.p-3(style="border:0;") +/-3
              tr.fw-bold(style="background-color:#F6F6F6;")
                td.p-3(style="background-color:#FFFF00;border:0;border-right:1px #AFAFAF solid;") Amarillo
                td.p-3(style="border:0;border-right:1px #AFAFAF solid;") 4
                td.p-3(style="border:0;border-right:1px #AFAFAF solid;") X10.000
                td.p-3(style="border:0;") +/-4
              tr.fw-bold(style="background-color:#FFF;")
                td.p-3(style="background-color:#7CCA62;border:0;border-right:1px #AFAFAF solid;") Verde
                td.p-3(style="border:0;border-right:1px #AFAFAF solid;") 5
                td.p-3(style="border:0;border-right:1px #AFAFAF solid;") X100.000
                td.p-3(style="border:0;") 
              tr.fw-bold(style="background-color:#F6F6F6;")
                td.p-3(style="background-color:#009DD9;border:0;border-right:1px #AFAFAF solid;") Azul
                td.p-3(style="border:0;border-right:1px #AFAFAF solid;") 6
                td.p-3(style="border:0;border-right:1px #AFAFAF solid;") X1.000.000
                td.p-3(style="border:0;") 
              tr.fw-bold(style="background-color:#FFF;")
                td.p-3.text-white(style="background-color:#CF0B72;border:0;border-right:1px #AFAFAF solid;") Violeta
                td.p-3(style="border:0;border-right:1px #AFAFAF solid;") 7
                td.p-3(style="border:0;border-right:1px #AFAFAF solid;") 
                td.p-3(style="border:0;") 
              tr.fw-bold(style="background-color:#F6F6F6;")
                td.p-3(style="background-color:#ABABAB;border:0;border-right:1px #AFAFAF solid;") Gris
                td.p-3(style="border:0;border-right:1px #AFAFAF solid;") 8
                td.p-3(style="border:0;border-right:1px #AFAFAF solid;") X0.1
                td.p-3(style="border:0;") 
              tr.fw-bold(style="background-color:#FFF;") 
                td.p-3(style="border:0;border-right:1px #AFAFAF solid;border-bottom:1px #AFAFAF solid;") Blanco
                td.p-3(style="border:0;border-right:1px #AFAFAF solid;border-bottom:1px #AFAFAF solid;") 9
                td.p-3(style="border:0;border-right:1px #AFAFAF solid;border-bottom:1px #AFAFAF solid;") X0.01
                td.p-3(style="border:0;border-bottom:1px #AFAFAF solid;") 

        .p-0.p-lg-4.mt-5(style="background-color:#5C95DA;" data-aos="fade-up")
          .row
            .col-lg.pe-lg-0
              .bg-white.p-4.h-100
                p.fw-bold.mb-0 Ejemplo
                p.mb-0 Si los colores son (Marrón - Negro - Rojo - Oro), su valor en ohmios (según la ley de Ohm) es: 10 x 100 = 1000 Ω = 1K Ω, con una tolerancia de 5%.
            .col-lg-auto.ps-lg-0
              .p-4.d-flex.align-content-center.h-100(style="background-color:#BDD4F0;")
                figure.col-md-9.col-12.m-auto.col-lg-12
                  img(src="@/assets/curso/tema3/9.svg")

    .cont_decorativo.mb-4.mt-5(data-aos="fade-right")
      .row
        .col-auto.pe-0
          figure
            img(src="@/assets/curso/tema1/17.svg")
        .col.ps-2(style="place-self:end;")
          h3.mb-0.mb-lg-2.pe-4 Elementos inductivos (bobinas)
    
    .row
      .col-lg(data-aos="fade-right")
        p #[strong Un inductor o bobina (L)] es un componente pasivo de un circuito eléctrico que, debido al fenómeno de la autoinducción, almacena energía en forma de campo magnético. Un inductor está constituido usualmente por una cabeza hueca de una bobina de conductor, típicamente alambre o hilo de cobre esmaltado.
        p La inducción se mide en voltio x segundo/amperio y se llama henrio (H). Es decir, 1 H = 1 V.s/A. Una bobina tiene un coeficiente de autoinducción de 1 H si al circular por ella una corriente que varíe a razón de A/s se induce una f.e.m. (fuerza electromotriz, voltaje inducido) entre sus bornes de 1 V.
        p Matemáticamente, se expresa así:
        figure.mt-4
          img(src="@/assets/curso/tema3/10.svg" style="max-width:350px;")
      .col-lg-auto.d-none.d-lg-block(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema3/11.png")
    
    .cont_decorativo.mb-4.mt-5(data-aos="fade-right")
      .row
        .col-auto.pe-0
          figure
            img(src="@/assets/curso/tema1/17.svg")
        .col.ps-2(style="place-self:end;")
          h3.mb-0.mb-lg-2.pe-4 Elementos capacitivos (condensadores)
    
    p(data-aos="fade-left") Un condensador o capacitor (C) es un componente pasivo que almacena energía eléctrica. Está formado por un par de superficies conductoras en situación de influencia total, generalmente en forma de placas, esferas o láminas, separados por un material dieléctrico o por el vacío, que, sometidos a una diferencia de potencial, adquieren una determinada carga eléctrica, positiva en una de las placas y negativa en la otra.
    
    .row.mt-4
      .col-lg-auto.d-none.d-lg-block(data-aos="fade-right")
        figure
          img(src="@/assets/curso/tema3/12.png")
      .col-lg(data-aos="fade-left")
        p La capacitancia se mide en faradios (F). La capacidad de un condensador es de 1 faradio cuando almacena 1 culombio (C) de carga al aplicarle una diferencia de potencial de 1 volt, es decir 1 F = 1 C/V.
        p Matemáticamente, se expresa así:
        figure.mt-4
          img(src="@/assets/curso/tema3/13.svg" style="max-width:350px;")
        p.mt-4 Para manejar valores más pequeños se usan los submúltiplos:
        ul.lista-ul.mt-3
          li.d-flex
            i.fas.fa-check-circle(style="color:#17A197;")
            span 1 µF = 1 microfaradio = 10⁻⁶ F
          li.d-flex
            i.fas.fa-check-circle(style="color:#17A197;")
            span 1 pF = 1 picofaradio = 10⁻¹² F




</template>

<script>
export default {
  name: 'Tema3',
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
