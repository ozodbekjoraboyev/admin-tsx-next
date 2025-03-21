import { Button } from "antd";
import Image from "next/image";

function Navbar() {


  return (
    <div className=" container m-auto p-2 ">
      <div className=" bg-blue-800 text-white p-2 rounded-md flex justify-between items-center ">
        <div className=" flex ">
          <Button
            style={{
              width: 100,
            }}
          >
            Logo
          </Button>
          
        </div>
        <div className=" flex gap-3 items-cente text-black">
          <Image
            className=" rounded-full"
            width={70}
            height={70}
            src={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtuphMb4mq-EcVWhMVT8FCkv5dqZGgvn_QiA&s"
            }
            alt="User icon"
          />
          <div>
            <p className="text-xl font-semibold">Ozodbek</p>
            <p className="text-xl font-semibold">1234</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
