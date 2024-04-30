"use client";
import { useState } from "react";
import { Form, Input, Button, message } from "antd";
import Image from "next/image";
import login from "@/assets/images/login.jpg";

const LoginPage = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const handleLogin = async (data: { email: string; password: string }) => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      if (
        data.email === "mobassherpautex@gmail.com" &&
        data.password === "mobassher123"
      ) {
        message.success("Login successful!");
      } else {
        message.error("Invalid username or password");
      }
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-white max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center text-black">Login Here</h2>
      <div className="flex flex-wrap justify-around items-center">
        <div className=" w-[500px] ">
          <Image src={login} alt="login image"></Image>
        </div>
        <div className=" w-[400px] shadow-lg rounded-lg px-10 py-16">
          <Form form={form} onFinish={handleLogin}>
            <Form.Item
              name="email"
              rules={[{ required: true, message: "Please enter your email" }]}
            >
              <Input placeholder="Email" />
            </Form.Item>
            <Form.Item
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
