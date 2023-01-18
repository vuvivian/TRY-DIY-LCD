/*
 * @Author: vuvivian
 * @Description: 请输入....
 * @Date: 2023-01-16 15:12:17
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-01-16 15:14:33
 * @FilePath: /lcd-diy-client/src/routers/interface/index.ts
 */

export interface IMetaProps {
	keepAlive?: boolean;
	requiresAuth?: boolean;
	title: string;
	key?: string;
}

// 路由接口
export interface IRouteObject {
	caseSensitive?: boolean;
	children?: IRouteObject[];
	element?: React.ReactNode;
	order?: boolean;
	path?: string;
	meta?: IMetaProps;
	isLink?: string;
}
