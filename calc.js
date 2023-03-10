let a = ''; //first number
let b = ''; //second number
let sign = ''; // operator sign
let finish = false;

const digit = ['0','1','2','3','4','5','6','7','8','9','.'];
const action = ['-','+','X','/'];

const out = document.querySelector('.calc-screen p');

function clearAll () {
    a = '';
    b = '';
    sign = '';
    out.textContent = 0;
}

document.querySelector('.ac').onclick = clearAll;

document.querySelector('.buttons').onclick = (event) => {
    if(!event.target.classList.contains('btn')) return;
    if(event.target.classList.contains('ac')) return;

    out.textContent = '';
    const key = event.target.textContent;

    // if 0-9 or '.' was clicked
    if (digit.includes(key)) {
        if(b === '' && sign === ''){
            a += key;
            out.textContent = a;
        } else if ( a!== '' && b!=='' && finish){
            a = key;
            finish = false;
            out.textContent = a;
        } else {
            b += key;
            out.textContent = b;
        }
        console.log(a,b , sign);
        return;
    }

    if(action.includes(key)){
        if(b!==''){
            switch (sign) {
                case '+':
                    a = (+a) + (+b);
                    out.textContent = a;
                    break;
                case '-':
                    a = a - b;
                    out.textContent = a;
                    break;
                case 'X':
                    a = a * b;
                    out.textContent = a;
                    break;
                case '/':
                    if (b === '0'){
                        out.textContent = 'Error';
                        a = '';
                        b = '';
                        sign = '';
                        return;
    
                    }
                    a = a / b;
            }

        } else {
            out.textContent = a;
        }

        sign = key;
        b = '';
        console.log(a, b, sign);
        /* out.textContent = sign; */
        return;
    }
    if(key === '='){
        if(b === '') b = a;
        switch (sign) {
            case '+':
                a = (+a) + (+b);
                break;
            case '-':
                a = a - b;
                break;
            case 'X':
                a = a * b;
                break;
            case '/':
                if (b === '0'){
                    out.textContent = 'Error';
                    a = '';
                    b = '';
                    sign = '';
                    return;

                }
                a = a / b;
        }
        finish = true;
        out.textContent = a;
        console.log(a, b, sign);
    }
}