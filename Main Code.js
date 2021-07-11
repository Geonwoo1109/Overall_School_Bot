const scriptName = "SchoolBot";

var g = "\u200d".repeat(500);
var f = "\0".repeat (500);

importClass(org.jsoup.Jsoup);

const kalingModule = require('kaling').Kakao();
const Kakao = new kalingModule();
Kakao.init(''); //자스키
Kakao.login('',''); //아디•비번

var allsee = "\u200b".repeat(500);
var nn = "\n\n";
var n = "\n";
var KEY=""; //나이스 키
var bar = n+("-").repeat(20)+n;
var 요일 = ["일","월","화","수","목","금","토"];

var 일 = "[일요일] 시간표\n\n없음";
var 월 = "[월요일] 시간표\n\n1교시: 문학C(인혜련T)\n2교시: 지구과학(이미례T)\n3교시: 영어C(이보*T)\n4교시: 진로(강연*T)\n\n5교시: 체육(이용*T)\n6교시: 수학II(김도*T)\n7교시: 창체(김도*T)";
var 화 = "[화요일] 시간표\n\n1교시: 지구과학(이미례T)\n2교시: 수학II(김도*T)\n3교시: 문학A(송원영T)\n4교시: 생명과학(이재범T)\n\n5교시: 영어A(김지*T)\n6교시: 수학I(송정*T)\n7교시: 정보(조규*T)";
var 수 = "[수요일] 시간표\n\n1교시: 수학I(송정*T)\n2교시: 생명과학(이재범T)\n3교시: 중국어(윤유*T)\n4교시: 문학A(송원영T)\n\n5교시: 지구과학(이미례T)\n6교시: 물리(임양택T)\n7교시: 영어B(이보*T)";
var 목 = "[목요일] 시간표\n\n1교시: 물리(임양택T)\n2교시: 체육(이용*T)\n3교시: 경A(?)(김지*T)\n4교시: 수학II(김도*T)\n\n5교시: 음악(강연*T)\n6교시: 생명과학(이재범T)\n7교시: 수I(송정*T)";
var 금 = "[금요일] 시간표\n\n1교시: 정보(조규*T)\n2교시: 문학B(민초*T)\n3교시: 수I(송정*T)\n4교시: 물리(임양택T)\n\n5교시: 수학II(김도*T)\n6교시: 창체\n7교시: 창체";
var 토 = "[토요일] 시간표\n\n없음";

const Class_2_3 = "2-3\n교시  월     화     수     목     금\n 1    문C   지구   수I   물리  정보\n 2    지구  수II   생명  운동  문B\n 3    영C   문A   중국  영A   수I\n 4    진로  생명  문A   수II   물리\n 5    운동  영A   지구  음악  수II\n 6    수II    수I   물리  생명  창체\n 7    창체  정보  영B   수I    창체";


const TimeImgLink_1 = "/HqMFt78/image.jpg";
const TimeImgLink_3 = "/rvxkvYZ/image.png";

