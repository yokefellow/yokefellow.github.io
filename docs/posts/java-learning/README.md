---
title: Java介绍
date: 2020-07-06
categories:
  - BackEnd
tags:
  - Java
sticky: 1
sidebar: true
---

::: tip
摘要
:::

<!-- more -->

## 1.HelloWorld

```java {3}
public class Main{
    public static void main(String[] args){
        System.out.println("HelloWorld");
    }
}
```

## 2.流程图

@flowstart
cond=>condition: Process?
process=>operation: Process
e=>end: End

cond(yes)->process->e
cond(no)->e
@flowend

## 3.数学公式

### 3.1 单行

$x ={-b \pm \sqrt{b^2-4ac}\over 2a}$

$\int \frac{1}{x}\mathrm{d}x= \ln \left| x \right| +C$

### 3.2 多行

$$
C_0=1,C_{n}=\frac{2(2n+1)}{n+2}C_{n-1}
$$

$$
P(E) ={n \choose k}p^k (1-p)^{n-k}
$$

$$
\sin \alpha - \sin \beta =
2 \cos \frac{\alpha + \beta}{2}
\sin \frac{\alpha - \beta}{2}
$$

$$
O = \begin{bmatrix}
  0 & 0 & \cdots & 0 \\
  0 & 0 & \cdots & 0 \\
  \vdots & \vdots & \ddots & \vdots \\
  0 & 0 & \cdots & 0
\end{bmatrix}
$$

## 4.图片

![头像](/images/favicon-508x508.png)

## 5.音乐播放器（APlayer）

<Meting server="netease" type="song" mid="405597568" :lrc-type="3"/>

## 6.Extract Code

### 6.1 展示 Vue 组件

<RecoDemo :collapse="true">
  <template slot="code-template">
    <<< @/docs/.vuepress/components/Demo.vue?template
  </template>
  <template slot="code-script">
    <<< @/docs/.vuepress/components/Demo.vue?script
  </template>
  <template slot="code-style">
    <<< @/docs/.vuepress/components/Demo.vue?style
  </template>
</RecoDemo>

## 7.UML

@startuml
Bob -> Alice : hello
@enduml

## 8.自定义组件

### 8.1 在线工具卡片

#### 8.1.2 搜索引擎

<div class="container">
  <div class="row">
    <OnlineToolsCard
      url="https://baidu.com"
      logoPath="/online-tools-logo/baidu.png"
      onlineToolName="百度"
      onlineToolDescription="全球最大的中文搜索引擎、致力于让网民更便捷地获取信息，找到所求。百度超过千亿的中文网页数据库，可以瞬间找到相关的搜索结果。"/>
    <OnlineToolsCard
      url="https://google.com"
      logoPath="/online-tools-logo/google.png"
      onlineToolName="Google"
      onlineToolDescription="Google搜索是Google公司重要也是最普及的一项功能，是多个国家内使用率最高的互联网搜索引擎。"/>
    <OnlineToolsCard
      url="https://cn.bing.com"
      logoPath="/online-tools-logo/bing.png"
      onlineToolName="Bing"
      onlineToolDescription="微软Bing搜索是国际领先的搜索引擎，为中国用户提供网页、图片、视频、学术、词典、翻译、地图等全球信息搜索服务。"/>
    <OnlineToolsCard
      url="https://cn.bing.com"
      logoPath="/online-tools-logo/bing.png"
      onlineToolName="Bing"
      onlineToolDescription="微软Bing搜索是国际领先的搜索引擎，为中国用户提供网页、图片、视频、学术、词典、翻译、地图等全球信息搜索服务。"/>
  </div>
</div>
