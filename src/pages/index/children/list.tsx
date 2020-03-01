import React from "react";
import { Button, Input, List } from "antd";
import "antd/dist/antd.css";


type defaultProps = {
    list:string[]
    index:number | null
    flag:boolean
    newValue:string
    newChangeValue: (e:any) => void
    onDelete: (index:number) => void
    finish: (index:number) => void
    changeValue: (index:number) => void
    realyChangeValue: (index:number) => void
}

class ShowList extends React.Component<defaultProps> {
    // console.log('props', props)
    render() {
        return (
            <List
              size="small"
              split={false}
              style={{ width: 500 }}
              dataSource={this.props.list}
              renderItem={(item:any, index) => (
                <List.Item>
                  {
                    !item["finish"] ? 
                    (
                      <>
                      <input type="checkbox" style={{marginLeft:20,width:20,height:20}} onClick={this.props.finish.bind(this,index)}/>
                  <div style={{ width: 100, fontSize: 20, marginLeft: 30 }}>
                    {item["content"]}
                  </div>
                  <Button
                    type="danger"
                    onClick={this.props.onDelete.bind(this,index)}
                  >
                    删除
                  </Button>
                  {index === this.props.index && this.props.flag ? (
                    <Button
                      type="primary"
                      onClick={this.props.realyChangeValue.bind(this,index)}
                    >
                      确认修改
                    </Button>
                  ) : (
                    <Button
                      type="primary"
                      onClick={this.props.changeValue.bind(this,index)}
                    >
                      修改
                    </Button>
                  )}
    
                  {index === this.props.index && this.props.flag ? (
                    <Input
                      style={{ width: 200 }}
                      value={this.props.newValue}
                      onChange={this.props.newChangeValue}
                    ></Input>
                  ) : null}
                    </>
                    ) : (<div style={{ width: 150, fontSize: 20, marginLeft: 30 , color:"#ccc"}}>
                    {item["content"]},已经完成
                  </div>)
                  }
                </List.Item>
              )}
            />
        )
    }
    
}

export default ShowList;