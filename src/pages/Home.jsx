import BranchList from '../components/BranchList';
import Slider from '../components/Slider';

const Home = () => {
  return (
    <div className="py-10 flex flex-col gap-10">
      <Slider />
      <BranchList />
    </div>
  );
};

export default Home;
