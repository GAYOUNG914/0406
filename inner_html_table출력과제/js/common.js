var heightTotal, ageTotal, scoreTotal, heightAvg, ageAvg, scoreAvg;
var coutLeng = 5;

var height_1, height_2, height_3, height_4, height_5
height_1 = 175; height_2 = 180; height_3 = 190; height_4 = 185; height_5 = 178;

var age_1, age_2, age_3, age_4, age_5
age_1 = 30; age_2 = 18; age_3 = 21; age_4 = 35; age_5 = 38;

var score_1, score_2, score_3, score_4, score_5
score_1 = 85; score_2 = 88; score_3 = 90; score_4 = 95; score_5 = 95;

heightTotal = height_1 + height_2 + height_3 + height_4 + height_5
ageTotal = age_1 + age_2 + age_3 + age_4 + age_5
scoreTotal = score_1 + score_2 + score_3 + score_4 + score_5

heightAvg = heightTotal/coutLeng;
ageAvg = ageTotal/coutLeng;
scoreAvg = scoreTotal/coutLeng;

var table = '';

table += '<table>';

table += '<tr>'
table += '<th>/</th><th>홍길동</th><th>박길동</th><th>김길동</th><th>이길동</th><th>최길동</th><th>평균</th>'
table += '</tr>'
table += '<tr>'
table += '<td>나이</td><td>'+age_1+'</td><td>'+age_2+'</td><td>'+age_3+'</td><td>'+age_4+'</td><td>'+age_5+'</td><td>'+ageAvg+'</td>'
table += '</tr>'
table += '<tr>'
table += '<td>키</td><td>'+height_1+'</td><td>'+height_2+'</td><td>'+height_3+'</td><td>'+height_4+'</td><td>'+height_5+'</td><td>'+heightAvg+'</td>'
table += '</tr>'
table += '<tr>'
table += '<td>점수</td><td>'+score_1+'</td><td>'+score_2+'</td><td>'+score_3+'</td><td>'+score_4+'</td><td>'+score_5+'</td><td>'+scoreAvg+'</td>'
table += '</tr>'

table += '</table>';




document.body.innerHTML = table;
