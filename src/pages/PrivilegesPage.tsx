import OfferCard from '../components/privileges/OfferCard'
import VPCard from '../components/privileges/VPCard'
import ReferralCard from '../components/privileges/ReferralCard'

export default function PrivilegesPage() {
  return (
    <div className="pb-24 bg-white min-h-screen">
      <div className="px-5 pt-5 pb-2">
        <h3 className="text-[17px] font-semibold text-dark">Mes privilèges</h3>
      </div>
      <div className="flex flex-col gap-5">
        <OfferCard
          badge="Actif"
          title="Anniversaire Marie"
          discount="-25%"
          description="Sur tout le magasin"
          detail="Valable jusqu'au 18 mai 2026"
          active
        />
        <OfferCard
          badge="Dans 23 jours"
          title="Anniversaire Lucas"
          discount="-25% enfant"
          description="Disponible à partir du 23 avril"
          detail=""
        />
        <VPCard />
        <ReferralCard />
      </div>
    </div>
  )
}