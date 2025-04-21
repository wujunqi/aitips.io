<h1 align="center">leohuynh.dev 🧑‍💻</h1>

<div align="center">

[![Made in Vietnam](https://raw.githubusercontent.com/webuild-community/badge/master/svg/made-modern.svg)](https://leohuynh.dev)

</div>

![leohuynh.dev @ #250a4c5 on Oct.13](https://cdn.shopify.com/s/files/1/0669/0262/2504/files/pawelzmarlak-2024-10-12T14_51_02.315Z.png?v=1728744886)

## Motivation

> Sharing is learning!

I started this blog as a way to document and share stuff I have learned and found useful as a software engineer.

Building and writing things down is a great way for me to solidify my understanding of new concepts and ideas. I hope my blog could be a helpful resource for fellow devs who interested in web dev, eCommerce, and related technologies.

I would be highly appreciated if you could leave your comments and thoughts on what I have written 🍻

## Tech stack

This blog is hosted on [Vercel](https://vercel.com/), built with [Next.js](https://nextjs.org/) and [Tailwind CSS](https://tailwindcss.com/) using **Tailwind Nextjs Starter Blog**.

A huge thanks to [Timothy Lin](https://twitter.com/timlrxx) for the minimal, lightweight, and super easy-to-customize blog starter.

A few major over-engineering-changes from the original repo:

- ⚛️ **React 18+**, **NextJS 14+** (App Router)
- 🎉 Adopting **Typescript**, committing with [Conventional Commits](https://www.conventionalcommits.org/)
- 📊 Monitoring site with [Umami](https://umami.is/) website analytics
- 👀 Theming in dark mode with [Github dark dimmed](https://github.blog/changelog/2021-04-14-dark-and-dimmed-themes-are-now-generally-available/) colors for better contrast
- 👨‍💻 Making a lot of changes to the UI, new homepage design, adding `ProfileCard`, `CareerTimeline` components, adding `/snippets`, `/books` page, etc.

## Assets

The images in this blog are from [Unsplash](https://unsplash.com/), gifs from [GIPHY](https://giphy.com/), and illustrations are from [Storyset](https://storyset.com/).

Thanks for the free resources 🙏

## Star History

<a href="https://star-history.com/#hta218/leohuynh.dev&Date">
 <picture>
   <source media="(prefers-color-scheme: dark)" srcset="https://api.star-history.com/svg?repos=hta218/leohuynh.dev&type=Date&theme=dark" />
   <source media="(prefers-color-scheme: light)" srcset="https://api.star-history.com/svg?repos=hta218/leohuynh.dev&type=Date" />
   <img alt="Star History Chart" src="https://api.star-history.com/svg?repos=hta218/leohuynh.dev&type=Date" />
 </picture>
</a>

---

Copyright (c) 2024 - Leo's dev blog – stories, insights, and ideas.

# 中文开发者字体配置

为了提升中国开发者的代码阅读和编写体验，本项目使用了专门的字体配置，使中英文能够更加和谐地展示。

## 字体选择

本项目使用的字体组合为：

### 编程字体 (等宽字体)

- **JetBrains Mono**: 主要编程字体，适合代码显示
- **Sarasa Mono SC (更纱黑体)**: 优秀的中英文等宽字体，保持2:1比例
- **Source Han Sans HW SC (思源黑体等宽)**: Adobe开发的高质量中文等宽字体
- **Microsoft YaHei Mono (微软雅黑等宽)**: 微软开发的中英文混合等宽字体

### 正文字体

- **Source Han Sans SC (思源黑体)**: 优秀的中文无衬线字体
- **Noto Sans SC**: Google开发的全语言无衬线字体
- **PingFang SC (苹方)**: Apple系统默认中文字体
- **Microsoft YaHei (微软雅黑)**: Windows系统默认中文字体

## 等宽比例

为保证代码对齐，我们使用了支持中英文2:1宽度比例的等宽字体：

- 英文字符宽度: 1单位
- 中文字符宽度: 2单位

这样可以确保在代码和注释混合中英文时保持完美对齐。

## 如何更新

若需要更改默认字体配置，请修改以下文件：

1. `css/cjk-font.css`: 中文字体主要配置
2. `app/layout.tsx`: 字体加载和变量定义
3. `tailwind.config.js`: 应用于Tailwind组件的字体配置

## 字体资源

- JetBrains Mono: https://www.jetbrains.com/lp/mono/
- 思源黑体/Source Han Sans: https://github.com/adobe-fonts/source-han-sans
- 更纱黑体/Sarasa Gothic: https://github.com/be5invis/Sarasa-Gothic

---

_注: 某些字体需要单独下载安装到系统中才能生效。_
