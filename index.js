

function calc (Event) {
    num1 = document.getElementById('user_num_1').value;
    num2 = document.getElementById('user_num_2').value;
    let operator = Event.target.innerHTML;
    let res = eval(`${num1} ${operator} ${num2}`);
    document.getElementById('res').innerHTML = `The Result Is : ${res}`
}