# Shaoxiao · 个人 IP 网站

以「用 AI，构建增长。」为首页主张的个人网站，呈现 AI 工程、产品与全球增长实践，并连接 LinkedIn、X、YouTube 和微信公众号内容。

## 本地预览

这是一个无需构建的静态网站。在仓库根目录运行：

```sh
python3 -m http.server 4173 --directory personal-site
```

然后打开 http://localhost:4173/ 。也可以将本目录整体部署到支持静态文件的网站托管服务。

## 文件

- `index.html`：页面内容与社交链接。
- `style.css`：黑、白、石墨灰与红色的视觉样式及响应式布局。
- `site.js`：页面滚动时的导航交互。
- `assets/frontier-hero.jpg`：原创生成的航天主题主视觉。
- `DESIGN.md`：设计说明与主视觉生成提示词。

字体通过外部字体服务加载，使用时需要网络连接。

此目录保存本次制作的完整静态版本，与仓库根目录的现有应用分别维护。
