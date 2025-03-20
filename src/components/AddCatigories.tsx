"use client";
import { Button, Drawer, Form, Input, Radio, Space } from "antd";
import React, { useState } from "react";
import { useGlobalStor } from "@/store/my-stor-zustand";

function AddCatigories() {
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
        title="🆕 Yangi catigories Qo'shish"
        onClose={onClose}
        open={open}
        width={400}
      >
        <Form
          onFinish={(value) => {
            setLoading(true);
            console.log(value);
            const new_catigories = state.categories.concat({
              id: Math.floor(Math.random() * 10000),
              ...value,
            });
            useGlobalStor.setState({
              categories: new_catigories,
            });

            setTimeout(() => {
              setLoading(false);
              onClose();
            }, 200);
          }}
          form={form}
          layout="vertical"
          className="space-y-3"
        >
          <Form.Item
            name="name"
            label=" nomi"
            rules={[{ required: true, message: "Ismni kiriting!" }]}
          >
            <Input placeholder="Ismni kiriting" />
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

export default AddCatigories;
