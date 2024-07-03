import Menu from '../components/Menu';

const MenuPage = () => {
  return (
    <section className="py-10">
      <div className="container">
        <div className="w-full px-5 flex flex-col gap-3">
          <Menu />
        </div>
      </div>
    </section>
  );
};

export default MenuPage;
