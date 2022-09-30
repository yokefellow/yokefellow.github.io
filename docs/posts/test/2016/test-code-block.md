---
title: Test Code Block Display
date: 2016-12-15
tags:
  - Test
categories:
  - Test
sticky: 2
author: Maverick
---

## Java Code

```java {3}
public class Main {
  public static void main(String[] args) {
    System.out.println("Hello, VuePress Theme Reco!")
  }
}
```

## JavaScript Code

```js {2}
;(function () {
  console.log('Hello, VuePress Theme Reco!')
})()
```

## TypeScript Code

```ts {1}
const hello: string = 'Hello, VuePress Theme Reco!'
console.log(hello)
```

## Golang Code

```go {4}
import "fmt"

func main() {
    fmt.Println("Hello, VuePress Theme Reco!")
}

```

## CodePen

<iframe height="400" style="width: 100%;" scrolling="no" title="【CSS：行为】使用:hover和attr()定制悬浮提示" src="https://codepen.io/xugaoyi/embed/vYNKNaq?height=400&theme-id=light&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true" loading="lazy">
  See the Pen <a href='https://codepen.io/xugaoyi/pen/vYNKNaq'>【CSS：行为】使用:hover和attr()定制悬浮提示</a> by xugaoyi
  (<a href='https://codepen.io/xugaoyi'>@xugaoyi</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

## Mermaid

### 流程图

```mermaid
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
```

### 时序图

```mermaid
sequenceDiagram
    participant Alice
    participant Bob
    Alice->>John: Hello John, how are you?
    loop Healthcheck
        John->>John: Fight against hypochondria
    end
    Note right of John: Rational thoughts <br/>prevail!
    John-->>Alice: Great!
    John->>Bob: How about you?
    Bob-->>John: Jolly good!
```

### 甘特图

```mermaid
gantt
dateFormat  YYYY-MM-DD
title Adding GANTT diagram to mermaid
excludes weekdays 2014-01-10

section A section
Completed task            :done,    des1, 2014-01-06,2014-01-08
Active task               :active,  des2, 2014-01-09, 3d
Future task               :         des3, after des2, 5d
Future task2               :         des4, after des3, 5d
```

### 类图

```mermaid
classDiagram
Class01 <|-- AveryLongClass : Cool
Class03 *-- Class04
Class05 o-- Class06
Class07 .. Class08
Class09 --> C2 : Where am i?
Class09 --* C3
Class09 --|> Class07
Class07 : equals()
Class07 : Object[] elementData
Class01 : size()
Class01 : int chimp
Class01 : int gorilla
Class08 <--> C2: Cool label
```

### E-R 图

```mermaid
erDiagram
  CUSTOMER ||--o{ ORDER : places
  ORDER ||--|{ LINE-ITEM : contains
  CUSTOMER }|..|{ DELIVERY-ADDRESS : uses
```

### 用户旅程图

```mermaid
journey
    title My working day
    section Go to work
      Make tea: 5: Me
      Go upstairs: 3: Me
      Do work: 1: Me, Cat
    section Go home
      Go downstairs: 5: Me
      Sit down: 5: Me
```

### Git

<!-- ```mermaid
gitGraph
    commit
    commit
    branch develop
    commit
    commit
    commit
    checkout main
    commit
    commit
``` -->

### 状态图

```mermaid
stateDiagram
    [*] --> Still
    Still --> [*]
    Still --> Moving
    Moving --> Still
    Moving --> Crash
    Crash --> [*]

```

```mermaid
stateDiagram
	state Active {
		state one {
			[*] --> state1
			state1 --> state2
			state2 --> state1
			--
			[*] --> state3
			state3 --> state4
			state4 --> state3
		}
		state two {
			[*] --> state1
			state1 --> state2
			state2 --> state1
			--
			[*] --> state3
			state3 --> state4
			state4 --> state3
		}
	}
```

### 饼图

```mermaid
pie title Pets adopted by volunteers
  "Dogs" : 386
  "Cats" : 85
  "Rats" : 15
```
