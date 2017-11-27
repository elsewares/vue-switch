# vue-switch-elsewares

A switch component for Vue 2 based on dai-siki's work.

## demo

[click me](http://elsewares.github.io/vue-switch/example/demo.html).


## Env

vue.js + webpack + es6 + scss


## install

#### npm

```shell
$ npm install vue-switch-elsewares
```

## Usage

#### Attributes

| 名称              | 类型               | 默认             | 说明                                         |
| ----------------- | ----------------- | ---------------- | --------------------------------------------- |
| value             | twoWay            |                  | 要绑定的变量    |
| open-value             |             | true               | 激活时绑定值                   |
| close-value            |             | false     | 关闭时绑定值                                    |
| open-name             | String            | "是"               | 激活时显示文字                   |
| close-name            | String            | "否"     | 关闭时显示文字                                    |
| size           | String           | "md"            | sm lg              |
| color       | String            | "red"               | red/blue/orange/green                                     |
| disabled       | Bollean            | false               | as u know                                    |

####  Example (vue@2.0+)

```html

<div id="app">
	<label for="myDate">Truthiness?</label>
	<div class="wrap">
		<my-switch size="xl" on-label="foo" off-label="bar" on-value="" off-value="" v-model="toggle"></my-switch>
	</div>
</div>

<script>
	import 'babel-polyfill';
	import Vue from 'vue';
	import mySwitch from 'vue-switch/switch-2.vue';

	new Vue({
		el: '#app',
		data: {
			toggle: true
		},
		components: {
			'my-switch': mySwitch
		}
	});
</script>

```
