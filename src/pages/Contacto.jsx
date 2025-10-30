import ContactForm from "../components/ContactForm.jsx";

function Contacto() {
  return (
    <div className="page-contacto container-fluid d-flex flex-wrap justify-content-center align-items-center gap-5">
      <div>
        <ContactForm />
      </div>
      <div className="d-flex" style={{ backgroundColor: "#82ffd7a6", padding: "20px", borderRadius: "15px", alignItems: "center", gap: "15px" }}>
      <div className="">
        <h5>Nuestro Local</h5>
        <p>Dirección: Av. California 2195</p>
        <p>Barracas. CABA.</p>
        <p>Tel. 1234-5678</p>
        </div>
    <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.2676763410677!2d-58.378436099999995!3d-34.647942300000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccbfdd8620adf%3A0x60ca8e0f851fcc90!2sVerduler%C3%ADa%20Pocho!5e0!3m2!1ses!2sar!4v1761768338672!5m2!1ses!2sar"
  width="400"
  height="300"
  style={{ border: 0, borderRadius:"5px"}}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"

></iframe>
</div>
   </div>
  );
}

export default Contacto;