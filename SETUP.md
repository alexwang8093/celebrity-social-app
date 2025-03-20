# 项目安装和运行指南

本文档提供详细的项目安装、运行和部署步骤。

## 前置要求

- Node.js 16.x 或更高版本
- npm 7.x 或 yarn 1.22.x

## 安装步骤

1. 首先解除PowerShell脚本执行限制（如果需要）:

```powershell
# 以管理员身份运行PowerShell，然后执行:
Set-ExecutionPolicy RemoteSigned
```

2. 安装项目依赖:

```bash
# 在项目根目录下执行
npm install
# 或
yarn install
```

## 本地开发

启动开发服务器:

```bash
npm run dev
# 或
yarn dev
```

然后在浏览器中访问 http://localhost:3000

## 构建生产版本

```bash
npm run build
# 或
yarn build
```

## 部署到Vercel

最简单的部署方式是使用Vercel，步骤如下:

1. 安装Vercel CLI: `npm install -g vercel`
2. 在项目根目录运行: `vercel login` 并完成身份验证
3. 部署: `vercel`

## 部署到其他平台

项目也可以部署到任何支持Node.js的托管服务，如Netlify、Heroku等。只需遵循相应平台的部署指南，使用`npm run build`命令构建项目，并设置启动命令为`npm start`。

## 注意事项

1. 确保放置示例视频文件在`public/videos/`目录下，命名应与`data/demoData.ts`中定义的一致。
2. 确保放置示例图片文件在`public/images/`目录下，命名应与`data/demoData.ts`中定义的一致。 