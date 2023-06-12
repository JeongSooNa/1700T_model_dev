window.onload = function () {
  const elm = document.querySelectorAll(".section");
  const elmCount = elm.length;
  elm.forEach(function (item, index) {
    item.addEventListener("mousewheel", function (event) {
      event.preventDefault();
      let delta = 0;

      if (!event) event = window.event;
      if (event.wheelDelta) {
        delta = event.wheelDelta / 120;
        if (window.opera) delta = -delta;
      } else if (event.detail) delta = -event.detail / 3;

      let moveTop = window.scrollY;
      let elmSelector = elm[index];

      // wheel down : move to next section
      if (delta < 0) {
        if (elmSelector !== elmCount - 1) {
          try {
            moveTop =
              window.pageYOffset +
              elmSelector.nextElementSibling.getBoundingClientRect().top;
          } catch (e) {}
        }
      }
      // wheel up : move to previous section
      else {
        if (elmSelector !== 0) {
          try {
            moveTop =
              window.pageYOffset +
              elmSelector.previousElementSibling.getBoundingClientRect().top;
          } catch (e) {}
        }
      }

      const body = document.querySelector("html");
      window.scrollTo({ top: moveTop, left: 0, behavior: "smooth" });
    });
  });
};

// Slide
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

// Hide option
$("#hide").click(function () {
  if ($("#hide").text() == "▶  open") {
    $(".option-wrapper").css("display", "block");
    $(".main-wrapper").css("width", "80%");
    $("#hide").text("◀  close");
  } else {
    $(".option-wrapper").css("display", "none");
    $(".main-wrapper").css("width", "95%");
    $("#hide").text("▶  open");
  }
});
// move popup
$(function () {
  $(".data-popup").draggable();
});

// popup
$(".popup-close").click(function () {
  $(".data-popup").css("display", "none");
  $(".popup-body").css("display", "none");
});

// Option checkbox
$("#FamilyKinase").click(function () {
  if ($("#FamilyKinase").is(":checked")) {
    $("#FamilyPeptidase").prop("checked", false);
    $("#FamilyOthers").prop("checked", false);
  }
});
$("#FamilyPeptidase").click(function () {
  if ($("#FamilyPeptidase").is(":checked")) {
    $("#FamilyKinase").prop("checked", false);
    $("#FamilyOthers").prop("checked", false);
  }
});
$("#FamilyOthers").click(function () {
  if ($("#FamilyOthers").is(":checked")) {
    $("#FamilyKinase").prop("checked", false);
    $("#FamilyPeptidase").prop("checked", false);
  }
});
$("#FunctionAgonist").click(function () {
  if ($("#FunctionAgonist").is(":checked")) {
    $("#FunctionAntagonist").prop("checked", false);
    $("#FunctionOthers").prop("checked", false);
  }
});
$("#FunctionAntagonist").click(function () {
  if ($("#FunctionAntagonist").is(":checked")) {
    $("#FunctionAgonist").prop("checked", false);
    $("#FunctionOthers").prop("checked", false);
  }
});
$("#FunctionOthers").click(function () {
  if ($("#FunctionOthers").is(":checked")) {
    $("#FunctionAgonist").prop("checked", false);
    $("#FunctionAntagonist").prop("checked", false);
  }
});
$("#TypeWild").click(function () {
  if ($("#TypeWild").is(":checked")) {
    $("#TypeMutant").prop("checked", false);
  }
});
$("#TypeMutant").click(function () {
  if ($("#TypeMutant").is(":checked")) {
    $("#TypeWild").prop("checked", false);
  }
});

// Read csv file
$.ajax({
  // url: "../data/1700T_raw_final.csv",
  url: "https://raw.githubusercontent.com/JeongSooNa/1700T_model_dev/main/data/1700T_raw_final.csv",
  dataType: "text",
}).done(successFunction);
//   console.log(data);
// Column
/*
        0. Gene(1700T)			2. UniProtID *
        1. PDB					4. ProteinName *
        2. UniProtID *			5. Type *
        3. tempFlag				8. LIG *
        4. ProteinName *		10. PDB *
        5. Type *				12. STB-Cloud Class *
        6. Cluster				13. Replaced *
        7. ModelPDB				15. ModelActionMode
        8. LIG *				18. Family *
        9. Lig Suggested        29. NOfTrials *
        10. PDB *
        11. Replaced
        12. STB-Cloud Class *
        13. Replaced *
        14. Title
        15. ModelActionMode
        16. AllostericOrthostericETC
        17. isAssay
        18. Family *
        19. Subfamily
        20. Class
        21. CRO1
        22. AssayType1
        23. ModeOfAssay1
        24. CRO2
        25. AssayType2
        26. ModeOfAssay2
        27. ModelCount
        28. internalScreening
        29. NOfTrials *
        30. AtopicDermatitisPsoriasisAsthma
        31. AtopicDermatitisPsoriasisAsthma
        32. DiabeticNephropathy
        */

