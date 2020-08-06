<template>
  <div class="technology-stack-radar-container">
    <div class="technology-stack-radar-form">
      <label for="backend">后端</label>
      <input id="backend" type="radio" name="technology-stack" @change="selectData($event)" checked/>
      <label for="frontend">前端</label>
      <input id="frontend" type="radio" name="technology-stack" @change="selectData($event)"/>
    </div>
    <radar :chart-data="chartData" :options="options"></radar>
  </div>
</template>
<script>
import Radar from "./Radar";
export default {
  name: "TechnologyStackRadarChart",
  components: {
    Radar
  },
  data() {
    return {
      chartData: {},
      options: {}
    }
  },
  mounted() {
    this.fillBackendData()
    this.fillOption()
  },
  methods: {
    selectData(event) {
      switch (event.target.id){
        case "frontend":
          this.fillFrontendData()
          break
        case "backend":
          this.fillBackendData()
          break
      }
    },
    fillBackendData() {
      this.chartData =  {
        labels: [
          "Java",
          "Maven",
          "Git",
          "MySQL",
          "Redis",
          "Spring",
          "Spring Boot",
          "Spring Cloud",
          "JVM"
        ],
        datasets: [
          {
            label: "2017-2020",
            backgroundColor: "rgba(0, 245, 255, 0.2)",
            hoverBackgroundColor: "rgba(0, 245, 255, 1)",
            borderColor: "rgba(0, 245, 255, 0.6)",
            data: [80, 80, 75, 70, 65, 60, 50, 45, 30]
          }
        ]
      }
    },
    fillFrontendData() {
      this.chartData =  {
        labels: [
          "HTML",
          "CSS",
          "JavaScript",
          "Node.js",
          "NPM & Yarn",
          "Vue",
          "React",
          "AngularJS"
        ],
        datasets: [
          {
            label: "2017-2020",
            backgroundColor: "rgba(0, 238, 0, 0.2)",
            hoverBackgroundColor: "rgba(0, 238, 0, 1)",
            borderColor: "rgba(0, 238, 0, 0.6)",
            data: [80, 75, 70, 65, 70, 65, 40, 40]
          }
        ]
      }
    },
    fillOption() {
      this.options = {
        responsive: true,
        maintainAspectRatio: false,
        scale: {
          angleLines: {
            display: false,
          },
          ticks: {
            suggestedMin: 0,
            suggestedMax: 100
          }
        },
        
      }
    }
  }
}
</script>