import { useState } from "react";

interface PropertyCardProps {
  property: {
    id: number;
    imageURL: string[];
    floor: number;
    maxFloor: number;
    price: number;
    address: string;
    bedrooms: number;
    description: string;
  };
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showButtons, setShowButtons] = useState(false);
  const totalImages = property.imageURL.length;

  const showNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % totalImages);
  };

  const showPreviousImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + totalImages) % totalImages);
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden my-4 relative">
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform ease-in-out duration-500 relative"
          style={{
            transform: `translateX(-${currentImageIndex * (100 / totalImages)}%)`,
            width: `${totalImages * 100}%`,
          }}
        >
          {property.imageURL.map((image, index) => (
            <div
              key={index}
              className="w-full h-60 relative group"
              onMouseEnter={() => setShowButtons(true)}
              onMouseLeave={() => setShowButtons(false)}
            >
              <img
                className="w-full h-full object-cover object-center cursor-pointer rounded"
                src={image}
                alt={`Property ${property.id}`}
              />
              {index === currentImageIndex && showButtons && (
                <div className="absolute inset-y-0 left-0 flex items-center">
                  <button
                    className="ml-2 bg-white opacity-75 hover:opacity-100 rounded-full w-10 h-10"
                    onClick={showPreviousImage}
                  >
                    {"<"}
                  </button>
                </div>
              )}
              {index === currentImageIndex && showButtons && (
                <div className="absolute inset-y-0 right-0 flex items-center">
                  <button
                    className="mr-2 bg-white opacity-75 hover:opacity-100 rounded-full w-10 h-10"
                    onClick={showNextImage}
                  >
                    {">"}
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="p-4">
      <p className="text-gray-700 text-lg font-semibold mb-2">{property.price} AZN</p>
        <p className="text-gray-700 text-lg "><i className="fa-regular fa-building"></i>: {property.floor}/{property.maxFloor} mərtəbə</p>
        <p className="text-gray-700 text-lg "><i className="fa-solid fa-door-open"></i> {property.bedrooms} otaq</p>
        <p className="text-gray-600 mt-2 font-semibold"><img  className="inline-block mr-4" src="https://housy.az/assets/Metro-c5640a2f.svg"></img>{property.address}</p>
        <p className="text-gray-600 mt-2">{property.description}</p>
      </div>
    </div>
  );
};

export default PropertyCard;
