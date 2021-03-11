console.log('----------------------Завдання 1-----------------------');
// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку 
// исчезал элемент с id="text".
////////////////////////////////////////////////////////////////////////////////////////////////////////////
let hideBtn = document.getElementById('hide');
hideBtn.onclick = function hide(){
    let text = document.getElementById('text');
    text.style.display = 'none'
};
// ........................................................................................................
console.log('----------------------Завдання 2-----------------------');
// - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
//////////////////////////////////////////////////////////////////////////////////////////////////////////
let hideMe = document.getElementById('hideMe');
hideMe.onclick = function hideMeBtn(){
    hideMe.style.display = 'none'
}
// ....................................................................................................
console.log('----------------------Завдання 3-----------------------');
// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати 
// інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
function readAge(){
    let age = document.getElementById('age')
    if(age.value>=18){
        alert('you can')
    }else{
        alert('you can`t')
    }
};
// ..............................................................................................................
console.log('----------------------Завдання 4-----------------------');
// - Создайте меню, которое раскрывается/сворачивается при клике
////////////////////////////////////////////////////////////////////////////////////////////////////////
let menuBtn = document.getElementById('header')
menuBtn.onclick = function hideShowMenu(){
    let menu = document.getElementById('menu')
    if (menu.style.display == 'flex'){
        menu.style.display = 'none'
    }else{
        menu.style.display = 'flex'
    }
}
// ...............................................................................................
console.log('----------------------Завдання 5-----------------------');
// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
// Вывести список комментариев в документ, каждый в своем блоке.
//  Добавьте каждому комментарию по кнопке для сворачивания его body.
//////////////////////////////////////////////////////////////////////////////////////////////////////////
let comment = [
    {title : 'lorem1', body:'lorem ipsum dolo sit ameti'},
    {title : 'lorem2', body:'lorem ipsum dolo sit ameti'},
    {title : 'lorem3', body:'lorem ipsum dolo sit ameti'},
    {title : 'lorem4', body:'lorem ipsum dolo sit ameti'},
    {title : 'lorem5', body:'lorem ipsum dolo sit ameti'},
    {title : 'lorem6', body:'lorem ipsum dolo sit ameti'},
    {title : 'lorem7', body:'lorem ipsum dolo sit ameti'},
    {title : 'lorem8', body:'lorem ipsum dolo sit ameti'},
    {title : 'lorem9', body:'lorem ipsum dolo sit ameti'},
]
let ex5 = document.getElementById('ex5')
for(elem of comment){
    let div = document.createElement('div');
    let h3 = document.createElement('h3');
    let p = document.createElement('p');
    let btn = document.createElement('button');
    h3.innerText = elem.title;
    p.innerText = elem.body;
    btn.innerText = 'Hide text'
    btn.onclick = function hide(){
        if(p.hidden){
            p.hidden  = false
            btn.innerText = 'Hide text'
        }else{
            p.hidden = true
            btn.innerText = 'show text'
        }
    }
    div.appendChild(h3);
    div.appendChild(p);
    div.appendChild(btn);
    ex5.appendChild(div);
}
// .........................................................................................................
console.log('----------------------Завдання 6-----------------------');
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться 
// на консоль інформація з цих 2х форм.
// Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
let btn = document.getElementById('btn1');
let in1 = document.getElementById('in1');
let in2 = document.getElementById('in2');
let in3 = document.getElementById('in3');
let in4 = document.getElementById('in4');
btn.onclick =()=>{
    console.log(`${in1.value} ${in2.value} ${in3.value} ${in4.value}`)
}
// .................................................................................................................
console.log('----------------------Завдання 7-----------------------');
// - Створити функцію, яка генерує таблицю.
// Перший аргумент визначає кількість строк.
// Другий параметр визначає кліькіть ячеєк в кожній строці.
// Третій параметр визначає елемент в який потрібно таблицю додати.
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let tableElem = document.getElementById('table');
function TableCreate(row,column,elem){
    let table = document.createElement('table')
    for(i = 0; i<row; i++){
        let tr = document.createElement('tr')
        for(j = 0; j<column; j++){
            let td = document.createElement('td')
            td.innerText = 'text'
            tr.appendChild(td)
        }
        table.appendChild(tr);
    }
    elem.appendChild(table);
}
TableCreate(6,7,tableElem);
// ..................................................................................................................