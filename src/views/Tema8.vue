<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 8
      h1 Comunicación

    p(data-aos="fade-up") La comunicación es el intercambio de información que se produce entre dos o más individuos con el objetivo de aportar información y recibirla. En este proceso intervienen un emisor y un receptor, además del mensaje que se pone de manifiesto.

    h3.mt-5(data-aos="fade-up") Funciones de la comunicación
    p(data-aos="fade-up") A continuación, se mencionan algunos datos que debe tener presente al momento de realizar un manual de procedimientos.

    ImagenInfografica.color-secundario.mt-5.col-md-7.m-auto.cont_infografia_tema8
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/temas/tema8/1.svg', alt='')
      .tarjeta.color-acento-botones.p-3(x="91%" y="28%" numero="02" style="background-color:#F6F6F6;border-radius:0px;")
        .h5.mb-2 Función emotiva
        p Cuando se expresan sentimientos o emociones, se habla de comunicación emotiva y la función es transmitir esa mezcla de estados emocionales que existen.
      .tarjeta.color-acento-botones.p-3(x="48%" y="5%" numero="01" style="background-color:#F6F6F6;border-radius:0px;")
        .h5.mb-2 Función representativa
        p Se da cuando se informa de manera objetiva un hecho determinado o una noticia.
      .tarjeta.color-acento-botones.p-3(x="92%" y="72%" numero="03" style="background-color:#F6F6F6;border-radius:0px;")
        .h5.mb-2 Función Apelativa
        p Se produce cuando el objetivo es llamar la atención del receptor o generar en él cierta influencia. Por ejemplo, cuando se le manda que realice unas tareas pendientes.
      .tarjeta.color-acento-botones.p-3(x="48%" y="94%" numero="04" style="background-color:#F6F6F6;border-radius:0px;")
        .h5.mb-2 Función de contacto
        p Todos los mensajes que tienen como objetivo iniciar una conversación, reanudarla o interrumpirla en un momento determinado tienen esta función.
      .tarjeta.color-acento-botones.p-3(x="4%" y="72%" numero="05" style="background-color:#F6F6F6;border-radius:0px;")
        .h5.mb-2 Función metalingüística
        p Es aquella que explica los códigos y usos de las normas de una lengua para ponerla en práctica de manera correcta.
      .tarjeta.color-acento-botones.p-3(x="4%" y="28%" numero="06" style="background-color:#F6F6F6;border-radius:0px;")
        .h5.mb-2 Función Poética
        p Se centra en la parte estética del mensaje. Suele utilizarse en el aspecto literario y en también en el ámbito de la publicidad.

    h3.mt-5(data-aos="fade-up") Elementos en el proceso de comunicación
    p(data-aos="fade-up") Para que exista una comunicación eficaz, se deben tener en cuenta ciertos elementos para el proceso de la comunicación. Estos son los principales:

    SlyderF.mt-5(columnas="col-lg-6 col-xl-4 col-md-4")
      .tarjeta.color-acento-botones.p-5(style="background-color:#FADE9F;border-radius:0px;min-height:550px;")
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema8/2.png' alt='')
        h5.mt-5 Emisor
        p El emisor es aquel que emite un mensaje cuyo objetivo es transmitir o informar sobre un tema en concreto.
      .tarjeta.color-acento-botones.p-5(style="background-color:#A3A5F9;border-radius:0px;min-height:550px;")
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema8/3.png' alt='')
        h5.mt-5 Receptor
        p Es el individuo encargado de recibir esa comunicación y datos que emite el emisor.
      .tarjeta.color-acento-botones.p-5(style="background-color:#FADE9F;border-radius:0px;min-height:550px;")
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema8/4.png' alt='')
        h5.mt-5 Mensaje
        p Es la información, los datos que transmite el emisor para que lleguen al receptor de forma óptima. El contenido para la comunicación debe ser fluido y eficaz.
      .tarjeta.color-acento-botones.p-5(style="background-color:#A3A5F9;border-radius:0px;min-height:550px;")
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema8/5.png' alt='')
        h5.mt-5 Canal
        p Es el lugar por donde se transmite el mensaje. Existen múltiples canales por donde se puede transmitir la información. Por ejemplo, internet, medios de comunicación o dispositivos móviles.
      .tarjeta.color-acento-botones.p-5(style="background-color:#FADE9F;border-radius:0px;min-height:550px;")
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema8/6.png' alt='')
        h5.mt-5 Código
        p Se trata de un elemento importante para que se comprenda fácilmente el mensaje y haya entendimiento entre emisor y receptor. El código lo conforman datos y reglas que comparten ambos para comprender la información.

    h3.mt-5(data-aos="fade-up") Características de la comunicación
    p(data-aos="fade-up") Es necesaria para el buen entendimiento entre las personas. Sirve para exponer o resolver dudas e informarse sobre hechos relevantes que están sucediendo. #[br] Los roles se intercambian continuamente. Por ejemplo, en una conversación el emisor y el receptor pueden intercambiar sus papeles en cualquier momento. #[br] Mejora la organización social. Las personas que forman parte de comunidades y sociedades utilizan la comunicación para establecer acuerdos, reglas y normas para vivir de forma organizada y respetuosa.

    .row.mt-5
      .col-sm-6.col-xl-4.col-md-4.mb-4.mb-xl-0
        .tarjeta.tarjeta-slide.arriba.color-primario(@mouseover="indicadorTarjetaSlide = false" style="background-color:#FFDE96;")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4.p-xl-5
              figure.text-center
                img(src="@/assets/curso/temas/tema8/10.png" style="display:inline;max-width:100px;")
              p Es necesaria para el buen entendimiento entre las personas. Sirve para exponer o resolver dudas e informarse sobre hechos relevantes que están sucediendo.
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema8/7.png')})`}")
      .col-sm-6.col-xl-4.col-md-4.mb-4.mb-xl-0
        .tarjeta.tarjeta-slide.arriba.color-primario(@mouseover="indicadorTarjetaSlide = false" style="background-color:#FCB315;")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4.p-xl-5
              figure.text-center
                img(src="@/assets/curso/temas/tema8/11.png" style="display:inline;max-width:100px;")
              p Los roles se intercambian continuamente. Por ejemplo, en una conversación el emisor y el receptor pueden intercambiar sus papeles en cualquier momento.
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema8/8.png')})`}")
      .col-sm-6.col-xl-4.col-md-4.mb-4.mb-xl-0
        .tarjeta.tarjeta-slide.arriba.color-primario(@mouseover="indicadorTarjetaSlide = false" style="background-color:#FFDE96;")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4.p-xl-5
              figure.text-center
                img(src="@/assets/curso/temas/tema8/12.png" style="display:inline;max-width:100px;")
              p Mejora la organización social. Las personas que forman parte de comunidades y sociedades utilizan la comunicación para establecer acuerdos, reglas y normas para vivir de forma organizada y respetuosa.
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema8/9.png')})`}")

    p.mt-5(data-aos="fade-up") En definitiva, la comunicación cumple una función esencial en la sociedad. La comunicación puede aportar información, tener objetivos contundentes o pedagógicos y buscar el entretenimiento si hablamos de ver una película o ir al cine. Es importante resaltar que, en cualquier profesión, relación social o formativa, la comunicación siempre está vigente. Y es por esta razón que se necesita que el proceso comunicativo funcione para que haya un buen entendimiento. #[br] La comunicación puede variar dependiendo de cómo se transmite la información y cómo es recibida por el receptor. Según esto, se puede clasificar la comunicación dentro de dos grandes grupos: verbal y no verbal.

    p.mt-4(data-aos="fade-up") La comunicación verbal es aquella donde el mensaje es verbalizado, pues se utilizan las palabras ya sea de manera oral o escrita. Mientras que la comunicación no verbal es aquella que se da sin el uso de palabras, se utilizan gestos, miradas, movimientos corporales, entre otras expresiones. Por otra parte, es preciso mencionar que estos dos tipos de comunicación se utilizan también de forma simultánea al momento de transmitir un mensaje, considerando así una comunicación mixta (por ejemplo: el cine, las historietas, anuncios publicitarios, entre otros).

    p.mt-5.p-2(style="border-left:4px #FCB315 solid;") &nbsp;#[strong Tabla 2] Comunicación verbal y no verbal

    .tabla-a.color-acento-botones.mt-4 
      table.w-100
        thead(style="border:none;")
          tr(style="background-color:#FCB315;")
            th.h5.p-3.text-white(style="border:none;")
            th.h5.p-3.text-white(style="border:none;") Comunicación verbal
            th.h5.p-3.text-white(style="border:none;") Comunicación no verbal
        tbody
          tr(style="background-color:#F6F6F6;")
            th.p-4(style="border:none;border-right:1px #AFAFAF solid;") Definición
            td.p-4(style="border:none;border-right:1px #AFAFAF solid;") Es cuando se utilizan las palabras en el proceso de transmisión de información entre emisor y receptor.
            td.p-4(style="border:none;") Es cuando se utilizan las palabras en el proceso de transmisión de información entre emisor y receptor.
          tr(style="background-color:#FFF;")
            th.p-4(style="border:none;border-right:1px #AFAFAF solid;") Tipo
            td.p-4(style="border:none;border-right:1px #AFAFAF solid;") Oral y escrita
            td.p-4(style="border:none;") Cualquiera que no implique el uso de palabras.
          tr(style="background-color:#F6F6F6;")
            th.p-4(style="border:none;border-right:1px #AFAFAF solid;") Sentidos utilizados
            td.p-4(style="border:none;border-right:1px #AFAFAF solid;") Oído y vista
            td.p-4(style="border:none;") Oído, vista, tacto, olfato y gusto.
          tr(style="background-color:#FFF;")
            th.p-4(style="border:none;border-right:1px #AFAFAF solid;") Ejemplos
            td.p-4(style="border:none;border-right:1px #AFAFAF solid;") Conversaciones, entrevistas, libros, cartas, correos electrónicos, entre otros.
            td.p-4(style="border:none;") Gestos, miradas, postura, emoticonos, expresiones faciales y corporales, entre otros.

    .row.mt-5.p-4(style="background-color:#A4A3FF;")
      .col-md-2.col-sm-4.text-center(style="place-self:center;")
        img(src="@/assets/curso/temas/tema8/13.png" data-aos="fade-left" style="max-width:150px;display:inline;")
      .col-md-10.col-sm-8(style="place-self:center;")
        p(data-aos="fade-right") También hacen parte de la comunicación, la oral y la escrita, que son dos de los principales medios de atención, como por ejemplo, atención por medio de una llamada telefónica y por medio de un radicado.

    p.mt-5.p-2(style="border-left:4px #FCB315 solid;") &nbsp;#[strong Tabla 3] Clasificación de la comunicación: oral y escrita

    div(style="position:relative;")
      .row.mt-5(style="")
        .col-md-6.mb-3(style="padding:0px;")
          h5.mb-0.text-center.p-4(style="background-color:#FFDE96;" data-aos="fade-up") Comunicación oral
          img(src="@/assets/curso/temas/tema8/14.png" data-aos="fade-in")
          .p-5(style="background-color:#FFDE96;min-height:450px;")
            p(data-aos="fade-up") Se utilizan las palabras habladas o se emiten sonidos de forma verbal. #[br] La entonación y la vocalización juegan un papel fundamental para que el mensaje llegue efectivamente y pueda ser interpretado por el receptor.
            p.mt-4(data-aos="fade-up") Emplea elementos como la paralingüística, que, a pesar de no ser verbal, ayuda a indicar emociones y sentimientos mientras se habla. (sonidos que indican miedo, sorpresa, interés o desinterés, picardía, entre otros).
            p.mt-4(data-aos="fade-up") Se ha desarrollado con el origen de los idiomas y las características lingüísticas propias de cada población.
            p.mt-4(data-aos="fade-up") #[strong Ejemplos:] conversación entre colegas, un grito de sorpresa o una conversación telefónica.
        .col-md-6.mb-3(style="padding:0px;")
          h5.mb-0.text-center.p-4(style="background-color:#FCB315;" data-aos="fade-up") Comunicación escrita
          img(src="@/assets/curso/temas/tema8/15.png" data-aos="fade-in")
          .p-5(style="background-color:#FCB315;min-height:450px;")
            p(data-aos="fade-up") Se realiza a través de códigos escritos. 
            p.mt-4(data-aos="fade-up") Puede perdurar en el tiempo. 
            p.mt-4(data-aos="fade-up") La interacción con el receptor no se produce de manera inmediata.
            p.mt-4(data-aos="fade-up") Se ha desarrollado a lo largo del tiempo con la creación de nuevos medios #[br] Está en constante evolución a medida que la ciencia y la tecnología sigan creando nuevos canales de comunicación.
            p.mt-4(data-aos="fade-up") #[strong Ejemplos:] jeroglíficos, cartas,  correos electrónicos o chats.





</template>

<script>
export default {
  name: 'Tema8',
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
<style lang="sass" scoped>
.cont_infografia_tema8
  .img-infografica.color-secundario .img-infografica__item__dot:before, .img-infografica.color-secundario .img-infografica__item__dot:after, .img-infografica.color-secundario .img-infografica-b__item__dot:before, .img-infografica.color-secundario .img-infografica-b__item__dot:after, .img-infografica-b.color-secundario .img-infografica__item__dot:before, .img-infografica-b.color-secundario .img-infografica__item__dot:after, .img-infografica-b.color-secundario .img-infografica-b__item__dot:before, .img-infografica-b.color-secundario .img-infografica-b__item__dot:after
    background-color: #6965f6
.slyder-f__btn i
  background-color: #A4A3FF
  border-radius: 50%
  color: white
  font-size: 2rem
  padding: 1rem 1.4rem 1rem 1.4rem
</style>
