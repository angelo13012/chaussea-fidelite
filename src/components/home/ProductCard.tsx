interface ProductCardProps {
  name: string
  price: string
}

export default function ProductCard({ name, price }: ProductCardProps) {
  return (
    <div className="min-w-[105px] bg-chaussea-50 rounded-xl p-3 text-center border border-chaussea-100">
      <div className="w-16 h-11 mx-auto mb-1.5 bg-chaussea-200 rounded-lg" />
      <p className="text-[10px] font-semibold text-dark">{name}</p>
      <p className="text-[10px] text-success font-bold mt-0.5">{price}</p>
    </div>
  )
}