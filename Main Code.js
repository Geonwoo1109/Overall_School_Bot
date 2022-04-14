const scriptName = "SchoolBot";

var g = "\u200d".repeat(500);
var f = "\0".repeat (500);

importClass(org.jsoup.Jsoup);

const { KakaoLinkClient } = require('kakaolink');
const Kakao = new KakaoLinkClient('', 'http://developers.kakao.com');
Kakao.login('.com','');

var allsee = "\u200b".repeat(500);
var nn = "\n\n";
var n = "\n";
var KEY=""; //나이스 키
var bar = n+("-").repeat(20)+n;
var 요일 = ["일","월","화","수","목","금","토"];

var main, Y, M, D;

function resetDate() {
    main = new Date();
    Y = String(main.getFullYear());
    M = String(main.getMonth()+1);
    if (M.length == 1) M = "0" + M;
    D = String(main.getDate());
    if (D.length == 1) D = "0" + D;
}

function Bab(msg, replier, Mainsite, Mainsite석) {
    if (msg == ".급식" || msg == ".ㄱ" || msg == "!급식" || msg == "!ㄱ") {
  
        var data = JSON.parse(Jsoup.connect(Mainsite).get().text())
        .mealServiceDietInfo[1].row[0];
    
        try {
            var data석 = JSON.parse(Jsoup.connect(Mainsite석).get().text()).mealServiceDietInfo[1].row[0];
        
            var data석_ = data석.DDISH_NM.replace(/ /g, "\n");
            replier.reply(
                "꧁༺"+ data.MLSV_YMD.slice(4,6)+"월 "+data.MLSV_YMD.slice(6,8)+"일 "
                +data.MMEAL_SC_NM +"༻꧂"+nn
                +data.DDISH_NM.replace(/ /g, "\n")+nn
                +"꧁༺"+data석.MLSV_YMD.slice(4,6)+"월 " +data석.MLSV_YMD.slice(6,8)+"일 " 
                +data석.MMEAL_SC_NM +"༻꧂"+nn
                +data석_);
        } catch(e) {
            replier.reply(
                "꧁༺"+ data.MLSV_YMD.slice(4,6)+"월 "+data.MLSV_YMD.slice(6,8)+"일 "
                +data.MMEAL_SC_NM +"༻꧂"+nn
                +data.DDISH_NM.replace(/ /g, "\n"));
        }
    }
    
    if (msg == "..급식" || msg == "..ㄱ" || msg == "!!급식" || msg == "!!ㄱ") {
    
        //중식
        var a=[], b=[];
        var data_ = JSON.parse(Jsoup.connect(Mainsite).get().text()).mealServiceDietInfo[1];
        var 중식개수 = JSON.parse(Jsoup.connect(Mainsite).get().text()).mealServiceDietInfo[0].head[0].list_total_count;
    
        for (i=0; i<중식개수; i++) {
            a.push(
                "꧁༺"+data_.row[i].MLSV_YMD.slice(4,6)+"월 "
                +data_.row[i].MLSV_YMD.slice(6,8)+"일 "
                +data_.row[i].MMEAL_SC_NM+"༻꧂"+nn
                +data_.row[i].DDISH_NM.replace(/ /g, "\n")
            );
        }
        
        
        replier.reply("<중식>"+n+"  => "
            +data_.row[중식개수-1].MLSV_YMD.slice(4,6)+"월 "
            +data_.row[중식개수-1].MLSV_YMD.slice(6,8)+"일까지"+allsee +nn
            +a.join(nn)
            +nn +nn+"(나이스에 기록된 정보가 없습니다.)");
    
        //만약 석식 있으면
        try{
            var data_석 = JSON.parse(Jsoup.connect(Mainsite석).get().text()).mealServiceDietInfo[1];
            var 석식개수 = JSON.parse(Jsoup.connect(Mainsite석).get().text()).mealServiceDietInfo[0].head[0].list_total_count;
    
            for (i=0; i<석식개수; i++) {
                b.push(
                    "꧁༺"+data_석.row[i].MLSV_YMD.slice(4,6)+"월"
                    +data_석.row[i].MLSV_YMD.slice(6,8)+"일"
                    +data_석.row[i].MMEAL_SC_NM+"༻꧂"+nn
                    +data_석.row[i].DDISH_NM.replace(/ /g, "\n")
                );
            }
        
          
            replier.reply("<석식>"+n+"  => "
                +data_석.row[석식개수-1].MLSV_YMD.slice(4,6)+"월 "
                +data_석.row[석식개수-1].MLSV_YMD.slice(6,8)+"일까지"+allsee +nn
                +b.join(nn)
                +nn +nn+"(나이스에 기록된 정보가 없습니다.)");
            }
        catch(e) {
            replier.reply("기록된 석식은 없습니다.");
        }
        
    }
}

