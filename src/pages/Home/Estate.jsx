import { Link, NavLink, useLoaderData } from 'react-router-dom';

const Estate = ({ bEstate }) => {
  // const { estate_title, segment_name, image, description, status } =
  //   estate || {};
  // console.log(estate);
  // eslint-disable-next-line react/prop-types
  const { estate_title, segment_name, image, description, Status, id, price } =
    bEstate;

  return (
    <div className=" mx-auto">
      <div
        className="my-16 max-w-xs lg:max-w-xl mx-auto p-8 m-8 rounded-md shadow-xl dark:bg-gray-100 dark:text-gray-800"
        data-aos="zoom-in"
        data-aos-duration="1500"
      >
        <img
          src={image}
          alt=""
          className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"
        />
        <div className="flex flex-col justify-between p-6 space-y-8">
          <div className="space-y-2">
            <h2 className="text-4xl font-bold tracking-wide">{estate_title}</h2>
            <h1 className="text-xl">ID No : {id}</h1>
            <h3 className="text-2xl font-medium">{segment_name}</h3>
            <p className="dark:text-gray-800 text-2xl font-medium">
              {description}
            </p>{' '}
          </div>
          <div className="grid lg:flex gap-x-7">
            <p className="text-2xl text-white bg-indigo-600 p-3 lg:p-4 rounded-xl">
              Price : {price}
            </p>
            <p className="text-2xl font-semibold  flex bg-lime-500 p-3 lg:p-4 rounded-xl">
              {' '}
              For : {Status}
            </p>
          </div>
          <Link to={`/estatedetails/${id}`}>
            <button
              type="button"
              className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-600 dark:text-gray-50"
            >
              View Property
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Estate;
