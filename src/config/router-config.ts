/*
 * @Author: vuvivian
 * @Description: 特殊路由配置
 * @Date: 2023-01-16 15:49:21
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-01-16 15:58:07
 * @FilePath: /lcd-diy-client/src/config/router-config.ts
 */

// ? 全局不动配置项 只做导出不做修改

// * 首页地址（默认）
export const HOME_URL: string = "/dashboard/index";

// * Tabs（黑名单地址，不需要添加到 tabs 的路由地址，暂时没用）
export const TABS_BLACK_LIST: string[] = ["/403", "/404", "/500", "/layout", "/login", "/dataScreen"];

// * 高德地图key
export const MAP_KEY: string = "";
