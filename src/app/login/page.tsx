"use client";
import { useState } from "react";
import { Form, Input, Button, message } from "antd";
import Image from "next/image";
import login from "@/assets/images/login.jpg";
import FormItemLabel from "antd/es/form/FormItemLabel";
import { useRouter } from "next/navigation";
import Title from "@/components/ui/Title";

const LoginPage = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (data: { email: string; password: string }) => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      if (
        data.email === "mobassherpautex@gmail.com" &&
        data.password === "mobassher123"
      ) {
        message.success("Login successful!");
        router.push("/");
      } else {
        message.error("Invalid username or password");
      }
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-white max-w-7xl mx-auto px-4 py-6">
      <Title firstTitle="Login" lastTitle="Here" />
      <div className="flex flex-wrap justify-around items-center">
        <div className=" w-[500px] ">
          <Image src={login} alt="login image"></Image>
        </div>
        <div className=" w-[400px] shadow-lg rounded-lg px-10 py-16">
          <Form form={form} layout="vertical" onFinish={handleLogin}>
            <Form.Item
              name="email"
              label="Email"
              rules={[{ required: true, message: "Please enter your email" }]}
            >
              <Input type="email" placeholder="Email" />
            </Form.Item>
            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please enter your password" },
              ]}
            >
              <Input.Password placeholder="Password" />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" loading={loading} block>
                Login
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
