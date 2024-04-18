import { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const EstateDetails = () => {
  const book = useLoaderData();
  const { id } = useParams();
  const [singleDetails, setSingleDetails] = useState();
  useEffect(() => {
    const estatedetails = book.find(property => property.id == id);
    setSingleDetails(estatedetails);
  }, []);
  const {
    estate_title,

    segment_name,
    description,
    price,
    Status,
    Area,
    location,
    facilities,
    image,
  } = singleDetails || {};
  console.log(book);

  return (
    <div>
      <div className="hero bg-base-200 rounded-xl w-[425px] mx-auto lg:w-[1200px] lg:mx-auto mt-16">
        <div className="hero-content flex-col lg:flex-row">
          <img src={image} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-2xl lg:text-4xl font-bold">{estate_title}</h1>
            <p>{description}</p>
            <h3 className="font-medium py-5">{description}</h3>
            <hr className="lg:w-[700px] my-3" />
            <h3 className="font-medium py3">{segment_name}</h3>
            <hr className="lg:w-[700px] my-3" />
            <p>Review : {Area}</p>
            <p className="btn bg-[#23BE0A0D] text-[#23BE0A] rounded-2xl my-3"></p>
            <hr className="lg:w-[700px] my-3" />
            <div className="space-y-4">
              <div className="flex gap-x-20">
                <p className="">Number of Pages :</p>
                <p className="font-medium ">{location}</p>
              </div>
              <div className="flex gap-x-20">
                <p className="">Publisher :</p>
                <p className="font-medium ml-14">{Status}</p>
              </div>
              <div className="flex gap-x-20">
                <p className="">Year of Publishing:</p>
                <p className="font-medium ">{price}</p>
              </div>
              <div className="flex gap-x-20">
                <p className="">Rating :</p>
                <p className="font-medium ml-20">{facilities}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      .
    </div>
  );
};

export default EstateDetails;
