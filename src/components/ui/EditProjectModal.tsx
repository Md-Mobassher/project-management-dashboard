import React from "react";
import { Modal, Form, Input, DatePicker, Button, Select } from "antd";
import { TaskFormData, TaskFormProps } from "@/type";
import { useProjectById } from "@/zustand/projectStore";

const EditProjectModal: React.FC<TaskFormProps> = ({
  projectId,
  visible,
  onCreate,
  onCancel,
}) => {
  const [form] = Form.useForm<TaskFormData>();

  const onFinish = (values: TaskFormData) => {
    onCreate(values);
    form.resetFields();
  };

  return (
    <Modal
      visible={visible}
      okText="Add"
      cancelText="Cancel"
      onCancel={onCancel}
      footer={null}
    >
      <h2 className=" text-2xl  font-semibold text-center text-black mb-5">
        Edit <span className="text-blue-500"> Project</span>
      </h2>

      <Form form={form} layout="vertical" onFinish={onFinish}>
        <Form.Item
          name="name"
          label="Project name"
          rules={[{ required: true, message: "Please enter the project name" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="description"
          label="Description"
          rules={[{ required: true, message: "Please enter the description" }]}
        >
          <Input.TextArea />
        </Form.Item>
        <Form.Item
          name="deadline"
          label="Deadline"
          rules={[{ required: true, message: "Please select the deadline" }]}
        >
          <DatePicker />
        </Form.Item>
        <Form.Item
          name="status"
          label="Status"
          rules={[{ required: true, message: "Please select the status" }]}
        >
          <Select />
        </Form.Item>
        <Form.Item
          name="image"
          label="Image Url"
          rules={[{ required: true, message: "Please enter the image url" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Edit Project
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default EditProjectModal;
