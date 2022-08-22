import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../styles/components/pages/ServiciosPage.css'

const ServiciosPage = (props) => {
    return (
        <main>
        <div className="servicios">
            <div className="col">
              <i className="fa-solid fa-globe fa-2xl"></i>
              <h1>Diseño web</h1>
              <h2>Diseño web + Hosting por un ano + registro de dominio </h2>
              <h4>Pagina web de 3 secciones (Home, Nosotros, Servicios | Productos, Contacto. incluye Whatsapp flotante para
                chat online</h4>
              <h4>Ideal para profesionales</h4>
              <p>Posicionamiento en google + Ficha de google Mi Negocio + Google maps</p>
              <a href="https://wa.me/5491130931301" className="button">Consultar</a>
            </div>
        
            <div className="col">
              <i className="fa-brands fa-google fa-2xl"></i>
              <h1>Google</h1>
              <h2>Landing page web basica (una sola pagina) + Google maps + Google mi negocio</h2>
              <h4>Ideal para comenzar, primera presencia online</h4>
              <h4> contiene Informacion basica, de los productos o servicios y datos de contacto</h4>
              <p> Servicio basico sin costo mensual de hosting</p>
              <a href="https://wa.me/5491130931301" className="button">Consultar</a>
            </div>
        
            <div className="col">
              <i className="fa-solid fa-cart-shopping fa-2xl"></i>
              <h1>Tienda   Online</h1>
              <h2>Sitio de    e-commerce</h2>
              <h4>Con carrito de compras, sistema de pagos integrado, integracion con sistema de calculo de valor de los envios</h4>
              <h4>Instagram shopping y facebook shopping, pixel de facebook con seguimiento</h4>
              <p>Ideal para negocios que deseen expandirse con la venta online</p>
              <a href="https://wa.me/5491130931301" className="button">Consultar</a>
            </div>
          </div>
        
          <div className="servicios">
            <div className="col">
              <i className="fa-solid fa-rocket fa-2xl"></i>
              <h1>Redes Sociales</h1>
              <h2>Levamos tu negocio al proximo nivel </h2>
              <i className="fa-brands fa-facebook-square"></i>
              <i className="fa-brands fa-instagram-square"></i>
              <i className="fa-brands fa-youtube"></i>
              <i className="fa-brands fa-tiktok"></i>
              <i classname="fa-brands fa-whatsapp-square"></i>
              <i classname="fa-brands fa-google-plus-square"></i>
              <h4>Pauta mensual para publicaciones en redes sociales, Feed de instagram, Facebook noticias, Historias</h4>
              <h4>Ideal para interesados en crear una comunidad de clientes online.</h4>
              <p>Contenidos digitales estaticos y animados</p>
              <a href="https://wa.me/5491130931301" className="button">Consultar</a>
            </div>
            <div className="col">
              <i className="fa-solid fa-server fa-2xl"></i>
              <h1>  Hosting      Web</h1>
              <h2>Alojamiento  web,    mensual o anual </h2>
              <h4> Direcciones de email  @tunegocio,  soporte tecnico para configuracion de e-mails,  certificado ssl para tu pagina web</h4>
              <h4> Consulte planes disponibles</h4>
              <p>50% de descuento por pago anual</p>
              <p>Upgrade de recursos segun su necesidad</p>
              <a href="https://wa.me/5491130931301" className="button">Consultar</a>
            </div>
            <div className="col">
              <i className="fa-solid fa-globe"></i>
              <h1> Catalogo de productos</h1>
              <h2>Diseño de catalogo de productos en pdf o en apps online</h2>
              <h4>Catalogo mayorista para compartir con tus grupos de Whatsapp, edision de imagenes</h4>
              <h4>Ideal para comercios</h4>
              <p>Para vender online desde el whatsapp, sin necesidad de tener una pagina web</p>
              <a href="https://wa.me/5491130931301" className="button">Consultar</a>
            </div>
          </div>
          </main>
        
        
        
    );

}
export default ServiciosPage;