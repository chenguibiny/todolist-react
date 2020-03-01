import React from "react";
import { Button, Input } from "antd";
import "antd/dist/antd.css";

const Search = (props:any) => {
  return (
    <div>
      <Input
        placeholder="在这里搜索你想要的内容"
        onChange={props.onchange}
        value={props.searchValue}
        style={{ width: 200}}
      ></Input>
      <Button type="primary" onClick={props.searchList}>
        搜索
      </Button>
    </div>
  );
};

export default Search;
