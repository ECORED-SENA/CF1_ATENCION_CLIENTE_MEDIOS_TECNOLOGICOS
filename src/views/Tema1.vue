<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Medios tecnológicos

    p(data-aos="fade-up") Los medios tecnológicos son los medios que requieren la intervención de un instrumento para poder transmitir un mensaje, como, por ejemplo:  televisores, computadoras, grabadoras, equipos de video. Los medios tecnológicos se clasifican en:

    .row.mt-5
      .col-sm-6.col-md-4.col-xl-4.mb-4.mb-xl-0
        .tarjeta.tarjeta-slide.arriba.color-primario(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4.p-xl-5
              .text-center
                img(src="@/assets/curso/temas/tema1/2.png" style="display:inline;max-width:100px;")
              h5.mt-5 Audiovisuales
              p Hacen referencia a proyecciones de imágenes, CDs, programas en video, televisión, etc.
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema1/1.png')})`}")
      .col-sm-6.col-md-4.col-xl-4.mb-4.mb-xl-0
        .tarjeta.tarjeta-slide.arriba.color-primario(@mouseover="indicadorTarjetaSlide = false" style="background-color:#FFDE96;")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4.p-xl-5
              .text-center
                img(src="@/assets/curso/temas/tema1/4.png" style="display:inline;max-width:100px;")
              h5.mt-5 Tecnológicos
              p Son los referentes a la computadora y sus programas, programas multimedia y los juegos educativos.
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema1/3.png')})`}")
      .col-sm-6.col-md-4.col-xl-4.mb-4.mb-xl-0
        .tarjeta.tarjeta-slide.arriba.color-primario(@mouseover="indicadorTarjetaSlide = false")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4.p-xl-5
              .text-center
                img(src="@/assets/curso/temas/tema1/6.png" style="display:inline;max-width:100px;")
              h5.mt-5 Las TIC
              p Son las Tecnologías de la Información y Comunicación que utilizan internet, la WWW (World Wide Web), los chats, correos, páginas sociales, blogs, etc.
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema1/5.png')})`}")

    p.mt-3(data-aos="fade-up") En cuanto a los sistemas tradicionales de atención al cliente, existen muchos medios de comunicación, entre los cuales encontramos aquellos que aún prefieren algunos consumidores: el de ser atendidos por teléfono o personalmente. Sin embargo, existen una gran variedad y estos dependen de la necesidad de la empresa, entre ellos tenemos: el computador, correo electrónico, call center y comunicación de datos.

    h5.mt-5(data-aos="fade-up") #[strong Características de un sistema de atención al cliente eficaz]
    p(data-aos="fade-up") Un buen servicio al cliente puede llegar a ser un elemento promocional para las ventas tan poderoso como los descuentos, la publicidad o la venta personal. Entre las características esenciales para una atención al cliente eficaz, tenemos:

    .row.mt-5
      .col-sm-6.col-xl-4.col-md-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false" style="background-color:#FFDE96 !important;")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema1/7.png')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5(style="background-color:#FFDE96;")
              p.p-2.mt-3.mb-3 Ante una queja o solicitud de información, el tiempo de respuesta de la empresa permitirá evitar comentarios negativos en redes sociales. Por otro lado, se observa que los tiempos de decisión en la compra y la comparación de productos se están reduciendo, es por esta razón que las empresas o marcas que consiga responder y acompañar a su potencial cliente de manera rápida y eficaz, tendrá mayores posibilidades de volverlo cliente, que este termine comprando sus productos y servicios.
      .col-sm-6.col-xl-4.col-md-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false" style="background-color:#FCB315 !important;")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema1/8.png')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5(style="background-color:#FCB315;")
              p.p-2.mt-3.mb-3 El sistema debe centralizar todas las comunicaciones de los clientes con independencia del canal utilizado para contactar con la empresa. Es importante que todas las quejas, reclamaciones o solicitudes de información, sean analizadas y respondidas con independencia del canal utilizado por el cliente para realizarlas (chat, móvil, email, etc.). Para esto, es importante que la empresa cuente con un sistema de información integral, que recopila toda la información relativa de la comunicación con los clientes. 
      .col-sm-6.col-xl-4.col-md-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false" style="background-color:#FFDE96 !important;")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema1/9.png')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5(style="background-color:#FFDE96;")
              p.p-2.mt-3.mb-3 Es preciso discriminar el tipo de comunicación del cliente. Se deben establecer diferentes secciones dentro de la atención al cliente, que permita una comunicación especializada en cada una de ellas, según la demanda del cliente. Puede que el cliente se encuentre realizando una queja o una solicitud de información sobre un producto, entonces es importante que exista una sección especializada para cada una de ellas. Un ejemplo de esto, es cuando los clientes se comunican con una empresa y son redirigidos a una dependencia según su necesidad, como las empresas móviles.  

    p.mt-5(data-aos="fade-up") Después de ver algunas características de un sistema de atención al cliente tecnológico, ahora pasamos a mencionar los canales más habituales utilizados por las empresas o marcas.

    h5.mt-5(data-aos="fade-up") Canales de atención al cliente utilizados por las marcas
    p(data-aos="fade-up") Hoy en día, la mayoría de las empresas o compañías se encuentran actualizando los canales de comunicación y atención al cliente y no quieren quedarse atrás en esta revolución de las tecnologías y uso masivo de los medios digitales después de la pandemia. Es evidente que las costumbres de compra y atención al cliente están cambiando, y se hace necesario evolucionar y poner en práctica todas las herramientas o canales de atención posibles para facilitar la comunicación con el cliente. Algunos de los canales de atención más utilizados en estos momentos son:

    SlyderB.mt-5(:datos="datosSlyder")



      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    indicadorTarjetaSlide: true,
    indicadorTarjetaFlip: true,
    datosSlyder: [
      {
        titulo: 'Redes sociales',
        texto:
          'Las redes sociales, en los últimos años han experimentado un gran ascenso y manejo en torno al ámbito comercial. Es innegable que las empresas o marcas utilizan las redes sociales para hacer gestión de su marca, vender y mejorar su reputación, pero también es ampliamente utilizado por la gestión de la relación con el cliente. Es importante resaltar, que, para las empresas, las redes sociales son decisivas para la comunicación con el cliente, en práctica en igualdad con otras actividades como la venta.',
        imagen: require('@/assets/curso/temas/tema1/11.png'),
      },
      {
        titulo: 'Mensajería instantánea/WhatsApp',
        texto:
          'Dentro de las aplicaciones de mensajería, es WhatsApp la que tiene mayor trayectoria. Para que este canal de comunicación funcione, es importante saber el grado de participación de los posibles clientes con esta aplicación y de esta forma entablar una comunicación con ellos. Es por esta razón, que la transformación digital de la empresa es eficaz, cuando la misma sabe adaptar su tecnología a los nuevos requerimientos del cliente.',
        imagen: require('@/assets/curso/temas/tema1/12.png'),
      },
      {
        titulo: 'Live Chats y Chatbots',
        texto:
          'Sin duda este medio de atención al cliente permite atender al mismo con gran rapidez, por lo que se trata de un canal realmente eficaz. Hace algunos años aparecieron como una tecnología novedosa, que permite la atención automatizada del cliente utilizando la inteligencia artificial. Sus problemas radican en poder mantener una comunicación o conversación cuando se preguntan cosas meramente técnicas, aún no se domina bien el lenguaje natural. Esto a veces lleva a que las personas prefieran que les responda un humano u otra persona por estos chats. ',
        imagen: require('@/assets/curso/temas/tema1/10.png'),
      },
      {
        titulo: 'Móvil o teléfono',
        texto:
          'Algo importante de resaltar es que las nuevas generaciones no hablan por el móvil, sino que chatean a través de él, y el contacto con las empresas o marcas no es distinto. Por otra parte, el tiempo de espera a través del móvil o teléfono suele ser muy alto, a la hora de contactar con una empresa. Es importante detectar a qué grupo poblacional está dirigido los productos o servicios de la empresa,  según la generación, el uso de estos dispositivos puede ser molestos para algunos que ya viven en la era digital.',
        imagen: require('@/assets/curso/temas/tema1/13.png'),
      },
      {
        titulo: 'Email',
        texto:
          'El email es un buen aliado de la atención al cliente, este dependerá para qué se utilice. Para informar de novedades o de nuevas utilidades en un producto o servicio podrá realizarse por este medio de manera exitosa. Entre sus problemas encontramos que no es una buena herramienta para resolver un conflicto o queja, o para recibir una respuesta de compra durante determinado tiempo de contestación. Por esta razón, es importante ver el tono emocional de la consulta que genera el cliente para ver si deberá ser respondida por este canal u otro de mayor fluidez. Debido a que, si se trata de un tema comercial, el cliente no estará dispuesto a esperar cuando lo que quiere es comprar.',
        imagen: require('@/assets/curso/temas/tema1/14.png'),
      },
    ],
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
.tarjeta-slide.color-primario .tarjeta-slide__img
  background-color: #A4A3FF
</style>
