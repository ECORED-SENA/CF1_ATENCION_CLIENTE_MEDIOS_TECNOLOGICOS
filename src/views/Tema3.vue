<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 La organización

    .row
      .col-md-6.mb-2
        h5(data-aos="fade-left") Una organización es una asociación de personas que se relacionan entre sí y utilizan recursos de diversa índole con el fin de lograr determinados objetivos o metas.
        p.mt-5(data-aos="fade-up") En otras palabras, es una estructura ordenada donde coexisten e interactúan personas con diversos roles, responsabilidades o cargos que buscan alcanzar un objetivo particular. Es preciso mencionar, que esta cuenta con normas (formales o informales) que especifican la posición de cada persona en la estructura y las funciones que debería realizar.
        p.mt-4(data-aos="fade-up") Algunos componentes básicos o esenciales de una organización, son:
      .col-md-6
        img(src="@/assets/curso/temas/tema3/1.png" data-aos="fade-right")

    ol.lista-ol--cuadro.lista-ol--separador.mt-5
      li(data-aos="fade-up")
        .lista-ol--cuadro__vineta
          span 1
        | Un grupo de personas que interactúan entre sí.
      li(data-aos="fade-up")
        .lista-ol--cuadro__vineta
          span 2
        | Un conjunto de funciones o actividades que se realizan de forma coordinada con el fin de alcanzar algún objetivo.
      li(data-aos="fade-up")
        .lista-ol--cuadro__vineta
          span 3
        | Objetivos y metas.
      li(data-aos="fade-up")
        .lista-ol--cuadro__vineta
          span 4
        | Recursos o materiales.
      li(data-aos="fade-up")
        .lista-ol--cuadro__vineta
          span 5
        | Normas o convenciones que definen la relación de las personas o trabajadores y su rol en la organización.

    h5.mt-5(data-aos="fade-up") Tipos de organizaciones
    p(data-aos="fade-up") Las organizaciones se pueden clasificar de diversas formas. A continuación, vemos algunas de las más relevantes:

    SlyderF.mt-5(columnas="col-lg-6 col-xl-4 col-md-4")
      .tarjeta.color-acento-botones.p-5(style="background-color:#FADE9F;border-radius:0px;min-height:650px;")
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema3/2.png' alt='')
        h5.mt-5 Según la estructura
        p Las organizaciones pueden clasificarse en formales e informales.
        p.mt-4 #[strong Formales:] son planificadas y cuentan con una estructura jerárquica definida junto con normas de funcionamiento.
        p.mt-2 #[strong Informales:] nacen de manera espontánea por la afinidad de las personas y el descubrimiento de intereses comunes.
      .tarjeta.color-acento-botones.p-5(style="background-color:#A3A5F9;border-radius:0px;min-height:650px;")
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema3/3.png' alt='')
        h5.mt-5 Según su localización
        p Pueden ser locales, nacionales e internacionales. Así, por ejemplo, un club deportivo puede ser local, y de tipo internacional tenemos la Organización de las Naciones Unidas.
      .tarjeta.color-acento-botones.p-5(style="background-color:#FADE9F;border-radius:0px;min-height:650px;")
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema3/4.png' alt='')
        h5.mt-5 Según su tamaño
        p Pueden ser pequeñas, medianas o grandes. Para definir el tamaño relativo se pueden utilizar diversos criterios. Por ejemplo, en el caso de las empresas, se tienen en cuenta el número de trabajadores y el ingreso (o patrimonio en su defecto).
      .tarjeta.color-acento-botones.p-5(style="background-color:#A3A5F9;border-radius:0px;min-height:650px;")
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema3/5.png' alt='')
        h5.mt-5 Según su propiedad
        p Pueden ser de propiedad pública (del Estado o gobierno) o privada (de personas comunes o jurídicas). Por ejemplo, los municipios son parte del gobierno, mientras que una empresa textil puede ser de propiedad de privados.
      .tarjeta.color-acento-botones.p-5(style="background-color:#FADE9F;border-radius:0px;min-height:650px;")
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema3/6.png' alt='')
        h5.mt-5 Según su fin
        p Pueden ser con o sin fines de lucro. Por ejemplo, los bancos tienen ánimo de lucro, mientras que las organizaciones de ayuda humanitaria no (fundaciones, etc.).
    p.mt-5(data-aos="fade-up") Las organizaciones pueden variar y dependen de los intereses de las personas que las componen; entre las más comunes conocemos las siguientes: Sindicatos, Partidos políticos, Empresas, Organizaciones de ayuda humanitaria, Clubes deportivos, entre otras.



</template>

<script>
export default {
  name: 'Tema3',
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
<style lang="sass">
.slyder-f__btn i
  background-color: #A4A3FF
  border-radius: 50%
  color: white
  font-size: 2rem
  padding: 1rem 1.4rem 1rem 1.4rem
</style>
