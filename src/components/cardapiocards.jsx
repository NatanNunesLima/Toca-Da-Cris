import coxinha from '../assets/coxinha.jpg'
import empada from '../assets/empada.jpg'
import cenoura from '../assets/cenoura.jpg'
import torta from '../assets/torta.jpg'
import paodequeijo from '../assets/paodequeijo.jpg'
import brigadeiro from '../assets/brigadeiro.jpg'

export function CardapioCards() {
  const itens = [
    {
      id: 1,
      tipo: 'Salgado',
      titulo: 'Coxinha Cremosa',
      descricao: 'Massa crocante por fora, recheada com frango desfiado temperado e catupiry.',
      badgeBg: 'bg-danger',
      imagem: coxinha
    },
    {
      id: 2,
      tipo: 'Salgado',
      titulo: 'Empada Especial',
      descricao: 'Massa que derrete na boca com recheio suculento de palmito ou frango.',
      badgeBg: 'bg-danger',
      imagem: empada
    },
    {
      id: 3,
      tipo: 'Doce',
      titulo: 'Bolo de Cenoura com Chocolate',
      descricao: 'Fofinho, fresquinho e com aquela cobertura generosa de chocolate cremoso.',
      badgeBg: 'bg-warning text-dark',
      imagem: cenoura
    },
    {
      id: 4,
      tipo: 'Doce',
      titulo: 'Torta de Morango',
      descricao: 'Base crocante, creme leve e morangos frescos selecionados com brilho especial.',
      badgeBg: 'bg-warning text-dark',
      imagem: torta
    },
    {
      id: 5,
      tipo: 'Salgado',
      titulo: 'Pão de Queijo Caseiro',
      descricao: 'Feito com queijo de verdade, casquinha crocante por fora e macio por dentro.',
      badgeBg: 'bg-danger',
      imagem: paodequeijo
    },
    {
      id: 6,
      tipo: 'Doce',
      titulo: 'Brigadeiro',
      descricao: 'O clássico brigadeiro brasileiro feito com chocolate nobre e confeitos especiais.',
      badgeBg: 'bg-warning text-dark',
      imagem: brigadeiro
    }
  ];

  return (
    <section id="destaques" className="py-5 bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold">Nossos Salgados e Doces</h2>
          <p className="text-muted">Feito com muito carinho para saborear o seu dia</p>
        </div>
        <div className="row g-4">
          {itens.map((item) => (
            <div className="col-12 col-md-4" key={item.id}>
              <div className="card h-100 shadow-sm border-0">
                <img 
                  src={item.imagem} 
                  className="card-img-top" 
                  alt={item.titulo} 
                  style={{ height: '220px', objectFit: 'cover' }} 
                />
                <div className="card-body d-flex flex-column">
                  <span className={`badge ${item.badgeBg} align-self-start mb-2`}>{item.tipo}</span>
                  <h5 className="card-title fw-bold">{item.titulo}</h5>
                  <p className="card-text text-muted">{item.descricao}</p>
                </div>
                <div className="card-footer bg-transparent border-0 pb-3">
                  <button className="btn btn-outline-dark w-100">Pedir Agora</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}