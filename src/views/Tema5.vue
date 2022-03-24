<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Portafolio de servicios

    .row
      .col-md-5.mb-2
        h5(data-aos="fade-left") Es un documento o una presentación donde una empresa detalla las características de su oferta comercial.
        h5(data-aos="fade-left") Está  dirigido a potenciales clientes, posibles socios comerciales, proveedores, etc.
      .col-md-7
        p(data-aos="fade-right") El objetivo del portafolio de servicios, es presentar la oferta de una firma y difundir información precisa respecto a la misma, constituyéndose como una herramienta comercial y de marketing muy valiosa para aumentar las ventas.
        p.mt-3(data-aos="fade-up") En cuanto a los tipos de portafolios, encontramos los siguientes:

    .row.mt-5
      .col-md-6.mb-3(style="padding:0px;")
        h5.mb-0.text-center.p-4(style="background-color:#7F79FB;" data-aos="fade-up") Portafolio físico
        img(src="@/assets/curso/temas/tema5/1.png" data-aos="fade-in")
        .p-5(style="background-color:#A4A3FF;")
          p(data-aos="fade-up") Es un documento impreso que se diseña de diversas formas. Se debe exponer la información de manera clara y concisa. La metodología más común es por medio de un díptico o tríptico, aunque también se presenta como manual.
      .col-md-6.mb-3(style="padding:0px;")
        h5.mb-0.text-center.p-4(style="background-color:#FCB315;" data-aos="fade-up") Portafolio digital
        img(src="@/assets/curso/temas/tema5/2.png" data-aos="fade-in")
        .p-5(style="background-color:#FFDE96;")
          p(data-aos="fade-up") Se usa en medios digitales para enviar a clientes potenciales por medio de enlaces, emails y mensajes. Se elaboran o diseñan de la misma forma que los físicos y sus medios de lectura son dispositivos como las tablets, computadoras y smartphones.

    p.mt-5(data-aos="fade-up") Un portafolio se caracteriza por tener las siguientes secciones: 

    ImagenInfografica.color-secundario.mt-5.col-md-8.m-auto
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/temas/tema5/3.png', alt='')
      .tarjeta.color-acento-botones.p-3(x="48%" y="17%" numero="1" style="background-color:#F6F6F6;border-radius:0px;")
        .h5.mb-2 Presentación
        p Se ofrece una primera información más bien genérica sobre la empresa. Año de fundación, nombre, etc.
      .tarjeta.color-acento-botones.p-3(x="72%" y="27%" numero="2" style="background-color:#F6F6F6;border-radius:0px;")
        .h5.mb-2 Objetivos
        p Se incluyen las metas a corto, medio y largo plazo que persigue la empresa, así como sus procedimientos para obtenerlas.
      .tarjeta.color-acento-botones.p-3(x="85%" y="51%" numero="3" style="background-color:#F6F6F6;border-radius:0px;")
        .h5.mb-2 Misión y valores
        p Es el motor, el justificante de las acciones de la empresa.
      .tarjeta.color-acento-botones.p-3(x="80%" y="75%" numero="4" style="background-color:#F6F6F6;border-radius:0px;")
        .h5.mb-2 Certificaciones
        p Se explica qué certificaciones de excelencia y reconocimientos ha recibido la compañía debido a su trayectoria. Sociedades: se añaden las relaciones con otras organizaciones o individuos.
      .tarjeta.color-acento-botones.p-3(x="61%" y="92%" numero="5" style="background-color:#F6F6F6;border-radius:0px;")
        .h5.mb-2 Clientes
        p Se muestra la cartera de clientes de mayor o menor importancia y sus testimonios sobre el proceder de la compañía.
      .tarjeta.color-acento-botones.p-3(x="35%" y="92%" numero="6" style="background-color:#F6F6F6;border-radius:0px;")
        .h5.mb-2 Proveedores
        p Aquí se añade información sobre la calidad de los proveedores que suministran bienes y servicios a la empresa.
      .tarjeta.color-acento-botones.p-3(x="15%" y="75%" numero="7" style="background-color:#F6F6F6;border-radius:0px;")
        .h5.mb-2 Servicios
        p Se explican los servicios ofrecidos, tanto los vigentes como los que están en desarrollo y pasarán a estar activos en breve.
      .tarjeta.color-acento-botones.p-3(x="10%" y="49%" numero="8" style="background-color:#F6F6F6;border-radius:0px;")
        .h5.mb-2 Proyectos
        p Llega el momento de añadir los proyectos en los que participa activamente la empresa.
      .tarjeta.color-acento-botones.p-3(x="23%" y="26%" numero="9" style="background-color:#F6F6F6;border-radius:0px;")
        .h5.mb-2 Contacto
        p Se facilita información de contacto para que el cliente potencial pueda comunicarse con la compañía. Se añaden direcciones de email, teléfonos, webs, direcciones físicas, redes sociales…

    p.mt-5(data-aos="fade-up") A continuación, conozcamos un ejemplo sencillo de un portafolio de servicios: 

    p.mt-5.p-2(style="border-left:4px #FCB315 solid;") &nbsp;#[strong Tabla 1] Ejemplo: Portafolio de servicios de un restaurante

    .tabla-b.color-acento-contenido.mt-4
      .tabla-b__header
        h5.mb-0.text-white Portafolios de servicios de un restaurante
      table
        tr(style="background-color:#F6F6F6;")
          th Nombre
          td Restaurante las delicias
        tr(style="background-color:#fff;")
          th Descripción
          td Restaurante que brinda servicios de alimentación, comida de calidad, organización de eventos formales e informales, etc. Cuenta con carta completa, servicio de wifi, condiciones sanitarias, espacio para niños, etc.
        tr(style="background-color:#F6F6F6;")
          th Especialidad
          td Variedad en el menú #[br] Recetas internacionales, toque especial, chef Carlos…
        tr(style="background-color:#fff;")
          th Horarios
          td Abierto en horario de comidas y cenas de martes a domingo, por ejemplo. #[br] horario de atención: 10:00 am a 3:00 pm los días Martes a Domingo
        tr(style="background-color:#F6F6F6;")
          th Valores
          td Características del establecimiento: dar de comer al cliente en un entorno cálido donde tenga todas las comodidades.
        tr(style="background-color:#fff;")
          th Certificaciones
          td Certificaciones de sanidad, premios culinarios obtenidos, etc.
        tr(style="background-color:#F6F6F6;")
          th Contacto
          td Fórmulas de contacto para comensales a través de redes sociales, email y teléfono.

    p.mt-5(data-aos="fade-up") A continuación, daremos algunos consejos para crear un buen portafolio de servicios: 

    ul.lista-ul.mt-5
        li(data-aos="fade-up")
          i.fas.fa-atom(style="color:#7F79FB;")
          | Elegir un buen formato.
        li(data-aos="fade-up")
          i.fas.fa-atom(style="color:#7F79FB;")
          | Reseñar las características de la empresa.
        li(data-aos="fade-up")
          i.fas.fa-atom(style="color:#7F79FB;")
          | Concebir los servicios que deseamos ofrecer como empresa o Resaltar los principales servicios que presta.
        li(data-aos="fade-up")
          i.fas.fa-atom(style="color:#7F79FB;")
          | Experiencia que tiene en ese campo.
        li(data-aos="fade-up")
          i.fas.fa-atom(style="color:#7F79FB;")
          | Cualquier otra información que pueda generar interés en el cliente.
        li(data-aos="fade-up")
          i.fas.fa-atom(style="color:#7F79FB;")
          | Conocer las características del mercado en el cual deseamos competir, tanto sus necesidades como su manera de operar.
        li(data-aos="fade-up")
          i.fas.fa-atom(style="color:#7F79FB;")
          | Los servicios a ofrecer deben ser de interés para el público actual (la percepción). 
        li(data-aos="fade-up")
          i.fas.fa-atom(style="color:#7F79FB;")
          | Ofrecer descuentos a los clientes que contraten servicios a través de Internet.
        li(data-aos="fade-up")
          i.fas.fa-atom(style="color:#7F79FB;")
          | Un buen diseño (formas, colores, tipografías, los tamaños y la disposición de los elementos para causar la impresión deseada).
        li(data-aos="fade-up")
          i.fas.fa-atom(style="color:#7F79FB;")
          | Se debe tener en cuenta las ofertas vigentes, la temporada y las tendencias del mercado a cada momento.
        li(data-aos="fade-up")
          i.fas.fa-atom(style="color:#7F79FB;")
          | Prestar atención a la disposición de los artículos. 
        li(data-aos="fade-up")
          i.fas.fa-atom(style="color:#7F79FB;")
          | Para su diseño, se puede hacer uso de un folleto en físico o digital, para su realización puede apoyarse en herramientas ofimáticas (Word, PowerPoint o Publisher). 



</template>

<script>
export default {
  name: 'Tema5',
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
.img-infografica__item__numero, .img-infografica-b__item__numero
  left: 100%
.img-infografica__item__dot, .img-infografica-b__item__dot
  padding: 1.2rem 1.3rem 1.2rem 1.3rem
.img-infografica__item__numero, .img-infografica-b__item__numero
  font-size: 1.5rem
.img-infografica.color-secundario .img-infografica__item__dot:before, .img-infografica.color-secundario .img-infografica__item__dot:after, .img-infografica.color-secundario .img-infografica-b__item__dot:before, .img-infografica.color-secundario .img-infografica-b__item__dot:after, .img-infografica-b.color-secundario .img-infografica__item__dot:before, .img-infografica-b.color-secundario .img-infografica__item__dot:after, .img-infografica-b.color-secundario .img-infografica-b__item__dot:before, .img-infografica-b.color-secundario .img-infografica-b__item__dot:after
  background-color: #ffffff
</style>
