<template>
<div :class="className" @click="onClick">
	<span class="on-label" :style="inlineStyle">{{ onLabel }}</span>
	<svg class="locked" v-if="locked" width="1792" height="1792" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
		<path d="M640 768h512v-192q0-106-75-181t-181-75-181 75-75 181v192zm832 96v576q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-576q0-40 28-68t68-28h32v-192q0-184 132-316t316-132 316 132 132 316v192h32q40 0 68 28t28 68z"/>
	</svg>
	<span class="off-label">{{ offLabel }}</span>
</div>

</template>

<script>
'use strict';

export default {
  data: {
    value: props.value
  },
	props: {
		value: {
			default: true,
			twoWay: true
		},
		// One of [sm, md, lg]
		size: {
			type: String,
			default: 'md'
		},
		// blue red green orange
		color: {
			type: String,
			default: 'red'
		},
		onValue: {
			default: true
		},
		offValue: {
			default: false
		},
		onLabel: {
			type: String,
			default: '是'
		},
		offLabel: {
			type: String,
			default: '否'
		},
	  	locked: {
		  type: Boolean,
		  default: false
		},
		disabled: {
			type: Boolean,
			default: false
		}
	},
	computed: {
		className () {
			let {
				value,
				onValue,
				offValue,
			  	locked,
				size,
				color,
				disabled
			} = this;
			return {
				'vue-switch': true,
				'z-on': value === onValue,
				'z-disabled': disabled,
			  	'locked': locked === true,
				['size-' + size]: true,
				['color-' + color]: true
			};
		},
	  	inlineStyle () {
		  let styleObj = {};

		  if (this.color.indexOf('#') > -1) {
		    styleObj.color = this.color;
		  }

		  return styleObj;

		}
	},
	methods: {
		onClick() {
			let {
				disabled,
				value,
			  	locked,
				onValue,
				offValue
			} = this;
			if (!disabled && !locked) {
				if (onValue === value) {
					this.value = offValue;
				} else {
					this.value = onValue;
				}
			}
		}
	}
}

</script>

<style lang="sass" scoped>@import "./scss/switch.scss"</style>
