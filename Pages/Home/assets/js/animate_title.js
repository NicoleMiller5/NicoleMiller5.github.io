const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}
async function title_hover(){
    var size = 30
    for (let i = 0; i < 20; i++) {   
        document.getElementById("title").style.fontSize = size+"px"
        size = size + 1
        console.log(size+"px")
        await sleep(1)
    }
}
async function title_unhover(){
    var size = 50
    for (let i = 0; i < 20; i++) {   
        document.getElementById("title").style.fontSize = size+"px"
        size = size - 1
        console.log(size+"px")
        await sleep(1)
    }
}