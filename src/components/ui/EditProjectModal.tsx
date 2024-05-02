import React from "react";
import { Modal, Form, Input, DatePicker, Button, Select } from "antd";
import { TaskFormData, TaskFormProps } from "@/type";
import { Option } from "antd/es/mentions";
import moment from "moment";
import useProjectStore from "@/zustand/projectStore";

const EditProjectModal: React.FC<TaskFormProps> = ({
  initialData,
  projectId,
  visible,
  onCreate,
  onCancel,
}) => {
  const [form] = Form.useForm<TaskFormData>();
  const editProjectFunc = useProjectStore((state) => state.editProject);
  const initialValues = {
    name: initialData?.name,
    description: initialData?.description,
    deadline: moment(initialData?.deadline),
    status: initialData?.status,
    image: initialData?.image,
  };

  const onFinish = (values: TaskFormData) => {
    const deadlineString = new Date(values.deadline);
    const editedProject = {
      id: projectId,
      name: values.name,
      description: values.description,
      deadline: deadlineString.toISOString(),
      status: values.status,
      image: values.image,
    };

    editProjectFunc(projectId as string, editedProject);
    onCreate(values);
    form.resetFields();
  };

  // const onFinish = (values: TaskFormData) => {
  //   const deadlineString = new Date(values.deadline);
  //   const editedProject = {
  //     id: projectId,
  //     name: values.name,
  //     description: values.description,
  //     deadline: deadlineString.toISOString(),
  //     status: values.status,
  //     image: values.image,
  //   };
  //   onCreate(values);
  //   editProjectFunc(projectId as string, editedProject);
  //   form.resetFields();
  // };

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

      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        initialValues={initialValues}
      >
        <Form.Item
          initialValue={initialData?.name}
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
          label="Select"
          rules={[{ required: true, message: "Please select the status" }]}
        >
          <Select>
            <Option value="Pending">Pending</Option>
            <Option value="In-Progress">In-Progress</Option>
            <Option value="Completed">Completed</Option>
          </Select>
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
