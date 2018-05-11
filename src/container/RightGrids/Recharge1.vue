<template>
  <v-form class = 'right-grids-dropdown-form'>
    <!-- text input -->
    <div class = 'right-grids-dropdown-form-input input-number'>
      <input type='number' placeholder='请输入手机号码'
        @mouseover="mouseInPhoneNumberInput=true"
        @mouseleave="mouseInPhoneNumberInput=false"
      />
      <v-icon
        v-bind:class="['noselect', {hovered:mouseInPhoneNumberInput}]"
      >phone</v-icon>
    </div>
    <!-- select -->
    <div class = 'right-grids-dropdown-form-input combobox'
      @mousedown="hideRechargeDropDown=!hideRechargeDropDown"
      ref="withDropdown"
    >
      <input type='text' disabled id = 'right-grids-credit-recharge'
        :value="amounts[amountIdx]+'元'"
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
          <span><strong>{{amount}}</strong>元</span>
        </li>
      </ul>
    </div><!-- select -->
    <!-- <span>售价</span> -->
    <input type='submit' value='立即充值'/>
  </v-form>
</template>

<script>

export default {
  name: 'Recharge1',
  data: function () {
    return {
      phoneNumber: '',
      amountIdx: 0,
      amounts:[100,10,200,20,300,30,500,50,1000],
      mouseInPhoneNumberInput: false,
      hideRechargeDropDown: true
    }
  },
  mounted: function () {
    this.$nextTick( ()=>{
      document.addEventListener('click', (ele) => {
        if (typeof this.$refs.withDropdown == 'undefined') return;
        if (!this.$refs.withDropdown.contains(ele.target)){
          if (!this.hideRechargeDropDown)
            this.hideRechargeDropDown = true;
        }
      })
    })
  },
  methods: {
    hideAll: function () {
      this.hideRechargeDropDown = true;
    }
  },
  watch: {
  }
}
</script>

<style scoped>
  @import './right_grids_drop_down.css'
</style>