function successFunction(data) {
  var colList = data.split("\n");
  var len = colList.length;
  var column = colList[0].split(",");
  console.log(column);
  console.log(len);
  console.log(colList[3]);
  function loadTable() {
    // table clear
    $("#data-tbody *").remove();
    // load data
    var html = "";
    for (var i = 1; i < 100; i++) {
    // for (var i = 1; i < 3520; i++) {
      // filtering
      var search = $(".search-bar input").val();
      if (search != "") {
        if (
          !(
            colList[i].split(",")[2].includes(search) ||
            colList[i].split(",")[4].includes(search)
          )
        ) {
          continue;
        }
      }
      // Include Family Kinase
      if ($("#FamilyKinase").is(":checked")) {
        if (!colList[i].split(",")[18].includes("Kinase")) {
          continue;
        }
      }
      // Include Family Peptidase
      if ($("#FamilyPeptidase").is(":checked")) {
        if (!colList[i].split(",")[18].includes("Peptidase")) {
          continue;
        }
      }
      // Include Family Others
      if ($("#FamilyOthers").is(":checked")) {
        if (colList[i].split(",")[18].includes("Kinase")) {
          continue;
        }
        if (colList[i].split(",")[18].includes("Peptidase")) {
          continue;
        }
      }
      // Include Function Agonist
      if ($("#FunctionAgonist").is(":checked")) {
        if (!colList[i].split(",")[15].includes("ctivator")) {
          continue;
        }
      }
      // Include Function Antagonist
      if ($("#FunctionAntagonist").is(":checked")) {
        if (!colList[i].split(",")[15].includes("nhibitor")) {
          continue;
        }
      }
      // Include Function Others
      if ($("#FunctionOthers").is(":checked")) {
        if (colList[i].split(",")[15].includes("ctivator")) {
          continue;
        }
        if (colList[i].split(",")[15].includes("nhibitor")) {
          continue;
        }
      }

      // Include Type wild
      if ($("#TypeWild").is(":checked")) {
        if (!colList[i].split(",")[5].includes("wild")) {
          continue;
        }
      }
      // Include Type mutant
      if ($("#TypeMutant").is(":checked")) {
        if (colList[i].split(",")[5].includes("wild")) {
          continue;
        }
      }

      // append table content
      html +=
        "<tr><td>" +
        i + // ID
        "</td><td>" +
        colList[i].split(",")[2] + // Uniprot ID
        "</td><td>" +
        colList[i].split(",")[4] + // Protein Name
        "</td><td>" +
        colList[i].split(",")[5] + // Type
        "</td><td>" +
        colList[i].split(",")[8] + // LIG
        "</td><td>" +
        colList[i].split(",")[10] + // PDB
        "</td><td>" +
        colList[i].split(",")[15] + // Model Action Mode
        "</td><td>" +
        colList[i].split(",")[18] + // Family
        "</td></tr>";
    }
    $("#data-tbody").append(html);
  }
  loadTable();

  $("#search-btn").click(function () {
    loadTable();
  });

  $(document).on("click", "tr", function () {
    // Get index
    var text = $(this).text().slice(0, 4);
    var index = "";
    var pattern_n = /[0-9]/; // number regulation
    for (var i = 0; i < 4; i++) {
      if (pattern_n.test(text[i])) {
        index = index + text[i];
      } else {
        break;
      }
    }
    // console.log(index)
    var index_n = Number(index);
    // console.log(index_n);
    $(".data-popup").css("display", "block");
    $(".popup-loading").css("display", "block");
    setTimeout(function () {
      $(".popup-body").css("display", "block");
      $(".popup-loading").css("display", "none");
    }, 1000);

    // link & download PDB
    $("#goRCSB").attr(
      "href",
      "https://www.rcsb.org/structure/" + colList[index_n].split(",")[10]
    );
    $("#goUniprot").attr(
      "href",
      "https://www.uniprot.org/uniprotkb/" +
        colList[index_n].split(",")[2] +
        "/entry"
    );
    $("#getPDB").attr(
      "href",
      "https://files.rcsb.org/download/" +
        colList[index_n].split(",")[10] +
        ".pdb"
    );
    $("#popUniProtID").val(colList[index_n].split(",")[2]);
    $("#popProteinName").val(colList[index_n].split(",")[4]);
    $("#popType").val(colList[index_n].split(",")[5]);
    $("#popLIG").val(colList[index_n].split(",")[8]);
    $("#popPDB").val(colList[index_n].split(",")[10]);
    $("#popModelActionMode").val(colList[index_n].split(",")[15]);
    $("#popFamily").val(colList[index_n].split(",")[18]);
    $("#popCluster").val(colList[index_n].split(",")[6]);
    $("#popSTBCloudClass").val(colList[index_n].split(",")[12]);
    $("#popReplaced").val(colList[index_n].split(",")[11]);
    $("#popNOfTrials").val(colList[index_n].split(",")[29]);
    $("#popAtopicDermatitisPsoriasisAsthma").val(
      colList[index_n].split(",")[30]
    );
    $("#popRheumatoidArthritis").val(colList[index_n].split(",")[31]);
    $("#popDiabeticNephropathy").val(colList[index_n].split(",")[32]);
  });
}

// ************************
// Page 3
// Chart
const ctx1 = document.getElementById("chart-1");

new Chart(ctx1, {
  type: "bar",
  data: {
    labels: ["Kinase", "Methylase", "Peptidase", "Protease", "ect"],
    datasets: [
      {
        // label: 'Target per Family',
        data: [977, 14, 255, 147, 305],
        backgroundColor: [
          "rgba(54, 160, 235, 0.4)",
          "rgba(54, 120, 235, 0.2)",
          "rgba(54, 240, 235, 0.2)",
          "rgba(54, 100, 235, 0.2)",
          "rgba(54, 0, 235, 0.2)",
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {
    plugins: {
      title: {
        display: true,
        text: "Target per Family",
      },
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});
