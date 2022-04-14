const scriptName = "명령어 정리";

var allsee = "\u200d".repeat (500);
const n = "\n";
const nn = "\n".repeat(2);

function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {

    if (msg == (".명령어")) {
        replier.reply(
            "*꧁༺명령어 목록༻꧂*"
            +allsee
            +nn
            +"[학교]"+n
            +".ㄱ => 오늘 급식입니다."+n
            +"..ㄱ => 이번달 급식입니다."+n
            +".ㅅ | .ㅅ1 | .ㅅ2 ··· => 시간표입니다."+n
            +".ㅇ => 학교 공식 일정입니다."+n
            +".ㄹ => 대덕고 3학년 웹페이지입니다."+n

            +nn
            +"[신기한거]"+n
            +".시간 => 디지털 시계"+n
            +".로그 10 => 삭제된 메시지를 볼 수 있는 채팅로그"+n
            +".큰글씨 대덕고 => 아이폰은 안보이는 큰글씨"+n
            +".골라 사과 바나나 포도 => 랜덤 선택기계"+n
            
            +nn
            +"더 많은 명령어는? => ..명령어 or .전체명령어"
        );
    }
  
    if (msg == (".전체명령어") || msg == ("..명령어")) {
        replier.reply(
            "*꧁༺명령어 목록༻꧂*"
            +allsee
            +nn
            +"[학교]"+n
            +".ㄱ => 오늘 급식입니다."+n
            +"..ㄱ => 이번달 급식입니다."+n
            +".ㅅ | .ㅅ1 | .ㅅ2 ··· => 시간표입니다."+n
            +".ㅇ => 학교 공식 일정입니다."
            +".ㄹ => 대덕고 3학년 웹페이지입니다."+n

            +nn
            +"[신기한거]"+n
            +".따라하기 사랑해요 => 봇이 뒤의 메시지를 따라합니다."+n
            +".로그 10 => 삭제된 메시지를 볼 수 있는 채팅로그"+n
            +"..로그 10 => 이모티콘과 사진까지 볼 수 있는 채팅로그"+n
            +".큰글씨 대덕고 => 아이폰은 안보이는 큰글씨"+n
            +"..큰글씨 으스으 => 자음 이모티콘 생성기"+nn

            +".시간 => 디지털 시계"+n
            +".골라 사과 바나나 포도 => 랜덤 선택기계"+n
            +".사전 사과 => 국립국어원 기준 | 주어진 단어의 뜻을 말해줍니다. "+n
            +".방정보 https://open.kakao.com/o/gXlcStDc => 오픈채팅방 방 정보를 보여줍니다."+n

            +nn
            +"[가르치기]"+n
            +".가르치기 (메시지)-(내용) => (메시지)를 말하면 (내용)으로 답합니다."+n
            +".가르치기삭제 (메시지) => 이 (메시지)가 가진 명령을 제거합니다."+n
            +".가르치기포함 (메시지)-(내용) => (메지시)가 포함된 채팅이 올라오면 (내용)을 보냅니다."+n
            +".가르치기포함삭제 (메시지)"+n
            +".가르치기목록 => 이 방에 저장된 모든 가르치기 내용을 보여줍니다."+n
            +".가르치기리셋 -> 이 방에 저장된 모든 가르치기를 제거합니다."

            +nn 
            +"[번역]"+n
            +".번역 ko en 사랑해요 => 파파고 기반 번역기입니다. (영어 > 한국어도 가능)"+n
            +"한국어-ko, 영어-en, 일본어-ja"+n
            +".번역코드 => 번역 가능한 모든 언어의 코드"+n
            
            +nn
            +"[메모]"+n
            +".메모 (내용) => 내 이름으로 (메모)를 저장합니다."+n
            +".메모보기"+n
            +".메모리셋 => 내 메모를 제거합니다."
        );
    }
}
