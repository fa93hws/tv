<template>
  <v-form class = 'right-grids-dropdown-form'>
    <!-- number input -->
    <div class = 'right-grids-dropdown-form-input input-number'>
      <input type='number' placeholder='请输入手机号码'
        @mouseover="mouseInPhoneNumberInput=true"
        @mouseleave="mouseInPhoneNumberInput=false"
      />
      <v-icon
        v-bind:class="['noselect', {hovered:mouseInPhoneNumberInput}]"
      >phone</v-icon>
    </div>
    <!-- recharge option -->
    <div id='right-grids-recharge-data-option-wrapper'
      class = 'right-grids-dropdown-form-input'
    >
    <select id = 'right-grids-recharge-data-option'>
      <option>全国流量</option>
      <option>本地流量</option>
    </select>
    </div>
    <!-- amout -->
    <div class = 'right-grids-dropdown-form-input combobox half-length'
      @mousedown="hideRechargeDropDown=!hideRechargeDropDown"
      ref="withDropdown"
    >
      <input type='text' disabled id = 'right-grids-credit-recharge'
        :value="amounts[amountIdx]+'M'"
      />
      <v-icon
        v-bind:class="['noselect', {hovered:mouseInPhoneNumberInput}]"
      >keyboard_arrow_down</v-icon>
      <!-- select dropdown -->
      <ul class='h-list no-margin no-padding double-column'
        v-bind:class="{hide:hideRechargeDropDown}"
      >
        <li v-for="(amount, idx) in amounts" v-bind:key="idx"
          class='noselect clickable'
          v-bind:class="{'selected':idx==amountIdx}"
          @mousedown="amountIdx=idx"
        >
          <span><strong>{{amount}}</strong>M</span>
        </li>
      </ul>
    </div><!-- select -->
    <input type='submit' value='立即充值'/>
  </v-form>
</template>

<script>
import UtilFunc from '../../assets/js/util.js';
export default {
  name: "Recharge2",
  data: function() {
    return {
      phoneNumber: "",
      amountIdx: 0,
      amounts: [100, 300, 500, 1000, 2000, 3000, 5000, 10000],
      mouseInPhoneNumberInput: false,
      hideRechargeDropDown: true
    };
  },
  methods: {
    hideAll: function() {
      this.hideRechargeDropDown = true;
    },
    documentClick: function(e) {
      let insideArea = [this.$refs.withDropdown];
      if (  UtilFunc.isOutside(insideArea, e.target) ) {
        this.hideAll();
      }   
    }
  },
  mounted: function() {
    document.addEventListener('click', this.documentClick);
  },
  destroyed: function() {
    document.removeEventListener('click', this.documentClick);
  },
};
</script>

<style scoped>
@import "./right_grids_drop_down.css";
</style>

<style scoped>
#right-grids-recharge-data-option-wrapper {
  display: inline-block;
  width: 84px;
}
#right-grids-recharge-data-option-wrapper > select {
  width: 95%;
}
.half-length.right-grids-dropdown-form-input {
  display: inline-block;
  vertical-align: top;
  margin-left: -5px;
  /* border-top: none; */
  /* border-left: none; */
  width: 86px;
}
.half-length.right-grids-dropdown-form-input > input {
  width: 70%;
  vertical-align: top;
}
.right-grids__select-label > i {
  font-size: var(--font-small);
}
ul.h-list.double-column {
  width: 85px;
  left: 83px;
  border-top: none;
}
ul.h-list.double-column > li {
  width: 50%;
}
ul.double-column.h-list > li:nth-last-child(2) {
  border-bottom: none;
}
ul.h-list.double-column > li > span {
  font-size: var(--font-small);
  margin-left: 5%;
  margin-right: 5%;
  max-width: 88%;
}
</style>

