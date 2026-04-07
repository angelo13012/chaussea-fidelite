interface HistoryItemProps {
  store: string
  date: string
  amount: string
  gain: string
}

export default function HistoryItem({ store, date, amount, gain }: HistoryItemProps) {
  return (
    <div className="flex justify-between items-center px-5 py-2.5 border-b border-chaussea-50 last:border-b-0">
      <div>
        <p className="text-xs font-semibold text-dark">{store}</p>
        <p className="text-[10px] text-chaussea-500 mt-0.5">{date}</p>
      </div>
      <div className="text-right">
        <p className="text-xs font-semibold text-dark">{amount}</p>
        <p className="text-[10px] text-success font-semibold mt-0.5">{gain}</p>
      </div>
    </div>
  )
}