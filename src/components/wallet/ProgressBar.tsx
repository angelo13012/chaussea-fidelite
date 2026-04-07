export default function ProgressBar() {
  return (
    <div className="px-5 pt-4">
      <div className="flex justify-between text-[11px] mb-1.5">
        <span className="text-chaussea-500">Prochain euro</span>
        <span className="font-bold text-dark">14€ / 20€</span>
      </div>
      <div className="h-[7px] bg-chaussea-50 rounded-full overflow-hidden">
        <div className="h-full bg-chaussea-800 rounded-full" style={{ width: '70%' }} />
      </div>
      <p className="text-[10px] text-chaussea-500 mt-1">
        Encore 6€ d'achats pour gagner 1€
      </p>
    </div>
  )
}