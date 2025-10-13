import { Button } from "antd";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Box from "../global/Box";
import {
  BellFilled,
  CreditCardFilled,
  RightSquareFilled,
  ScheduleFilled,
} from "@ant-design/icons";
import { useLogoutMutation } from "../../hooks/useClientApi";
import { useAppStore } from "../../stores/store";

const ProfileMenu = () => {
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  const location = useLocation();
  const navigate = useNavigate();

  const setUser = useAppStore((state) => state.setUser);
  const setToken = useAppStore((state) => state.setToken);

  // queries
  const { mutateAsync: logout, isPending } = useLogoutMutation();

  // functions
  const handleLogout = async () => {
    try {
      await logout();

      setUser(null);
      setToken(null);
      localStorage.removeItem("access_token");
      localStorage.removeItem("user");

      navigate("/login");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="w-full h-fit   flex flex-col gap-4">
      <Box className="flex items-center justify-start gap-4 p-4">
        <div className="size-16 rounded-md overflow-hidden">
          <img src={user.avatar} alt={user.name} className="size-full" />
        </div>
        <h3 className="text-headerColor text-lg md:text-xl font-semibold">
          {user.surname} {user.name} {user.fathername}
        </h3>
      </Box>
      <Box className="flex flex-col gap-4">
        <Link to="/profile/schedule" className="w-full">
          <Button
            className="w-full alignStart"
            size="large"
            type={
              location.pathname.includes("schedule") ? "primary" : "default"
            }
            icon={<ScheduleFilled />}
          >
            Schedule
          </Button>
        </Link>
        <Link to="/profile/payments" className="w-full">
          <Button
            className="w-full alignStart"
            size="large"
            type={
              location.pathname.includes("payments") ? "primary" : "default"
            }
            icon={<CreditCardFilled />}
          >
            Payments
          </Button>
        </Link>
        <Link to="/profile/messages" className="w-full">
          <Button
            className="w-full alignStart"
            size="large"
            type={
              location.pathname.includes("messages") ? "primary" : "default"
            }
            icon={<BellFilled />}
          >
            Messages
          </Button>
        </Link>
        <Button
          className="w-full alignStart"
          size="large"
          type="default"
          icon={<RightSquareFilled />}
          onClick={handleLogout}
          loading={isPending}
        >
          {isPending ? "Logging out..." : "Logout"}
        </Button>
      </Box>
    </div>
  );
};

export default ProfileMenu;
