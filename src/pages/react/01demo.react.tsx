import React, { Component } from "react";
import { Button, Card } from 'antd';
import { routerHistory } from "@/utils/router";

interface DemoPageProps {
  match?: any;
  param: any;
}

interface DemoPageState {
  loading: boolean;
  count: number;
}

class DemoPage extends Component<DemoPageProps, DemoPageState> {
  state: DemoPageState = {
    loading: true,
    count: 0
  };

  render() {
    const { param } = this.props;
    // console.log("param", param);
    const { loading, count } = this.state;
    return (
      <Card style={{ margin: "16px" }}>
        <Button type={"primary"} onClick={event => {
          this.setState({ loading: !loading, count: (count + 1) });
          routerHistory.push({
            path: "/nest-side/curd/01",
            query: { a: `${count}` },
            // state: {count: (count + 1)},
          });
        }}>点击{count}</Button>
        <br/>
        {loading && "加载中..."}
        <br/>
        {JSON.stringify(param)}
      </Card>
    );
  }
}

export default DemoPage;
