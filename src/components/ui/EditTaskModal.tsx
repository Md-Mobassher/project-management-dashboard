import React from "react";
import { Modal, Form, Input, DatePicker, Button, Select } from "antd";
import { TaskFormData, TaskFormProps, TTask } from "@/type";
import { Option } from "antd/es/mentions";
import moment from "moment";
import useProjectStore from "@/zustand/projectStore";

const EditTaskModal: React.FC<TaskFormProps> = ({
  initialTaskData,
  projectId,
  taskId,
  visible,
  onCreate,
  onCancel,
}) => {
  const [form] = Form.useForm<TaskFormData>();
  const editTaskFunc = useProjectStore((state) => state.addTask);

  const onFinish = (values: TaskFormData) => {
    const deadlineString = new Date(values.deadline);
    const editedTask = {
      id: taskId,
      title: values.title,
      description: values.description,
      deadline: deadlineString.toISOString(),
      status: values.status,
    };
    console.log(editedTask);

    editTaskFunc(projectId as string, editedTask as TTask);
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
        Edit <span className="text-blue-500"> Task</span>
      </h2>

      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        initialValues={initialTaskData}
      >
        <Form.Item
          name="title"
          label="Task Title"
          rules={[{ required: true, message: "Please enter the Task Title" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="description"
          label="Task Description"
          rules={[
            { required: true, message: "Please enter the task description" },
          ]}
        >
          <Input.TextArea />
        </Form.Item>
        <Form.Item
          name="deadline"
          label="Task Deadline"
          rules={[
            { required: true, message: "Please select the Task deadline" },
          ]}
        >
          <DatePicker />
        </Form.Item>
        <Form.Item
          name="status"
          label="Select Task Status"
          rules={[{ required: true, message: "Please select the Task status" }]}
        >
          <Select>
            <Option value="Pending">Pending</Option>
            <Option value="In-Progress">In-Progress</Option>
            <Option value="Completed">Completed</Option>
          </Select>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Edit Task
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default EditTaskModal;
