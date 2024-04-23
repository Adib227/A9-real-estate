import { useEffect, useState } from 'react';
import Marquee from 'react-fast-marquee';
import { Helmet } from 'react-helmet-async';
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
      <Helmet>
        <title>Ten Build - Details {id}</title>
      </Helmet>
      <div
        className="hero bg-stone-300 rounded-xl w-[420px] mx-auto lg:w-full lg:mx-auto mt-16"
        data-aos="zoom-in"
        data-aos-duration="1500"
      >
        <div className="hero-content flex-col lg:flex-row gap-x-24">
          <img src={image} className="md: lg:max-w-xl rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-2xl lg:text-4xl font-bold">{estate_title}</h1>
            <h3 className="font-medium py-5 text-xl">{description}</h3>
            {/* <hr className="lg:w-[700px] my-3" /> */}
            <h3 className="font-bold py3 text-xl lg:text-2xl">
              {segment_name}
            </h3>
            {/* <hr className="lg:w-[700px] my-3" /> */}
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
      <div className="my-20 border-red-900 bg-[#0D0926]">
        <Marquee className="p-8 gap-x-4" pauseOnHover={true} speed={100}>
          <img
            className="mr-14"
            src="https://i.ibb.co/FwLvmms/download.png"
            alt=""
          />
          <img
            className="mr-14"
            src="https://i.ibb.co/R6JWb3Z/download-1.png"
            alt=""
          />
          <img
            className="mr-14"
            src="https://i.ibb.co/bjVTHPk/download-2.png"
            alt=""
          />
          <img
            className="mr-14"
            src="https://i.ibb.co/FwLvmms/download.png"
            alt=""
          />
          <img
            className="mr-14"
            src="https://i.ibb.co/p1TfjFt/download-3.png"
            alt=""
          />
          <img
            className="mr-14"
            src="https://i.ibb.co/yXg8Dsy/download-4.png"
            alt=""
          />
        </Marquee>
      </div>
      .
    </div>
  );
};

export default EstateDetails;
