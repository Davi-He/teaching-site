# 📚 交互式教学平台

一个现代化的交互式学习网站，包含互动课程、测验练习和记忆卡片功能。

## ✨ 功能特点

- **📖 互动课程**: 逐步学习，穿插互动问题
- **✏️ 测验练习**: 多选题测验，即时反馈
- **🃏 记忆卡片**: 翻转卡片学习，进度追踪
- **🎨 现代 UI**: 基于 Tailwind CSS 的美观界面
- **📱 响应式设计**: 支持手机、平板、电脑

## 🚀 一键部署到 Zeabur

### 方法一：一键部署（最简单）

点击以下按钮直接部署：

[![Deploy on Zeabur](https://zeabur.com/button.svg)](https://zeabur.com/deploy?repoUrl=https://github.com/Davi-He/teaching-site)

### 方法二：手动部署

1. **在 Zeabur 部署**
   - 访问 https://zeabur.cn/
   - 登录你的账号
   - 点击「新建项目」→「从 GitHub 导入」
   - 选择 `Davi-He/teaching-site` 仓库
   - Zeabur 会自动识别 Next.js 项目
   - 点击「部署」

2. **获取访问地址**
   - 部署完成后，Zeabur 会提供一个 `*.zeabur.app` 的域名

### 方法二：本地部署测试

```bash
# 安装依赖
npm install

# 开发模式
npm run dev

# 构建并启动
npm run build
npm start
```

访问 http://localhost:3000 查看效果

## 🛠️ 技术栈

- **框架**: Next.js 14
- **语言**: TypeScript
- **样式**: Tailwind CSS
- **部署**: Zeabur

## 📝 自定义内容

你可以轻松修改以下内容：

- **课程内容**: 编辑 `src/components/InteractiveLesson.tsx` 中的 `lessons` 数组
- **测验题目**: 编辑 `src/components/QuizComponent.tsx` 中的 `questions` 数组
- **记忆卡片**: 编辑 `src/components/FlashCards.tsx` 中的 `flashCards` 数组

## 📄 许可证

MIT License
