interface OfferCardProps {
  badge: string
  title: string
  discount: string
  description: string
  detail: string
  active?: boolean
}

export default function OfferCard({ badge, title, discount, description, detail, active = false }: OfferCardProps) {
  return (
    <div
      className={`mx-4 rounded-2xl p-4 relative ${
        active
          ? 'border-2 border-chaussea-800 bg-chaussea-50'
          : 'border border-chaussea-100 bg-[#F5F8FC]'
      }`}
    >
      <span
        className={`absolute -top-2.5 left-4 text-[9px] font-bold px-3 py-0.5 rounded-full uppercase tracking-[0.5px] ${
          active
            ? 'bg-chaussea-800 text-white'
            : 'bg-chaussea-100 text-chaussea-500'
        }`}
      >
        {badge}
      </span>
      <h4 className="text-sm font-semibold text-dark mt-1.5">{title}</h4>
      <p
        className={`font-bold my-1 ${
          active ? 'text-[26px] text-chaussea-800' : 'text-lg text-chaussea-500'
        }`}
      >
        {discount}
      </p>
      <p className={`text-[11px] ${active ? 'text-chaussea-500' : 'text-chaussea-400'}`}>
        {description}
      </p>
      <p className="text-[10px] text-chaussea-500 mt-1.5">{detail}</p>
    </div>
  )
}