function response(room, msg, sender, isGroupChat, replier, imageDB, packageName)
{

  try {
    if (msg == ".시간표" || msg == ".ㅅ") {
Kakao.send(room, {"link_ver" : "4.0",
                  "template_id" : 48199,
                  "template_args" : {
                    Timetable: "https://i.ibb.co"+TimeImgLink_3,
                    SizeX: 800,
                    SizeY: 637,
                    ImgLink: TimeImgLink_3
                 }
                 }, "custom");
    } else if (msg == ".시간표 1반" || msg == ".ㅅ1") {
Kakao.send(room, {"link_ver" : "4.0",
                  "template_id" : 48199,
                  "template_args" : {
                    Timetable: "https://i.ibb.co"+TimeImgLink_1,
                    SizeX: 370,
                    SizeY: 250,
                    ImgLink: TimeImgLink_1
                 }
                 }, "custom");
    }
    /*
  if (msg == (".시간표")) {
  var k = "";
    
  switch (String(new Date().getDay())) {
      case "0": k = 일;
                break;
      case "1": k = 월;
                break;
      case "2": k = 화;
                break;
      case "3": k = 수;
                break;
      case "4": k = 목;
                break;
      case "5": k = 금;
                break;
      case "6": k = 토;
                break;}
                
      replier.reply(k);
      
      //replier.reply(Class_2_3);
      
  } else if (msg.startsWith(".시간표 ")) {
    if (요일.includes(msg.substr(5))) replier.reply(room, eval(msg.substr(5)));
  }
*/

var main = new Date();
var Y = String(main.getFullYear());
var M = String(main.getMonth()+1);
if (M.length == 1) M = "0" + M;
var D = String(main.getDate());
if (D.length == 1) D = "0" + D;/*
var D = String("16");*/
var Mainsite =
"https://open.neis.go.kr/hub/mealServiceDietInfo?KEY=" + KEY
+ "&Type=json&plndex=1&pSize=100&ATPT_OFCDC_SC_CODE=G10&SD_SCHUL_CODE=7430030&MLSV_MYD="
+ Y+M+D + "&MLSV_FROM_YMD=" + Y+M+D + "&MLSV_TO_YMD=20221231";

var Mainsite석 =
"https://open.neis.go.kr/hub/mealServiceDietInfo?KEY=" + KEY
+ "&Type=json&plndex=1&pSize=100&ATPT_OFCDC_SC_CODE=G10&SD_SCHUL_CODE=7430030&MLSV_MYD="
+ Y+M+D + "&MLSV_FROM_YMD=" + Y+M+D + "&MLSV_TO_YMD=20221231&MMEAL_SC_CODE=3";

if (msg == ".급식" || msg == ".ㄱ") {
  
  var data = JSON.parse(Jsoup.connect(Mainsite).get().text())
  .mealServiceDietInfo[1].row[0];
  var data석 = JSON.parse(Jsoup.connect(Mainsite석).get().text())
  .mealServiceDietInfo[1].row[0];
  var data석_ = data석.DDISH_NM.replace(/ /g, "\n");
  
  //replier.reply(data.MLSV_YMD);
  
  replier.reply(
  "꧁༺"+ data.MLSV_YMD.slice(4,6)+"월 "+data.MLSV_YMD.slice(6,8)+"일 "
  +data.MMEAL_SC_NM +"༻꧂"+nn
  +data.DDISH_NM.replace(/ /g, "\n")+nn
  +"꧁༺"+data석.MLSV_YMD.slice(4,6)+"월 " +data석.MLSV_YMD.slice(6,8)+"일 " 
  +data석.MMEAL_SC_NM +"༻꧂"+nn
  +data석_);
}
if (msg == "..급식" || msg == "..ㄱ") {
  //replier.reply(Mainsite석 + nn+ Mainsite);
  
  var data_ = JSON.parse(Jsoup.connect(Mainsite).get().text())
.mealServiceDietInfo[1];
  var 중식개수 = JSON.parse(Jsoup.connect(Mainsite).get().text())
  .mealServiceDietInfo[0].head[0].list_total_count;
  
  var data_석 = JSON.parse(Jsoup.connect(Mainsite석).get().text())
.mealServiceDietInfo[1];
  var 석식개수 = JSON.parse(Jsoup.connect(Mainsite석).get().text())
  .mealServiceDietInfo[0].head[0].list_total_count;

var a = [], b = [];
  //중식
  for (i=0; i<중식개수; i++) {
      a.push(
        "꧁༺"+data_.row[i].MLSV_YMD.slice(4,6)+"월 "
        +data_.row[i].MLSV_YMD.slice(6,8)+"일 "
        +data_.row[i].MMEAL_SC_NM+"༻꧂"+nn
        +data_.row[i].DDISH_NM.replace(/ /g, "\n")
      );
  }
  //석식
  for (i=0; i<석식개수; i++) {
    b.push(
      "꧁༺"+data_석.row[i].MLSV_YMD.slice(4,6)+"월"
      +data_석.row[i].MLSV_YMD.slice(6,8)+"일"
      +data_석.row[i].MMEAL_SC_NM+"༻꧂"+nn
      +data_석.row[i].DDISH_NM.replace(/ /g, "\n")
    );
  }
  
  replier.reply("<중식>"+n+"  => "
    +data_.row[중식개수-1].MLSV_YMD.slice(4,6)+"월 "
    +data_.row[중식개수-1].MLSV_YMD.slice(6,8)+"일까지"+allsee +nn
    +a.join(nn)
    +nn +nn+"(나이스에 기록된 정보가 없습니다.)");
    
  replier.reply("<석식>"+n+"  => "
    +data_석.row[석식개수-1].MLSV_YMD.slice(4,6)+"월 "
    +data_석.row[석식개수-1].MLSV_YMD.slice(6,8)+"일까지"+allsee +nn
    +b.join(nn)
    +nn +nn+"(나이스에 기록된 정보가 없습니다.)");
    
}
  
  if (msg == ".알레르기") {
    replier.reply ("알레르기 있는 사람들 필독!"+allsee+nn+"1. 난류\n2. 우유\n3. 메밀\n4. 땅콩\n5. 대두\n6. 밀\n7. 고등어\n8. 게\n9. 새우\n10. 돼지고기\n11. 복숭아\n12. 토마토\n13. 아황산류\n14. 호두\n15. 닭고기\n16. 쇠고기\n17. 오징어\n18. 조개류(굴, 전복, 홍합 포함");
  }
if (msg == ".대덕중급식") {
  var Mainsite중 =
"https://open.neis.go.kr/hub/mealServiceDietInfo?KEY=" + KEY
+ "&Type=json&plndex=1&pSize=100&ATPT_OFCDC_SC_CODE=G10&SD_SCHUL_CODE=7451012";
  var data중 = JSON.parse(Jsoup.connect(Mainsite중).get().text())
.mealServiceDietInfo[1];
var 중 = [];
  for (i=0; i<6; i++) {
      중.push(
      "꧁༺"+data중.row[i].MLSV_YMD.substr(6)+"일 " +data중.row[i].MMEAL_SC_NM+"༻꧂"+nn
      +data중.row[i].DDISH_NM.replace(/ /g, "\n"));
  }
  replier.reply(
  data중.row[0].MLSV_YMD.substr(6)+"~"+data중.row[6].MLSV_YMD.substr(6)+"일 급식"
  + allsee + nn+n + 중.join(nn));
}
if (msg == ".대덕초급식") {
  var Mainsite초 =
"https://open.neis.go.kr/hub/mealServiceDietInfo?KEY=" + KEY
+ "&Type=json&plndex=1&pSize=100&ATPT_OFCDC_SC_CODE=G10&SD_SCHUL_CODE=7451063";
replier.reply(JSON.stringify(JSON.parse(Jsoup.connect(Mainsite초).get().text()), null, 4));
  var data초 = JSON.parse(Jsoup.connect(Mainsite초).get().text())
.mealServiceDietInfo[1];
var 초 = [];
  for (i=0; i<6; i++) {
      초.push(
      "꧁༺"+data초.row[i].MLSV_YMD.substr(6)+"일 " +data초.row[i].MMEAL_SC_NM+"༻꧂"+nn
      +data초.row[i].DDISH_NM.replace(/ /g, "\n"));
  }
  replier.reply(
  data초.row[0].MLSV_YMD.substr(6)+"~"+data초.row[6].MLSV_YMD.substr(6)+"일 급식"
  + allsee + nn+n + 초.join(nn));
}

} catch (e) {
  Api.reload("SchoolBot");
  replier.reply("다시해주세요" + e + e.lineNumber);
}}
