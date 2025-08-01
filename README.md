# linkyourbin - linkyourbin个人网站

这是一个基于HTML、Tailwind CSS和JavaScript的linkyourbin个人网站，专为GitHub Pages部署设计。

## 网站特点

- 采用粉蓝白配色方案，视觉清新
- 响应式设计，适配桌面和移动设备
- 专注于嵌入式开发，展示STM32、ESP32、RP2040、RP235x等芯片
- 突出C、Rust、Python三种编程语言的技能展示
- 包含首页、项目展示、芯片介绍、关于我和联系页面

## 目录结构
```bash
linkyourbin.github.io/
├── index.html           # 首页
├── README.md            # 项目说明
├── assets/
│   ├── css/
│   │   └── styls.css    # 自定义样式
│   ├── images/
│   │   ├── logo_c.png   # C语言标志
│   │   ├── logo_python.png # Python语言标志
│   │   └── logo_rust.png # Rust语言标志
│   └── js/
│       └── scripts.js   # 交互脚本
└── pages/
    ├── 404.html         # 404错误页面
    ├── about.html       # 关于页面
    ├── chips.html       # 芯片介绍页面
    ├── contact.html     # 联系页面
    └── projects.html    # 项目展示页面
```
## 部署方法


1. 将仓库命名为 `yourusername.github.io`
2. 将所有文件推送到GitHub仓库
3. 在GitHub仓库设置中启用GitHub Pages，选择主分支
4. 访问 `https://yourusername.github.io` 查看网站

## 自定义内容

1. 替换 `assets/images/` 目录下的图片为您自己的标志
2. 修改各页面内容，特别是项目和技能部分
3. 如需调整配色，可修改各HTML文件中的Tailwind配置

## 功能说明

- 导航菜单：支持桌面和移动设备，带有响应式设计
- 项目展示：按芯片类型和编程语言分类展示
- 芯片介绍：详细介绍各种常用微控制器的特点和应用
- 联系表单：支持发送消息（前端演示，实际使用需后端支持）
- 平滑滚动：页面内导航和锚点链接支持平滑滚动效果    