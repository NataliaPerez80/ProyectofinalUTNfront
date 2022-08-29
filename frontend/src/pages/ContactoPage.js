import '../styles/components/pages/ContactoPage.css';
import { useState } from 'react';
import axios from 'axios';

const ContactoPage = (props) => {
  const initialForm = {
    nombre: '',
    telefono: '',
    email: '',
    mensaje: ''
  }
  const [sending, setSending] = useState(false);
  const [msg, setMsg] = useState('');
  const [formData, setFormData] = useState(initialForm);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(oldData => ({
      ...oldData,
      [name]: value //forma dinamica
    }));
  }

  const handleSubmit = async e => {
    e.preventDefault();
    setMsg('');
    setSending(true)
    const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/contacto`, formData);
    setSending(false);
    setMsg(response.data.message);
    if (response.data.error === false) {
      setFormData(initialForm)
    }
  }
  return (
    <main className="contacto">
      <div>
        <h2>Contacto Rapido</h2>
        <form action="/contacto" method="post" onSubmit={handleSubmit} className="formulario">
          <p>
            <label for="nombre">Nombre</label>
            <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} />
          </p>
          <p>
            <label for="telefono">Telefono</label>
            <input type="text" name="telefono" value={formData.telefono} onChange={handleChange} />
          </p>
          <p>
            <label for="email">Email</label>
            <input type="text" name="email" value={formData.email} onChange={handleChange} />
          </p>
          <p>
            <label for="mensaje">Mensaje</label>
            <textarea name="mensaje" value={formData.mensaje} onChange={handleChange}></textarea>
          </p>
          <p>
            <input type="submit" value="Enviar" />
          </p>
        </form>

        {sending ? <p>Enviando...</p> : null}
        {msg ? <p>{msg}</p> : null}

      </div>
      <div class="datos">
        <h2>Otras vias de comunicacion</h2>
        <ul>
          <li>Telefono  <a href="" target="_blank"><i class="fa-solid fa-square-phone">  5491130931301</i></a></li>
          <li>E-mail <a href="mailto:info@prontoweb.site" target="_blank"><i class="fa-solid fa-envelope">  info@prontoweb.site</i></a></li>
          <li>whatsapp  <a href="https://wa.me.5491130931301" target="_blank"><i class="fa-brands fa-whatsapp">  </i>  5491130931301</a></li>
          <li>instagram <a href="https://instagram.com/prontoweb.site" target="_blank"><i class="fa-brands fa-instagram fa-xl">  </i>  @prontoweb.site</a></li>
          <li>Facebok  <a href="https://facebook.com/prontoweb" target="_blank"><i class="fa-brands fa-facebook-square fa-xl ">  </i>  @prontoweb</a></li>
          <li>Linkedin <a href="https://www.linkedin.com/in/nataliaperez-prontoweb/" target="_blank"><i class="fa-brands fa-linkedin fa-xl">   </i>  Natalia Perez</a></li>

        </ul>
      </div>
      <div className="mapa">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3286.159933357732!2d-58.49555168500002!3d-34.54950578047362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb7be49f91d87%3A0x7b1682aadfbadfe0!2sProntoWeb.site!5e0!3m2!1ses-419!2sar!4v1653414986633!5m2!1ses-419!2sar"
          width="100%" height="100%" style={{ border: 0 }} allowfullscreen="" loading="lazy"
          referrerpolicy="no-referrer-when-downgrade">
        </iframe>

      </div>
    </main>



  );

}
export default ContactoPage;