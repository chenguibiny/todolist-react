import React from "react";
// import { Button, Input, List } from "antd";
import "antd/dist/antd.css";

import Addto from "./children/add";
import Search from "./children/search";
import ShowList from "./children/list";
import SearchList from "./children/SearchList";
type IState = {
  // 对象数组
  list: any[];
  value: string;
  index: number | null;
  flag: boolean;
  newValue: string;
  searchValue: string;
  searchList: string[];
};

class Todo extends React.Component {
  state: IState = {
    list: [],
    value: "",
    index: null,
    flag: false,
    newValue: "",
    searchValue: "",
    searchList: []
  };
  // 添加的输入框内容
  listChange = (e: any) => {
    this.setState({
      value: e.target.value
    });
  };
  // 修改输入框内容
  newChangeValue = (e: any) => {
    this.setState({
      newValue: e.target.value
    });
  };
  // 搜索框内容
  searchValueChange = (e: any) => {
    this.setState({
      searchValue: e.target.value
    });
  };

  // 添加按钮触发事件
  pushList = () => {
    // 如果输入框有内容
    if (this.state.value.trim()) {
      var obj = { content: this.state.value, finish: false };
      this.setState({
        value: "",
        list: [...this.state.list, obj]
      });
    }
  };

  // 删除按钮
  deleteIndex = (index: number) => {
    this.state.list.splice(index, 1);
    this.setState({});
  };

  // 点击修改按钮
  changeValue = (index: number) => {
    // 如果有正在修改的内容（flag = true），就直接返回，不让操作
    if (
      this.state.index !== null &&
      this.state.index !== index &&
      this.state.flag === true
    ) {
      return;
    }
    console.log('this.state.list[index]', index)
    this.setState({
      index: index,
      flag: !this.state.flag,
      newValue: this.state.list[index]["content"]
    });
  };
  

  // 修改完成的按钮
  realyChangeValue = (index: number) => {
    if (!this.state.newValue.trim()) return;
    let { list } = this.state;
    list[index]["content"] = this.state.newValue;
    // this.state.list[index] = this.state.newValue;
    this.setState({
      index: index,
      list,
      flag: !this.state.flag
    });
  };

  // 搜索按钮触发事件
  searchList = () => {
    // 如果输入的为空格或者空
    if (!this.state.searchValue.trim()) {
      this.setState({
        searchList: []
      });
      return;
    }

    const value = this.state.searchValue.trim();
    // 获取列表的每一项的内容 content 数组
    const copyList = this.state.list.map(ele => {
      return ele["content"];
    });
    const searchList = copyList.filter(ele => {
      return ele.indexOf(value) > -1;
    });

    this.setState({
      searchList
    });
  };
  // 事件打勾按钮
  finish = (index: number) => {
    const list = this.state.list;
    list[index]["finish"] = true;
    this.setState({
      list
    });
  };

  render() {
    return (
      <div>
        <Addto
          style={{ display: "inline-block" }}
          name={this.state.value}
          onchange={this.listChange}
          onclick={this.pushList}
        ></Addto>
        
        <ShowList
          list={this.state.list}
          index={this.state.index}
          flag={this.state.flag}
          newValue={this.state.newValue}
          newChangeValue={this.newChangeValue}
          onDelete={this.deleteIndex}
          finish={this.finish}
          changeValue={this.changeValue}
          realyChangeValue={this.realyChangeValue}
        ></ShowList>

        <Search
          onchange={this.searchValueChange}
          searchValue={this.state.searchValue}
          searchList={this.searchList}
        ></Search>

        <h1>如果你搜索内容，就会在这里显示</h1>

        <SearchList searchList={this.state.searchList}></SearchList>
      </div>
    );
  }
}

export default Todo;
