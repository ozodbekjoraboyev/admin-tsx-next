"use client";
import { Button, Drawer, Form, Input, Radio, Select, Space } from "antd";
import React, { useState } from "react";
import { studentData } from "@/constants/data";
import { useGlobalStor } from "@/store/my-stor-zustand";

function AddStudents() {
  const state = useGlobalStor();

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
    form.resetFields();
  };

  return (
    <div>
      <Button onClick={showDrawer} type="primary" className=" z-50 absolute">
        + Qo‘shish
      </Button>

      <Drawer
        title="🆕 Yangi Talaba Qo‘shish"
        onClose={onClose}
        open={open}
        width={400}
      >
        <Form
          onFinish={(value) => {
            setLoading(true);
            console.log(value);
            const new_student = state.students.concat({
              id: Math.floor(Math.random() * 10000),
              ...value,
            });
            useGlobalStor.setState({
              students: new_student,
            });

            setTimeout(() => {
              setLoading(false);
              onClose();
            }, 500);
          }}
          form={form}
          layout="vertical"
          className="space-y-3"
        >
          <Form.Item
            name="name"
            label=" Ism"
            rules={[{ required: true, message: "Ismni kiriting!" }]}
          >
            <Input placeholder="Ismni kiriting" />
          </Form.Item>
          <Form.Item
            name="age"
            label=" Yosh"
            rules={[{ required: true, message: "Yoshni kiriting!" }]}
          >
            <Input type="number" placeholder="Yoshni kiriting" />
          </Form.Item>
          <Form.Item
            name="gender"
            label=" Jins"
            rules={[{ required: true, message: "Jinsni tanlang!" }]}
          >
            <Radio.Group buttonStyle="solid">
              <Radio.Button value="male">Erkak</Radio.Button>
              <Radio.Button value="female">Ayol</Radio.Button>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            name="job"
            label=" Kasb"
            rules={[{ required: true, message: "Kasbni kiriting!" }]}
          >
            <Input placeholder="Kasbni kiriting" />
          </Form.Item>{" "}
          <Form.Item name="gruh1" label="nomi">
            <Select
              options={state.groups.map((item) => {
                return { value: item.id, label: item.gruh1 };
              })}
            />
          </Form.Item>
          <Space className="w-full flex justify-end">
            <Button onClick={onClose}>Bekor qilish</Button>
            <Button loading={loading} type="primary" htmlType="submit">
              {loading ? "Jonatilmoqda..." : "✅ Saqlash"}
            </Button>
          </Space>
        </Form>
      </Drawer>
    </div>
  );
}

export default AddStudents;
