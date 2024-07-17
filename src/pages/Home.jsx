import BranchList from '../components/BranchList';
import BannerSlider from '../components/BannerSlider';
import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context/Context';
import axiosInstance from '../axiosInstance';

const Home = () => {
  const [data, setData] = useState(null);
  const { setError, setLoading } = useContext(AppContext);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axiosInstance.get('/index');
        setData(response.data);
      } catch (error) {
        console.log('Home page error', error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [setLoading, setError]);
  console.log(data);
  return (
    <div className="py-10 flex flex-col gap-10">
      {data ? (
        <BannerSlider sliders={data.data.sliders} />
      ) : (
        <section>
          <div className="container">
            <div className="w-full px-5 sm:px-10">
              <div className="w-full h-[40vh] rounded-md bg-gray-200 animate-pulse"></div>
            </div>
          </div>
        </section>
      )}
      {data ? (
        <BranchList centers={data.data.centers} />
      ) : (
        <section>
          <div className="container">
            <div className="w-full px-5 sm:px-10">
              <div className="h-9 rounded-md w-40 bg-gray-200 mb-5 animate-pulse"></div>
              <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                <div className="w-full h-[250px] rounded-md bg-gray-200 animate-pulse"></div>
                <div className="w-full h-[250px] rounded-md bg-gray-200 animate-pulse"></div>
                <div className="w-full h-[250px] rounded-md bg-gray-200 animate-pulse"></div>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Home;
