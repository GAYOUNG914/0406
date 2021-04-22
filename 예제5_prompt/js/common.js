let titleNum = '이름을 입력해주세요';
let nameGroup = '';
let nameText = prompt(titleNum);
nameGroup += nameText;
// document.body.innerHTML = '<p>대한민국국민mc : '+nameText+'</p>'
// document.body.innerHTML = '<p>대한민국국민mc : '+nameText+'</p>' /*HTML태그 값이 있으면 innerHTML을 넣어줘야 태그가 출력이 안됨*/
nameTEXT = prompt(titleNum);
nameGroup += ','+nameTEXT;
nameText = prompt(titleNum);
nameGroup += ','+nameText;

document.body.innerHTML = nameGroup;
/*input form 텍스트 입력*/
// document.body.innerHTML = '<input type="text" class="name" value="" placeholder="'+nameText+'"/>'
