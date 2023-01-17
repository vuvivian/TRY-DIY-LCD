import React from 'react';
import type { FC } from 'react';
import { ConfigProvider, Button } from 'antd';
import zhCN from 'antd/locale/zh_CN';
import 'antd/dist/reset.css';
import './App.less'

const App: FC = () => (
  <div className="App">
    <ConfigProvider
     locale={zhCN}
     theme={{
      token: {
        colorPrimary: '#00b96b',
      },
    }}
    >
      <Button type="primary">Button</Button>
    </ConfigProvider>
  </div>
);

export default App;
