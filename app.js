console.log('im connected');


function calculateResult() {

    const inputValue = document.getElementById('number').value;
    const number = parseFloat(inputValue);

    workerCalculus(number)
    
}




function workerCalculus(nbr){

    const worker = new Worker('./lavoratore-salariato.js');
    worker.postMessage(nbr);

    worker.onmessage = (msg) => {

        const resultSpan = document.getElementById('result');
    resultSpan.innerText = msg.data;

    }



}
