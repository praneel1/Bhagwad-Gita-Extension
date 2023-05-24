const slokcount = [47, 72, 43, 42, 29, 47, 30, 28, 34, 42, 55, 20, 35, 27, 20, 24, 28, 78]
const chapter1 = Math.floor(Math.random() * 18) + 1
const slok1 = Math.floor(Math.random() * slokcount[chapter1 - 1]) + 1


url = 'https://bhagavadgitaapi.in/slok/'+chapter1+'/'+slok1
let p = fetch(url, {mode:'cors'})



p.then((response)=> {
     return response.json()
}).then((value) => {
    console.log(value.slok)
    console.log("chapter",value.chapter)
    console.log("verse no",value.verse)
    console.log("translation: ",value.adi.et)

    let shloka = value.slok
    let newshloka1 = shloka.replace(' |', '⠀|⠀<br>')
    let newshloka2 = newshloka1.replace(' |', '⠀|⠀<br>|')
    document.getElementById('shlok').innerHTML = newshloka2;
    document.getElementById('chsl').innerHTML = "Chapter: "+value.chapter+" <br> Shlok: "+value.verse;
    document.getElementById('translation').innerHTML = value.adi.et;
})

