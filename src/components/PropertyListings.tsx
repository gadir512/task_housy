import PropertyCard from "./PropertyCard";

interface PropertyListingsProps {
  listings: Array<{
    id: number;
    imageURL: string[];
    floor: number;
    maxFloor: number;
    price: number;
    address: string;
    bedrooms: number;
    description: string;
  }>;
}

const PropertyListings: React.FC<PropertyListingsProps> = ({ listings }) => {
  return (
    <>
      <h1 className="text-lg ml-5 mb-10"><span className="font-bold">Bütün nəticələr:</span> {listings.length} tapıldı</h1>
      {listings.length === 0 ? (
        <div className="flex  self-center justify-center min-h-screen">
          <h1 className=" text-2xl mt-20">Nəticə tapılmadı.</h1>
        </div>
      ) : (
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 px-16 mb-10">
          {listings.map((property) => (
            <li key={property.id}>
              <PropertyCard property={property} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default PropertyListings;
