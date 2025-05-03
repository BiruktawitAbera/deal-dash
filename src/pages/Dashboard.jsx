import StatCard from "../components/StatCard";
import AuctionCard from "../components/AuctionCard";

const stats = [
  { label: "Total Auctions", value: 42 },
  { label: "Live Bids", value: 128 },
  { label: "Deals Closed", value: 24 },
  { label: "Earnings", value: "$3,200" },
];

const products = [
  {
    name: "MacBook Pro",
    description: "M1 Chip, 16GB RAM",
    price: 1200,
    image: "/macbook.jpg", // Place inside public/
  },
  {
    name: "iPhone 13",
    description: "128GB, Midnight",
    price: 900,
    image: "/iphone.jpg", // Place inside public/
  },
];

export default function Dashboard() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
        {stats.map((stat) => (
          <StatCard key={stat.label} label={stat.label} value={stat.value} />
        ))}
      </div>

      {/* Live Auctions */}
      <h2 className="text-xl font-semibold mb-4">Live Auctions</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <AuctionCard key={product.name} product={product} />
        ))}
      </div>
    </div>
  );
}
