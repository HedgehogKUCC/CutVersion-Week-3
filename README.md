# 第三週版型攻略

[筆記](https://hackmd.io/esLqjpVNQV-5fFuec_DV1Q)

<br>

## Code Review

穎旻助教建議：

- 斷點部分會依照 `熱門載具解析度` 與 `BS4 斷點` 來檢視
- `navbar` 在換成手機版型，上下 `padding` 設定 `10px`（設計稿的數字），比較不會這麼貼近邊緣的感覺
- `input` 可以更換背景顏色為透明色 `transparent`
- 各區塊的 `h3` 會建議你統一用一個 `class` 去做，`mb` 的部分如果有不相同的可以另外處理或是覆蓋

<br>

# 第四週版型攻略

- 完成常見問題頁面

<br>

## Code Review

RWD 處理的很好哦~

Ray 助教給你一些修改建議。

> 這邊主要會依照 [Boostrap 的斷點](https://bootstrap.hexschool.com/docs/4.2/layout/grid/#grid-options) 以及 `載具熱門斷點` 去抓問題唷 :D

- 共通問題
- - mail 及 phone 可以使用 a:mail、a:tel 製作，請多加注意超連結的預設樣式與設計稿樣式是否相符。
- - footer 底下超連結應可以點連到相對應頁面。
- - JavaScript 有錯誤。
- - class 命名上會建議你使用駝峰式取代 form_group 會較好唷 :D
- - footer 的地方可以使用 footer 標籤取代 section。
- - 可將 banner 的標籤放在外層並改用 header 標籤。

- 1200:
- - more 底部白色消失了(大概是因為你斷點設在 1440px 關係)。

- 768:
- - 無

- 767
- - 經典系列鏡框稍微跑版可以在調整一下，icon 沒有正確變成白色。
- - 聯名設計鏡框的 more 可以在調整一下。

- 576
- - Double A+ 及 YOUTH 的背景圖可以再試著調整一下。

- 375:
- - 無