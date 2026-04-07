import AppHeader from '../components/layout/AppHeader'
import WelcomeSection from '../components/home/WelcomeSection'
import PromoBanner from '../components/home/PromoBanner'
import ProductCard from '../components/home/ProductCard'

const products = [
  { name: 'Basket Urban', price: '29,99 €' },
  { name: 'Sandale été', price: '19,99 €' },
  { name: 'Derby cuir', price: '39,99 €' },
]

export default function HomePage() {
  return (
    <div className="pb-24">
      <AppHeader />
      <WelcomeSection />
      <PromoBanner />
      <div className="px-5 pt-3 pb-1">
        <h3 className="text-[13px] font-semibold text-dark">Nouveautés</h3>
      </div>
      <div className="flex gap-2 px-4 overflow-x-auto pb-4">
        {products.map((p) => (
          <ProductCard key={p.name} name={p.name} price={p.price} />
        ))}
      </div>
    </div>
  )
}