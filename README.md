# 仿抖音网页版

这是一个基于Next.js开发的仿抖音移动端网页应用，提供类似抖音的视频浏览和社交互动体验。

## 功能特点

- **沉浸式视频体验**：全屏视频播放，支持上下滑动切换视频
- **社交互动功能**：点赞、评论、分享等互动按钮
- **用户资料展示**：展示视频发布者信息
- **私聊支付功能**：可通过支付开启与视频发布者的私聊
- **微信集成**：支付后自动跳转至微信应用
- **响应式设计**：完美适配各类移动设备

## 技术栈

- **前端框架**：Next.js 14, React 18
- **语言**：TypeScript
- **样式**：Tailwind CSS
- **图标**：React Icons

## 安装与运行

### 前置要求

- Node.js 16.x 或更高版本
- npm 7.x 或 yarn 1.22.x

### 步骤一：克隆项目

```bash
git clone https://github.com/你的用户名/douyin-web-clone.git
cd douyin-web-clone
```

### 步骤二：安装依赖

如果使用Windows PowerShell遇到脚本执行限制，先解除限制：

```powershell
# 以管理员身份运行PowerShell
Set-ExecutionPolicy RemoteSigned
```

然后安装依赖：

```bash
npm install
# 或
yarn install
```

### 步骤三：启动开发服务器

```bash
npm run dev
# 或
yarn dev
```

访问 http://localhost:3000 查看应用。

## 自定义视频和图片内容

项目使用了示例视频和图片，您需要替换为自己的内容：

### 替换视频文件

1. 准备3个视频文件，命名为`demo1.mp4`、`demo2.mp4`和`demo3.mp4`
2. 将视频文件放置在`public/videos/`目录下
3. 视频建议使用竖屏格式（9:16比例），大小控制在10MB以内

### 替换图片文件

1. 准备3个用户头像，命名为`avatar1.jpg`、`avatar2.jpg`和`avatar3.jpg`
2. 准备3个视频封面图，命名为`cover1.jpg`、`cover2.jpg`和`cover3.jpg`
3. 将所有图片放置在`public/images/`目录下
4. 头像图片建议为正方形，封面图建议为9:16比例

### 修改视频信息

如需修改视频标题、用户名等信息，编辑`data/demoData.ts`文件：

```typescript
// 示例：修改第一个视频的信息
{
  id: '1',
  videoUrl: '/videos/demo1.mp4',  // 视频路径
  coverUrl: '/images/cover1.jpg',  // 封面图路径
  description: '自定义视频描述',  // 视频描述
  likeCount: 234500,  // 点赞数
  commentCount: 3200,  // 评论数
  shareCount: 1800,  // 分享数
  hasProducts: true,  // 是否有商品
  user: {
    id: 'user1',
    name: '自定义用户名',  // 用户名
    avatar: '/images/avatar1.jpg',  // 用户头像
    verified: true  // 是否认证
  }
}
```

## 构建与部署

### 构建生产版本

```bash
npm run build
# 或
yarn build
```

### 部署到Vercel（推荐）

最简单的部署方式是使用Vercel：

1. 安装Vercel CLI: `npm install -g vercel`
2. 在项目根目录运行: `vercel login` 并完成身份验证
3. 部署: `vercel`

### 部署到其他平台

项目也可以部署到任何支持Node.js的托管服务，如Netlify、Heroku等。只需遵循相应平台的部署指南，使用`npm run build`构建项目，并设置启动命令为`npm start`。

## 贡献指南

欢迎贡献代码或提出问题！请通过GitHub Issues或Pull Requests参与项目。

## 许可证

MIT 
