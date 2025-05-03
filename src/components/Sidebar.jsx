const Sidebar = () => {
    return (
      <aside className="w-64 h-screen bg-white shadow-md p-4">
        <div className="text-xl font-bold mb-6">DealDash</div>
        <ul className="space-y-4">
          <li className="text-gray-600 hover:text-blue-600 cursor-pointer">Dashboard</li>
          <li className="text-gray-600 hover:text-blue-600 cursor-pointer">Live Auctions</li>
          <li className="text-gray-600 hover:text-blue-600 cursor-pointer">Deals</li>
          <li className="text-gray-600 hover:text-blue-600 cursor-pointer">Settings</li>
        </ul>
      </aside>
    );
  };
  
  export default Sidebar;
  