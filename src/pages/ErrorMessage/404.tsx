/*
 * @Author: vuvivian
 * @Description: 请输入....
 * @Date: 2023-01-16 15:24:49
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-01-16 15:58:49
 * @FilePath: /lcd-diy-client/src/pages/ErrorMessage/404.tsx
 */
import { Button, Result } from "antd";
import { useNavigate } from "react-router-dom";
import { HOME_URL } from "@/config/router-config";
import "./index.less";

const NotFound = () => {
	const navigate = useNavigate();
	const goHome = () => {
		navigate(HOME_URL);
	};
	return (
		<Result
			status="404"
			title="404"
			subTitle="Sorry, the page you visited does not exist."
			extra={
				<Button type="primary" onClick={goHome}>
					Back Home
				</Button>
			}
		/>
	);
};

export default NotFound;
