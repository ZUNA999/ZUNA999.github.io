# Academic CV Template

这是一个简洁版中文学术简历模板，适合放在 GitHub Pages 上。

当前页面结构：

- 顶部基本信息
- 教育背景
- 科研项目
- 论文、专利
- 其他荣誉
- 专业技能
- 联系方式

## 主要编辑文件

优先修改 `site-data.js`。

这个文件里集中放了：

- 姓名、基本信息、研究方向
- 教育背景
- 科研项目
- 论文和专利
- 荣誉
- 技能
- 联系方式

## 当前模板特点

- 没有动画
- 没有复杂装饰
- 信息密度更高
- 更接近传统中文学术简历排版
- 论文列表为空时会自动隐藏

## 如何预览

```powershell
python -m http.server 8000
```

然后打开 `http://localhost:8000`

## 如何发布

```powershell
git add .
git commit -m "Switch to concise academic CV layout"
git push origin main
```
