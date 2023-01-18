import React from "react";
import type { FC } from "react";
import { ConfigProvider } from "antd";
import { HashRouter } from "react-router-dom";
import Router from "./routers/index";
import zhCN from "antd/locale/zh_CN";
import "antd/dist/reset.css";
import "./App.less";

const App: FC = () => (
	<HashRouter>
		<ConfigProvider
			locale={zhCN}
			theme={{
				token: {
					colorPrimary: "#00b96b"
				}
			}}
		>
			<Router />
		</ConfigProvider>
	</HashRouter>
);

export default App;
