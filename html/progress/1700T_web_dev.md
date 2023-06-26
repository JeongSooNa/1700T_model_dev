![jpg](https://www.syntekabio.com/asset/images/all/main_logo_eng.png)
# **1700T model Web Development 기획서**

#### Team : AI Drug Development Operation Team
#### PL : JiYoon Shin
#### Planner : JeongSoo Na
#### Date : 2023.02.01
#### Estimated required date : 2023.02.01 ~ 2023.04.06

---

### **OBJECT**

> 확보한 1700T model 구조 확인을 위한 Web Page 구현

> Deepmatcher 사용 전 데이터 및 유용한 타겟 확인

> 카테고리로 분류, 검색

---

### **Request**
- Gene name / UniprotID 검색을 통한 구조 및 실험 가부 확인
- 전체적인 Database 관리 및 확인
- 그 외 진행 중 Optional 기능 및 page 추가

---

### **Contents**
- project 진행 시 기능명세서 및 개발 일정, issue 정리 사항 file 생성
- Web page 구현을 위한 Springboot (MVC 패턴을 활용한 API 호출)
- Database : MySQl 혹은 data가 많지 않을 시 서버에 업로드
- Search 기능 우선 구현 후 frontend Backend 연결.

---

### **Overview**
- Main Banner 및 link 이동을 위한 Navigator
- 검색 Bar & 검색 기준 설정
- Database 표기
- 하단 Footer에 회사 정보 및 contect, reference 표기

---

### **Datebase Table**
|UniProt-ID|Protein-Name|Type|STB-Class|1700T_1st|실험가부|담당자|CRO|CRO target|Family|Subfamily|Class|Assay type|Assay subtype|Function Mode|Detection method|
|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|
|O00763|ACACB|wild|0|1|1|신지윤|BPSbio|ACC2|-|-|metabolic diseases including obesity and diabetes|-|-|inhibition|ADP-Glo™ reagents|

---

### **Usage Tech**
- HTML
- CSS
- Javascript
- Java
- MySQL
- JSP

---

.

---

### **Environment**
- OS : Window, Linux
- Installation : Chrome
- Framework : SpringBoot
- Development Tool : Eclipse, VS Code

---

### **개발 일정**

[download](https://github.com/JeongSooNa/1700T_model_dev/blob/main/progress/1700T_model_dev_%EA%B0%9C%EB%B0%9C%EC%9D%BC%EC%A0%95_jsna_20230125.xlsx?raw=true)

---

### **Summary**
1700T model validation 프로젝트 완료 시점 Web page에서 쉽게 model 구조 확인 및 실험가부 확인이 가능할 수 있도록 database 구축 및 web page 구현.  
완료 시 STB-Cloud의 DMC-HIT Process 진행 이전 model 확인 및 실험가부에 따른 진행 여부 결정에 도움이 될 것으로 보임.  
1700T model 확인을 위한 optional page로도 사용 가능하나 추후 database 관리 및 새로운 model 확인 시 update 도 가능한 page로 발전 가능.


