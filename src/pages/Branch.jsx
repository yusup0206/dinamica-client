import AboutBranch from '../components/AboutBranch';
import ActivitySlider from '../components/ActivitySlider';
import BannerSlider from '../components/BannerSlider';
import Map from '../components/Map';

const Branch = () => {
  return (
    <div className="py-10 flex flex-col gap-10">
      <BannerSlider />
      <AboutBranch />
      <Map />
      <ActivitySlider />
    </div>
  );
};

export default Branch;
Branch;
