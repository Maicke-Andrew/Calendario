function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');

    for (let index = 0; index < weekDays.length; index += 1) {
        const days = weekDays[index];
        const dayListItem = document.createElement('li');
        dayListItem.innerHTML = days;

        weekDaysList.appendChild(dayListItem);
    };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.
const decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
const holiday = [24, 25, 31];
const friday = [5, 12, 19, 26, 33]
var colorArray = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6',
    '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
    '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A',
    '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
    '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC',
    '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
    '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680',
    '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
    '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3',
    '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];
var fridayCanBe = ['Sextou', 'Partiu', 'Curtir', 'Sair', 'Festa', 'Role']
var getOut = []

function createDaysWeek() {
    const daysTag = document.querySelector('#days');

    for (i = 0; i < decemberDaysList.length; i++) {
        const days = decemberDaysList[i];
        const daysElement = document.createElement('li');
        daysElement.innerHTML = days;
        daysElement.classList = 'day';
        daysElement.style.color = 'rgb(119, 119, 119)'

        daysTag.appendChild(daysElement);

        for (let holidayI = 0; holidayI < holiday.length; holidayI++) {
            if (decemberDaysList[i] === holiday[holidayI]) {
                daysElement.classList.add('holiday');
                daysElement.style.backgroundColor = 'rgb(238, 238, 238)'
            }
        }

        for (let fridayI = 0; fridayI < friday.length; fridayI++) {
            if (i === friday[fridayI]) {
                daysElement.classList.add('friday')
            }
        }
    }
}
createDaysWeek();

function createButtonHolidays(p) {
    const buttonPlace = document.querySelector('.buttons-container')
    let btnHoliday = document.createElement('input');
    btnHoliday.type = 'button'
    btnHoliday.value = p
    btnHoliday.setAttribute('id', 'btn-holiday')
    buttonPlace.appendChild(btnHoliday)
}
createButtonHolidays('Feriados');

let eventoBtnHoliday = document.querySelector('#btn-holiday')
eventoBtnHoliday.addEventListener('click', holidayChangeColor)

function holidayChangeColor() {
    let randomNumber = parseInt(Math.random() * colorArray.length);
    let holidays = document.querySelectorAll('.holiday')
    for (i = 0; i < holiday.length; i++) {
        if (holidays[i].style.backgroundColor != 'rgb(238, 238, 238)') {
            holidays[i].style.backgroundColor = 'rgb(238, 238, 238)'
        } else {
            holidays[i].style.backgroundColor = colorArray[randomNumber]
        }
    }
}

function createButtonFriday(p) {
    const buttonPlace = document.querySelector('.buttons-container')
    let btnHoliday = document.createElement('input');
    btnHoliday.type = 'button'
    btnHoliday.value = p
    btnHoliday.setAttribute('id', 'btn-friday')
    buttonPlace.appendChild(btnHoliday)
}

createButtonFriday('Sexta-feira');

let eventoBtnFriday = document.querySelector('#btn-friday')
eventoBtnFriday.addEventListener('click', changeNameFriday)

function changeNameFriday() {
    let fridays = document.querySelectorAll('.friday')
    for (i = 0; i < fridays.length; i++) {
        let randomNumberFriday = parseInt(Math.random() * fridayCanBe.length);
        if (fridays[i].innerHTML != friday[i] - 1) {
            fridays[i].innerHTML = friday[i] - 1
            fridayCanBe.push(getOut[0])
            getOut.splice(getOut[0], 1)
        } else {
            fridays[i].innerHTML = fridayCanBe[randomNumberFriday]
            getOut[i] = `${fridayCanBe.splice(fridayCanBe.indexOf(fridayCanBe[randomNumberFriday]), 1)}`
        }
    }
}

let allDays = document.querySelectorAll('.day')

function zoom(e) {
    e.target.style.transform = 'scale(1.7)';
}
function zoomOut(e) {
    e.target.style.transform = 'scale(1)';
}
allDays.forEach(item => item.addEventListener('mousemove', zoom))
allDays.forEach(item => item.addEventListener('mouseout', zoomOut))

let text = document.querySelector('#myTask-input')
let textColor = document.querySelector('#taskColor-input')

let addTask = document.querySelector('#btn-addTask');
addTask.addEventListener('click', createTask)

function createTask() {
    if (text.value != '') {
        let placeTask = document.querySelector('.my-tasks')
        let createSpan = document.createElement('span')
        let linebreak = document.createElement('br')
        createSpan.innerHTML = text.value

        let placeColor = document.querySelector('.my-tasks')
        let createDiv = document.createElement('div')
        createDiv.classList.add('task')
        createDiv.style.backgroundColor = textColor.value
        createDiv.addEventListener('click', e => {
            document.querySelectorAll('.task').forEach(item => {
                if (item != e.target) {
                    item.classList.remove('selected')
                } else {
                    e.target.classList.add('selected')
                }
            })
        })

        placeColor.appendChild(createDiv)
        placeTask.append(createSpan, linebreak)
    }
}

allDays.forEach(item => item.addEventListener('click', e => {
    let colorToPassed = document.querySelector('.selected')
    if (e.target.style.color != 'rgb(119, 119, 119)') {
        e.target.style.color = 'rgb(119, 119, 119)'
    } else {
        e.target.style.color = colorToPassed.style.backgroundColor
    }
}))

let inputCompromise = document.querySelector('#task-input')
let btnAddCompromise = document.querySelector('#btn-add')
let eventList = ['click', 'keypress']

eventList.forEach(event => {
    if (event == 'click') {
        btnAddCompromise.addEventListener(event, () => {
            compromiseCreate()
        })
    }
    if (event == 'keypress') {
        inputCompromise.addEventListener(event, e => {
            if (e.keyCode == 13) {
                compromiseCreate()
            }
        })
    }
})


function compromiseCreate() {
    if (!inputCompromise.value) {
        inputCompromise.style.borderColor = 'red';
    } else {
        inputCompromise.style.borderColor = '';
        let placeCompromise = document.querySelector('.input-container')
        let compromise = document.createElement('span')
        let breakline = document.createElement('br')
        compromise.innerHTML = inputCompromise.value
        placeCompromise.append(compromise, breakline)
    }
}