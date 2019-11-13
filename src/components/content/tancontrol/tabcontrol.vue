<!--  -->
<template>
  <div class="tabcontrol">
    <div
      v-for="(item,index) in titles"
      :key="item"
      class="tab-item"
      :class="{active:index===currentindex}"
      @click="itemclick(index)"
    >
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentindex: 1
    };
  },
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  methods: {
    itemclick(index) {
      this.currentindex = index;
      this.$emit("tabclick", index);
    }
  }
};
</script>
<style scoped>
.tabcontrol {
  display: flex;
  text-align: center;
  margin: 0 auto;
  width: 84%;
  justify-content: space-between;
  height: 45px;
  line-height: 45px;
}
.tab-item {
}
.active {
  color: #d44e49;
}
.active span {
  color: #d44e49;
  border-bottom: 1px solid #d44e49;
}
</style>