<template>
  <v-form class = 'right-grids-dropdown-form'>
    <!-- citypicker -->
    <div class = 'right-grids-dropdown-form-input'
      @mousedown="hideDataPicker=!hideDataPicker"
      ref="withDropdown0"
    >
      <input type='text' disabled id = 'right-grids-credit-recharge'
        value='运营商/城市' ref="result"
      />
      <v-icon
        class = 'noselect'
      >keyboard_arrow_down</v-icon>
    </div>
    <!-- citypicker dropdown -->
    <div
      v-bind:class="{hide:hideDataPicker}"
      class = 'city-picker-wrapper dropdown'
      ref="dropDown0"
    >
      <!-- dx,lt switcher -->
      <div class = 'dx-lt-switcher'>
        <span>请选择运营商</span>
        <a v-for="(text, idx) in ['电信','联通']" v-bind:key=idx
          v-bind:class="['clickable',{'active':provider==idx}]"
          @mousedown="provider=idx"
        >
          {{text}}
        </a>
      </div>
      <CityPicker
        @mousedown="cityChosen"
      />
    </div>
    <!-- end of dropdown -->
    <!-- end of data picker -->
    <!-- account input -->
    <div class = 'right-grids-dropdown-form-input input-number'>
      <input type='text' placeholder='请输入宽带帐号'
        @mouseover="mouseInPhoneNumberInput=true"
        @mouseleave="mouseInPhoneNumberInput=false"
      />
      <v-icon
        v-bind:class="['noselect', {hovered:mouseInPhoneNumberInput}]"
      >contact_mail</v-icon>
    </div>
    <!-- end of account input -->
    <!-- price -->
    <div class = 'right-grids-dropdown-form-input combobox'
      @mousedown="hideRechargeDropDown=!hideRechargeDropDown"
      ref="withDropdown1"
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
    <!-- end of price -->
    <input type='submit' value='立即充值'/>
  </v-form>
</template>

<script>
import CityPicker from "../../components/CityPicker.vue";

export default {
  name: "Recharge4",
  components: {
    CityPicker
  },
  mounted: function() {
    this.$nextTick(() => {
      document.addEventListener("click", ele => {
        if (typeof this.$refs.withDropdown0 == "undefined") return;
        if (typeof this.$refs.dropDown0 == "undefined") return;
        if (
          !this.$refs.withDropdown0.contains(ele.target) &&
          !this.$refs.dropDown0.contains(ele.target)
        ) {
          if (!this.hideDataPicker) this.hideDataPicker = true;
        }
      });
      document.addEventListener("click", ele => {
        if (typeof this.$refs.withDropdown1 == "undefined") return;
        if (!this.$refs.withDropdown1.contains(ele.target)) {
          if (!this.hideRechargeDropDown) this.hideRechargeDropDown = true;
        }
      });
    });
  },
  methods: {
    hideAll: function() {
      this.hideDataPicker = true;
    },
    cityChosen: function(city) {
      this.$refs.result.value = ["电信", "联通"][this.provider] + "/" + city;
      this.hideDataPicker = true;
    }
  },
  computed: {},
  data: function() {
    return {
      hideDataPicker: true,
      provider: 0, //dx
      mouseInPhoneNumberInput: false,
      phoneNumber: "",
      amountIdx: 0,
      amounts: [100, 10, 200, 20, 300, 30, 500, 50, 1000],
      hideRechargeDropDown: true
    };
  }
};
</script>
<style scoped>
@import "./right_grids_drop_down.css";
</style>
<style scoped>
.city-picker-wrapper>>>.city-picker-tabs {
  border-top: none;
}
.dx-lt-switcher {
  height: 30px;
  width: 250px;
  margin-top: var(--margin-xsmall);
}
.dx-lt-switcher > span {
  margin-left: var(--margin-xsmall);
}
.dx-lt-switcher > a:first-of-type {
  margin-left: var(--margin-medium);
}
.dx-lt-switcher > a:nth-of-type(2) {
  margin-left: -1px;
}
.dx-lt-switcher > a {
  display: inline-block;
  width: 50px;
  padding: 3px 0px 3px 0px;
  background: white;
  border-color: orangered;
  border-style: solid;
  border-width: 1px;
  border-radius: 2px;
  text-align: center;
}
.dx-lt-switcher > a.active {
  background: orangered;
  color: white;
}
ul.double-column.h-list {
  top: 68px;
}
</style>
