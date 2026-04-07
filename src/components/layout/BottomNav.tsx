import { NavLink } from 'react-router-dom'
import { Home, QrCode, Wallet, Gift } from 'lucide-react'

const tabs = [
  { to: '/', icon: Home, label: 'Accueil' },
  { to: '/qr', icon: QrCode, label: 'QR Code' },
  { to: '/wallet', icon: Wallet, label: 'Solde' },
  { to: '/privileges', icon: Gift, label: 'Privilèges' },
]

export default function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-chaussea-200 z-50">
      <div className="flex max-w-md mx-auto">
        {tabs.map(({ to, icon: Icon, label }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `flex-1 flex flex-col items-center py-2.5 transition-colors ${
                isActive
                  ? 'text-chaussea-800'
                  : 'text-chaussea-400 hover:text-chaussea-500'
              }`
            }
          >
            {({ isActive }) => (
              <>
                <div
                  className={`w-9 h-9 rounded-xl flex items-center justify-center mb-1 transition-colors ${
                    isActive ? 'bg-chaussea-800 text-white' : 'bg-chaussea-50'
                  }`}
                >
                  <Icon size={18} />
                </div>
                <span
                  className={`text-[10px] ${
                    isActive ? 'font-bold' : 'font-medium'
                  }`}
                >
                  {label}
                </span>
              </>
            )}
          </NavLink>
        ))}
      </div>
    </nav>
  )
}