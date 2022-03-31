<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Clientes

    .row
      .col-md-6.mb-2
        img(src="@/assets/curso/temas/tema6/1.png" data-aos="fade-left")
      .col-md-6
        p(data-aos="fade-up") #[strong Un cliente es una persona o entidad que compra los bienes y servicios que ofrece una empresa, en otras palabras, se concibe como sinónimo de comprador]. El cliente puede comprar un producto y luego consumirlo, o simplemente comprarlo para que lo disfrute otra persona.
        p.mt-4(data-aos="fade-up") Es así como el cliente se convierte en el principal foco de atención de una empresa, por lo que todos los planes y estrategias de marketing se enfocan, desarrollan e implementan en función de él.
        p.mt-4(data-aos="fade-up") Por otra parte, las empresas tienen diferentes compradores o clientes de acuerdo con el tipo de mercado en el que compiten, o en el que comercializan sus productos. Entre estos mercados encontramos:

    .mt-5.indicador__container(@mouseover="mostrarIndicador = false")
      div.indicador--click(v-if="mostrarIndicador")
      ImagenInfograficaMia
      br
      .mt-4.col-md-4.col-sm-8.m-auto.justify-content-center
        #cont_path1_imageninfografica(style="display:none;")
          div(style="background-color:#FFDE96;width:30%;height:7px;")
          h5.mt-4 Mercado de consumo
          p Los clientes son personas o familias que solicitan los bienes y servicios de una empresa y luego los utilizan para su consumo personal. Por ejemplo, una familia que compra en un supermercado comestibles o productos de limpieza que luego serán utilizados en el hogar.
        #cont_path2_imageninfografica(style="display:none;")
          div(style="background-color:#FFDE96;width:30%;height:7px;")
          h5.mt-4 Mercados industriales
          p Aquí, los clientes son todas las empresas que demandan los productos que produce otra empresa (proveedores), con el propósito de usarlos en su proceso de producción. Estos productos pueden ser transformados para elaborar un nuevo producto o hacer uso de ellos para transformar otros productos, los cuales serán puestos en el mercado (por ejemplo: una panadería que compra harina a otras empresas).
        #cont_path3_imageninfografica
          div(style="background-color:#FFDE96;width:30%;height:7px;")
          h5.mt-4 Mercados de revendedores
          p Son todas las empresas que compran los bienes y servicios de una empresa, y luego los ponen en venta para el uso de los consumidores finales (por ejemplo: los supermercados).
        #cont_path4_imageninfografica(style="display:none;")
          div(style="background-color:#FFDE96;width:30%;height:7px;")
          h5.mt-4 Mercado de gobierno
          p Asimismo, el gobierno o sus dependencias muchas veces actúan como clientes en este mercado, puesto que compran los bienes y servicios de otras empresas para poder ofrecer servicios públicos. (por ejemplo: cuando el gobierno compra insumos para un hospital o compra de libros para bibliotecas públicas). 
        #cont_path5_imageninfografica(style="display:none;")
          div(style="background-color:#FFDE96;width:30%;height:7px;")
          h5.mt-4 Mercados internacionales
          p Aquí, se puede incluir como clientes a los consumidores, a los productores, a los revendedores y a los gobiernos de otro país distinto al nuestro, que soliciten y compren los productos que ofrece la empresa internacional.

    
    p.mt-5(data-aos="fade-up") Esto ratifica la importancia de los clientes para las empresas, debido a que, desde la perspectiva del marketing; se busca lograr un intercambio de valor, entre las empresas y sus mercados. Es por esta razón, que todos los esfuerzos del marketing están orientados a lograr la satisfacción de los clientes, esto determinará que la empresa siga teniendo éxito y permanezca en el mercado.  #[strong(style="color:#7F79FB;") ¿Cuál es la relación entre el marketing y los clientes?]

    br
    br
    .row.mt-5
      .col-md-6.mb-5
        .p-5(style="background-color:#A4A3FF;border-top-left-radius:15px;border-bottom-left-radius:15px;height:100%;")
          .text-center
            img(src="@/assets/curso/temas/tema6/3.png" data-aos="fade-up" style="max-width:250px;display:inline;margin-top:-130px;position:relative;")
          h3.mt-5(data-aos="fade-up") Atraer clientes nuevos
          p(data-aos="fade-up") Toda empresa que quiera tener un mayor crecimiento y aumentar su participación de mercado, debe esforzarse en conseguir nuevos clientes. Los clientes nuevos se convierten en una fuente de oportunidad para crecer y ser rentable. Para que esto se dé, las empresas deben ofrecer un valor superior, que logre convencer al cliente que el producto que compran ofrece valores agregados y que superan las ofertas de la competencia.
      .col-md-6.mb-5
        .p-5(style="background-color:#FFDE96;border-top-right-radius:15px;border-bottom-right-radius:15px;height:100%;")
          .text-center
            img(src="@/assets/curso/temas/tema6/4.png" data-aos="fade-up" style="max-width:250px;display:inline;margin-top:-130px;position:relative;")
          h3.mt-5(data-aos="fade-up") Conservar clientes actuales
          p(data-aos="fade-up") Los clientes que la empresa posee actualmente son un activo muy valioso; sobre todo para mantener el nivel de participación dentro del mercado total. Los clientes actuales permiten que la empresa pueda crecer más y mantener el nivel de participación en el mercado, lo que les asegura que sigan teniendo utilidades. Las empresas deben lograr la plena satisfacción de sus clientes, tanto en la entrega de productos como en el nivel de servicio para lograr mantener a los clientes actuales.  

    p(data-aos="fade-up") Por otra parte, los clientes pueden ser personas naturales o jurídicas, receptoras de bienes o servicios por medio de la compra, como estudiaremos a continuación.        

    ImagenInfograficaB.color-primario.mt-5.col-md-11.m-auto
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/temas/tema6/5.svg', alt='')
      div(x="82%" y="10%" tooltip="Por su nivel de satisfacción" numero="1")
        h4 Por su nivel de satisfacción 
        p.mt-5 #[strong Cliente muy satisfecho:] estos clientes consideran que el producto y el servicio que recibe sobrepasa sus expectativas. Aquí, se establece una relación entre la empresa y el cliente donde puede generar un proceso de recompra ante una satisfacción que le genera al cliente comodidad. Además, estos clientes hacen publicidad gratuita de la empresa ya que transmite su satisfacción a otros clientes potenciales.

        p.mt-4 #[strong Cliente satisfecho:] aquí el cliente está contento con la propuesta que recibe, pero se podría cambiar si la competencia le ofrece algo que supere el valor que está recibiendo actualmente. Existen clientes que quieren siempre recibir más.

        p.mt-4 #[strong Cliente insatisfecho:] aquí el cliente percibe que el ofrecimiento entregado no corresponde a lo que deseaba, por lo que se considera engañado o defraudado por la empresa. Este cliente es de cuidado o peligroso, porque inmediatamente se pasan a la competencia o puede generar una mala reputación o publicidad negativa del negocio, por ello la empresa debe prestarles mucha atención. La empresa debe centrarse en escucharle y conocer cuáles son los motivos de su descontento para poder argumentar y cambiar esta opinión.
      div(x="82%" y="27%" tooltip="Por el volumen de compra" numero="2")
        h4.mt-5 Por el volumen de compra

        p.mt-4 #[strong Clientes de alto volumen de compra:] estos se convierten en clientes prioritarios para la empresa, debido a su gran cantidad de compra y que logra representar un porcentaje alto en sus ventas. Se consideran clientes que están satisfechos con el producto. Son conocidos como clientes mayoristas o al por mayor. Muchas veces las empresas valoran a este tipo de cliente otorgándole descuentos o ciertas promociones. 

        p.mt-4 #[strong Clientes con volumen promedio de compra:] realizan compran en forma repetida en un volumen promedio, esto significa que si están contentos con la marca y el producto. Los clientes de este tipo deben de ser obsequiados con recompensas por su fidelidad. Por ejemplo, en una barbería, si el cliente acude 10 veces, el siguiente corte de pelo le saldrá gratis.

        p.mt-4 #[strong Clientes de bajo volumen de compra:] pueden ser clientes ocasionales o clientes que les agrada el producto y están contentos, pero su capacidad adquisitiva no les permite comprar en mayor cantidad. Son los clientes retail, minoristas o al por menor.
      div(x="82%" y="44%" tooltip="Por su influencia" numero="3")
        h4.mt-5 Por su influencia

        p.mt-4 #[strong Clientes muy influyentes:] son personas que tienen un nivel de influencia muy alto para generar una opinión positiva o negativa sobre un número muy grande de usuarios, por lo general son líderes de opinión. Estos clientes pueden actuar como imagen comercial de la empresa, aquí es importante trabajar su satisfacción y tratar de que hablen de los productos o servicios de la empresa. Por ejemplo, algunas empresas le pagan a artistas o deportistas para que hablen bien de sus productos o para que utilicen sus productos en público. Esto con el fin de generar un impacto en los consumidores y como consecuencia en su nivel de ventas.

        p.mt-4 #[strong Clientes con influencia promedio:] los que tienen influencia media, son personas que son especialistas de un área y que al hablar bien o mal del producto, puede mover a un buen número de personas para que prueben y prefieran ciertos productos o servicios. Por ejemplo, un médico que receta un medicamento.

        p.mt-4 #[strong Clientes de influencia familiar:] son aquellos que pueden influir sobre la decisión de compra dentro de los grupos familiares, lo que va creando una lealtad y fidelidad de la marca. Por ejemplo, los cereales que les dan a los bebés porque se los recomienda la abuelita.
      div(x="82%" y="61%" tooltip="Por su frecuencia" numero="4")
        h4.mt-5 Por su frecuencia

        p.mt-4 #[strong Cliente de compra frecuente:] compran de forma periódica los productos y marcas, están satisfechos; las empresas intentan fidelizar a estos clientes para que su relación se mantenga por tiempos prolongados. Es aquí, donde la empresa deberá mantener un trato personalizado y especial con estos clientes.

        p.mt-4 #[strong Cliente de compra habitual:] realizan sus compras con cierto patrón de regularidad, se puede decir que si les gusta el producto. Y es aquí, donde las empresas buscan aumentar la frecuencia de sus compras por medio de estrategias.

        p.mt-4 #[strong Cliente de compra ocasional:] son los que se acercan a demandar nuestros bienes y servicios una sola vez, o de vez en cuando. Aquí es donde las empresas deben manejar cierta información y comunicación para hacer seguimiento a estos clientes y de esta forma solicitar información que pueda servir para tratar de convertirlos en clientes habituales o frecuentes.
      div(x="82%" y="77%" tooltip="Por su vigencia" numero="5")
        h4.mt-5 Por su vigencia

        p.mt-4 #[strong Cliente activo:] son los que compran con cierta regularidad, se les debe prestar mucha atención porque son los que están formando el nivel de ventas y de ingresos. Es aquí donde la empresa debe buscar los medios para conservarlos y retenerlos.

        p.mt-4 #[strong Cliente inactivo:] es el que en alguna oportunidad compró algún producto y que por alguna razón ya no lo hace. Es necesario ubicarlos para conocer la causa o razón por la que abandonaron la empresa y buscar la forma de recuperarlos y volver a realizar otra compra.
      div(x="82%" y="95%" tooltip="Clientes potenciales" numero="6")
        h4.mt-5 Clientes potenciales 

        p.mt-4 Son los posibles nuevos clientes que podrían tener la intención y la capacidad adquisitiva para adquirir productos o servicios de la empresa. Los clientes potenciales les permiten a las empresas desarrollarse y crecer de una forma saludable y positiva.

        p.mt-4 El cliente potencial debe tener un perfil adecuado, poder adquisitivo, una necesidad real o cualquier otro factor. Son algunas de las características que buscan las empresas para poderlos considerar como posibles candidatos para ser incorporados a la empresa. #[br] Pueden ser determinantes para proyectar el futuro del negocio.

        p.mt-4 Es importante mencionar, que los clientes potenciales reciben multitud de propuestas, pero sólo comprarán aquella que perciban que les va a satisfacer una necesidad. Es por esta razón que se hace necesario tener un trato especial donde permita mostrar que la empresa está enfocada en resolver sus problemas.






