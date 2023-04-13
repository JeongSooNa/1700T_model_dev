// Loading function
setTimeout(function () {
  $(".main").css("display", "block");
  $(".loading").css("display", "none");
}, 3000); // loading time setting

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
  url: "../../data/1700T_raw_final.csv",
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
  console.log(colList[1]);
  var html =
    "<tbody><thead><tr>" +
    "<th>ID</th>" +
    "<th>Uniprot ID</th>" +
    "<th>Protein Name</th>" +
    "<th>Type</th>" +
    "<th>LIG</th>" +
    "<th>PDB</th>" +
    "<th>Model Action Mode</th>" +
    "<th>Family</th>" +
    "</tr></thead>";
  for (var i = 1; i < 100; i++) {
    html +=
      "<tr><td>" +
      i +
      "</td><td>" +
      colList[i].split(",")[2] +
      "</td><td>" +
      colList[i].split(",")[4] +
      "</td><td>" +
      colList[i].split(",")[5] +
      "</td><td>" +
      colList[i].split(",")[8] +
      "</td><td>" +
      colList[i].split(",")[10] +
      "</td><td>" +
      colList[i].split(",")[15] +
      "</td><td>" +
      colList[i].split(",")[18] +
      "</td></tr>";
  }
  html += "</tbody>";
  $("#table").append(html);
}
