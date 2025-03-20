"use client";
import {
  Button,
  Drawer,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Space,
} from "antd";
import React, { useState } from "react";
import { useGlobalStor } from "@/store/my-stor-zustand";

function AddOrders() {
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
            const produkt = state.produkts.find((item) => {
              return item.id === value.product_id;
            });
            if (!produkt) return;

            setLoading(true);
            console.log(value);
            const new_orders = state.orders.concat({
              id: Math.floor(Math.random() * 10000),
              ...value,
              totale_prise: value.count * produkt.price,
            });
            useGlobalStor.setState({
              orders: new_orders,
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
            label=" Mijoz"
            name="students_id"
            rules={[{ required: true }]}
          >
            <Select
              options={state.students.map((item) => {
                return {
                  label: item.name,
                  value: item.id,
                };
              })}
            />
          </Form.Item>{" "}
          <Form.Item
            label=" Mahsulot"
            name="product_id"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Select
              options={state.produkts.map((item) => {
                return {
                  label: item.name,
                  value: item.id,
                };
              })}
            />
          </Form.Item>
          <Form.Item label=" Soni" name="count" rules={[{ required: true }]}>
            <InputNumber min={1} />
          </Form.Item>{" "}


          <Form.Item label=" Holati" name="status" rules={[{ required: true }]}>
            <Radio.Group
              block
              options={[
                {
                  label: "Qabul qilindi",
                  value: "qabul_qilindi",
                },
                {
                  label: "Yetkazlmoqda",
                  value: "yetkazib_berilmoqda",
                },
                {
                  label: "Tugatildi",
                  value: "tugatildi",
                },
              ]}
              optionType="button"
              buttonStyle="solid"
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

export default AddOrders;
