
import'../styles/components/pages/HomePage.css'

const HomePage = (props) => {
    return (
    <main>
    <div className="band">
      <div className="item-1">
        <a href="/servicios" className="card">
          <div className="thumb1">  </div>
          <article>
            <h1>Diseño Web</h1>
            <span>Pymes, profesionales, venta online de productos y servicios, negocios y emprendedores</span>
          </article>
        </a>
      </div>
      <div className="item-2">
        <a href="/servicios" className="card">
        <div className="thumb2"></div>
          <article>
            <h1>Subimos su negocio a los buscadores.</h1>
            <p>Posicionamiento web, diseño de imagen digital completo.</p>
            <span> Sea visible donde lo estan buscando. </span>
          </article>
        </a>
      </div>
      <div className="item-3">
        <a href="/servicios" className="card">
        <div className="thumb3"> </div>
          <article>
            <h1>Diseñamos tu e-commerce</h1>
            <p>Sitio web con carrito de compras, facebook busisness y etiquetas de productos en instagram. </p>
            <span>instagram shoping | Facebook shopping</span>
          </article>
        </a>
      </div>
      <div className="item-4">
        <a href="/servicios" className="card">
        <div className="thumb4"> </div>
          <article>
            <h1>Redes Sociales</h1>
            <p>Contenido para redes sociales. Publicaciones en el feed, historias, videos. Facebbok + instagrams ads
            </p>
            <span>Un iman para atraer nuevos clientes </span>
          </article>
        </a>
      </div>
      <div className="item-5">
        <a href="/servicios" className="card">
        <div className="thumb5"> </div>
          <article>
            <h1>Hosting web</h1>
            <p>Servicio de Hosting en la nube con todos los recursos necesarios para su proyecto</p>
            <span>Contratacion anual con 50% de descuento</span>
          </article>
        </a>
      </div>
      <div className="item-6">
        <a href="/servicios" className="card">
        <div className="thumb6"> </div>
          <article>
            <h1>Goodle Ads</h1>
            <p>Anuncie en google para obtener mas visitas en su sitio web y en su local.</p>
            <span>Google maps | google mi negocio</span>
          </article>
        </a>
      </div>
      <div className="item-7">
        <a href="servicios" className="card">
        <div className="thumb7"> </div>
          <article>
            <h1>Catalogos Digitales</h1>
            <p>Catalogo digital para ventas mayoristas</p>
            <span>PDF | aplicaciones online</span>
          </article>
        </a>
      </div>
    </div>

  </main>
    );

}
export default HomePage;