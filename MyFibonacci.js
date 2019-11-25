const func = (x => Math.pow(x-2, 2));
let a1,b1;
a1 = -2;
b1 = 20;
const ε = 0.001;
const forN = b1 - a1 / ε; // 440.
const n = findN(forN);



//Функция для нахождения количества итераций.
function findN(n){
    let i = 0;
    while(numbersFibo(i) < n){
        i++;
    }
    return i;
}
//Функция для нахождения числа Фибоначчи для n.
function numbersFibo(n){
    let Fn;
    const sqrt = Math.sqrt(5);
    if (n <= 1){
        return n;
    }
    else{
        x1 = (1 + sqrt) / 2;
        y1 = (1 - sqrt) / 2;
        Fn = 1 / sqrt * ((Math.pow(x1, n)) - (Math.pow(y1, n)));
        return Fn;
    }
}
//Функция для нахождения Lymda(n).
function findLyamda(k){
    let nforLymbda = n-k;
    let lyamda = a1 + numbersFibo(nforLymbda-1)/numbersFibo(n+1) * (b1 - a1);
    return lyamda;
}
//Функция для нахождения U(n).
function findU(k){
    let nForU = n - k;
    let u = a1 + numbersFibo(nForU)/numbersFibo(nForU + 1) * (b1 - a1);
    return u;
}

//Основная функция.
function methodFibo(){
    let k = 0;
    let f1, f2;
    f1 = func(findLyamda(k));
    f2 = func(findU(k));
    let counter = 2;
    let temp, diff;
    while(k < n){
        k++;
        if (func(findLyamda(k)) > func(findU(k))){
            //console.log("a" + k + "= "  + a1 + " - b" + k + "= " + b1);
            //console.log("b - a = " + (b1 - a1));
            f1 = findLyamda(k)
            a1 = f1;
            //console.log("Разница : " + diff); 
            //console.log("Lyamda = " + a1 + ", U = " + findU(k));
            //console.log("f(lyamda) = " + func(a1) + ", f(U) = " + func(findU(k)));
            // console.log("");
            console.log("Разница = " + (numbersFibo(n-k) / numbersFibo(n-k+1)));
            counter += 1;
        }else{
            //console.log("a" + k + "= "  + a1 + " - b" + k + "= " + b1);
            //console.log("b - a = " + (b1 - a1));
            f2 = findU(k)
            b1 = f2;
            console.log("Разница = " + (numbersFibo(n-k) / numbersFibo(n-k+1)));
            //console.log("Разница : " + diff); 
            //console.log("Lyamda = " + findLyamda(k) + ", U = " + b1);
            //console.log("f(lyamda) = " + func(findLyamda(k)) + ", f(U) = " + func(b1));
            //console.log("");
            counter += 1;
        }
    }
    let xMin = (a1 + b1) / 2;
    console.log("Итоговая граница (" + a1 + " - " + b1 + ")");
    console.log('Хмин = ' + xMin);
    console.log('F(min) = ' + func(xMin));
    console.log('Вычислений функции сделано :  ' + counter);
}

/*function forEps(a, b, eps){
    let N = (b - a) / eps;
    let count = findN(N);
    console.log("Для eps = " + eps + " итераций нужно : " + count);
}
let eps = 0.001;
for(let i = 0;i < 10;i++){
    forEps(-2, 20, eps); 
    eps += 0.01;
}*/
methodFibo();







