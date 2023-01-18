/*
 * @Author: vuvivian
 * @Description: 错误页面模块
 * @Date: 2023-01-16 15:11:38
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-01-16 16:29:48
 * @FilePath: /lcd-diy-client/src/routers/modules/error.tsx
 */
import React from "react";
import LazyLoad from "@/routers/utils/LazyLoad";
import { IRouteObject } from "@/routers/interface";

const errorRouter: Array<IRouteObject> = [
	{
		path: "/404",
		element: LazyLoad(React.lazy(() => import("@/pages/ErrorMessage/404"))),
		meta: {
			requiresAuth: false,
			title: "404页面",
			key: "404"
		}
	}
];

export default errorRouter;
