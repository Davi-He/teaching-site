# 📚 交互式教学平台

一个现代化的交互式学习网站，包含互动课程、测验练习和记忆卡片功能。

## ✨ 功能特点

- **📖 互动课程**: 逐步学习，穿插互动问题
- **✏️ 测验练习**: 多选题测验，即时反馈
- **🃏 记忆卡片**: 翻转卡片学习，进度追踪
- **🎨 现代 UI**: 基于 Tailwind CSS 的美观界面
- **📱 响应式设计**: 支持手机、平板、电脑

## 🚀 部署到 Zeabur

### 方法一：通过 GitHub 部署（推荐）

1. **将代码推送到 GitHub**
   ```bash
   cd teaching-site
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin <你的 GitHub 仓库地址>
   git push -u origin main
   ```

2. **在 Zeabur 部署**
   - 访问 https://zeabur.cn/
   - 登录你的账号
   - 点击「新建项目」
   - 选择「从 GitHub 导入」
   - 选择 `teaching-site` 仓库
   - Zeabur 会自动识别 Next.js 项目
   - 点击「部署」

3. **获取访问地址**
   - 部署完成后，Zeabur 会提供一个 `*.zeabur.app` 的域名
   - 你也可以绑定自定义域名

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
