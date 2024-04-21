import { useLoaderData } from 'react-router-dom';
import Banner from './Banner';
import Estate from './Estate';
import EstateDetails from './Estatedetails/Estatedetails';
import Slider from './Slider';
import Partner from './Partner';
import { Helmet } from 'react-helmet-async';

const Home = () => {
  const estate = useLoaderData();
  console.log(estate);
  return (
    <div className="max-w-7xl mx-auto">
      <Helmet>
        <title>Ten Build - Home</title>
      </Helmet>
      <Banner></Banner>
      <Slider></Slider>
      {/* <Estate estate={estate}></Estate> */}
      <div className="grid md:grid-cols-2 lg:grid-cols-2">
        {estate.map(aEstate => (
          <Estate key={aEstate.id} bEstate={aEstate}></Estate>
        ))}
      </div>
      <Partner></Partner>
    </div>
  );
};

export default Home;
