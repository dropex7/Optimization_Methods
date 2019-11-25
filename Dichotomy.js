const func = (x => Math.pow(x-2, 2));
let a = -2;
let b = 20;
const eps = 0.001;
const delta = eps / 4;
let counter = 0;
let k = 0;
let forEps = b - a;

let x1, x2 ;
x1 = 0;
x2 = 0;

/*function fEps(eps){
    
    for(let i = 0;i < 10;i++){
        console.log("Для достижения точности eps = " + eps + " нужно " + (Math.log(forEps * eps)) / Math.log(2) + " итераций."); 
        eps += 0.01;
    }
}*/



function dikhotomy() {
    /* 
    Пока интервал неопределенности не будет меньше 
    эпсилон, мы не закончим цикл вычисления интервала.
    */
    //console.log("a0 = " + a + " : b0 = "  + b);
   // console.log("b - a = " + (b - a));
    let c = 0;
    while ((b - a) > eps) {
        
        //С каждым шагом заново вычисляем две точки 
        c = (a + b) / 2
       // console.log("center = " + c);
        x1 = c - delta;
        x2 = c + delta; 
       // console.log("x1 = " + x1 + ", x2 = " + x2);
        //console.log("f(x1) = " + func(x1) + ", f(x2) = " + func(x2));
        //console.log("");
         
        if (func(x1) > func(x2)) {
            a = x1; // Отбрасываем левую часть
        } else if (func(x1) <= func(x2)) {
            b = x2; // Отбрасываем правую часть
        }
        counter += 2;
        k++
        //console.log("a" + k + "= "  + a + ", b" + k + "= " + b);
        //console.log("b - a = " + (b - a));
    }
    /* 
    Выводим значение функции в 
    точке из полученного интервала 
    */
    /*console.log("center : " + c);
    console.log("x1 = " + x1 + ", x2 = " + x2);
    console.log("f(x1) = " + func(x1) + ", f(x2) = " + func(x2));
    console.log("");*/
    console.log("xMin : " + (a + b) / 2);
    console.log("F(min) = " + func((a + b) / 2));
    console.log(a + ", " + b);
    console.log('Вычислений функции сделано : ' + counter);
}


//fEps(eps);
dikhotomy()