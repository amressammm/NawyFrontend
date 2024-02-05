import React from "react";
import { getApartmentDetails } from "@/services/apartmentsServices";

const ApartmentDetails = async ({ params, searchParams }) => {
  const apartmentDetails = await getApartmentDetails(params.id);

  return (
    <div className="flex items-center p-20 justify-center mt-0 bg-gray-200 pb-96">
      <div className="mr-16">
        <img
          src={searchParams.image}
          alt=""
          loading="lazy"
          className="max-w-imageWidth rounded-lg w-full border-2 border-black "
        />
      </div>
      <div>
        <h1 className="text-2xl mb-4">{apartmentDetails?.data?.address}</h1>
        <p className="mb-4 text-gray-700">
          {apartmentDetails?.data?.description}
        </p>
        <div className="mb-4">
          <p>
            <strong>Bedrooms:</strong> {apartmentDetails?.data?.bedrooms}
          </p>
          <p>
            <strong>Bathrooms:</strong> {apartmentDetails?.data?.bathrooms}
          </p>
          <p>
            <strong>Size:</strong> {apartmentDetails?.data?.size}
          </p>
        </div>
        <div className="mb-4">
          <p>
            <strong>Owner:</strong> {apartmentDetails?.data?.ownerName}
          </p>
          <p>
            <strong>Price:</strong> {apartmentDetails?.data?.price} EGP
          </p>
        </div>
      </div>
    </div>
  );
};

export default ApartmentDetails;
