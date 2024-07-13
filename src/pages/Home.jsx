import BranchList from '../components/BranchList';
import BannerSlider from '../components/BannerSlider';

const Home = () => {
  return (
    <div className="py-10 flex flex-col gap-10">
      <BannerSlider />
      <BranchList />
    </div>
  );
};

export default Home;
