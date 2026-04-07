export default function QuickStats() {
  return (
    <div className="flex gap-2 px-5 mt-3">
      <div className="flex-1 bg-chaussea-50 rounded-xl p-3 text-center border border-chaussea-100">
        <p className="text-xl font-bold text-success">12,50 €</p>
        <p className="text-[10px] text-chaussea-500 mt-0.5">Cagnotte</p>
      </div>
      <div className="flex-1 bg-chaussea-50 rounded-xl p-3 text-center border border-chaussea-100">
        <p className="text-xl font-bold text-chaussea-800">7</p>
        <p className="text-[10px] text-chaussea-500 mt-0.5">Achats</p>
      </div>
    </div>
  )
}