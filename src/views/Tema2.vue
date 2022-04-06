<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Redes sociales y canales de comunicación

    .row
      .col-md-6.col-sm-6.mb-3
        p(data-aos="fade-right") Las redes sociales son plataformas digitales conformadas por individuos con diferentes intereses, actividades o relaciones en común y permiten la comunicación e intercambio de información entre personas.
      .col-md-6.col-sm-6.mb-3
        p(data-aos="fade-up") Es importante mencionar que los individuos no necesariamente se tienen que conocer antes de entrar en una red social, dejando entre visto, que al momento de interactuar o conocerse se convierte en uno de los mayores beneficios de estas comunidades virtuales. Veamos:

    p.mt-4(data-aos="fade-up") Es importante conocer los objetivos de las redes sociales y su porqué: 

    figure.mt-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/asgajqzFAXQ" title="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    p.mt-5(data-aos="fade-up") Por otra parte, encontramos las características de las redes sociales

    ol.lista-ol--cuadro.lista-ol--separador.mt-5
      li(data-aos="fade-up")
        .lista-ol--cuadro__vineta
          span 1
        | Están conformadas por una comunidad virtual.
      li(data-aos="fade-up")
        .lista-ol--cuadro__vineta
          span 2
        | Pueden ser utilizadas desde computadoras, tablets o dispositivos móviles.
      li(data-aos="fade-up")
        .lista-ol--cuadro__vineta
          span 3
        | Son de acceso gratuito, y algunas ofrecen otras funcionalidades a cambio de un pago mensual o anual. 
      li(data-aos="fade-up")
        .lista-ol--cuadro__vineta
          span 4
        | Brindan información en tiempo real.
      li(data-aos="fade-up")
        .lista-ol--cuadro__vineta
          span 5
        | Permiten a cada usuario crear un perfil dentro de la red para poder interactuar con los demás.

    h2.mt-5(data-aos="fade-up") Ventajas de las redes sociales
    p(data-aos="fade-up") Las redes sociales nos brindan una serie de ventajas o beneficios, y esto les ha permitido ser protagonistas dentro de la web. Entre estas ventajas encontramos:

    .tarjeta.tarjeta--azul.p-4.mb-5.mt-5(style="background-color:#FFDE96")
      SlyderA
        .row
          .col-md-1
          .col-md-2.text-center
            img(src="@/assets/curso/temas/tema2/2.png" style="max-width:100px;display:inline")
          .col-md-8
            h3 Son inmediatas
            p Estas funcionan en tiempo real. La información, los vídeos, las imágenes y las opiniones que se comparten en las redes suelen hacerse públicas y estar al alcance de cualquier persona en el mundo.
          .col-md-1
        .row
          .col-md-1
          .col-md-2.text-center
            img(src="@/assets/curso/temas/tema2/8.png" style="max-width:100px;display:inline")
          .col-md-8
            h3 Son masivas
            p Las redes sociales involucran a una gran porción de la población y ha logrado eliminar las barreras culturales y etarias.
          .col-md-1
        .row
          .col-md-1
          .col-md-2.text-center
            img(src="@/assets/curso/temas/tema2/7.png" style="max-width:100px;display:inline")
          .col-md-8
            h3 Acortan distancias
            p Permiten la comunicación con amigos, familiares y cualquier usuario de la red sin importar la distancia geográfica.
          .col-md-1
        .row
          .col-md-1
          .col-md-2.text-center
            img(src="@/assets/curso/temas/tema2/6.png" style="max-width:100px;display:inline")
          .col-md-8
            h3 Aumentan la visibilidad de las marcas
            p La publicidad y la creación de perfiles corporativos han hecho de las redes sociales un nuevo mercado. Permiten conectar compradores y vendedores de cualquier parte del mundo.
          .col-md-1
        .row
          .col-md-1
          .col-md-2.text-center
            img(src="@/assets/curso/temas/tema2/5.png" style="max-width:100px;display:inline")
          .col-md-8
            h3 Funcionan como un canal
            p Funcionan como medios de aprendizaje, entretenimiento e información, este dependerá del contenido en el que esté interesado el usuario. 
          .col-md-1
        .row
          .col-md-1
          .col-md-2.text-center
            img(src="@/assets/curso/temas/tema2/4.png" style="max-width:100px;display:inline")
          .col-md-8
            h3 Comparten información
            p Permiten compartir archivos de manera instantánea y sencilla: documentos, música, fotografías, videos.
          .col-md-1
        .row
          .col-md-1
          .col-md-2.text-center
            img(src="@/assets/curso/temas/tema2/3.png" style="max-width:100px;display:inline")
          .col-md-8
            h3 Brindan oportunidades laborales
            p Hay empresas que utilizan las redes sociales para dar a conocer su oferta y a su vez estas permiten conocer el perfil laboral de los usuarios. Entre estas redes está LinkedIn, se crearon con el objetivo específico de formar comunidades de profesionales. 
          .col-md-1

    h2.mt-5(data-aos="fade-up") Tipos de redes sociales
    p(data-aos="fade-up") Las redes sociales por lo general se dividen en diferentes tipos, algunas de ellas pueden pertenecer más de un tipo. Entre sus clasificaciones más comunes encontramos:
    
    .strips.mt-5.indicador__container
      .strip.hoverin.cortain1(style="background-color:#A4A3FF;" @mouseover="mostrarIndicador = false")
        .content
          div.indicador--click(v-if="mostrarIndicador")
          img(src="@/assets/curso/temas/tema2/13.png" style="max-width:100px;")
          h3.mt-5 Red social de relaciones
          p Aquí encontramos la red social Facebook, donde su objetivo es el de conectar personas. Entre otras redes de este tipo encontramos: Instagram, LinkedIn, Twitter, etc.
      .strip.cortain2(style="background-color:#FFDE96;")
        .content
          img(src="@/assets/curso/temas/tema2/14.png" style="max-width:100px;" @mouseover="mostrarIndicador = false")
          h3.mt-5 Red social de entretenimiento
          p Son aquellas en las que el objetivo principal no es relacionarse con las personas, sino consumir contenido. Aquí encontramos a YouTube, su función gira en la distribución de vídeos, con el objetivo de publicar y ver vídeos. Otra app de este tipo es Pinterest, en el que las personas publican y consumen imágenes.
      .strip.cortain3(style="background-color:#A4A3FF;")
        .content
          img(src="@/assets/curso/temas/tema2/15.png" style="max-width:100px;" @mouseover="mostrarIndicador = false")
          h3.mt-5 Red social profesional
          p Aquí los usuarios tienen como objetivo crear relaciones profesionales con otros usuarios, presentar su currículum y habilidades, además de conseguir empleos, etc. La app más conocida es LinkedIn. Por otra parte, hay redes que no son exclusivamente profesionales pero que también se han utilizado para este fin, como Facebook, Instagram, YouTube, Twitter y Pinterest.
      .strip.cortain4(style="background-color:#FFDE96;")
        .content
          img(src="@/assets/curso/temas/tema2/16.png" style="max-width:100px;" @mouseover="mostrarIndicador = false")
          h3.mt-5 Red social de nicho
          p Son aquellas dirigidas a un público específico, ya sea una categoría profesional o personas que tienen un interés específico en común. Aquí encontramos app de lecturas, comunidades de artistas, gastronomía, etc.

    h2.mt-5(data-aos="fade-up") Contribuciones de las redes sociales como canal de atención al cliente
    p(data-aos="fade-up") Actualmente, las redes sociales se han convertido en el espacio principal en el que los usuarios son clientes de diferentes productos, marcas o servicios. Son estos espacios los que permiten a las empresas dar a conocer su oferta de servicios y de productos, establecer su imagen de marca y los canales de comunicación con sus clientes, socializar el proceso de compra y apoyar sus ventas.
    
    p.mt-4(data-aos="fade-up") Estudiemos cuáles son las contribuciones de las redes sociales como canal de atención al cliente.

    SlyderD.mt-5(:datos="datosSlyder")


