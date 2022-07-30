function getZakat() {
    let  goldAmount=document.getElementById('goldValue').value;
 if (goldAmount>=7.5)
 {
    let goldZakat=goldAmount*120000/40;
    document.getElementById('resultShow').innerText=goldZakat;
} else

{
    document.getElementById('resultShow').innerText="Zakat is not applicable";
}

}
function getSilver() {
    let  silverAmount=document.getElementById('silverValue').value;
 if (silverAmount>=52.5)
 {
    let silverZakat=silverAmount*1500/40;
    document.getElementById('resultShow').innerText=silverZakat;
} else

{
    document.getElementById('resultShow').innerText="Zakat is not applicable";
}

}

function getCash() {
    let  cashAmount=document.getElementById('cashValue').value;
 if (cashAmount>=80000)
 {
    let cashZakat=cashAmount/40;
    document.getElementById('resultShow').innerText=cashZakat;
} else

{
    document.getElementById('resultShow').innerText="Zakat is not applicable";
}

}