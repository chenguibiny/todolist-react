import React from "react";
import { Button, Input } from "antd";
import "antd/dist/antd.css";



const Addto = (props:any) => {



    return (
        <div>
          <Input
            placeholder="在这里添加数据吧！"
            style={{ width: 200 }}
            value={props.name}
            onChange={props.onchange}
          ></Input>
          <Button type="primary" onClick={props.onclick}>
            添加
          </Button>
        </div>
      );

    
  
}

export default Addto;
