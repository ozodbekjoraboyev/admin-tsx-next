import {
  HomeFilled,
  SnippetsOutlined,
  UsergroupAddOutlined,
} from "@ant-design/icons";
import { Button } from "antd";
import Link from "next/link";
import React from "react";

function Sayitbar() {
  return (
    <div className=" container m-auto pl-2 relative">
      <div className="bg-blue-800 w-52 rounded text-white p-2 flex flex-col gap-3 text-center h-[100vh]">
      <Link href={"/"}>
        <Button className="w-32">
          <HomeFilled />
          Home
        </Button>
      </Link>
      <Link href={"/students"}>
        <Button className="w-32">
          <UsergroupAddOutlined /> Students
        </Button>
      </Link>
      <Link href={"/grups"}>
        <Button className="w-32">
          <SnippetsOutlined />
          Groups
        </Button>
      </Link>
    </div>
    </div>
  );
}

export default Sayitbar;
