function fn_bookwrite(){
    console.log("fn_bookwrite()");
    // 입력값 체크 = 유효성 검사
   let regexp = /^[0-9]{4,7}$/;
   // 패턴에 일치하는지 확인
   if(!regexp.test(price.value)){
        alert('숫자만 입력 가능합니다.(4~7자리)');
        price.value = ''
        price.focus();
        return;
   }
 
   

    // 폼전송= submit()
    writeForm.action='/book/write';
    writeForm.method='post';

    writeForm.submit();
}