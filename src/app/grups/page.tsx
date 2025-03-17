"use client";
import { Button, Drawer, Form, Input, Table } from "antd";
import React, { useState } from "react";

function StudentGroups() {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
    // form.resetFields();
  };
  return (
    <div className="p-4 absolute pl-[220px] pr-10 w-full container m-auto">
      <div>
        <h1>Grups</h1>
        <Button onClick={showDrawer} className="absolute z-50">
          +Qo{"'"}shish
        </Button>
      </div>
      <Drawer
        title="🆕 Yangi Guruh Qo'shish"
        onClose={onClose}
        open={open}
        width={400}
      >
        <Form>
          <Form.Item name="Ism" label="Ism" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item rules={[{ required: true }]}>
            <Button htmlType="submit">Saqlash</Button>
          </Form.Item>
        </Form>
      </Drawer>
    </div>
  );
}

export default StudentGroups;
