const Navbar = () => {
    return (
      <nav className="h-16 bg-white shadow flex items-center justify-between px-6">
        <div className="text-xl font-semibold">Dashboard</div>
        <div className="flex items-center space-x-4">
          <input type="text" placeholder="Search" className="px-3 py-1 border rounded-md text-sm" />
          <div className="w-8 h-8 bg-gray-300 rounded-full" /> {/* User avatar placeholder */}
        </div>
      </nav>
    );
  };
  
  export default Navbar;
  