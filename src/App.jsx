import { Navbar } from './components/navbar'
import { HeroCarousel } from './components/heroCarousel'
import { CardapioCards } from './components/cardapiocards'
import { Contato } from './components/contato'
import { Depoimentos } from './components/depoimentos'

export function App() {
  return (
    <div>
      <Navbar />
      <HeroCarousel />
      <CardapioCards />
      <Depoimentos/>
      <Contato/>
    </div>
  )
}

export default App