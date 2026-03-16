# Academic Homepage Starter

这是一个适合部署到 GitHub Pages 的静态学术简历网站模板，已经按个人学术主页的常见结构拆好：

- 首页简介
- Research interests
- News / updates
- Publications
- Experience / education timeline
- Teaching / service / awards / talks
- Contact

## 你主要需要改哪里

优先编辑 `site-data.js`。

这个文件里已经集中放好了：

- 姓名、头衔、学校、简介
- 研究方向标签
- 邮箱、Scholar、GitHub、CV 链接
- 出版物
- 教学、服务、奖项、报告
- 联系方式

页面结构和样式分别在下面两个文件里：

- `index.html`
- `styles.css`

只有当你想改布局或视觉风格时，才需要动它们。

## 建议的替换顺序

1. 先把 `site-data.js` 里的 `Your Name`、邮箱、学校、研究方向全部替换掉。
2. 把 `links` 里的 `Google Scholar`、`GitHub`、`CV PDF` 改成你的真实链接。
3. 如果你有头像，把图片放到仓库里，例如 `assets/portrait.jpg`，然后把 `portrait` 改成 `"assets/portrait.jpg"`。
4. 如果你有 PDF 简历，把文件放到仓库里，例如 `assets/cv.pdf`，然后把 `cvUrl` 改成 `"assets/cv.pdf"`。
5. 根据需要删掉不想展示的模块内容。某个列表留空时，对应区块会自动隐藏。

## 本地预览

如果你装了 Python，可以在仓库目录运行：

```powershell
python -m http.server 8000
```

然后打开 `http://localhost:8000`。

如果只是快速看效果，直接双击 `index.html` 也可以。

## 部署到 GitHub Pages

因为你的仓库名是 `ZUNA999.github.io`，它本身就是 GitHub 用户主页仓库。通常只要把内容推到默认分支，Pages 就会直接从仓库根目录发布。

常用命令：

```powershell
git add .
git commit -m "Build first academic homepage"
git push origin main
```

推送后，主页地址一般是：

```text
https://zuna999.github.io/
```

## 现在这版的设计方向

- 不是传统白底简历页，而是偏 editorial / research profile 的展示方式
- 适合展示代表性成果，不会一上来就像 PDF 简历平铺
- 视觉上更像个人学术主页，而不是招聘 landing page

如果你愿意，我下一步可以继续直接帮你做两件事之一：

1. 按你的真实学术信息把占位内容替换成正式版本
2. 再加一页 `publications` / `cv` / `projects` 子页面，做成更完整的网站
