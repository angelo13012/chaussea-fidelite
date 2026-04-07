export default function BalanceCard() {
  return (
    <div className="mx-5 bg-gradient-to-br from-success to-success-mid rounded-2xl p-5 text-center">
      <p className="text-[10px] text-success-light uppercase tracking-[1.5px]">
        Solde disponible
      </p>
      <p className="text-4xl font-bold text-white mt-1">12,50 €</p>
      <p className="text-[11px] text-success-light mt-1.5">
        Utilisable en caisse sur votre prochain achat
      </p>
    </div>
  )
}