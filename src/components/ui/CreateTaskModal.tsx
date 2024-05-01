import React from "react";
import { Modal, Form, Input, DatePicker, Button } from "antd";
import { TaskFormData, TaskFormProps } from "@/type";

const CreateTaskModal: React.FC<TaskFormProps> = ({
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
        Add New <span className="text-blue-500"> Task</span>
      </h2>

      <Form form={form} layout="vertical" onFinish={onFinish}>
        <Form.Item
          name="title"
          label="Title"
          rules={[{ required: true, message: "Please enter the title" }]}
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
          name="assignedTo"
          label="Assigned To"
          rules={[
            {
              required: true,
              message: "Please enter the assigned team member",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Add Task
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default CreateTaskModal;
