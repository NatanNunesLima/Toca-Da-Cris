import bolo1 from '../assets/bolo1.jpg'
import bolo2 from '../assets/bolo2.jpg'
import bolo3 from '../assets/bolo3.jpg'
export function HeroCarousel() {
  return (
    <section id="inicio" className="w-100">
      <div id="carouselPrincipal" className="carousel slide carousel-fade" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselPrincipal" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselPrincipal" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselPrincipal" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <img 
              src={bolo1} 
              className="d-block w-100" 
              alt="Bem-vindo à Toca da Cris"
              style={{ height: '500px', objectFit: 'cover' }}
            />
            <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded p-3">
              <h2 className="fw-bold">Bem-vindo à Toca da Cris</h2>
              <p>O melhor lugar para encontrar conforto, aconchego e qualidade.</p>
            </div>
          </div>

          <div className="carousel-item">
            <img 
              src={ bolo2 } 
              className="d-block w-100" 
              alt="Novidades na Toca"
              style={{ height: '500px', objectFit: 'cover' }}
            />
            <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded p-3">
              <h2 className="fw-bold">Novidades Incríveis</h2>
              <p>Confira nossos produtos e serviços selecionados especialmente para você.</p>
            </div>
          </div>

          <div className="carousel-item">
            <img 
              src={ bolo3 } 
              className="d-block w-100" 
              alt="Promoções Especiais"
              style={{ height: '500px', objectFit: 'cover' }}
            />
            <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded p-3">
              <h2 className="fw-bold">Promoções Especiais</h2>
              <p>Aproveite nossas ofertas exclusivas desta semana!</p>
            </div>
          </div>
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#carouselPrincipal" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Anterior</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselPrincipal" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Próximo</span>
        </button>
      </div>
    </section>
  )
}