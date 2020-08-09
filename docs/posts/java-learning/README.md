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

## 6.UML

@startuml
node in as "input"
node p as "Pre-processing"
node fm as "Feature Mining"
node fs as "Feature Selection"
node fr as "Feature Reduction"
node m as "Modelling"
node a as "Accepted Results?"
node pp as "Post-processing"
node o as "Output"

in -> p
p ..> fm
fm ..> fs
fs ..> fr
fr ..> m
m ..> a
a ..> fm : no
a -> pp : yes
pp -> o
@enduml

## 7.图表

<TechnologyStackRadarChart/>

## 8.打赏插件

<SponsorSimple/>
