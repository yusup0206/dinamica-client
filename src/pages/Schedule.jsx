import { useContext } from 'react';
import Menu from '../components/Menu';
import { AppContext } from '../context/Context';

const Schedule = () => {
  const { user, login, logout, language, changeLanguage } =
    useContext(AppContext);
  console.log(user, login, logout, language, changeLanguage);
  return (
    <section>
      <div className="container">
        <div className="w-full px-5 sm:px-10 py-10 flex gap-3 sm:gap-6">
          <div className="h-full overflow-y-auto sticky top-[128px] w-full max-w-full sm:max-w-[300px] min-w-full sm:min-w-[300px] hidden sm:flex flex-col gap-3 sm:gap-6">
            <Menu />
          </div>
          <div className=""></div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
