import BalanceCard from '../components/wallet/BalanceCard'
import ProgressBar from '../components/wallet/ProgressBar'
import HistoryItem from '../components/wallet/HistoryItem'

const history = [
  { store: 'Chaussea Créteil', date: '2 avril 2026 · 2 articles', amount: '47,98 €', gain: '+2,00 € gagnés' },
  { store: 'Chaussea Évry', date: '18 mars 2026 · 1 article', amount: '29,99 €', gain: '+1,00 € gagné' },
  { store: 'Chaussea Créteil', date: '3 mars 2026 · 3 articles', amount: '64,97 €', gain: '+3,00 € gagnés' },
]

export default function WalletPage() {
  return (
    <div className="pb-24 bg-white min-h-screen">
      <div className="px-5 pt-5 pb-2">
        <h3 className="text-[17px] font-semibold text-dark">Mon portefeuille</h3>
      </div>
      <BalanceCard />
      <ProgressBar />
      <h4 className="px-5 pt-4 pb-1 text-[13px] font-semibold text-dark">
        Historique récent
      </h4>
      {history.map((h, i) => (
        <HistoryItem key={i} {...h} />
      ))}
    </div>
  )
}