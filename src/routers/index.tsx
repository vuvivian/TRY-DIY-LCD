/*
 * @Author: vuvivian
 * @Description: 路由入口
 * @Date: 2023-01-16 15:00:43
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-01-18 11:49:22
 * @FilePath: /lcd-diy-client/src/routers/index.tsx
 */
import React from "react";
import { Navigate, useRoutes } from "react-router-dom";
import { IRouteObject } from "./interface/index";
import Login from "../pages/Login";

// * 导入所有router
// const metaRouters = import.meta.globEager("./modules/*.tsx");

const rootRouter: IRouteObject[] = [
	{
		path: "/",
		element: <Navigate to="/login" />
	},
	{
		path: "/login",
		element: <Login />,
		meta: {
			requiresAuth: false,
			title: "登录页",
			key: "login"
		}
	},
	{
		path: "*",
		element: <Navigate to="/404" />
	}
];

const Router = () => {
	const routes = useRoutes(rootRouter);
	return routes;
};

export default Router;
