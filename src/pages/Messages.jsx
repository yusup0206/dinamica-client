import { useContext, useEffect, useState } from 'react';
import Menu from '../components/Menu';
import { AppContext } from '../context/Context';
import axiosInstance from '../axiosInstance';

const Messages = () => {
  const [data, setData] = useState(null);
  const { setError, setLoading } = useContext(AppContext);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axiosInstance.get('/test');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [setLoading, setError]);

  return (
    <section>
      <div className="container">
        <div className="w-full px-5 sm:px-10 py-10 flex gap-3 sm:gap-6">
          <div className="h-full overflow-y-auto sticky top-[128px] w-full max-w-full sm:max-w-[300px] min-w-full sm:min-w-[300px] hidden sm:flex flex-col gap-3 sm:gap-6">
            <Menu />
          </div>
          <div className="">
            {data ? data.information.address_en : 'Loading...'}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Messages;
