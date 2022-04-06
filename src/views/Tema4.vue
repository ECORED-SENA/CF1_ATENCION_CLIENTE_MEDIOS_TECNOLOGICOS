<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Manual de funciones y procedimientos

    p(data-aos="fade-up") Es un instrumento de trabajo que contiene el conjunto de normas y tareas que desarrolla cada funcionario en sus actividades cotidianas y su elaboración se basa en los respectivos procedimientos, sistemas y normas. En pocas palabras, #[strong(style="color:#7F79FB;") es una guía de orientaciones para desarrollar las rutinas o labores cotidianas], sin interferir en las capacidades intelectuales, ni en la autonomía propia e independencia mental o profesional de cada uno de los trabajadores u operarios de una empresa, porque estos podrán tomar las decisiones más acertadas apoyados por las directrices de los superiores.
    p.mt-4(data-aos="fade-up") En el manual de funciones encontramos:

    .row.mt-5
      .col-sm-6.col-xl-4.col-md-4.mb-4.mb-xl-0
        .tarjeta.tarjeta-slide.arriba.color-primario(@mouseover="indicadorTarjetaSlide = false" style="background-color:#A4A3FF;display: flex;align-items: center;")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-5.p-xl-5(style="background-color:#A4A3FF;place-self:center;")
              h3 Funciones básicas
              p Se deben incluir brevemente cada una de las funciones y responsabilidades básicas que describa adecuadamente los límites y esencia del cargo. Se debe tener en cuenta que en la descripción de las funciones básicas no se debe entrar en detalles, ya que esto se incluye en el manual de procedimientos establecido para la empresa. 
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema4/1.png')})`}")
              h3.p-4(style="background-color:#A4A3FF;bottom: -17px;position: absolute;width: 100%;") Funciones básicas
      .col-sm-6.col-xl-4.col-md-4.mb-4.mb-xl-0
        .tarjeta.tarjeta-slide.arriba.color-primario(@mouseover="indicadorTarjetaSlide = false" style="background-color:#A4A3FF;display: flex;align-items: center;")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-5.p-xl-5
              h3 Identificación del cargo
              p Aquí se describe el nombre del cargo, la dependencia a la que pertenece, el número de cargos y el cargo de su jefe inmediato. 
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema4/2.png')})`}")
              h3.p-4(style="background-color:#A4A3FF;bottom: -17px;position: absolute;width: 100%;") Identificación del cargo
      .col-sm-6.col-xl-4.col-md-4.mb-4.mb-xl-0
        .tarjeta.tarjeta-slide.arriba.color-primario(@mouseover="indicadorTarjetaSlide = false" style="background-color:#A4A3FF;display: flex;align-items: center;")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-5.p-xl-5
              h3 Requisitos
              p Se describen cuáles serían los requisitos del perfil para cada uno de los cargos. Se debe aclarar con respecto a la descripción del perfil de cargo que este se requiere para poder realizar una adecuada selección de personal (estudios, experiencia, conocimientos, etc.)
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema4/3.png')})`}")
              h3.p-4(style="background-color:#A4A3FF;bottom: -17px;position: absolute;width: 100%;") Requisitos

    br
    p.mt-5(data-aos="fade-up") Un manual de funciones deberá contener:

    figure.mt-5.col-md-10.m-auto
      img(src="@/assets/curso/temas/tema4/5.png" data-aos="zoom-in")

    h2.mt-5(data-aos="fade-up") Manual de procedimiento

    .row.mt-4
      .col-md-6.mb-2
        img(src="@/assets/curso/temas/tema4/4.png" data-aos="fade-left")
      .col-md-6
        p(data-aos="fade-right") Es un instrumento administrativo que apoya el quehacer cotidiano de las diferentes áreas de una empresa. Aquí, se consignan metódicamente las acciones y operaciones que deben seguirse para llevar a cabo las funciones generales de la empresa. Además, con los manuales se puede realizar un seguimiento adecuado y secuencial de las actividades anteriormente programadas en orden lógico y en un tiempo definido.
        p.mt-3(data-aos="fade-right") Los manuales permiten el seguimiento adecuado y secuencial de las actividades anteriormente programadas en orden lógico y en un tiempo definido. Por otra parte, los procedimientos son una sucesión cronológica y secuencial de un conjunto de labores concatenadas que constituyen la manera de efectuar un trabajo dentro de un ámbito predeterminado de aplicación. De lo anterior podemos decir, que todo procedimiento implica, además de las actividades y tareas personales, la determinación del tiempo de realización, el uso de recursos materiales, tecnológicos y financieros, la aplicación de métodos de trabajo y de control para lograr un eficiente y eficaz desarrollo en las diferentes operaciones de una empresa.

    p.mt-5(data-aos="fade-up") Las ventajas de contar con un manual de procedimientos, son: 

    ol.lista-ol.lista-ol--separador.mt-5
      li(data-aos="fade-up") 
        span.text-bold a. 
        | Auxilian en el adiestramiento y capacitación del personal.
      li(data-aos="fade-up") 
        span.text-bold b. 
        | Auxilian en la inducción al puesto.
      li(data-aos="fade-up") 
        span.text-bold c. 
        | Describen en forma detallada las actividades de cada puesto.
      li(data-aos="fade-up") 
        span.text-bold d. 
        | Facilitan la interacción de las distintas áreas de la empresa.
      li(data-aos="fade-up") 
        span.text-bold e. 
        | Indican las interacciones con otras áreas de trabajo.
      li(data-aos="fade-up") 
        span.text-bold f. 
        |  Permiten que el personal operativo conozca los diversos pasos que se siguen para el desarrollo de las actividades de rutina.
      li(data-aos="fade-up") 
        span.text-bold g. 
        | Permite una adecuada coordinación de actividades a través de un flujo eficiente de la información.
      li(data-aos="fade-up") 
        span.text-bold h. 
        | Proporcionan la descripción de cada una de sus funciones al personal.
      li(data-aos="fade-up") 
        span.text-bold i. 
        | Proporcionan una visión integral de la empresa al personal.
      li(data-aos="fade-up") 
        span.text-bold j. 
        |  Se establece como referencia documental para precisar las fallas, omisiones y desempeños de los empleados involucrados en un determinado procedimiento.
      li(data-aos="fade-up") 
        span.text-bold k. 
        | Son guías de trabajo a ejecutar.

    h2.mt-5(data-aos="fade-up") Conformación del manual de procedimientos
    p(data-aos="fade-up") A continuación, se mencionan algunos datos que debe tener presente al momento de realizar un manual de procedimientos.

    TabsA.color-acento-botones.mt-5
      .tarjeta.color-acento-botones--borde.p-4(titulo="Identificación")
        h3 Identificación
        p.mt-3 Debe incorporar la siguiente información:
        ol.lista-ol.mt-4
          li #[strong a. ]  &nbsp;Logotipo de la empresa u organización
          li #[strong b. ]  &nbsp;Nombre oficial de la empresa u organización
          li #[strong c. ]  &nbsp;Denominación y extensión
          li #[strong d. ]  &nbsp;Lugar y fecha de elaboración
          li #[strong e. ]  &nbsp;Número de revisión
          li #[strong f. ]  &nbsp;Unidades responsables de su elaboración, revisión y autorización
      .tarjeta.color-acento-botones--borde.p-4(titulo="Índice o contenido")
        h4 Índice o contenido
        p.mt-3 Es la relación de los capítulos y páginas correspondientes que forman parte del documento.
      .tarjeta.color-acento-botones--borde.p-4(titulo="Prólogo o introducción")
        h4 Prólogo o introducción
        p.mt-3 Es una exposición sobre el documento, su contenido, objeto, áreas de aplicación e importancia de su revisión y actualización. Puede incluir un mensaje de la máxima autoridad de las áreas comprendidas en el manual.
      .tarjeta.color-acento-botones--borde.p-4(titulo="Objetivos de los procedimientos")
        h4 Objetivos de los procedimientos
        p.mt-3 Aquí se explica el propósito que se pretende cumplir con los procedimientos. Los objetivos son uniformar y controlar el cumplimiento de las rutinas de trabajo y evitar su alteración arbitraria; simplificar la responsabilidad por fallas o errores; facilitar las labores de auditoría; la evaluación del control interno y su vigilancia; que tanto sus empleados como los jefes puedan saber si el trabajo se está realizando adecuadamente; reducir los costos al aumentar la eficiencia general, entre otras ventajas adicionales.
      .tarjeta.color-acento-botones--borde.p-4(titulo="Áreas de aplicación")
        h4 Áreas de aplicación o alcance de los procedimientos
        p.mt-3 Es el área de acción que cubre los procedimientos administrativos y sectoriales.
      .tarjeta.color-acento-botones--borde.p-4(titulo="Responsables")
        h4 Responsables
        p.mt-3 Las unidades administrativas o puestos que intervienen en los procedimientos en cualquiera de sus fases.
      .tarjeta.color-acento-botones--borde.p-4(titulo="Políticas o normas de operación")
        h4 Políticas o normas de operación
        p.mt-3 Aquí se incluyen los criterios o lineamientos generales de acción que se determinan en forma explícita para facilitar la cobertura de responsabilidad de las distintas instancias que participan en los procedimientos. Se debe contemplar las normas de operación que precisan las situaciones alternativas que pudiesen presentarse en la operación de los procedimientos.

        



</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    indicadorTarjetaSlide: true,
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
<style lang="sass">
.tarjeta.color-acento-botones--borde
  background-color: transparent
  border: none
.tabs-a.color-acento-botones .tabs-a__tab__selected
  background-color: #FCB315
.tabs-a.color-acento-botones .tabs-a__tab__selected:before
  background-color: #FCB315
.tabs-a.color-acento-botones .tabs-a__tab:hover, .tabs-a.color-acento-botones .tabs-a__tab:active, .tabs-a.color-acento-botones .tabs-a__tab:focus
  background-color: #FCB315
.tabs-a__tab
  background-color: #E8E8E8
.tabs-a__content-item--active
  background-color: #D7D6E9
  border: solid 4px #CFCFE7
  height: 100%
  border-radius: 20px
  display: flex
  align-items: center
</style>
