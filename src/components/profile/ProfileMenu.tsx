import { Button, message } from "antd";
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
import ProfileImage from "./ProfileImage";

const ProfileMenu = () => {
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  const location = useLocation();
  const navigate = useNavigate();
  const language = useAppStore((state) => state.language);

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
      message.success(
        language === "tm" ? "Üstünlikli çykyş edildi" : "Успешно выполнено"
      );
      navigate("/login");
    } catch (error) {
      console.error(error);
    }
  };
  console.log(user.avatar);
  return (
    <div className="w-full h-fit   flex flex-col gap-4">
      <Box className="flex items-center justify-start gap-4 p-4">
        <ProfileImage src={user.avatar} name={user.name} />
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
            {language === "tm" ? "Gatnaw tertibi" : "Расписание"}
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
            {language === "tm" ? "Tölegler" : "Платежи"}
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
            {language === "tm" ? "Habarlar" : "Сообщения"}
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
          {language === "tm" ? "Çykmak" : "Выход"}
        </Button>
      </Box>
    </div>
  );
};

export default ProfileMenu;
