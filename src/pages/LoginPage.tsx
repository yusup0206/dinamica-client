import { Button, Form, Input, message } from "antd";
import { useAppStore } from "../stores/store";
import { useNavigate } from "react-router-dom";
import type { Credentials } from "../interfaces/login.interface";
import { useLoginMutation } from "../hooks/useClientApi";
import { isAxiosError } from "axios";

const LoginPage = () => {
  const navigate = useNavigate();

  const language = useAppStore((state) => state.language);

  // queries
  const { mutateAsync: login, isPending } = useLoginMutation();

  const setUser = useAppStore((state) => state.setUser);
  const setToken = useAppStore((state) => state.setToken);

  const handleLogin = async (values: Credentials) => {
    const credentials = {
      phone_number: `+993${values.phone_number}`,
      password: values.password,
    };

    try {
      const response = await login(credentials);
      message.success(
        language === "tm" ? "Üstünlikli giriş edildi" : "Вход успешен"
      );

      // Store functions now handle localStorage persistence (cleaner)
      setUser(response.user);
      setToken(response.access_token);

      navigate("/profile/schedule");
    } catch (error) {
      console.error(error);

      // FIX: Use isAxiosError for safe error handling
      if (isAxiosError(error) && error.response) {
        // Access the specific error message from the server response
        const errorMessage = error.response.data.message;
        message.error(errorMessage);
      } else {
        message.error(
          language === "tm"
            ? "Girişde näbelli ýalňyşlyk ýüze çykdy."
            : "Произошла неизвестная ошибка при входе."
        );
      }
    }
  };

  return (
    <section className="w-full h-[95vh] flex items-center justify-center">
      <div className="container">
        <div className="w-full px-5 md:px-10 py-5 flex items-center justify-center">
          <div className="w-full max-w-md bg-white rounded-md shadow-md px-4 py-6">
            <h1 className="text-primary text-xl md:text-2xl font-semibold mb-4">
              {language === "tm" ? "Giriş" : "Авторизоваться"}
            </h1>
            <Form
              layout="vertical"
              onFinish={handleLogin}
              className="flex flex-col gap-4"
            >
              <Form.Item
                label={language === "tm" ? "Telefon belgisi" : "Номер телефона"}
                name="phone_number"
                className="m-0"
                rules={[
                  {
                    required: true,
                    message:
                      language === "tm"
                        ? "Telefon belgiňizi ýazmagyňyzy haýyş edýäris!"
                        : "Пожалуйста, введите ваш номер телефона!",
                  },
                  {
                    pattern: /^(6[1-5]\d{6}|71\d{6})$/,
                    message:
                      language === "tm"
                        ? "Telefon belgisi nädogry: 6 bilen başlasa ikinji san 1-5 arasynda; 7 bilen başlasa ikinji san 1 bolmaly."
                        : "Номер телефона недействителен: если начинается с 6, вторая цифра должна быть 1-5; если начинается с 7, вторая цифра должна быть 1.",
                  },
                ]}
              >
                <Input
                  addonBefore="+993"
                  type="number"
                  maxLength={8}
                  size="large"
                />
              </Form.Item>

              <Form.Item
                label={language === "tm" ? "Parol" : "Пароль"}
                name="password"
                className="m-0"
                rules={[
                  {
                    required: true,
                    message:
                      language === "tm"
                        ? "Parolyňyzy ýazyň!"
                        : "Пожалуйста, введите ваш пароль!",
                  },
                ]}
              >
                <Input.Password size="large" />
              </Form.Item>

              <Button
                type="primary"
                htmlType="submit"
                className="w-full"
                loading={isPending}
                size="large"
              >
                {language === "tm" ? "Giriş" : "Авторизоваться"}
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
