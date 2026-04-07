import QRCard from '../components/qr/QRCard'
import QuickStats from '../components/qr/QuickStats'

export default function QRCodePage() {
  return (
    <div className="pb-24 bg-white min-h-screen">
      <div className="pt-12 pb-2 text-center">
        <h3 className="text-[17px] font-semibold text-dark">
          Ma carte fidélité
        </h3>
        <p className="text-xs text-chaussea-500 mt-1">
          Présentez ce code en caisse
        </p>
      </div>
      <QRCard />
      <QuickStats />
    </div>
  )
}