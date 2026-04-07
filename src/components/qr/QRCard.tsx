export default function QRCard() {
  return (
    <div className="mx-5 bg-gradient-to-br from-chaussea-800 to-chaussea-700 rounded-[18px] p-5 text-center">
      <h2 className="text-[17px] font-bold text-white tracking-[2px]">
        CHAUSSEA
      </h2>
      <p className="text-[10px] text-chaussea-300 mt-1">
        Carte fidélité n° 284 917 003
      </p>
      <div className="w-40 h-40 mx-auto my-4 bg-white rounded-[14px] flex items-center justify-center">
        <svg viewBox="0 0 100 100" width="130" height="130">
          <rect x="5" y="5" width="25" height="25" rx="3" fill="#1565C0"/>
          <rect x="8" y="8" width="19" height="19" rx="2" fill="white"/>
          <rect x="11" y="11" width="13" height="13" rx="1" fill="#1565C0"/>
          <rect x="70" y="5" width="25" height="25" rx="3" fill="#1565C0"/>
          <rect x="73" y="8" width="19" height="19" rx="2" fill="white"/>
          <rect x="76" y="11" width="13" height="13" rx="1" fill="#1565C0"/>
          <rect x="5" y="70" width="25" height="25" rx="3" fill="#1565C0"/>
          <rect x="8" y="73" width="19" height="19" rx="2" fill="white"/>
          <rect x="11" y="76" width="13" height="13" rx="1" fill="#1565C0"/>
          <rect x="35" y="5" width="8" height="8" fill="#1565C0"/>
          <rect x="48" y="5" width="8" height="8" fill="#1565C0"/>
          <rect x="35" y="18" width="8" height="8" fill="#1565C0"/>
          <rect x="55" y="18" width="8" height="8" fill="#1565C0"/>
          <rect x="35" y="35" width="8" height="8" fill="#1565C0"/>
          <rect x="48" y="42" width="8" height="8" fill="#1565C0"/>
          <rect x="35" y="55" width="8" height="8" fill="#1565C0"/>
          <rect x="55" y="48" width="8" height="8" fill="#1565C0"/>
          <rect x="70" y="42" width="8" height="8" fill="#1565C0"/>
          <rect x="82" y="55" width="8" height="8" fill="#1565C0"/>
          <rect x="70" y="65" width="8" height="8" fill="#1565C0"/>
          <rect x="82" y="72" width="8" height="8" fill="#1565C0"/>
          <rect x="70" y="82" width="8" height="8" fill="#1565C0"/>
          <rect x="85" y="85" width="8" height="8" fill="#1565C0"/>
          <rect x="5" y="42" width="8" height="8" fill="#1565C0"/>
          <rect x="18" y="48" width="8" height="8" fill="#1565C0"/>
          <rect x="42" y="70" width="8" height="8" fill="#1565C0"/>
          <rect x="55" y="75" width="8" height="8" fill="#1565C0"/>
          <rect x="48" y="85" width="8" height="8" fill="#1565C0"/>
        </svg>
      </div>
      <p className="text-sm font-semibold text-white mt-3">Marie Dupont</p>
      <p className="text-[11px] text-chaussea-300 mt-0.5">
        Membre depuis mars 2026
      </p>
    </div>
  )
}