---
title: 图形和公式
date: 2016-12-15
tags:
  - Test
categories:
  - Test
sticky: 1
author: Yokefellow
---

## 流程图

@flowstart
start=>start: 开始
input=>inputoutput: 输入
operation=>operation: 操作
condition=>condition: 操作出错？
output=>inputoutput: 输出
error=>operation: 请重新输入
end=>end: 结束

start->input
input->operation
operation->condition
condition(no,bottom)->output
condition(yes)->error(top)->input
output->end
@flowend

## 数学公式

### 单行

$x ={-b \pm \sqrt{b^2-4ac}\over 2a}$

$\int \frac{1}{x}\mathrm{d}x= \ln \left| x \right| +C$

### 多行

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

$$
\frac {\partial^r} {\partial \omega^r} \left(\frac {y^{\omega}} {\omega}\right)
= \left(\frac {y^{\omega}} {\omega}\right) \left\{(\log y)^r + \sum_{i=1}^r \frac {(-1)^i r \cdots (r-i+1) (\log y)^{r-i}} {\omega^i} \right\}
$$

## UML

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
