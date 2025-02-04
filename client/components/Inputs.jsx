import { Input } from "@heroui/react";
import { SendHorizontalIcon } from "lucide-react";
import React from "react";  
import {SendHorizontal} from "lucide-react";


function Inputs() {
  return (
    <div className="absolute bottom-0 left-0 w-full sm:mb-5">
      <Input type="text" label="Enter your message" />
      <button className="absolute right-0 top-0 p-2">
        <SendHorizontal />
      </button>
    </div>
  );
}

export default Inputs;