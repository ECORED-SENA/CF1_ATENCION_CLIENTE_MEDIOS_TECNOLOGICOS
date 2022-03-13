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
          h5.mt-5(data-aos="fade-up") Atraer clientes nuevos
          p(data-aos="fade-up") Toda empresa que quiera tener un mayor crecimiento y aumentar su participación de mercado, debe esforzarse en conseguir nuevos clientes. Los clientes nuevos se convierten en una fuente de oportunidad para crecer y ser rentable. Para que esto se dé, las empresas deben ofrecer un valor superior, que logre convencer al cliente que el producto que compran ofrece valores agregados y que superan las ofertas de la competencia.
      .col-md-6.mb-5
        .p-5(style="background-color:#FFDE96;border-top-right-radius:15px;border-bottom-right-radius:15px;height:100%;")
          .text-center
            img(src="@/assets/curso/temas/tema6/4.png" data-aos="fade-up" style="max-width:250px;display:inline;margin-top:-130px;position:relative;")
          h5.mt-5(data-aos="fade-up") Conservar clientes actuales
          p(data-aos="fade-up") Los clientes que la empresa posee actualmente son un activo muy valioso; sobre todo para mantener el nivel de participación dentro del mercado total. Los clientes actuales permiten que la empresa pueda crecer más y mantener el nivel de participación en el mercado, lo que les asegura que sigan teniendo utilidades. Las empresas deben lograr la plena satisfacción de sus clientes, tanto en la entrega de productos como en el nivel de servicio para lograr mantener a los clientes actuales.  

    p(data-aos="fade-up") Por otra parte, los clientes pueden ser personas naturales o jurídicas, receptoras de bienes o servicios por medio de la compra, como estudiaremos a continuación.

    figure.col-md-9.m-auto.mt-5.indicador__container(@click="mostrarIndicador2 = false")
      img(src="@/assets/curso/temas/tema6/5.png" data-aos="fade-up" @click="modal1 = true" style="cursor:pointer;")
      span.indicador--click(v-if="mostrarIndicador2")
    ModalA(:abrir-modal.sync="modal1")
      .p-5(style="background-color:#F6F6F6;")
        h4 Por su nivel de satisfacción 
        p.mt-5 #[strong Cliente muy satisfecho:] estos clientes consideran que el producto y el servicio que recibe sobrepasa sus expectativas. Aquí, se establece una relación entre la empresa y el cliente donde puede generar un proceso de recompra ante una satisfacción que le genera al cliente comodidad. Además, estos clientes hacen publicidad gratuita de la empresa ya que transmite su satisfacción a otros clientes potenciales.

        p.mt-4 #[strong Cliente satisfecho:] aquí el cliente está contento con la propuesta que recibe, pero se podría cambiar si la competencia le ofrece algo que supere el valor que está recibiendo actualmente. Existen clientes que quieren siempre recibir más.

        p.mt-4 #[strong Cliente insatisfecho:] aquí el cliente percibe que el ofrecimiento entregado no corresponde a lo que deseaba, por lo que se considera engañado o defraudado por la empresa. Este cliente es de cuidado o peligroso, porque inmediatamente se pasan a la competencia o puede generar una mala reputación o publicidad negativa del negocio, por ello la empresa debe prestarles mucha atención. La empresa debe centrarse en escucharle y conocer cuáles son los motivos de su descontento para poder argumentar y cambiar esta opinión.





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
</style>
