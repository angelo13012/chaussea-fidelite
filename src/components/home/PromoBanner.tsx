export default function PromoBanner() {
  return (
    <div className="mx-4 bg-gradient-to-br from-chaussea-800 to-chaussea-600 rounded-[14px] p-4 relative overflow-hidden">
      <span className="text-[9px] text-chaussea-300 uppercase tracking-[1.5px] font-semibold">
        Offre exclusive
      </span>
      <h4 className="text-[17px] text-white font-bold mt-1.5">
        Soldes d'été
      </h4>
      <p className="text-[11px] text-chaussea-300 mt-0.5">
        Jusqu'à -50% en magasin
      </p>
      <div className="absolute right-3.5 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center">
        <span className="text-sm font-bold text-chaussea-800">-50%</span>
      </div>
    </div>
  )
}