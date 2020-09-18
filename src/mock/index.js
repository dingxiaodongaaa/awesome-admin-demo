import Mock from "mockjs";

// 设置拦截 ajax 请求的响应时间
Mock.setup({
  timeout: "200-600"
});

let configArray = [];

// 使用 webpack 的 require.context 导入所有的 mock 文件
const mockFiles = require.context(".", true, /\.js$/);
console.log(mockFiles.keys());
// 过滤掉 index.js 将剩下的添加到数组 configArray 中
mockFiles.keys().forEach(key => {
  if (key === "./index.js") return;
  console.log(mockFiles(key));
  configArray = configArray.concat(mockFiles(key));
});
console.log(configArray);
// 注册 mock 服务
configArray.forEach(item => {
  // console.log(Object.entries(item));
  // for (let [path, target] of Object.entries(item)) {
  //   debugger;
  //   let protocol = path.split("|");
  // }
  Mock.mock(new RegExp("^" + item.url), item.type, item.response);
});
