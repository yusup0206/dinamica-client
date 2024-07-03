import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const branches = [
  {
    id: '1',
    path: '/branch',
    name: 'Dinamica',
    image: '/assets/images/slide.jpg',
  },
  {
    id: '2',
    path: '/branch',
    name: 'Dinamica Ladies',
    image: '/assets/images/slide.jpg',
  },
  {
    id: '3',
    path: '/branch',
    name: 'Dinamica 3',
    image: '/assets/images/slide.jpg',
  },
];

const BranchList = () => {
  const { t } = useTranslation();
  return (
    <section>
      <div className="container">
        <div className="w-full px-5 sm:px-10">
          <h1 className="text-primary-100 text-2xl sm:text-3xl font-semibold mb-5">
            {t('our-branches')}
          </h1>
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {branches.map((branch) => (
              <Link key={branch.id} to={branch.path}>
                <div className="group relative w-full rounded-md overflow-hidden">
                  <div className="w-full h-full">
                    <img
                      src={branch.image}
                      alt={branch.name}
                      className="w-full h-full object-cover rounded-md group-hover:scale-105 transition-all"
                    />
                  </div>
                  <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-30 flex items-center justify-center text-center text-balance">
                    <h2 className="text-white text-lg sm:text-xl font-semibold">
                      {branch.name}
                    </h2>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BranchList;
