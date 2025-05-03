import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import TopNav from "./components/TopNav";
import AuctionGrid from "./components/AuctionGrid";
import AuctionDetail from "./pages/AuctionDetail"; // 👈 Import your detail page

function App() {
  return (
    <Router>
      <TopNav />
      <Routes>
        <Route path="/" element={<AuctionGrid />} />
        <Route path="/auction/:id" element={<AuctionDetail />} /> {/* 👈 Detail route */}
      </Routes>
    </Router>
  );
}

export default App;
