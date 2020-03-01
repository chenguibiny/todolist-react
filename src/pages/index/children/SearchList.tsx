import React from "react";
import { List } from "antd";
import "antd/dist/antd.css";

const SearchList = (props:any) => {
  return (
    <List
          size="small"
          split={false}
          style={{ width: 500 }}
          dataSource={props.searchList}
          renderItem={(item:string) => (
            <List.Item>
              <div style={{ width: 100, fontSize: 20, marginLeft: 30 }}>
                {item}
              </div>
            </List.Item>
          )}
        ></List>
  );
};

export default SearchList;
