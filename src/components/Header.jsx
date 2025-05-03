export default function Header() {
    return (
      <div className="bg-white shadow px-4 py-2 flex justify-between items-center">
        <h1 className="text-xl font-bold text-yellow-500">DealDash</h1>
        <input
          className="border rounded px-2 py-1 w-full max-w-md mx-4"
          placeholder="Search Auctions..."
        />
        <div className="space-x-4">
          <button className="text-sm">Help</button>
          <button className="text-sm">Winners</button>
          <button className="text-sm">Log in</button>
        </div>
      </div>
    );
  }
  