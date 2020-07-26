<template>
  <div class="online-tools-responsive col-12 col-sm-6 col-md-12 col-lg-6 col-xl-4">
    <a :href="url" target="_blank">
      <div class="online-tools-card-info">
        <div class="online-tools-card-title">
          <img :src="logoPath" height="30" class="zoom-unable"/>
          <div class="online-tools-card-name">{{ onlineToolName }}</div>
        </div>
        <div class="online-tools-card-description">{{ onlineToolDescription }}</div>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    url: {
      required: true,
      type: String,
    },
    logoPath: {
      required: true,
      type: String,
    },
    onlineToolName: {
      required: true,
      type: String,
    },
    onlineToolDescription: {
      required: true,
      type: String,
    },
  },
};
</script>

<style lang="stylus" scoped>
@import '~bootstrap/dist/css/bootstrap-grid.min.css';

.online-tools-responsive {
  background-color: var(--background-color);
  margin: 20px 0;
  a {
    text-decoration: none !important;
  }
  .online-tools-card-info {
    border-radius: 0.25rem;
    padding: 5px;
    box-shadow: var(--box-shadow);
    transition: all 0.3s;
    &:hover {
      box-shadow: var(--box-shadow-hover);
    }
    .online-tools-card-title {
      height: 30px;
      line-height: 30px;
      margin: 5px;

      .online-tools-card-name {
        float: right;
      }
    }
    .online-tools-card-description {
      font-size: 14px;
      height: 36px;
      margin: 0 5px 5px 5px;
      overflow: hidden;
      text-overflow: ellipsis;
      line-clamp: 2;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      display: -webkit-box;
    }
  }
}
</style>
