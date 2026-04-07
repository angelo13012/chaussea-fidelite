import { BrowserRouter, Routes, Route } from 'react-router-dom'
import BottomNav from './components/layout/BottomNav'
import HomePage from './pages/HomePage'
import QRCodePage from './pages/QRCodePage'
import WalletPage from './pages/WalletPage'
import PrivilegesPage from './pages/PrivilegesPage'

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-chaussea-50 max-w-md mx-auto relative">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/qr" element={<QRCodePage />} />
          <Route path="/wallet" element={<WalletPage />} />
          <Route path="/privileges" element={<PrivilegesPage />} />
        </Routes>
        <BottomNav />
      </div>
    </BrowserRouter>
  )
}