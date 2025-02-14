const sketchContainer = document.querySelector('#sketchContainer');

function createDiv (number) {
    for (i = 0; i < number*number; i++) {
        let newDiv = document.createElement('div');
        newDiv.setAttribute('class', `newDiv ${i + 1}`);
        let num = 580 / number;
        newDiv.style.width = `${num.toString()}px`
        newDiv.style.height = `${num.toString()}px`
        newDiv.style.backgroundColor = 'white';
        sketchContainer.appendChild(newDiv);
    }
}

createDiv(16);

function colorDiv (){
    let Divs = document.querySelectorAll('.newDiv');
    Divs.forEach((d) => {
        let i = 0.1
        d.addEventListener('mouseenter', () => {
            d.style.backgroundColor = 'black';
            
            if (i < 1) {
                i += 0.1
            }
            d.style.opacity = `${i.toString()}`
        })
    })
}

colorDiv();

function resetDivs (){
    let Divs = document.querySelectorAll('.newDiv');
    Divs.forEach((div) => {
        div.remove()
    })
    let input = parseInt(prompt('Choose the resolution up to 100', '32'));
    if(input < 1 || input > 100) {
        alert('Choose a value from 1 to 100');
        return resetDivs();
    } else {
        createDiv(input);
        colorDiv()
    }
}

const btnGrid = document.querySelector('#btnGrid');
btnGrid.addEventListener('click', resetDivs);

function clearDivs (){
    Divs = document.querySelectorAll('.newDiv');
    Divs.forEach((d) => {
        d.style.opacity = '0';
    })
}

const btnClear = document.querySelector('#btnClear');
btnClear.addEventListener('click', clearDivs);
