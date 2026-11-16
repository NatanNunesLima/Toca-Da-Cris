export function Contato() {
  return (
    <footer id="contato" className="bg-dark text-white pt-5 pb-4">
      <div className="container">
        <div className="row g-4 align-items-center">
          
          {/* Coluna 1: Informações e Redes Sociais */}
          <div className="col-lg-4">
            <h5 className="fw-bold text-warning mb-3">Toca da Cris</h5>
            <p className="text-white-50">O melhor espaço de salgados, doces e muito aconchego. Venha nos visitar ou faça a sua encomenda!</p>
            <div className="d-flex flex-column gap-2 mt-3">
              <a href="#" className="btn btn-outline-light btn-sm text-start w-50"><i className="bi bi-instagram me-2"></i> Instagram</a>
              <a href="#" className="btn btn-outline-light btn-sm text-start w-50"><i className="bi bi-facebook me-2"></i> Facebook</a>
              <a href="#" className="btn btn-outline-light btn-sm text-start w-50"><i className="bi bi-whatsapp me-2"></i> WhatsApp</a>
            </div>
          </div>
          
          {/* Coluna 2: Dados de Contato */}
          <div className="col-lg-4">
            <h5 className="fw-bold mb-3">Contato & Endereço</h5>
            <ul className="list-unstyled text-white-50">
              <li className="mb-2"><i className="bi bi-geo-alt-fill text-warning me-2"></i> Mauá, SP - Centro</li>
              <li className="mb-2"><i className="bi bi-whatsapp text-warning me-2"></i> (11) 99999-9999</li>
              <li className="mb-2"><i className="bi bi-envelope-fill text-warning me-2"></i> contato@tocadacris.com.br</li>
            </ul>
          </div>

          {/* Coluna 3: Google Maps */}
          <div className="col-lg-4">
            <h5 className="fw-bold mb-3">Nossa Localização</h5>
            <div className="ratio ratio-16x9 shadow-sm">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58509.34863773539!2d-46.5057!3d-23.6687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce6c6ef73819eb%3A0x14041cb128189c4!2sMau%C3%A1%2C%20SP!5e0!3m2!1spt-BR!2sbr!4v1710000000000" 
                title="Localização Toca da Cris"
                className="rounded border-0"
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

        </div>
        
        <hr className="border-secondary my-4" />
        <div className="text-center text-white-50">
          <small>&copy; 2026 Toca da Cris. Todos os direitos reservados.</small>
        </div>
      </div>
    </footer>
  )
}