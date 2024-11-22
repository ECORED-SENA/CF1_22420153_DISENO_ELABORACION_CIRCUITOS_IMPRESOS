<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5(data-aos="fade-down" data-aos-duration="800") A continuación, se presenta una síntesis de la temática estudiada en el componente formativo.   

    .row.justify-content-center
      .col-lg-10.mb-5
        figure(data-aos="zoom-in" data-aos-duration="900")
          img(src="@/assets/curso/sintesis.svg", alt="Un circuito eléctrico es un sistema cerrado que permite el flujo de corriente y se clasifica según el tipo de corriente (DC o AC) y configuración (serie, paralelo o mixto). Sus componentes incluyen elementos activos (diodos, transistores) y pasivos (resistencias, condensadores). Los semiconductores, como los diodos y transistores, regulan el flujo y amplifican señales, mientras que los LEDs emiten luz. Los filtros controlan el paso de señales y el control se realiza mediante interruptores y conmutadores para abrir o cerrar el circuito.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
