/*
 * @Author: vuvivian
 * @Description: 请输入....
 * @Date: 2023-01-17 12:38:35
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-01-17 12:42:41
 * @FilePath: /lcd-diy-client/.lintstagedrc.js
 */

module.exports = {
	"*.{js,jsx,ts,tsx}": ["eslint --fix", "prettier --write"],
	"{!(package)*.json,*.code-snippets,.!(browserslist)*rc}": ["prettier --write--parser json"],
	"package.json": ["prettier --write"],
	"*.{scss,less,styl}": ["prettier --write"],
	"*.md": ["prettier --write"]
};
