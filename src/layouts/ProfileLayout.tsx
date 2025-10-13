import { Outlet } from "react-router-dom";
import ProfileMenu from "../components/profile/ProfileMenu";

const ProfileLayout = () => {
  return (
    <section>
      <div className="container">
        <div className="w-full px-5 md:px-10 py-5 flex gap-4">
          <div className="w-full max-w-80 hidden md:flex">
            <ProfileMenu />
          </div>
          <div className="w-full bg-bgColor">
            <Outlet />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileLayout;
