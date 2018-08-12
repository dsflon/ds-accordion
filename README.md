# ds-accordion ( Don't Need jQuery )


ds-accordionは、jQueryを必要としないアコーディオン機能のライブラリです。
- Target browser : IE9+
- IE9の場合は transition 無しでアコーディオンが開閉します。

___

# Install

```
npm i ds-accordion -S
```

___

# Import

```
import DsAccordion from 'ds-accordion';
```

___

# Constructor

```
new DsAccordion(element [, option]);
```
|Argument|Data type|Default|Descroption|
|:-------|:--------|:------|:----------|
|element|String|-(Required)|対象要素を指定します。<br>ex) ".accordion"|
|option|Object|-|ex)<br> option = {<br> toggleSpeed: 100,<br> btnElm: "dl dt",<br> detailElm: "dl dd"<br>}|

|Option|Data type|Default|Descroption|
|:-------|:--------|:------|:----------|
|toggleSpeed|Number|0|開閉のスピードを調節できます。|
|btnElm|String|".accordion_btn"<br>(“.accordion”の場合)|ボタンとなる要素を指定できます。|
|detailElm|String|".accordion_detail"<br>(“.accordion”の場合)|内容となる要素を指定できます。|

___

# Method

|Method|Argument|Descroption|
|:-------|:--------|:------|
|Toggle( element )|String|element で指定したアコーディオンの開閉を操作します。<br>( ex: ".default_open" )|
|Open( element )|String|element で指定したアコーディオンを開きます。|
|Close( element )|String|element で指定したアコーディオンを閉じます。|
|OpenEnd = function(){};|-|アコーディオンが開いた後に実行されます。|
|CloseEnd = function(){};|-|アコーディオンが閉じた後に実行されます。|

___

# Demo

[https://dsflon.github.io/ds-accordion/](https://dsflon.github.io/ds-accordion/)

```
import DsAccordion from 'ds-accordion';

let dsAccordion = new DsAccordion(".accordion");

dsAccordion.OpenEnd = function(){
    console.log("OpenEnd");
};
dsAccordion.CloseEnd = function(){
    console.log("CloseEnd");
};

////

let dsAccordion2 = new DsAccordion(
	".accordion2",
	{
		toggleSpeed: 200,
		btnElm: "dt",
		detailElm: "dd"
	}
);

setTimeout(function() {
    dsAccordion2.Open( ".open" );
},1000);
setTimeout(function() {
    dsAccordion2.Close(".close");
},2000);
```
