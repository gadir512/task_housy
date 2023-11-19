import { useState, useEffect } from "react";
import Navbar from './components/Navbar'
import Filters from "./components/Filters";
import PropertyListings from "./components/PropertyListings";
import Footer from './components/Footer'

interface PropertyListing {
  id: number;
  imageURL: string[];
  floor: number;
  maxFloor: number;
  price: number;
  address: string;
  bedrooms: number;
  description: string;
}

const App: React.FC = () => {
  const [filterOptions, setFilterOptions] = useState({
    minPrice: "",
    maxPrice: "",
    floorNumber: "",
  });

  const [propertyListings, setPropertyListings] = useState<PropertyListing[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3001/propertyListings");
        const data = await response.json();
        setPropertyListings(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); 

  const handleFilterChange = (newFilterOptions:any) => {
    setFilterOptions(newFilterOptions);
  };

  const applyFilters = (property: PropertyListing) => {
    const { minPrice, maxPrice, floorNumber } = filterOptions;
    return (
      (minPrice === "" || property.price >= parseInt(minPrice, 10)) &&
      (maxPrice === "" || property.price <= parseInt(maxPrice, 10)) &&
      (floorNumber === "" || property.floor === parseInt(floorNumber, 10))
    );
  };

  const filteredListings = propertyListings.filter(applyFilters);

  return (
    <div className="App">
      <Navbar />
      <Filters onFilterChange={handleFilterChange} />
      <PropertyListings listings={filteredListings}></PropertyListings>
      <Footer/>
    </div> 
  );
};

export default App;
