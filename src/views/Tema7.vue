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
        | Simplificar y hacer que los canales de contacto sean más accesibles, aumentando la confianza y la fidelidad de los clientes.
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

    ImagenInfograficaB.color-primario.mt-5.col-md-11.m-auto
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/temas/tema7/2.svg', alt='')
      div(x="12%" y="51%" tooltip="1. Según el modo de atención" numero="1")
        h3 1. Según el modo de atención
        p.mt-3 Hay dos modos de brindar atención a tus clientes dependiendo del modo: presencial o virtual.
        p.mt-4 #[strong Servicio al cliente presencial:] existe un contacto directo y en persona entre el cliente y un personal de la empresa. Esto permite no estar mediado por intermediarios y un menos tiempo en la solución o dudas. Por ejemplo, la asistencia de un técnico de un servicio de internet en el domicilio del cliente para reparar problemas con el modem de conexión.
        p.mt-4 #[strong Servicio al cliente virtual: ] hoy en día es común que las empresas utilicen servicios de atención al cliente de manera virtual, debido al aumento del manejo de plataformas digitales. Entre los recursos que se utilizan para la asistencia virtual, encontramos el uso de correo electrónico, chats, plataformas de servicio y redes sociales. Esto permite evitar largas filas y tiempos de turno, permitiendo la comunicación desde cualquier lugar y en cualquier momento.
      div(x="37%" y="51%" tooltip="2. En función de la actitud" numero="2")
        h3.mt-5 2. En función de la actitud
        p.mt-3 Esta característica se enfoca en la actitud de los clientes o de la empresa.
        p.mt-4 #[strong Servicio al cliente proactivo:] se da cuando la empresa contacta o busca de manera directa a los clientes, ya sea en cualquier parte del proceso de comercialización de un producto o servicio. Se utiliza para evaluar la satisfacción con la compra, para ofrecer promociones y beneficios, para verificar el seguimiento de un envío, entre otros. Esto permite a la empresa reparar ciertas fallas o mejorar la calidad del servicio, por otra parte, esto genera una fuerte imagen de compromiso y dedicación a los clientes. 
        p.mt-4 #[strong Servicio al cliente reactivo:] aquí, es el cliente el que contacta a la empresa. Principalmente sucede frente a consultas pre y post venta sobre productos, devoluciones o cambios, reparaciones, entre otros. Es por esta razón, que las empresas deben brindar un servicio reactivo posible, que le permita mejorar su reputación y recomendación de la empresa, y de la misma forma una fidelización de los clientes.
      div(x="78%" y="51%" tooltip="3. En relación con el canal de comunicación" numero="3")
        h3.mt-5 3. En relación con el canal de comunicación
        p.mt-3 Aquí podemos ver una clasificación de los canales de comunicación más utilizados por las empresas para la atención al cliente y que han venido aumentando con los años por medio de tecnologías específicas en cada área, estos son: 
        p.mt-4 #[strong Servicio al cliente por móvil o teléfono:] es un servicio de información y comunicación entre la empresa y cliente por medio de dispositivo móvil o teléfono. Es común que la llamada derive en un asistente telefónico que automatice las posibles razones por las que los clientes se comunican y brinde información o soporte de manera virtual. Sin embargo, el cliente puede requerir el contacto con algún operador de la empresa para una atención personalizada.

        .row
          p.mt-4.col-md-6 #[strong Servicio al cliente a través de correo electrónico:] resulta un efectivo método de contacto, ya que genera inmediatez y es posible generar seguimiento a las consultas, respaldos y superfluidad en la entrega de la información. Es considerado por algunas empresas y clientes como un canal más formal. 
          p.mt-4.col-md-6 #[strong Servicio al cliente mediante chat:] es una de las plataformas actuales más novedosas y cada vez mayormente utilizadas por las empresas. Se realiza por medio de un chatbots, se pueden automatizar consultas sobre stock, direcciones, asistir reclamos, entre otros. Se puede decir que este canal genera inmediatez y soluciones muy prácticas y efectivas a las consultas.

          p.mt-4.col-md-6 #[strong Servicio al cliente por redes sociales:] actualmente es muy importante que las empresas cuenten con el canal de redes sociales, ya que permite que los clientes tengan información sobre la marca y el perfil de la empresa. En la actualidad es uno de los canales más utilizados, ya que gran parte de las personas utilizan las redes durante el día, transformándose en una vitrina virtual de las empresas. Es importante mencionar, que, ante cualquier consulta, los clientes pueden acceder directamente a ellas para buscar información de contacto.
          p.mt-4.col-md-6 #[strong Servicio al cliente por mensajería instantánea:] WhatsApp es una de las aplicaciones más utilizadas para esta comunicación de forma instantánea con los clientes, permitiendo establecer un chat con algún personal de la empresa, donde pueda brindar información de manera rápida, sencilla y más clara que otros canales de comunicación.

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
  data: () => ({
    modal1: false,
    mostrarIndicador2: true,
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
.img-infografica-b__modal
  background-color: rgba(246,246,246,1)
.img-infografica-b__modal__contenido div > *
  color: #12263F !important
.img-infografica-b__modal__btn-cerrar i
  color: #181818
</style>
