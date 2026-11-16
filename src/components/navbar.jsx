import logoImg from '../assets/logo.png'

export function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark sticky-top shadow" style={{backgroundColor: 'var(--Azul-Claro)'}}>
            <div className="container">
                <a className="navbar-brand fw-bold d-flex align-items-center" href="#" style={{color: 'var(--Branco-texto'}}>
                    <img 
                        src={logoImg} 
                        alt="Logo" 
                        width="100" 
                        height="100" 
                        className="d-inline-block align-text-top me-2" 
                    />
                    Toca da Cris
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto text-center" style={{color: 'var(--Preto-texto)'}}>
                    <li className="nav-item">
                    <a className="nav-link active" href="#inicio" style={{color: 'var(--Preto-texto)'}}>Início</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#destaques" style={{color: 'var(--Preto-texto)'}}>Destaques</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#avaliacoes" style={{color: 'var(--Preto-texto)'}}>Depoimentos</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link btn btn-outline-warning ms-lg-3 px-3 mt-2 mt-lg-0" href="#contato" style={{color: 'var(--Preto-texto)'}}>Fale Conosco</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    )
}