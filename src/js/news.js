// Slide Container
$(document).ready(function () {
  $(".mySlideDiv").not(".active").hide(); //화면 로딩 후 첫번째 div를 제외한 나머지 숨김

  setInterval(nextSlide, 4000); //4초(4000)마다 다음 슬라이드로 넘어감
});

//이전 슬라이드
function prevSlide() {
  $(".mySlideDiv").hide(); //모든 div 숨김
  var allSlide = $(".mySlideDiv"); //모든 div 객체를 변수에 저장
  var currentIndex = 0; //현재 나타난 슬라이드의 인덱스 변수

  //반복문으로 현재 active클래스를 가진 div를 찾아 index 저장
  $(".mySlideDiv").each(function (index, item) {
    if ($(this).hasClass("active")) {
      currentIndex = index;
    }
  });

  //새롭게 나타낼 div의 index
  var newIndex = 0;

  if (currentIndex <= 0) {
    //현재 슬라이드의 index가 0인 경우 마지막 슬라이드로 보냄(무한반복)
    newIndex = allSlide.length - 1;
  } else {
    //현재 슬라이드의 index에서 한 칸 만큼 뒤로 간 index 지정
    newIndex = currentIndex - 1;
  }

  //모든 div에서 active 클래스 제거
  $(".mySlideDiv").removeClass("active");

  //새롭게 지정한 index번째 슬라이드에 active 클래스 부여 후 show()
  $(".mySlideDiv").eq(newIndex).addClass("active");
  $(".mySlideDiv").eq(newIndex).show();
}

//다음 슬라이드
function nextSlide() {
  $(".mySlideDiv").hide();
  var allSlide = $(".mySlideDiv");
  var currentIndex = 0;

  $(".mySlideDiv").each(function (index, item) {
    if ($(this).hasClass("active")) {
      currentIndex = index;
    }
  });

  var newIndex = 0;

  if (currentIndex >= allSlide.length - 1) {
    //현재 슬라이드 index가 마지막 순서면 0번째로 보냄(무한반복)
    newIndex = 0;
  } else {
    //현재 슬라이드의 index에서 한 칸 만큼 앞으로 간 index 지정
    newIndex = currentIndex + 1;
  }

  $(".mySlideDiv").removeClass("active");
  $(".mySlideDiv").eq(newIndex).addClass("active");
  $(".mySlideDiv").eq(newIndex).show();
}

// Read csv file
$.ajax({
  url: "../../data/1700T_raw_final.csv",
  dataType: "text",
}).done(successFunction);

function successFunction(data) {
  var colList = data.split("\n");
  var len = colList.length;
  var column = colList[0].split(",");
  //console.log(column);
  console.log(len);
  //console.log(colList[3]);
  function loadTable() {
    // table clear
    $("#data-tbody *").remove();
    // load data
    var html = "";
    for (var i = 1; i < 100; i++) {
      // append table content
      html +=
        "<tr><td>" +
        colList[i].split(",")[2] + // Uniprot ID
        "</td><td>" +
        colList[i].split(",")[4] + // Protein Name
        "</td><td>" +
        colList[i].split(",")[8] + // LIG
        "</td><td>" +
        colList[i].split(",")[10] + // PDB
        "</td></tr>";
    }
    $("#table1700T").append(html);
  }
  // loadTable()
}

// Chart JS
const ctx1 = document.getElementById('chart-1');
const ctx2 = document.getElementById('chart-2');
const ctx3 = document.getElementById('chart-3');
const ctx4 = document.getElementById('chart-4');

new Chart(ctx1, {
  type: 'bar',
  data: {
    labels: ['Kinase', 'Methylase', 'Peptidase', 'Protease', 'ect'],
    datasets: [{
      // label: 'Target per Family',
      data: [977, 14, 255, 147, 305],
      backgroundColor:[
        'rgba(54, 160, 235, 0.4)',
        'rgba(54, 120, 235, 0.2)',
        'rgba(54, 240, 235, 0.2)',
        'rgba(54, 100, 235, 0.2)',
        'rgba(54, 0, 235, 0.2)'
      ],
      borderWidth: 1
    }]
  },
  options: {
    plugins:{
      title:{
        display:true,
        text : "Target per Family"
      },
      legend:{
        display: false
      }
    },
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});
