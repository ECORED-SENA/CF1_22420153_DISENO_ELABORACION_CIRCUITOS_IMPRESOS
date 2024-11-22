<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    p(data-aos="fade-down" data-aos-duration="900") Un circuito eléctrico es una interconexión de elementos que permite el flujo de corriente para realizar diversas funciones en sistemas eléctricos y electrónicos. Estos componentes, como resistencias, condensadores, inductores y semiconductores, se organizan en configuraciones específicas, generando trayectorias cerradas donde la energía puede circular y transformarse según sea necesario.

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mt-4(data-aos="flip" data-aos-duration="900")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/intro1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        figure.mb-2.d-block
          img(src="@/assets/curso/intro2.svg" style="max-width:106px;")
        p.mb-0 Existen diferentes tipos de circuitos, clasificados en función de la corriente que emplean, ya sea directa o alterna; y de la disposición de sus elementos, que puede ser en serie, paralelo o mixta. Cada configuración impacta en la forma en que se distribuyen el voltaje y la corriente, adaptando el circuito a necesidades específicas en aplicaciones domésticas e industriales.

    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
