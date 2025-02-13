let container = document.querySelector('#container');
const btn = document.querySelector('#btn');

for( let i = 0; i < 16; i++) {
    const newDiv = document.createElement('div');
    newDiv.setAttribute('class', `content divOnica ${i + 1}`);
    container.appendChild(newDiv);

    for (let a = 0; a < 16; a++){
        const subDiv = document.createElement('div');
        subDiv.setAttribute('class', `content subDivOnica ${i + 1} ${a + 1}`);
        newDiv.appendChild(subDiv);
    }
}

document.body.style.boxSizing = 'border-box';

let content = document.querySelectorAll('.content')
let divOnicas = document.querySelectorAll('.divOnica');
const subDivOnicas = document.querySelectorAll('.subDivOnica');

//subDivOnicas.forEach((s) => {
    //if (index % 2 !== 0) {
       // s.style.background = 'lightblue';
       // s.addEventListener('mouseleave', () => {
       //     s.style.background = 'lightblue';
       // })
   // } else {
     //   s.style.background = 'blue';
      //  s.addEventListener('mouseleave', () => {
      //      s.style.background = 'blue';
      //  })
   // }
    //s.style.width = '24px';
  //  s.style.height = '24px';
//});

function styleDiv(){
    
    divOnicas = document.querySelectorAll('.divOnica')
    divOnicas.forEach((d, index) => {
        d.style.display = 'flex';
        d.style.width = 'fit-content';

        const subDivsInCurrentDiv = d.querySelectorAll('.subDivOnica');

        subDivsInCurrentDiv.forEach((sn) => {
            sn.style.width = '24px';
            sn.style.height = '24px';
        })

        if (index % 2 !== 0){
            subDivsInCurrentDiv.forEach((s) => {
                s.style.background = 'blue';
                s.addEventListener('mouseenter', () => {
                    s.style.background = 'purple';
                })
                s.addEventListener('mouseleave', () => {
                    s.style.background = 'blue';
                })
            })
        } else {
            subDivsInCurrentDiv.forEach((s) => {
                s.style.background = 'lightblue';
                s.addEventListener('mouseenter', () => {
                    s.style.background = 'pink';
                })
                s.addEventListener('mouseleave', () => {
                    s.style.background = 'lightblue';
                })
            }) 
        }
        
    })
}

styleDiv();


function clickBtn () {
    content = document.querySelectorAll('.content');
    content.forEach((e) => {
        e.remove();
    })
    let inputNumber = parseInt(prompt('How many squares per line?', '16'));
    if (inputNumber > 100 || isNaN(inputNumber)) {
        alert('Please enter a number up to 100')
        return clickBtn();
     } else {
        for (let i = 0; i < inputNumber; i++){
            const newDiv = document.createElement('div');
            newDiv.setAttribute('class', `content divOnica ${i + 1}`);
            container.appendChild(newDiv);

            for (let a = 0; a < inputNumber; a++){
                const subDiv = document.createElement('div');
                subDiv.setAttribute ('class', `content subDivOnica ${i + 1} ${a + 1}`);
                newDiv.appendChild(subDiv);
            }
        }
        styleDiv();
}}

btn.addEventListener('click', clickBtn);