function Send_Timeline(room, Timetable, SizeX, SizeY, ImgLink) {
    Kakao.sendLink(room, {
        "link_ver" : "4.0",
        "template_id" : 48199,
        "template_args" : {
            Timetable: Timetable,
            SizeX: SizeX,
            SizeY: SizeY,
            ImgLink: ImgLink
        }
    }, "custom");
}

function alarm() {

    //var 월 = ["", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    return "[ 시험일정 ]"
        + "\n4월 모평: " + D_day("Apr 13, 2022")
        + "\n중간고사: " + D_day("Apr 29, 2022")
        //+ "\n6월 모평: " + D_day("Jun 9, 2022")
        //+ "\n기말고사: " + D_day("Jun 30, 2022")
        //+ "\n7월 모평: " + D_day("Jul 6, 2022")
        + "\n수능: " + D_day("Nov 17, 2022")

        + "\n\n[ 기타 일정 ]"
        + "\n여름방학식: " + D_day("Jul 20, 2022");
}

function D_day(date) {
    var temp = Math.floor((new Date() - new Date(date)) / (1000*60*60*24));
    if (temp == 0) return "D-Day";
    else if (temp > 0) return "D+"+temp;
    else return "D"+temp;
}

function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {

    //봇 전체 오류
    try {

        //알람
        if (msg == ".일정" || msg == ".ㅇ") replier.reply(alarm());
        if (room == "Carpe Diem" && sender == "방장봇" && msg == "오전 7시"
            && new Date().getDay() != 0 && new Date().getDay() != 6) {
                replier.reply("2022 대덕고 3학년 2반", "☆ 아침 자가진단 해주세요 ☆\n" + alarm());
        }

        //링크
        if (msg == ".링크" || msg == ".ㄹ") {
            replier.reply("https://geonwoo1109.github.io/School_Website/");
        }

        //시간표 오류
        try{
            //대덕고
            if (msg == ".ㅅ1") Send_Timeline(room, "https://i.ibb.co/zPxrH1r/3-1.png", 800, 425, "/vP5DCPG/3-1.png");
            if (msg == ".ㅅ2" || msg == ".ㅅ") Send_Timeline(room, "https://i.ibb.co/Hh8QjrQ/3-2.png", 800, 425, "/1Z35PwL/3-2.png");
            if (msg == ".ㅅ3") Send_Timeline(room, "https://i.ibb.co/BjxnDHn/3-3.png", 800, 425, "/x7K0Mr5/3-3.png");
            if (msg == ".ㅅ4") Send_Timeline(room, "https://i.ibb.co/xMwckmv/3-4.png", 800, 425, "/NsyPqfb/3-4.png");
            if (msg == ".ㅅ5") Send_Timeline(room, "https://i.ibb.co/0D0TBMX/3-5.png", 800, 425, "/TRC1Wjt/3-5.png");
            
            if (msg == ".ㅅ6") Send_Timeline(room, "https://i.ibb.co/PFhb1w2/3-6.png", 800, 425, "/dfR6961/3-6.png");
            if (msg == ".ㅅ7") Send_Timeline(room, "https://i.ibb.co/wYk0CCw/3-7.png", 800, 425, "/hcX8cS3/3-7.png");
            if (msg == ".ㅅ8") Send_Timeline(room, "https://i.ibb.co/D11ppfR/3-8.png", 800, 425, "/4PkjhKs/3-8.png");
            if (msg == ".ㅅ9") Send_Timeline(room, "https://i.ibb.co/ws7cFrD/3-9.png", 800, 425, "/qsk7bTg/3-9.png");
            if (msg == ".ㅅ10") Send_Timeline(room, "https://i.ibb.co/Vq8TRf4/3-10.png", 800, 425, "/rbvGXBS/3-10.png");
            if (msg == ".ㅅ11") Send_Timeline(room, "https://i.ibb.co/Dgxs4zd/3-11.png", 800, 425, "/ssKnCd5/3-11.png");
            
            //지족고
            if (msg == "!시간표" || msg == "!ㅅ") {
                Send_Timeline(room, "https://i.ibb.co/cwhSJTM/image.png", 800, 529, "/qm6MDpj/image.png");
            }
            if (msg == "!반" || msg == "!ㅂ") {
                Send_Timeline(room, "https://i.ibb.co/m05wKVT/image.png", 800, 442, "/4FwycGC/image.png");
            }

        } catch(e) {
            Api.reload("SchoolBot");
            replier.reply("일시적인 오류입니다.\n한번 더 해주세요");
        }

        //대덕고
        if (msg == ".ㄱ" || msg == ".급식" || msg == "..ㄱ" || msg == "..급식") {
            resetDate();

            var Mainsite =
            "https://open.neis.go.kr/hub/mealServiceDietInfo?KEY=" + KEY
            + "&Type=json&plndex=1&pSize=100&ATPT_OFCDC_SC_CODE=G10&SD_SCHUL_CODE=7430030&MLSV_MYD="
            + Y+M+D + "&MLSV_FROM_YMD=" + Y+M+D + "&MLSV_TO_YMD=20221231";
        
            var Mainsite석 =
            "https://open.neis.go.kr/hub/mealServiceDietInfo?KEY=" + KEY
            + "&Type=json&plndex=1&pSize=100&ATPT_OFCDC_SC_CODE=G10&SD_SCHUL_CODE=7430030&MLSV_MYD="
            + Y+M+D + "&MLSV_FROM_YMD=" + Y+M+D + "&MLSV_TO_YMD=20221231&MMEAL_SC_CODE=3";
        
            Bab(msg, replier, Mainsite, Mainsite석);
        }

        //지족고
        if (msg == "!ㄱ" || msg == "!급식" || msg == "!!ㄱ" || msg == "!!급식") {
            resetDate();
            
            var Mainsite =
            "https://open.neis.go.kr/hub/mealServiceDietInfo?KEY=" + KEY
            + "&Type=json&plndex=1&pSize=100&ATPT_OFCDC_SC_CODE=G10&SD_SCHUL_CODE=7430149&MLSV_MYD="
            + Y+M+D + "&MLSV_FROM_YMD=" + Y+M+D + "&MLSV_TO_YMD=20221231";
        
            var Mainsite석 =
            "https://open.neis.go.kr/hub/mealServiceDietInfo?KEY=" + KEY
            + "&Type=json&plndex=1&pSize=100&ATPT_OFCDC_SC_CODE=G10&SD_SCHUL_CODE=7430149&MLSV_MYD="
            + Y+M+D + "&MLSV_FROM_YMD=" + Y+M+D + "&MLSV_TO_YMD=20221231&MMEAL_SC_CODE=3";
        
            Bab(msg, replier, Mainsite, Mainsite석);
        }

        if (msg == ".알레르기") {
            replier.reply ("알레르기 있는 사람들 필독!"+allsee+nn+"1. 난류\n2. 우유\n3. 메밀\n4. 땅콩\n5. 대두\n6. 밀\n7. 고등어\n8. 게\n9. 새우\n10. 돼지고기\n11. 복숭아\n12. 토마토\n13. 아황산류\n14. 호두\n15. 닭고기\n16. 쇠고기\n17. 오징어\n18. 조개류(굴, 전복, 홍합 포함");
        }


    } catch (e) {
        Api.reload("SchoolBot");
        replier.reply("다시해주세요\n" + e + e.lineNumber);
    }
}
