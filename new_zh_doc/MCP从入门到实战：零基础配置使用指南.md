---
title: MCP从入门到实战：零基础配置使用指南
description: 从零开始配置和使用Model Context Protocol的完整教程，掌握AI连接外部工具的能力
categories: AI Technology
date: 2023-05-12
tags: [MCP, AI工具, 配置教程, Claude, ChatWise]
---

# MCP从入门到实战：零基础配置使用指南

![MCP实战](https://pic1.zhimg.com/80/v2-59dad2f9a56284c39c4d0db61a19b5fe_720w.webp)

## 引言：为何要掌握MCP？

当前的AI应用正快速从"独立思考"向"主动行动"演进。无论是查询实时信息、操作本地软件，还是访问专业API，让AI模型连接外部世界已成为提升其实用性的关键。

Model Context Protocol (MCP)作为一项革命性技术，解决了AI系统与外部工具集成的痛点。然而，许多用户发现MCP的配置过程略显繁琐，对普通人而言存在不小的使用门槛。

本文将带你一步步了解MCP的配置与实际应用，从环境准备到具体案例，全方位掌握这一强大工具，让你能够轻松构建自己的AI工作流。

## MCP的两种运行模式

在开始配置前，我们需要先了解MCP的两种主要运行模式：

### Stdio模式

- **适用场景**：主要用于连接本地服务、操作本地软件或文件
- **配置复杂度**：相对较高，需要本地环境支持
- **典型应用**：操作Blender、访问本地文件系统、与本地安装的软件交互

### SSE模式 (Server-Sent Events)

- **适用场景**：主要用于连接远程服务，访问在线API
- **配置复杂度**：相对简单，通常只需一个URL链接
- **典型应用**：访问Google服务、使用在线搜索引擎、连接各类Web API

![1747667935075.png](https://cdn.fanqieto.top/1747667935075.png)

目前，大多数可用的MCP服务采用Stdio模式，这也是本文将重点关注的配置方式。

## 配置MCP前的准备工作

在开始使用MCP之前，我们需要先准备好本地环境，主要包括两个核心工具：`uv` 和 `Node.js`。

### 安装uv (用于运行uvx命令)

**Windows系统**：

1. 按"Win"键，搜索"PowerShell"
2. 右键选择"以管理员身份运行"
3. 粘贴并执行以下命令：

```powershell
powershell -ExecutionPolicy ByPass -c "irm https://astral.sh/uv/install.ps1 | iex"
```

4. 安装完成后重启计算机

**Mac系统**：

1. 打开"终端"应用
2. 粘贴并执行以下命令：

```bash
curl -LsSf https://astral.sh/uv/install.sh | sh
```

### 安装Node.js (用于运行npx命令)

1. 访问Node.js官网 (https://nodejs.org/)
2. 下载并安装最新的LTS版本
3. 安装完成后，可在终端/命令提示符中输入`node -v`验证安装成功

> ⚠️ **注意**：Windows系统在环境配置和网络上可能会遇到比Mac更多的问题。如果你没有编程经验并使用Windows电脑，遇到无法解决的错误时，可能需要寻求技术支持。

## 获取MCP服务

随着MCP的普及，已经出现了多个MCP服务聚合网站，可以帮助我们更容易地找到和配置所需的MCP服务：

1. **MCP.so**：https://mcp.so/ - 中文友好的MCP服务聚合网站
2. **Smithery.ai**：https://smithery.ai/ - 英文MCP服务平台

这些网站的使用流程大同小异：

1. 在左侧选择你想要使用的MCP服务
2. 输入必要的API密钥或配置参数
3. 网站会自动生成配置代码或命令，可直接复制使用

## 在客户端配置MCP服务

目前支持MCP的主流客户端主要分为两类：

- **聊天客户端**：Claude、ChatWise、Cherry Studio等
- **AI编程IDE**：Cursor、Windsurf等

下面我们将详细介绍如何在ChatWise和Windsurf这两个典型客户端中配置MCP服务。

### 在Windsurf中配置MCP

Windsurf是一款专注于AI编程的IDE，其MCP配置相对直观：

1. 点击右上角头像，打开"Windsurf Settings"
2. 找到"MCP Servers"选项，点击右侧的"Add Server"按钮
3. Windsurf内置了一些常用MCP服务，可直接选择使用
4. 如需添加自定义服务，点击"Add custom server"

![Windsurf MCP配置](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4ce4c8e68fa94f43a397b1dba8825ff9~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp)

添加自定义服务时，Windsurf会打开一个配置文件，你需要将从MCP聚合网站获取的JSON配置粘贴进去。注意，当添加多个服务时，不要直接将新的JSON完整粘贴在第一个下面，而是只保留核心部分添加到现有配置中。

**标准配置文件结构**：

```json
{
  "mcpServers": {
    "service1": {...},
    "service2": {...}
  }
}
```

配置成功后，MCP服务名称前会显示绿色小点；如有配置错误则显示红色小点。

### 在ChatWise中配置MCP

ChatWise是一款专注于AI对话的工具，其MCP配置方法如下：

#### 使用JSON导入(最新方法)

ChatWise最近更新了一项新功能，可以直接从JSON导入MCP配置：

1. 点击左下角的加号按钮
2. 选择"从剪切板导入JSON"
3. 粘贴从MCP网站获取的JSON配置
4. 完成导入

![ChatWise JSON导入](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1b87f6e5ebdb4d25aed53a1564c99fc3~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp)

#### 手动配置方法

如果需要手动配置，步骤如下：

1. 点击左下角头像，进入设置
2. 找到"工具"选项，点击左下角的加号
3. 填写以下信息：
   - **类型**：对于JSON格式的MCP服务，通常选择"Stdio"
   - **ID**：为服务起一个易识别的名称
   - **命令**：从MCP网站获取或通过AI将JSON转换成的命令
   - **环境变量**：填写服务所需的API密钥等信息

![ChatWise手动配置](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2c62c1dd2e7c4ae78ef4a4df6f18a3e9~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp)

**小技巧**：将JSON配置发送给AI（如Claude或DeepSeek），请求其将JSON转换为命令行参数和环境变量，可大大简化配置过程。

## 实用MCP案例及配置参数

接下来，我们将介绍几个实用的MCP应用案例，并提供完整的配置参数。

### 案例一：从Figma获取设计稿生成网页

**功能**：直接获取Figma设计稿信息，让AI生成对应的高还原度网页代码

**配置步骤**：

1. 获取Figma API Token：

   - 登录Figma，点击左上角头像-Settings
   - 找到Security选项，点击"Generate new Token"
   - 将File content和Dev resources权限均设为"只读"

2. 在ChatWise中配置：

```
命令：npx -y figma-developer-mcp --stdio --figma-api-key=你的Figma_API_Key
```

**使用方法**：

1. 在Figma中右键点击画板，选择"复制所选项的链接"
2. 在启用了Figma MCP的AI对话框中粘贴链接
3. 要求AI根据设计稿生成网页代码

![Figma MCP示例](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e5ea33f86f35400c9ef96c5b8c1bef99~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp)

### 案例二：构建AI搜索引擎(Exa+Time)

**功能**：结合时间服务和搜索服务，让AI能够获取和分析最新的网络信息

**配置步骤**：

1. 配置Time MCP（获取当前时间）：

```
命令：uvx mcp-server-time --local-timezone Asia/Shanghai
```

2. 配置Exa搜索MCP：
   - 从 https://dashboard.exa.ai/api-keys 获取API Key

```
命令：npx -y exa-mcp-server
环境变量：EXA_API_KEY=你的Exa_API_Key
```

**使用方法**：

1. 在对话框中启用这两个MCP服务
2. 向AI提问最近发生的事件或需要实时信息的问题
3. AI会自动获取当前时间，并基于此搜索最新信息

![AI搜索示例](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9467e9eeeed441fe9e23dde5d4ad9c0f~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp)

### 案例三：Obsidian AI知识库

**功能**：让AI能够检索和分析你的Obsidian笔记库内容

**配置步骤**：

1. 在Obsidian中安装"Local Rest API"插件：

   - 打开Obsidian设置-第三方插件-社区插件市场
   - 搜索并安装"Local Rest API"
   - 启用并记录生成的API Key

2. 获取Obsidian仓库路径：

   - 点击Obsidian左下角仓库管理
   - 选择"在访达/资源管理器中显示"
   - Mac用户按住Option键右键点击文件夹，复制完整路径

3. 在ChatWise中配置：

```
命令：uv tool run mcp-obsidian --vault-path 你的Obsidian仓库路径
环境变量：OBSIDIAN_API_KEY=你的Local_Rest_API_Key
```

**使用方法**：

1. 启用Obsidian MCP服务
2. 向AI询问关于你笔记库中的内容
3. AI会自动检索并基于你的笔记回答问题

![Obsidian MCP示例](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8a5c34f5e12d43e890e2ddf8bce88c44~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp)

### 案例四：高德地图查询与网页生成

**功能**：获取地理位置信息并生成美观的展示网页

**配置步骤**：

1. 获取高德API Key：

   - 访问 https://console.amap.com/dev/key/app
   - 完成个人开发者认证
   - 创建应用并生成Web服务API Key

2. 在ChatWise中配置：

```
命令：npx -y @amap/amap-maps-mcp-server
环境变量：AMAP_MAPS_API_KEY="你的高德API_Key"
```

**使用方法**：

1. 启用高德MCP服务
2. 询问附近的特定地点（如咖啡馆）
3. 让AI生成一个展示搜索结果的网页

![高德MCP示例](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5ebaba59af824ee9871e0e9f9c9ae91d~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp)

### 案例五：arXiv论文检索与下载

**功能**：搜索和下载arXiv上的学术论文

**配置参数**：

```
命令：uv tool run arxiv-mcp-server --storage-path /你想要保存论文的路径
```

**使用方法**：

1. 启用arXiv MCP服务
2. 询问特定领域的最新论文
3. AI会自动检索并可以下载PDF版本

![arXiv MCP示例](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5c99551e347a478c9a27dbabe40ad8f0~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp)

### 案例六：Flomo笔记快速创建

**功能**：在AI对话中直接创建Flomo笔记

**配置步骤**：

1. 获取Flomo API链接：

   - 访问Flomo设置页面：https://v.flomoapp.com/mine?source=web
   - 复制API链接

2. 在ChatWise中配置：

```
命令：npx -y @chatmcp/mcp-server-flomo
环境变量：FLOMO_API_URL=你的Flomo_API_链接
```

**使用方法**：

1. 启用Flomo MCP服务
2. 在对话中生成有价值的内容
3. 要求AI将内容保存到Flomo，可指定添加标签

![Flomo MCP示例](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6324fa89326b4d3583dd5beeb4edd8a4~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp)

## 故障排除和常见问题

在配置和使用MCP过程中，可能会遇到一些常见问题，以下是解决方案：

### 命令报错或找不到命令

**症状**：执行命令时提示"command not found"或类似错误
**解决方法**：

- 确认Node.js和uv安装成功
- Windows用户确保以管理员身份运行命令提示符
- 尝试重启计算机，让环境变量生效

### 连接超时

**症状**：MCP服务初始化时出现超时错误
**解决方法**：

- 检查网络连接
- 检查是否需要代理访问外网
- 减少同时运行的MCP服务数量

### API密钥错误

**症状**：提示"Invalid API Key"或认证失败
**解决方法**：

- 重新生成API密钥
- 确认复制完整，没有多余空格
- 检查环境变量名称是否准确

### 格式错误

**症状**：JSON格式错误
**解决方法**：

- 使用AI助手帮助检查和修复JSON格式
- 确保命令中的路径没有包含特殊字符
- 使用转义符处理路径中的空格或特殊字符

## MCP使用的最佳实践

通过实践，我们总结出一些使用MCP的有效策略：

1. **按需启用服务**：只启用当前对话需要的MCP服务，避免过多服务同时运行导致性能问题
2. **组合使用多个服务**：例如，时间服务+搜索服务可以获得更精准的时事信息
3. **选择适合的AI模型**：不同模型与MCP的配合效果不同，Claude在工具使用方面表现较好
4. **明确指导AI使用工具**：有时需要明确提示AI使用特定工具，特别是对于开源模型
5. **保存常用配置**：将常用MCP服务的配置命令保存下来，方便复用
6. **注意API额度**：许多第三方服务有API调用限制，合理控制使用频率

## 结语：MCP的未来可期

MCP协议的出现，标志着AI工具生态正从"封闭花园"走向"开放广场"。正如互联网的HTTP协议统一了网页访问标准，MCP正在统一AI与工具的交互方式。

尽管目前MCP的配置还相对复杂，但技术的民主化与易用性之间的矛盾必将随着生态的成熟而解决。未来，我们有望看到只需在AI助手中点击"安装工具"就能使用的一键式MCP服务。

作为用户，现在就开始尝试这些看似复杂的技术，是对未来的一种投资。在AI时代，熟练使用工具将成为核心竞争力，而了解底层原理将让你比他人更早掌握未来技术的主动权。

## 参考资料

- [MCP官方文档](https://docs.anthropic.com/claude/docs/model-context-protocol)
- [Anthropic MCP GitHub仓库](https://github.com/anthropics/anthropic-cookbook/tree/main/mcp)
- [MCP.so - MCP服务聚合网站](https://mcp.so/)
- [Smithery.ai - MCP工具平台](https://smithery.ai/)
- [MCP: Flash in the Pan or Future Standard?](https://blog.langchain.dev/mcp-flash-or-future/)

---

顺便安利一下我们的产品——「Offer蛙」：AI 驱动的智能面试助手，帮你高效拿下心仪 Offer！官网：[www.mianshizhushou.com](https://www.mianshizhushou.com)
