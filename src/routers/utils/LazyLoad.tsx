/*
 * @Author: vuvivian
 * @Description: 路由懒加载
 * @Date: 2023-01-16 16:27:58
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-01-16 16:27:59
 * @FilePath: /lcd-diy-client/src/routers/utils/LazyLoad.tsx
 */
import React, { Suspense } from "react";
import { Spin } from "antd";

const lazyLoad = (Comp: React.LazyExoticComponent<any>): React.ReactNode => {
	return (
		<Suspense
			fallback={
				<Spin
					size="large"
					style={{
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						height: "100%"
					}}
				/>
			}
		>
			<Comp />
		</Suspense>
	);
};

export default lazyLoad;