</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    mostrarIndicador: true,
    datosSlyder: [
      {
        titulo: 'Visitas al sitio web o comercio electrónico',
        texto:
          'Es el principal objetivo de <em>marketing</em> en redes sociales. Generar contenido, aumentar el número de seguidores, aumentar el nivel de compromisos de los consumidores con la marca, etc. Esto permite enlaces hacia la tienda <em>online</em> que más tarde deberán traducirse en ventas, esto dependerá de la captación y conversión.',
        imagen: require('@/assets/curso/temas/tema2/18.png'),
      },
      {
        titulo: 'Establece imagen de marca',
        texto:
          'Es una de las funciones principales que aportan las redes sociales para las empresas, estas deberán gestionarse adecuadamente o puede convertirse en un problema de imagen y reputación (una página de Facebook desactualizada no da muy buena imagen…). Por esta razón, es importante saber cuál red social es la conveniente para la empresa y esta dependerá de la manera como actúan los clientes.',
        imagen: require('@/assets/curso/temas/tema2/17.png'),
      },
      {
        titulo: 'Establece un canal de comunicación con los clientes',
        texto:
          'Es importante establecer de una manera clara cómo se va a comunicar la empresa con sus clientes y seguidores. La empresa debe trabajar en el contenido que publica, de esta forma logrará mantener actualizado el contenido y podrá interactuar con sus clientes, logrando así, una relación más estrecha y de fidelidad con la marca o producto. Esto se puede lograr mediante una campaña de <em>marketing</em> de contenidos, pero si se deja desactualizada, apenas se genera contenido, no se responden a las peticiones o preguntas de los usuarios, o se contesta mal, pasará todo lo contrario, y puede generar una crisis de reputación.',
        imagen: require('@/assets/curso/temas/tema2/19.png'),
      },
      {
        titulo: 'Socializa el proceso de compra',
        texto:
          'Permite una interacción entre la marca y el usuario, permitiendo que esta sea cada vez más cercana y estrecha. Es importante que estas redes sociales permiten a los usuarios opinar sobre la empresa, los productos o servicios, compartir contenido y que puedan hacer recomendaciones a otras personas o posibles clientes. El objetivo de toda empresa será lograr que los usuarios se conviertan en prescriptores y que sean ellos quienes promocionen y hagan visible su marca, producto o empresa. ',
        imagen: require('@/assets/curso/temas/tema2/20.png'),
      },
      {
        titulo: 'Apoya al resto de canales en la venta <em>online</em>',
        texto:
          'Las redes sociales proporcionan apoyo al resto de canales de venta como comercio electrónico, <em>marketing</em> por <em>email</em>, etc. Y se vuelven indispensables a la hora de establecer la estrategia global de <em>marketing</em> de la empresa.',
        imagen: require('@/assets/curso/temas/tema2/21.png'),
      },
    ],
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
      let strip = document.querySelectorAll('.strip')
      strip.forEach(function(theStrip) {
        theStrip.addEventListener('mouseenter', function() {
          strip[0].classList.remove('hoverin')
          theStrip.classList.add('hoverin')
        })
        theStrip.addEventListener('mouseleave', function() {
          theStrip.classList.remove('hoverin')
          strip[0].classList.add('hoverin')
        })
      })
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>
<style lang="sass">
.slyder-a__tipo-a .slyder-a__bullets
  display: none
