import React from 'react';
import { BannerSection } from '../components/ui/BannerSection';
import HotProducts from '../components/ui/HotProducts';
import NewArrived from '../components/ui/NewArrived';



const page = () => {
  return (
    <div>
      <BannerSection/>
     <HotProducts/>
     <NewArrived/>
    </div>
  );
};

export default page;