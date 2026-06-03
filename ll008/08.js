function calcular(){
    var nume = Number(document.getElementById('num').value)
    
    
    var res = document.getElementById('res')
    

    for (var m = 1; m <= 10; m++){
        var r = nume * m
        res.innerHTML += `${nume} vezes ${m} é ${r}<br>`
    }
}