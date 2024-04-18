import { useEffect, useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';

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
            <h3 className="font-medium py-5 text-xl">{description}</h3>
            <hr className="lg:w-[700px] my-3" />
            <h3 className="font-bold py3 text-xl lg:text-2xl">
              {segment_name}
            </h3>
            <hr className="lg:w-[700px] my-3" />
            <div className="my-4">
              <p className="font-medium">Review : {Area}</p>
            </div>
            {/* <p className="btn bg-[#23BE0A0D] text-[#23BE0A] rounded-2xl my-3"></p> */}
            <div className="space-y-4">
              <div className="flex">
                <p className="font-medium">Location :</p>
                <p className="font-medium ">{location}</p>
              </div>
              <div className="flex ">
                <p className="font-medium">For : </p>
                <p className="font-medium "> {Status}</p>
              </div>
              <div className="flex ">
                <p className="font-medium">Price : </p>
                <p className="font-medium ">{price}</p>
              </div>
              <div className="flex">
                <p className="font-medium">Facilities : </p>
                <p className=" font-medium">{facilities}</p>
              </div>
              <div>
                <Link to="/">
                  <button className="btn btn-success">Back to Home</button>
                </Link>
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
