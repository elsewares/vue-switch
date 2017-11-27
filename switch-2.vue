<template>
	<div :class="className" @click="onClick" :style="inlineStyle">
		<span class="on-label">{{ onLabel }}</span>
		<svg class="locked" v-if="locked" width="1792" height="1792" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
			<path d="M640 768h512v-192q0-106-75-181t-181-75-181 75-75 181v192zm832 96v576q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-576q0-40 28-68t68-28h32v-192q0-184 132-316t316-132 316 132 132 316v192h32q40 0 68 28t28 68z"/>
		</svg>
		<span class="off-label">{{ offLabel }}</span>
	</div>
</template>

<script>
'use strict';

export default {
  data () {
    return {
      value: null
  	};
  },
  props: {
	  // One of [sm, md, lg, xl]
	  size: {
		type: String,
		default: 'md'
	  },
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
		default: ''
	  },
	  offLabel: {
		type: String,
		default: ''
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
	  className() {
		let {
		  value,
		  onValue,
		  offValue,
		  locked,
		  size,
		  color,
		  disabled,
		  classObj
		} = this;
		classObj = {
		  'vue-switch': true,
		  'switch-on': value === onValue || locked === true,
		  'switch-off': (value === offValue || value === null) && !locked,
		  'switch-disabled': disabled,
		  'locked': locked === true,
		  ['size-' + size]: true
		};

		if (this.color.indexOf('#') === -1) {
		  classObj['color-' + color] = true;
		}

		return classObj;
	  },
	  inlineStyle() {
		let styleObj = {};

		if (this.color.indexOf('#') > -1) {
		  styleObj.backgroundColor = this.color;
		  styleObj.borderColor = this.color;
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
		  this.value = (onValue === value) ? offValue : onValue;
		  this.$emit({active: value});
		}
	  }
	}
}
</script>

<style lang="sass" scoped>@import "./scss/switch.scss"</style>
