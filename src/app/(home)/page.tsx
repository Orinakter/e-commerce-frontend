import React from 'react';
import { BannerSection } from '../components/ui/BannerSection';
import HotProducts from '../components/ui/HotProducts';
import NewArrived from '../components/ui/NewArrived';
import PopularCategories from '../components/ui/PopularCategories';
import GadgetBanner from '../components/ui/GadgetBanner';
import FeatureProduct from '../components/ui/FeatureProduct';
import FAQ from '../components/ui/FAQ';



const page = () => {
  return (
    <div>
      <BannerSection/>
     <HotProducts/>
     <NewArrived/>
     <PopularCategories/>
     <GadgetBanner/>
     <FeatureProduct/>
     <FAQ/>
    </div>
  );
};

export default page;