import React from "react";
import { Modal, Form, Input, DatePicker, Button } from "antd";
import { TaskFormData, TaskFormProps, TTask } from "@/type";
import useProjectStore from "@/zustand/projectStore";
import { v4 as uuidv4 } from "uuid";

const CreateTaskModal: React.FC<TaskFormProps> = ({
  projectId,
  visible,
  onCreate,
  onCancel,
}) => {
  const [form] = Form.useForm<TaskFormData>();
  const addTaskFunc = useProjectStore((state) => state.addTask);

  const onFinish = (values: TaskFormData) => {
    const deadlineString = new Date(values.deadline);

    const addTask = {
      id: uuidv4(),
      title: values.title,
      description: values.description,
      status: "Pending",
      deadline: deadlineString.toISOString(),
      assignedTo: [
        {
          id: uuidv4(),
          name: values.name,
          role: values.role,
        },
      ],
    };
    console.log(addTask);

    addTaskFunc(projectId as string, addTask as TTask);
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
          name="name"
          label="Assigned To (Name)"
          rules={[
            {
              required: true,
              message: "Please enter the assigned team member",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="role"
          label="Assigned To (Role)"
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
