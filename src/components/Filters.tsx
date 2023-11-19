import  { ChangeEvent } from "react";

interface FilterProps {
  onFilterChange: (filter: any) => void;
}

interface FilterOptions {
  minPrice: number | "";
  maxPrice: number | "";
  floorNumber: number | "";
}

const Filters: React.FC<FilterProps> = ({ onFilterChange }) => {
  const handleFilterChange = (
    event: ChangeEvent<HTMLInputElement>,
    filterType: keyof FilterOptions
  ) => {
    const value = event.target.value.trim() !== "" ? parseInt(event.target.value, 10) : "";

    onFilterChange((prevFilter: any) => ({
      ...prevFilter,
      [filterType]: value,
    }));
  };

  return (
    <div className="bg-gray-200 p-4 rounded-md mb-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="m-auto">
          <label className="block text-gray-700">Min Qiymət:</label>
          <input
            type="number"
            className="border p-2 rounded-md focus:outline-none focus:border-blue-500"
            placeholder="Min Qiymət"
            onChange={(e) => handleFilterChange(e, "minPrice")}
          />
        </div>
        <div className="m-auto">
          <label className="block text-gray-700">Max Qiymət:</label>
          <input
            type="number"
            className="border p-2 rounded-md focus:outline-none focus:border-blue-500"
            placeholder="Max Qiymət"
            onChange={(e) => handleFilterChange(e, "maxPrice")}
          />
        </div>
        <div className="m-auto">
          <label className="block text-gray-700">Mərtəbə:</label>
          <input
            type="number"
            className="border p-2 rounded-md focus:outline-none focus:border-blue-500"
            placeholder="Mərtəbə"
            onChange={(e) => handleFilterChange(e, "floorNumber")}
          />
        </div>
      </div>
    </div>
  );
};

export default Filters;
