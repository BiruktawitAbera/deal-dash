const StatCard = ({ title, value }) => {
    return (
      <div className="bg-white shadow rounded-lg p-4 w-full sm:w-1/2 lg:w-1/4">
        <h4 className="text-sm text-gray-500">{title}</h4>
        <p className="text-2xl font-bold">{value}</p>
      </div>
    );
  };
  
  export default StatCard;
  