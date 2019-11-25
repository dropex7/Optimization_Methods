function solve5(fun, δ, x0) {
    let h;
    let x1;
    if (fun(x0) > fun(x0 + δ)) {
      x1 = x0 + δ;
      h = δ;
    } else {
      x1 = x0 - δ;
      h = -δ;
    }
  
    let counter = 0;
    let xk = x1;
    do {
        counter++;
        xk += h;
    } while (fun(xk) > fun(xk + h))
    let xMin = (xk - h + xk) / 2;
    console.log("Итераций выполнено : " + counter);
    console.log("xMin : " + xMin);
    return [xk - h, xk]
  }
  
  const func = x => Math.pow(x-2, 2);
    
  console.log("Итоговая граница : " + solve5(func, 0.001, -2));
  
 