const ctx1 = document.getElementById("chart-1");
var dataFirst = {
  label: "Number of PDB",
  data: [314, 417, 486, 362, 119],
  lineTension: 0,
  fill: false,
  // borderColor: "rgb(100, 200, 255)",
  borderColor: "white",
};

var dataSecond = {
  label: "Number of Gene",
  data: [205, 317, 372, 357, 97],
  lineTension: 0,
  fill: false,
  borderColor: "rgb(180, 280, 255)",
};

var speedData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May"],
  datasets: [dataFirst, dataSecond],
};

var chartOptions = {
  plugins: {
    title: {
      display: true,
      text: "구조 정보 업데이트 현황",
      color: "white",
    },
    legend: {
      display: true,
      labels: {
        fontColor: "black",
        color: "white",
      },
    },
  },
  scales: {
    y: {
      ticks: { color: "white", beginAtZero: true },
    },
    x: {
      ticks: { color: "white" },
    },
  },
};

var lineChart = new Chart(ctx1, {
  type: "line",
  data: speedData,
  options: chartOptions,
});
