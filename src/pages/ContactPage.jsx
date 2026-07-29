import { useState } from 'react';
import { whatsappUrl } from '@/constants/site';
import { imageAssets } from '@/utils/imageAssets';
export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const submit = (event) => {
    event.preventDefault();
    window.open(
      whatsappUrl(`Hola, soy ${form.name}. Quiero información para: ${form.message}`),
      '_blank',
      'noopener,noreferrer',
    );
  };
  return (
    <section className="contact-page section-space">
      <div className="container contact-page__grid">
        <div className="contact-page__intro">
          <p className="eyebrow">Hablemos de tu fecha</p>
          <h1>
            Tu celebración merece ser <em>inolvidable.</em>
          </h1>
          <p>
            Cuéntanos qué estás soñando. Te responderemos para conocer cada detalle y construir una
            experiencia a tu medida.
          </p>
          <div className="contact-page__image">
            <img src={imageAssets.contactImg} alt="Cámara y lente de fotografía" />
          </div>
        </div>
        <form className="contact-form" onSubmit={submit}>
          <label>
            Tu nombre
            <input
              required
              placeholder="¿Cómo te llamas?"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
          </label>
          <label>
            Correo electrónico
            <input
              type="email"
              required
              placeholder="tu@correo.com"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
          </label>
          <label>
            Teléfono
            <input
              type="tel"
              placeholder="Tu número de contacto"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
            />
          </label>
          <label>
            Cuéntanos sobre tu evento
            <textarea
              required
              placeholder="Fecha, tipo de celebración, lugar y lo que imaginas…"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
            />
          </label>
          <button className="button button--primary" type="submit">
            Enviar por WhatsApp <span>→</span>
          </button>
          <small>Al enviar, continuaremos la conversación en WhatsApp.</small>
        </form>
      </div>
    </section>
  );
}
