export default function ReferralCard() {
  return (
    <div className="mx-4 border-[1.5px] border-chaussea-200 rounded-2xl p-4 text-center bg-white">
      <h4 className="text-[13px] font-semibold text-dark">
        Parrainez vos proches
      </h4>
      <p className="text-[11px] text-chaussea-500 mt-1">
        5€ pour vous + 5€ pour votre filleul
      </p>
      <button className="mt-3 bg-chaussea-800 text-white rounded-xl px-4 py-2.5 text-xs font-semibold w-full">
        Partager mon lien
      </button>
    </div>
  )
}