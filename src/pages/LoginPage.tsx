import { Button, Form, Input } from "antd";
import { useAppStore } from "../stores/store";
import { useNavigate } from "react-router-dom";
import type { Credentials } from "../interfaces/login.interface";
import { useLoginMutation } from "../hooks/useClientApi";

const LoginPage = () => {
  const navigate = useNavigate();

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
      console.log("✅ Login successful:", response);
      console.log(response.access_token);
      setUser(response.user);
      setToken(response.access_token);
      localStorage.setItem("access_token", response.access_token);
      localStorage.setItem("user", JSON.stringify(response.user));
      navigate("/profile/schedule");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="w-full h-[95vh] flex items-center justify-center">
      <div className="container">
        <div className="w-full px-5 md:px-10 py-5 flex items-center justify-center">
          <div className="w-full max-w-md bg-white rounded-md shadow-md px-4 py-6">
            <h1 className="text-primary text-xl md:text-2xl font-semibold mb-4">
              Login
            </h1>
            <Form
              layout="vertical"
              onFinish={handleLogin}
              className="flex flex-col gap-4"
            >
              <Form.Item
                label="Phone number"
                name="phone_number"
                className="m-0"
              >
                <Input addonBefore="+993" type="number" />
              </Form.Item>

              <Form.Item label="Password" name="password" className="m-0">
                <Input.Password />
              </Form.Item>

              <Button
                type="primary"
                htmlType="submit"
                className="w-full"
                loading={isPending}
              >
                Submit
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