</template>

<script>
import ImagenInfograficaMia from './Components/ImagenInfograficaMia.vue'
import $ from 'jquery'
export default {
  name: 'Tema6',
  components: {
    ImagenInfograficaMia,
  },
  data: () => ({
    indicadorTarjetaSlide: true,
    mostrarIndicador: true,
    mostrarIndicador2: true,
    modal1: false,
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
    $('#path1__imageninfografica').hover(function() {
      $('#path2__imageninfografica').removeClass('activo_path')
      $('#path3__imageninfografica').removeClass('activo_path')
      $('#path4__imageninfografica').removeClass('activo_path')
      $('#path5__imageninfografica').removeClass('activo_path')
      $('#path1__imageninfografica').addClass('activo_path')
      $('#cont_path2_imageninfografica').hide()
      $('#cont_path3_imageninfografica').hide()
      $('#cont_path4_imageninfografica').hide()
      $('#cont_path5_imageninfografica').hide()
      $('#cont_path1_imageninfografica').show()
    })
    $('#path2__imageninfografica').hover(function() {
      $('#path1__imageninfografica').removeClass('activo_path')
      $('#path3__imageninfografica').removeClass('activo_path')
      $('#path4__imageninfografica').removeClass('activo_path')
      $('#path5__imageninfografica').removeClass('activo_path')
      $('#path2__imageninfografica').addClass('activo_path')
      $('#cont_path1_imageninfografica').hide()
      $('#cont_path3_imageninfografica').hide()
      $('#cont_path4_imageninfografica').hide()
      $('#cont_path5_imageninfografica').hide()
      $('#cont_path2_imageninfografica').show()
    })
    $('#path3__imageninfografica').hover(function() {
      $('#path1__imageninfografica').removeClass('activo_path')
      $('#path2__imageninfografica').removeClass('activo_path')
      $('#path4__imageninfografica').removeClass('activo_path')
      $('#path5__imageninfografica').removeClass('activo_path')
      $('#path3__imageninfografica').addClass('activo_path')
      $('#cont_path1_imageninfografica').hide()
      $('#cont_path2_imageninfografica').hide()
      $('#cont_path4_imageninfografica').hide()
      $('#cont_path5_imageninfografica').hide()
      $('#cont_path3_imageninfografica').show()
    })
    $('#path4__imageninfografica').hover(function() {
      $('#path1__imageninfografica').removeClass('activo_path')
      $('#path3__imageninfografica').removeClass('activo_path')
      $('#path4__imageninfografica').removeClass('activo_path')
      $('#path5__imageninfografica').removeClass('activo_path')
      $('#path4__imageninfografica').addClass('activo_path')
      $('#cont_path2_imageninfografica').hide()
      $('#cont_path3_imageninfografica').hide()
      $('#cont_path1_imageninfografica').hide()
      $('#cont_path5_imageninfografica').hide()
      $('#cont_path4_imageninfografica').show()
    })
    $('#path5__imageninfografica').hover(function() {
      $('#path2__imageninfografica').removeClass('activo_path')
      $('#path3__imageninfografica').removeClass('activo_path')
      $('#path4__imageninfografica').removeClass('activo_path')
      $('#path1__imageninfografica').removeClass('activo_path')
      $('#path5__imageninfografica').addClass('activo_path')
      $('#cont_path2_imageninfografica').hide()
      $('#cont_path3_imageninfografica').hide()
      $('#cont_path4_imageninfografica').hide()
      $('#cont_path1_imageninfografica').hide()
      $('#cont_path5_imageninfografica').show()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>
<style lang="sass">
.activo_path
  fill: #FFDE96 !important
.img-infografica-b__modal
  background-color: rgba(246,246,246,.9)
.img-infografica-b__modal__contenido div > *
  color: #12263F !important
.img-infografica-b__modal__btn-cerrar i
  color: #181818
</style>
