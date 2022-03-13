<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 7
      h1 Atención al cliente

    .row
      .col-md-6.mb-2
        p(data-aos="fade-left") La atención al cliente se centra en resolver los problemas que los clientes han identificado, se enfoca en la atención, acompañamiento o soporte que una empresa otorga a sus clientes al momento de ofrecer un producto o servicio. Su principal objetivo es proporcionar los medios y los métodos para solucionar el problema o la preocupación en cuestión de los clientes.
        p.mt-4(data-aos="fade-left") Por otra parte, muchas empresas desconocen que existe una gran variedad de servicios de atención al cliente y que estas comparten características y variables que se relacionan directamente con la forma de relación entre empresa y cliente. A partir de aquí, se definen protocolos de atención, calidad e imagen de marca.
        p.mt-4(data-aos="fade-left") La importancia y función de la atención al cliente, permite:
      .col-md-6
        img(src="@/assets/curso/temas/tema7/1.png" data-aos="fade-right")

    ol.lista-ol--cuadro.lista-ol--separador.mt-5
      li(data-aos="fade-up")
        .lista-ol--cuadro__vineta
          span 1
        | Interactuar con los clientes pensando en crear una buena relación.
      li(data-aos="fade-up")
        .lista-ol--cuadro__vineta
          span 2
        | Prever y anticipar las necesidades de los clientes para sorprender positivamente con la mejor solución.
      li(data-aos="fade-up")
        .lista-ol--cuadro__vineta
          span 3
        | Simplificar y hacer que los canales de contacto sean más accesibles, aumentando la confianza y la fidelidad de los clientes.Recursos o materiales.
      li(data-aos="fade-up")
        .lista-ol--cuadro__vineta
          span 4
        | Conocer mejor las metas del negocio y entender su comportamiento para elaborar la mejor estrategia de acuerdo al recorrido del consumidor.
      li(data-aos="fade-up")
        .lista-ol--cuadro__vineta
          span 5
        | Personalizar la relación y el abordaje según cada cliente y situación.
      li(data-aos="fade-up")
        .lista-ol--cuadro__vineta
          span 6
        | Crear una ventaja competitiva y diferenciarse de la competencia.

    p.mt-5(data-aos="fade-up") A continuación, se mencionan los tipos de atención que se dan entre las empresas y los consumidores:

    figure.mt-5
      img(src="@/assets/curso/temas/tema7/2.png" data-aos="fade-up")

    br
    .row.mt-5.p-4(style="background-color:#FFDE96;")
      .col-md-2.col-sm-4.text-center(style="place-self:center;")
        img(src="@/assets/curso/temas/tema7/3.png" data-aos="fade-left" style="max-width:150px;display:inline;")
      .col-md-10.col-sm-8(style="place-self:center;")
        p(data-aos="fade-right") De acuerdo con lo anterior, es importante tener presente que los diferentes canales de comunicación utilizados para la atención al cliente, permitirán que la empresa se adecue a los estándares de calidad, generando una mayor fidelización de clientes y ventas.

    p.mt-5(data-aos="fade-up") Por otra parte, es importante mencionar que en la actualidad cada vez más las personas entran a formar parte de un universo completamente nuevo. Se puede decir que estamos en la era del cliente y esto exige que se realice un buen plan de acción para el servicio al cliente. Hoy vemos cómo están cambiando los medios y tipos de atención al cliente, vemos la inteligencia artificial y una continua mejora en los chatbots. Los primeros permiten proporcionar información de diferentes empresas o productos con una simple búsqueda o consulta del tema en su dispositivo, aplicación o portal web. Y el segundo, vemos cómo a partir de la inteligencia artificial, estos han mejorado y pueden entender el lenguaje natural y siguen aprendiendo y evolucionando con cada conversación, de esta forma mejora la interacción con las personas.




</template>

<script>
export default {
  name: 'Tema7',
  data: () => ({}),
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
