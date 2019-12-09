const gradientDescent = (x0, y0, gamma) => {
  const f = function (x1, x2) {
    return (Math.pow((x1-x2), 2) + 100 * Math.pow((1 - x2), 2));
  }
  let vectGrad ={};
  let nablaFx;
  let curr = {};
  curr.x = x0;
  curr.y = y0;
  const lyamda = 0.0001;


  function mainForMin(){
    let count = 0
    let stop = 0;
    let iter = 0;
    console.log(curr.x, curr.y);
    findGrad(curr.x, curr.y);
    let prevX = curr.x;
    let prevY = curr.y;
    //lyamda = goldenSec(f, curr.x, curr.y, prevX, prevY);  
    //let minstep = goldenSec(f);
    while(f(curr.x, curr.y) > 0.001){
      stop = 0;
      prevX = curr.x;
      prevY = curr.y;
      curr.x = prevX - lyamda * vectGrad.x;
      curr.y = prevY - lyamda * vectGrad.y;
      let xStep = f(curr.x, curr.y);
      let yStep = f(prevX, prevY);
      console.log(curr.x, curr.y);
      while(Math.abs(xStep - yStep) > gamma){
        prevX = curr.x;
        prevY = curr.y;
        curr.x = prevX - lyamda * vectGrad.x;
        curr.y = prevY - lyamda * vectGrad.y;
        xStep = f(curr.x, curr.y);
        yStep = f(prevX, prevY);
        count += 2;
        iter++;
        //console.log(curr.x, curr.y);
        stop++;
        if(stop % 5 == 0){
          //console.log(curr.x, curr.y);
        }else if(stop === 12){
          break;
        }
      }
      findGrad(curr.x, curr.y);
      //break;
      //console.log(vectGrad.x, vectGrad.y);
      //console.log(moduleGrad());
    }
    //console.log("Вычислений функции : " + count);
    console.log(curr.x, curr.y);
    console.log(f(curr.x, curr.y));
  }


/*
//Находим лямду с помощью метода золотого сечения.
function goldenSec(func, x, y, x2, y2){
  const sqrt = Math.sqrt(5);
  a = 0;
  b = 1;
  eps = 0.001;
  phi = (1 + sqrt) / 2;
  resphi = 2 - phi;
  let lyamdaG = {};
  lyamdaG.x = a + resphi * (b - a);
  lyamdaG.y = b - resphi * (b - a);
  let f1, f2;
  let points = {};
  let points2 = {};
  points.x = x - lyamdaG.x * vectGrad.x;
  points.y = y - lyamdaG.y * vectGrad.x;
  points2.x = x2 - lyamdaG.x * vectGrad.x;
  points2.y = y2 - lyamdaG.y * vectGrad.x;
  f1 = f(points.x, points.y);
  f2 = f(points2.x, points2.y);
  let counter = 2;
  let k = 0;
  do{
      if(f1 > f2){
          temp = a - b;
          a = lyamdaG.x;
          points.x = points2.x;
          f1 = f2;
          points2.x = b - resphi * (b - a);
          points2.y = b - resphi * (b - a);
          f2 = f(points2.x, points2.y);
          counter += 1;
          //console.log("a - " + a + ", b - " + b);
      }else{
          temp = a-b;
          b = points2.x;
          points2.x = points.x;
          f2 = f1;
          points.x = a + resphi * (b - a);
          points.y = a + resphi * (b - a);
          f1 = f(points.x, points.x);
          counter += 1;
          //console.log("a - " + a + ", b - " + b);
      }
      k++;
  }while(Math.abs(b - a) > eps){
      xMin = (a + b) / 2;
      console.log("xMin = " + xMin);
}
  return xMin;  
}  
*/  
//Находим вектор градиента.
  function findGrad(x, y){
    let gr1, gr2;
    gr1 = findDerivative(x, fdx);
    gr2 = findDerivative(y, fdy)
    vectGrad.x = gr1;
    vectGrad.y = gr2;
    return vectGrad;
  }
//Модуль градиента.
  function moduleGrad(){
    nablaFx = Math.sqrt(Math.pow(vectGrad.x, 2) + Math.pow(vectGrad.y, 2));
    return nablaFx;
  }
//Общий способ нахождения значения производной.
  function findDerivative(x, f){
    dx = 0.00000001;
    return (f(x + dx) - f(x)) / dx;
  }
  //Общий способ нахождения значения производной.
  function findDerivative2(x, y, f){
    dx = 0.00000001;
    return (f(x + dx, y + dx) - f(x, y)) / dx;
  }
//частная производная для х
  const fdx = function (x) {
    return (101 * Math.pow(x, 2) - 202 * x + 100);
  }
//частная производная для у
  const fdy = function(y) {
    return (Math.pow(y, 2) - 2 * y + 100);
  }
  mainForMin();
}

gradientDescent(-100, -100, 0.00001);




