import Header from "./components/Header"
import CheckoutPage from "./pages/checkoutPage/CheckoutPage"
import Home from "./pages/homePages/Home"
import { Routes,Route } from "react-router-dom"
import PurchaseHistory from "./pages/purchaseHistory/PurchaseHistory"



function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkoutPage" element={<CheckoutPage />} />
        <Route path="/purchaseHistory" element={<PurchaseHistory />} />
      </Routes>
    </>
  );
}

export default App;