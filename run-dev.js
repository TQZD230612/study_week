/**
 * 一键运行调试脚本
 * 启动各主要API服务，便于本地开发和调试
 */

const { spawn } = require('child_process');
const path = require('path');

const services = [
  {
    name: '模板管理',
    script: path.join(__dirname, '模板管理', 'server.js'),
    port: 3002
  },
  {
    name: '模板示例文件API',
    script: path.join(__dirname, '模板示例文件&查新结论显示优化', 'api.js'),
    port: 3010
  },
  {
    name: '文献管理-批量删除',
    script: path.join(__dirname, '文献管理-批量删除', 'export-api.js'),
    port: 3011
  },
  {
    name: '科技部word查新报告导出',
    script: path.join(__dirname, '科技部word查新报告导出', 'export-api.js'),
    port: 3001
  },
  {
    name: '登录注册-注册API',
    script: path.join(__dirname, '登录注册界面', 'register-api.js'),
    port: 3020
  },
  {
    name: '登录注册-登录API',
    script: path.join(__dirname, '登录注册界面', 'login-api.js'),
    port: 3021
  }
];

services.forEach(({ name, script, port }) => {
  const proc = spawn('node', [script], { stdio: 'inherit' });
  proc.on('error', err => {
    console.error(`[${name}] 启动失败:`, err.message);
  });
  console.log(`[${name}] 已启动，监听端口: ${port}`);
});

console.log('所有主要API服务已启动。可用浏览器访问前端页面或调用API进行调试。');
