import { Link, NavLink, useLoaderData } from 'react-router-dom';

const Estate = ({ bEstate }) => {
  // const { estate_title, segment_name, image, description, status } =
  //   estate || {};
  // console.log(estate);
  const { estate_title, segment_name, image, description, Status, id, price } =
    bEstate;

  return (
    <div className=" mx-auto hover:effect">
      <div className="max-w-xs lg:max-w-xl mx-auto p-8 m-8 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
        <img
          src={image}
          alt=""
          className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"
        />
        <div className="flex flex-col justify-between p-6 space-y-8">
          <div className="space-y-2">
            <h2 className="text-4xl font-bold tracking-wide">{estate_title}</h2>
            <h1 className="text-xl">ID No : {id}</h1>
            <h3 className="text-2xl">{segment_name}</h3>
            <p className="dark:text-gray-800 text-2xl font-medium">
              {description}
            </p>{' '}
          </div>
          <div className="flex gap-x-7">
            <p className="text-2xl">Price : {price}</p>
            <p className="text-2xl"> For : {Status}</p>
          </div>
          <Link to="/estatedetails/${:id}">
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
