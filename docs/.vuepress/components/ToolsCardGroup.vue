<template>
  <div class="tools-card-group-container">
    <div class="tools-card-item" v-for="item in toolsArray">
      <div class="tools-card-recommend" :style="{display: item.recommend? 'block':'none'}"></div>
      <a :href="item.url" target="_blank" :title="item.description">
        <div class="tools-card-info">
          <div class="tools-card-title">
            <img :src="item.logoMiniPath" v-show="showMiniLogo" height="30" class="zoom-unable"/>
            <img :src="item.logoPath" v-show="!showMiniLogo" height="30" class="zoom-unable"/>
            <div class="tools-card-name">{{ item.name }}</div>
          </div>
          <div class="tools-card-description">{{ item.description }}</div>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    configFileName: {
      required: true,
      type: String,
    }
  },
  data() {
    return {
      toolsArray: require(`../config/tools-config/${this.configFileName}.js`),
      toolsCardItemWidth: 0,
      showMiniLogo: false,
    }
  },
  mounted() {
    this.toolsCardItemWidth = document.getElementsByClassName('tools-card-item')[0].offsetWidth
    window.onresize = () => {
      this.toolsCardItemWidth = document.getElementsByClassName('tools-card-item')[0].offsetWidth
      console.log(this.toolsCardItemWidth)
    }
  },
  watch: {
    toolsCardItemWidth() {
      this.changeLogoType(this.toolsCardItemWidth)
    } 
  },
  methods: {
    changeLogoType(toolsCardItemWidth) {
      if(toolsCardItemWidth > 240){
        //显示默认logo
        this.showMiniLogo = false
      } else {
        //显示 mini logo
        this.showMiniLogo = true
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.tools-card-group-container {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;

  .tools-card-item {
    position relative
    min-width: 170px;
    background-color: var(--background-color);
    a {
      text-decoration: none !important;
    }
    .tools-card-recommend{
      height 16px
      width 16px
      position absolute
      right 0
      top -4px
      background url(/tools-logo/recommend-tag.png)  no-repeat
      background-size 16px
    }
    .tools-card-info {
      border-radius: 0.25rem;
      padding: 5px;
      box-shadow: var(--box-shadow);
      transition: all 0.3s;

      &:hover {
        box-shadow: var(--box-shadow-hover);
      }

      .tools-card-title {
        height: 30px;
        line-height: 30px;
        margin: 5px;
        .tools-card-name {
          font-size: 12px
          float: right;
          margin-right: 5px
        }
      }

      .tools-card-description {
        display: -webkit-box;
        text-overflow: ellipsis;
        overflow: hidden;
        font-size: 14px;
        height: 36px;
        margin: 0 5px 5px 5px;
        line-clamp: 2;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
    }
  }
}

@media screen and (min-width: 281px) and (max-width: 400px) {
  .tools-card-group-container {
    .tools-card-item {
      margin: 6px 2px;
      width: 100%;
    }
  }
}

@media screen and (min-width: 401px) and (max-width: 480px) {
  .tools-card-group-container {
    .tools-card-item {
      margin: 6px 3px;
      width: 46%;
    }
  }
}

@media screen and (min-width: 481px) and (max-width: 640px) {
  .tools-card-group-container {
    .tools-card-item {
      margin: 10px 6px;
      width: 46%;
    }
  }
}

@media screen and (min-width: 641px) and (max-width: 720px) {
  .tools-card-group-container {
    .tools-card-item {
      margin: 10px 8px;
      width: 44%;
    }
  }
}


@media screen and (min-width: 721px) and (max-width: 1024px) {
  .tools-card-group-container {
    .tools-card-item {
      margin: 10px 14px;
      width: 42%;
    }
  }
}

@media screen and (min-width: 1025px) and (max-width: 1366px) {
  .tools-card-group-container {
    .tools-card-item {
      margin: 18px 5px;
      width: 22%;
    }
  }
}

@media screen and (min-width: 1367px) {
  .tools-card-group-container {
    .tools-card-item {
      margin: 18px 10px;
      width: 22%;
    }
  }
}

</style>