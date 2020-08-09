<template>
  <div class="tools-card-grid-container">
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
  name: "ToolsCardGrid",
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
  computed: {
    // toolsArray() {
    //   let toolsArray = require(`../config/${this.configFilePath}`).map((item) => {
    //     item.tag = typeof item.tag !== "undefined" ? require(`./tools-tag/${item.tag}.svg`):false
    //     return item
    //   })
    //   return toolsArray
    // }
  },
  mounted() {
    this.toolsCardItemWidth = this.$refs.item[0].clientWidth
    window.addEventListener("resize", this.getToolsCardItemWidth)
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
        this.showMiniLogo = false
      } else {
        this.showMiniLogo = true
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.tools-card-grid-container {
  margin 18px 6px
  display grid
  grid-template-columns repeat(auto-fill,minmax(170px ,1fr))
  grid-row-gap 20px
  grid-column-gap 20px

  .tools-card-item {
    position relative
    background-color var(--background-color)
    a {
      text-decoration none !important
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
      border-radius 0.25rem
      padding 5px
      box-shadow var(--box-shadow)
      transition all 0.3s

      &:hover {
        box-shadow: var(--box-shadow-hover)
      }

      .tools-card-title {
        height 30px
        line-height 30px
        margin 5px
        .tools-card-name {
          font-size 12px
          float right
          margin-right 5px
        }
      }

      .tools-card-description {
        display -webkit-box
        text-overflow ellipsis
        overflow hidden
        font-size 14px
        height 36px
        margin 0 5px 5px 5px
        line-clamp: 2
        -webkit-line-clamp 2
        -webkit-box-orient vertical
      }
    }
  }
}
</style>
