const ctx = document.getElementById("main-chart");
var dataFirst = {
  label: "Number of PDB",
  data: [314, 417, 486, 362, 483, 597],
  lineTension: 0,
  fill: false,
  // borderColor: "rgb(100, 200, 255)",
  borderColor: "white",
};

var dataSecond = {
  label: "Number of Gene",
  data: [205, 317, 372, 357, 567, 486],
  lineTension: 0,
  fill: false,
  borderColor: "rgb(180, 280, 255)",
};

var speedData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [dataFirst, dataSecond],
};

var mainChartOptions = {
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

var lineChart = new Chart(ctx, {
  type: "line",
  data: speedData,
  options: mainChartOptions,
});

// Load RCSB released csv data
$.ajax({
  url: "https://raw.githubusercontent.com/JeongSooNa/1700T_model_dev/main/html/data/RCSB_released_2023_total.csv",
  dataType: "text",
}).done(successFunction);
// Column
/* 
  0. EntryID
  1. Date
  2. Ligand
  3. Value
  4. Symbol
  5. Type
  6. Unit
  7. PDBID
  8. Title
  9. StructureTitle
  10. StuctureKeywords
  11. GeneName
  12. ECNumber
  13. AnnotationIdentifier
  14. PolymerEntityID
  15. EntryIdPolymerEntityIdentifiers
  16. TargetProtein
  17. AccessionCode
  18. DatabaseName
  19. LigandFormula
  20. LigandMW
  21. LigandID
  22. LigandName
  23. LigandSMILES
  24. NonPolymerEntityID
*/
function successFunction(data) {
  // console.log("Load Data Complete!")
  // console.log(data)
  var colList = data.split("\n");
  var len = colList.length;
  var column = colList[0].split(",");
  // console.log(column);
  // console.log(len);
  // console.log(colList[1]);
  // console.log(colList[2].split(",")[0])
  function loadTable() {
    // table clear
    $("#rrd-data-data tbody *").remove();
    // load data
    var html = "";
    for (var i = 1; i < 100; i++) {
      // append table content
      html +=
        "<tr><td>" +
        colList[i].split(",")[0] + // PDB
        "</td><td>" +
        colList[i].split(",")[11] + // Gene Name
        "</td><td>" +
        colList[i].split(",")[16] + // Mutant Type
        "</td><td>" +
        colList[i].split(",")[17] + // Uniprot ID
        "</td><td>" +
        colList[i].split(",")[22] + // Ligand
        "</td><td>" +
        colList[i].split(",")[20] + // Ligand MW
        "</td></tr>";
    }
    $("#rrd-data-data tbody").append(html);
  }
  loadTable();
}

// Q&A click function
function QnAOpenPopup() {
  $(".QnA-popup").show();
  $(".QnA-hide").show();
  $(".QnA").css({
    width: "500px",
    overflow: "visible",
    "border-radius": "5px",
  });
}
function QnAOpenPopupClose() {
  $(".QnA-popup").hide();
  $(".QnA-hide").hide();
  $(".QnA").css({
    width: "240px",
    overflow: "hidden",
    "border-radius": "5px",
  });
}

// Chart Section
const ctx1 = document.getElementById("chart-1");
const mixedChart = new Chart(ctx1, {
  data: {
    datasets: [
      {
        type: "line",
        label: "1700T 중복 Gene",
        data: [65,71,84,87,82,85],
        borderColor: '#FF6384',
        // backgroundColor: '#9BD0F5',
        // borderColor: 'rgb(54, 162, 235)'
      },
      {
        type: "bar",
        label: "Gene",
        data: [205,317,372,357,567,486],
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
      },
    ],
    labels: ["Jan", "Feb", "Mar", "Apr","May","Jun"],
  },
  options:{
    plugins:{
      title:{
        display:true,
        text: "1700T 중복 Gene",
        color:"white",
      },
      legend:{
        display:true,
        labels:{
          color:"white",
        }
      }
    },
    scales: {
      y: {
        ticks: { color: 'white', beginAtZero: true }
      },
      x: {
        ticks: { color: 'white', beginAtZero: true }
      }
    }
  }
});
function openChart1(){
  $(".chart-1").show();
}
function Chart1Close(){
  $(".chart-1").hide();
}