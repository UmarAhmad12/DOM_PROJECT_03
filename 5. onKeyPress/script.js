const display = document.getElementById('display');
const input = document.getElementById("input");
const randomColor = () => {
    let val = "0123456789ABCDEF";
    let cons = "#";
    for (let i = 0; i < 6; i++) {
        cons += val[Math.floor(Math.random() * 16)];
    }
    return cons;
};


input.addEventListener("keypress", (p) => {
    display.innerText = `you have pressed ${p.key}`
    display.style.background = randomColor();
    document.body.style.background = randomColor();
});