.slyder-a__btn--sigt, .slyder-a__btn--atrs
  background-color: #A4A3FF
  opacity: 1
  border: none
.slyder-a__btn--sigt, .slyder-a__btn--atrs
  background-image: url(../assets/componentes/arrow2.svg) !important
.strips
  align-items: center
  display: grid
  grid-template-columns: repeat(8, 1fr)
  justify-content: center
  overflow: hidden
.strip
  align-items: center
  display: flex
  height: 55vh
  justify-content: center
  overflow: hidden
.strip .content
  opacity: 0
  transform: scale(0)
  width: 0
.strip .content h1,
.strip .content p
  opacity: 0
  transition: opacity 600ms ease, transform 600ms ease
.strip .content h1
  transform: translateY(-25%)
.strip .content p
  transform: translateX(25%)
  transition-delay: 600ms
.strip.hoverin
  background-image: none !important
.strip.hoverin
  grid-column: 1/span 5
  justify-content: flex-start
  padding-left: 2.92em
.strip.hoverin .content
  opacity: 1
  padding: 0.5em
  transform: scale(1)
  width: 100%
.strip.hoverin .content h1,
.strip.hoverin .content p
  opacity: 1
.strip.hoverin .content h1
  transform: translateY(0)
.strip.hoverin .content p
  transform: translateX(0)
.strip:nth-child(1)
  background-color: #0f0f0f
  color: white
.strip:nth-child(1):hover
  grid-column: 1/span 5
.strip:nth-child(2)
  background-color: #1e1e1e
  color: #afafaf
.strip:nth-child(2):hover
  grid-column: 2/span 5
.strip:nth-child(3)
  background-color: #2d2d2d
  color: #757575
.strip:nth-child(3):hover
  grid-column: 3/span 5
.strip:nth-child(4)
  background-color: #3c3c3c
  color: #585858
.strip:nth-child(4):hover
  grid-column: 4/span 5
.strip:nth-child(5)
  background-color: #4b4b4b
  color: #464646
.strip:nth-child(5):hover
  grid-column: 5/span 5
.strip:nth-child(6)
  background-color: #5a5a5a
  color: #3a3a3a
.strip:nth-child(6):hover
  grid-column: 6/span 5
.cortain1
  background-image: url(../assets/curso/temas/tema2/9.png)
  background-size: cover
  background-position: center
  background-repeat: no-repeat
.cortain2
  background-image: url(../assets/curso/temas/tema2/10.png)
  background-size: cover
  background-position: center
  background-repeat: no-repeat
.cortain3
  background-image: url(../assets/curso/temas/tema2/11.png)
  background-size: cover
  background-position: center
  background-repeat: no-repeat
.cortain4
  background-image: url(../assets/curso/temas/tema2/12.png)
  background-size: cover
  background-position: center
  background-repeat: no-repeat
@media (max-width: 768px)
  .strips
    display: block !important
  .strip
    max-height: 150px
  .strip.hoverin
    max-height: 55vh
</style>
