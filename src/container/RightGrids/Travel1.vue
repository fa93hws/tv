<template>
  <v-form class = 'right-grids-dropdown-form'>
    <fieldset class = 'right-grids-dropdown-fieldset'>
      <input type="radio" value="single" checked="checked" name="group1" id="single"
        @change="tripType='single'"
      >
      <label for="single">单程</label>

      <input type="radio" value="return" name="group1" id="return"
        @change="tripType='return'"
      >
      <label for="return">返程</label>
    </fieldset>
    <!-- main -->
    <div class = 'travel-main'>
      <div class = 'travel-depart-column column'>
        <!-- depart city,text -->
        <div class = 'right-grids-dropdown-form-input'
          @mousedown="cityPickerClick('depart')"
          ref="withDropdown0"
        >
          <span>出发</span>
          <input type='text' disabled
            value= '城市' ref="resultDepart"
          />
          <v-icon
            class = 'noselect'
          >location_on</v-icon>
        </div>
        <!-- depart city, dropdown -->
        <div
          v-show="showCityPicker"
          class = 'city-picker-wrapper dropdown'
          ref="dropDown"
        >
          <CityPicker
            class = 'city-picker'
            @mousedown="cityChosen"
          />
        </div>
        <!-- depart date -->
        <div class = 'right-grids-dropdown-form-input'>
          <span><label for="date-picker-0">出发</label></span>
          <input type='date'
            value= '日期'
            id='date-picker-0'
            name='date-picker-0'
            ref='datePickerDepart'
          />
        </div>
      </div> <!-- depart-column -->

      <!-- arrow, return/single -->
      <div class = 'travel-arrow-column column'>
        <v-icon
          v-if="tripType=='single'"
        >arrow_forward</v-icon>
        <v-icon
          v-else
        >compare_arrows</v-icon>
      </div>

      <div class = 'travel-arrival-column column'>
        <!-- arrival city,text -->
        <div class = 'right-grids-dropdown-form-input'
          @mousedown="cityPickerClick('arrival')"
          ref="withDropdown1"
        >
          <span>到达</span>
          <input type='text' disabled
            value= '城市' ref="resultArrival"
          />
          <v-icon
            class = 'noselect'
          >location_on</v-icon>
        </div>
        <!-- depart date -->
        <div class = 'right-grids-dropdown-form-input'
          v-show="tripType=='return'"
        >
          <span><label for="date-picker-1">到达</label></span>
          <input type='date'
            value= '日期'
            id='date-picker-1'
            name='date-picker-1'
            ref='datePickerDepart'
          />
        </div>
      </div> <!-- depart-column -->
    </div> <!--  class,ctr -->   
    <input type='submit' value='查找'/> 
  </v-form>
</template>

<script>
import CityPicker from "../../components/CityPicker";

export default {
  name: "Travel1",
  components: {
    CityPicker
  },
  methods: {
    hideAll: function() {
      this.showCityPicker = false;
    },
    cityPickerClick: function(from) {
      this.showCityPicker = !this.showCityPicker;
      this.cityPickerFor = from;
      console.log(this.cityPickerFor);
    },
    cityChosen: function(city) {
      if (this.cityPickerFor == "depart") this.$refs.resultDepart.value = city;
      else this.$refs.resultArrival.value = city;
      this.showCityPicker = false;
    }
  },
  data: function() {
    return {
      showCityPicker: false,
      tripType: "single",
      cityPickerFor: "depart"
    };
  },
  mounted: function() {
    this.$nextTick(() => {
      document.addEventListener("click", ele => {
        if (typeof this.$refs.withDropdown0 == "undefined") return;
        if (typeof this.$refs.withDropdown1 == "undefined") return;
        if (typeof this.$refs.dropDown == "undefined") return;
        if (
          !this.$refs.withDropdown0.contains(ele.target) &&
          !this.$refs.withDropdown1.contains(ele.target) &&
          !this.$refs.dropDown.contains(ele.target)
        ) {
          if (this.showCityPicker) this.showCityPicker = false;
        }
      });
    });
  }
  // watch: {
  //   tripType: function () {
  //     console.log('123');
  //   }
  // }
};
</script>

<style scoped>
@import "./right_grids_drop_down.css";
</style>
<style scoped>
.right-grids-dropdown-form-input {
  width: 110px;
}
.right-grids-dropdown-form-input > input[type="text"] {
  width: 40%;
}
.right-grids-dropdown-form-input > input[type="date"] {
  margin-left: 0px;
  width: 71%;
}
.right-grids-dropdown-form-input > span {
  display: inline-block;
  vertical-align: top;
  width: 25px;
  height: 20px;
  line-height: 20px;
  font-size: var(--font-xsmall);
  background: silver;
  text-align: center;
}
.city-picker-wrapper {
  top: 44px;
}
.travel-main > .column {
  display: inline-block;
  vertical-align: top;
}
.travel-arrow-column {
  line-height: 44px;
  height: 44px;
}
</style>
