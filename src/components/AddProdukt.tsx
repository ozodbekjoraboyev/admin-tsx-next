"use client";
import {
  Button,
  Drawer,
  Form,
  Input,
  InputNumber,
  message,
  Radio,
  Select,
  Space,
} from "antd";
import React, { useState } from "react";
import { useGlobalStor } from "@/store/my-stor-zustand";

function AddProdukt() {
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
        title="Mahsulot Qo‘shish"
        onClose={onClose}
        open={open}
        width={400}
      >
        <Form
          onFinish={(value) => {
            setLoading(true);
            console.log(value);
            const new_produkts = state.produkts.concat({
              id: Math.floor(Math.random() * 10000),
              ...value,
            });
            useGlobalStor.setState({
              produkts: new_produkts,
            });

            setTimeout(() => {
              setLoading(false);
              onClose();
            }, 300);
          }}
          form={form}
          layout="vertical"
          className="space-y-3"
        >
          <Form.Item
            name="name"
            label=" mahsulot nomi"
            rules={[
              { required: true, message: "mahsulot nomini kiriting kiriting!" },
            ]}
          >
            <Input placeholder="Ismni kiriting" />
          </Form.Item>
          <Form.Item
            label=" Narxi"
            name="price"
            rules={[
              { required: true },
            ]}
          >
            <InputNumber placeholder="Narx kiriting" />
          </Form.Item>

          <Form.Item name="catigoriGrups" label="catigories nomi ">
            <Select
              options={state.categories.map((item) => {
                return { value: item.id, label: item.name };
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

export default AddProdukt;
