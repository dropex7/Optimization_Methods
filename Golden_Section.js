function goldenSec(func, a, b, ε){
    const sqrt = Math.sqrt(5);
    phi = (1 + sqrt) / 2;
    resphi = 2 - phi;
    let x1 = a + resphi * (b - a);
    let x2 = b - resphi * (b - a);
    let f1, f2;
    f1 = func(x1);
    f2 = func(x2);
    let counter = 2;
    let k = 0;
    //console.log("a0 = " + a + " : b0 = "  + b);
    console.log("b - a = " + (b - a));
    /*console.log("x1 = " + x1 + ", x2 = " + x2);
    console.log("f(x1) = " + f1 + ", f(x2) = " + f2);*/
    console.log("");
    let diff, temp;
    do{
        
        if(f1 > f2){
            temp = a-b;
            a = x1;
            x1 = x2;
            f1 = f2;
            x2 = b - resphi * (b - a);
            f2 = func(x2);
            counter += 1;
            diff = (a - b) / temp;
            console.log("Разница : " + diff);
        }else{
            temp = a-b;
            b = x2;
            x2 = x1;
            f2 = f1;
            x1 = a + resphi * (b - a);
            f1 = func(x1);
            counter += 1;
            diff =  (a - b) / temp;
            console.log("Разница : " + diff);
        }
        k++;
        //console.log("a" + k + "= "  + a + ", b" + k + "= " + b);
        //console.log("b - a = " + (b - a));
        /*
        console.log("x1 = " + x1 + ", x2 = " + x2);
        console.log("f(x1) = " + func(x1) + ", f(x2) = " + func(x2));
        console.log("");*/
    }while(Math.abs(b - a) > ε){
        xMin = (a + b) / 2;
        console.log("xMin = " + xMin);
        console.log("Вычислений функции сделано : " + counter);
        console.log("Результат функции : " + func(xMin))
        return [a, b];
    }
    
}

const func = (x => Math.pow(x-2, 2));
let a, b, ε;
a = -2;
b = 20;
ε = 0.001;
console.log("Итоговые границы : " + goldenSec(func, a, b, ε));
