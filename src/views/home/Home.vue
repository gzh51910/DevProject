
<template>
  <div id="home">
    <nav-bar :style="color" class="homenav">
      <div slot="left">
        <div class="homeheader">
          <div class="homelogo"></div>
        </div>
      </div>
      <div slot="right">
        <div class="homesearch">
          <el-input
            prefix-icon="el-icon-search"
            style="width:92%"
            size="mini"
            v-model="input"
            placeholder="硬核返场购 津贴每满299减20"
          ></el-input>
        </div>
      </div>
    </nav-bar>
    <scroll class="content" ref="a" :probe-type="3" @scroll="contentScroll">
      <el-carousel height="180px" indicator-position="none">
        <el-carousel-item v-for="item in slider" :key="item.id">
          <img class="sliderimg" :src="item.src" alt />
        </el-carousel-item>
      </el-carousel>
      <article class="article">
        <div class="select">
          <div class="select1" v-for="(item,index) in teb" :key="item.id">
            <img v-lazy="item.src" alt />
            <a href="#" v-if="index<4" class="pictrueSkip" @click="$router.push(`/category`)"></a>
          </div>
        </div>

        <div class="ly">
          <img v-lazy="ly.src1" alt />
          <div class="ly1">
            <img v-lazy="ly.src2" alt />
            <img v-lazy="ly.src3" alt />
          </div>
        </div>
        <div class="homes">
          <img src="../../assets/img/home/23e12867518b4a779bd6530e694e817f.jpg" alt />
          <el-carousel class="ss" height="20px" indicator-position="none" direction="vertical">
            <el-carousel-item v-for="item in wenzi" :key="item">
              <p class="wenzislider">{{item}}</p>
            </el-carousel-item>
          </el-carousel>
        </div>
        <!-- <scrollx class="scrollx"> -->
        <div class="outer-wrapper" ref="outerScroll">
          <auto></auto>
        </div>

        <!-- </scrollx> -->
        <photo></photo>
        <itemFlex></itemFlex>
        <jxpd></jxpd>
        <jxAdBox></jxAdBox>
        <bktj></bktj>
      </article>
    </scroll>
    <backtop @click.native="backclick" v-show="isshow"></backtop>
  </div>
</template>

<script>
import BScroll from "@better-scroll/core";
import NestedScroll from "@better-scroll/nested-scroll";
import NavBar from "../../components/common/navBar/navBarhome.vue";
import scroll from "../../components/common/scroll/scroll.vue";
import backtop from "../../components/content/backTop/backtop.vue";
import { my } from "../../network";
import auto from "./auto.vue";
import photo from "./photo.vue";
import itemFlex from "./itemFlex.vue";
import jxpd from "./jxpd.vue";
import bktj from "./bktj.vue";
import jxAdBox from "./jxAdBox.vue";
BScroll.use(NestedScroll);
export default {
  data() {
    return {
      input: "",
      color: "",
      saveY: 0,
      isshow: false,
      slider: [],
      teb: [],
      ly: [],
      wenzi: [
        "国台限时特惠 买一送一",
        "爆品腰斩日  限时24小时",
        "2元拼1499茅台飞天中奖名单",
        "温馨提示 谨防上当受骗 造成财产损失"
      ]
    };
  },
  activated() {
    this.$refs.a.scrollTo(0, this.saveY, 0);

    console.log("home enter 设置位置");
  },
  deactivated() {
    this.saveY = this.$refs.a.gety();
    console.log(this.saveY);

    console.log("home leave 记录位置");
  },
  mounted: function() {
    this.outerScroll = new BScroll(this.$refs.outerScroll, {
      nestedScroll: true,
      scrollX: true,
      scrollY: false,
      bounce: {
        left: false,
        right: false
      }
    });
  },
  methods: {
    handleScroll(e) {
      var scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      if (scrollTop >= 250) {
        this.color = " background: #e5383b";
      } else {
        this.color = "";
      }
    },
    backclick() {
      this.$refs.a.scrollTo(0, 0);
    },
    contentScroll(position) {
      if (-position.y >= 250) {
        this.color = " background: #e5383b";
      } else {
        this.color = "";
      }
      this.isshow = -position.y > 500;
    }
  },
  components: {
    NavBar,
    scroll,
    auto,
    photo,
    itemFlex,
    jxpd,
    bktj,
    backtop,jxAdBox
  },
  async created() {
    let {
      data: { data: slider }
    } = await my.get("/gdlist", {
      gather: "slider"
    });
    let {
      data: { data: teb }
    } = await my.get("/gdlist", {
      gather: "teb"
    });
    this.slider = slider;
    this.teb = teb.slice(0, 10);
    this.ly = teb.slice(10)[0];
  }
};
</script>
<style scoped>
.outer-wrapper {
  overflow: hidden;
}
.abc {
  position: absolute;
  top: 0;
  left: 0;
}
.article {
  overflow-y: scroll;
}
.content {
  height: calc(100% - 49px);
  overflow: hidden;
}
#home {
  height: 100vh;
}
img {
  display: block;
}
.homenav {
  width: 100%;
  position: fixed;
  z-index: 111;
}
.homeheader {
  width: 100%;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.homelogo {
  width: 57px;
  height: 27px;
  background: url(../../assets/img/home/jx-sprite.png) no-repeat;
  background-size: 200px 73px;
}
.homesearch {
  display: flex;
  height: 44px;
  justify-content: center;
  align-items: center;
}
.sliderimg {
  width: 100%;
  height: 100%;
}
.select {
  display: flex;
  flex-wrap: wrap;
}
.select1 {
  width: 20%;
position: relative;
}
.select1 img {
  width: 100%;
}
.ly {
  display: flex;
  flex-direction: column;
}
.ly > img {
  height: 87px;
}
.ly1 {
  display: flex;
  height: 90px;
}
.ly1 img {
  width: 50%;
}
.swiper {
  display: flex;
  /* width: 500px */
  overflow: auto;
}
.swiper img {
  width: 100px;
}
.homes {
  display: flex;
  height: 52px;
  align-items: center;
  justify-content: center;
}
.homes > img {
  width: 83px;
  height: 16px;
  padding-left: 10px;
}
.homes .ss {
  padding-left: 20px;
  flex: 1;
}
.active {
  background: #e5383b;
}
.pictrueSkip {
  position: absolute;
  top: 0;
  right: 0;
  display: block;
  width: 100%;
  height: 100%;
}
</style>