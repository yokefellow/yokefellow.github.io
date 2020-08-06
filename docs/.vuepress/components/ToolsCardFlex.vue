<template>
  <div class="tools-card-flex-container">
    <div class="tools-card-item" v-for="item in toolsArray" ref="item">
      <div class="tools-card-tag" 
        v-if="item.tag"
        :style="{backgroundImage: 'url(' + item.tag + ')' }">
      </div>
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
  name: "ToolsCardFlex",
  props: {
    configFilePath: {
      required: true,
      type: String,
    }
  },
  data() {
    return {
      toolsArray: require(`../config/${this.configFilePath}`),
      toolsCardItemWidth: 0,
      showMiniLogo: false,
    }
  },
  mounted() {
    this.toolsCardItemWidth = this.$refs.item[0].clientWidth
  },
  created() {
    window.addEventListener("resize", this.getToolsCardItemWidth);
  },
  destroyed() {
    window.removeEventListener("resize", this.getToolsCardItemWidth);
  },
  watch: {
    toolsCardItemWidth() {
      this.changeLogoType(this.toolsCardItemWidth)
    } 
  },
  methods: {
    getToolsCardItemWidth() {
      this.toolsCardItemWidth = this.$refs.item[0].clientWidth
    },
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
.tools-card-flex-container {
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
    .tools-card-tag{
      height 28px
      width 28px
      position absolute
      right -8px
      top -8px
      background no-repeat
      background-size 28px
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
  .tools-card-flex-container {
    .tools-card-item {
      margin: 6px 2px;
      width: 100%;
    }
  }
}

@media screen and (min-width: 401px) and (max-width: 480px) {
  .tools-card-flex-container {
    .tools-card-item {
      margin: 6px 3px;
      width: 46%;
    }
  }
}

@media screen and (min-width: 481px) and (max-width: 640px) {
  .tools-card-flex-container {
    .tools-card-item {
      margin: 10px 6px;
      width: 46%;
    }
  }
}

@media screen and (min-width: 641px) and (max-width: 720px) {
  .tools-card-flex-container {
    .tools-card-item {
      margin: 10px 8px;
      width: 44%;
    }
  }
}


@media screen and (min-width: 721px) and (max-width: 1024px) {
  .tools-card-flex-container {
    .tools-card-item {
      margin: 10px 14px;
      width: 42%;
    }
  }
}

@media screen and (min-width: 1025px) and (max-width: 1366px) {
  .tools-card-flex-container {
    .tools-card-item {
      margin: 18px 5px;
      width: 22%;
    }
  }
}

@media screen and (min-width: 1367px) {
  .tools-card-flex-container {
    .tools-card-item {
      margin: 18px 10px;
      width: 22%;
    }
  }
}

</style>