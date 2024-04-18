import { useLoaderData } from 'react-router-dom';
import Banner from './Banner';
import Estate from './Estate';
import EstateDetails from './Estatedetails/Estatedetails';

const Home = () => {
  const estate = useLoaderData();
  console.log(estate);
  return (
    <div>
      <Banner></Banner>
      {/* <Estate estate={estate}></Estate> */}
      <div className="grid md:grid-cols-2 lg:grid-cols-2">
        {estate.map(aEstate => (
          <Estate key={aEstate.id} bEstate={aEstate}></Estate>
        ))}
      </div>
    </div>
  );
};

export default Home;
