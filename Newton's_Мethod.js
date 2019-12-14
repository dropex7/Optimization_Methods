const Newton = (x1, x2, eps) => {
    let HessianMatrix = new Array();
    let vectGrad = {};
    let x, y, tempModGrad, counter = 0;
    x = x1;
    y = x2;
    //Исходная функция.
    const f = function(x, y) {
        return Math.exp(-(Math.pow(x, 2) - Math.pow(y, 2))) * (2 * Math.pow(x, 2) + 3 * Math.pow(y, 2));
    }
    //частная производная для х.
    const fdx = function (x, y) {
        return (-2 * x * (2 * Math.pow(x, 2) + 3 * Math.pow(y, 2)) * Math.exp(-Math.pow(x, 2) - Math.pow(y, 2)) + 4 * x * Math.exp(-Math.pow(x, 2) - Math.pow(y, 2)));
    }
    //частная производная для у.
    const fdy = function(x, y) {
        return (-2 * y * (2 * Math.pow(x, 2) + 3 * Math.pow(y, 2)) * Math.exp(-Math.pow(x, 2) - Math.pow(y, 2)) + 6 * y * Math.exp(-Math.pow(x, 2) - Math.pow(y, 2)));
    }
    //частная производная второго порядка для х.
    const fdx2 = function (x, y) {
        let e = Math.exp(-Math.pow(x, 2) - Math.pow(y, 2));
        let x2 = Math.pow(x,2);
        let y2 = Math.pow(y,2);
        return (4 * x2 * (2 * x2 + 3 * y2) * e - 16 * x2 * e + (-4 * x2 - 6 * y2) * e + 4 * e);
    }
    //частная производная второго порядка для у.
    const fdy2 = function(x, y) {
        let e = Math.exp(-Math.pow(x, 2) - Math.pow(y, 2));
        let x2 = Math.pow(x,2);
        let y2 = Math.pow(y,2);
        return (4 * y2 * (2 * x2 + 3 * y2) * e - 24 * y2 * e + (-4 * x2 - 6 * y2) * e + 6 * e);
    }
    //смешанная производная. 
    const fdxy = function(x, y){
        let e = Math.exp(-Math.pow(x, 2) - Math.pow(y, 2));
        let x2 = Math.pow(x,2);
        let y2 = Math.pow(y,2);
        return 4 * x * y * (2 * x2 + 3 * y2) * e - 20 * x * y * e;
    }
    //Функция для нахождения градиента.
    function findGrad(x, y){
        vectGrad.x = fdx(x, y);
        vectGrad.y = fdy(x, y);
        return vectGrad;
    }
    //Модуль градиента.
    function moduleGrad(){
        nablaFx = Math.sqrt(Math.pow(vectGrad.x, 2) + Math.pow(vectGrad.y, 2));
        return nablaFx;
    }
    //Общий способ нахождения значения производной.
    function findDerivative(x, y, f){
        dx = 0.00000001;
        return (f((x + dx), (y + dx)) - f(x, y)) / dx;
    }
    //Фунция для нахождения матрицы Гессе и обратного гессиана.
    function findHessian(x, y){
        HessianMatrix = [[fdx2(x, y), fdxy(x, y)],[fdxy(x, y), fdy2(x, y)]];
        let G = 1 / (HessianMatrix[0][0] * HessianMatrix[1][1] - HessianMatrix[0][1] * HessianMatrix[1][0]);
        HessianMatrix[0][1] *= -1;
        HessianMatrix[1][0] *= -1;
        return G;
    }
    //Сам алгоритм Метода Ньютона.
    console.log("-----------------------");
    do{
        findGrad(x, y);
        prevX = x;
        prevY = y;
        let G = findHessian(prevX,prevY);
        let res = {};
        console.log("Старые значения: х = " + x + ", у = " + y);
        console.log("Старое F(x,y) = " + f(x,y));
        res.x = HessianMatrix[0][0] * vectGrad.x + HessianMatrix[0][1] * vectGrad.y;
        res.y = HessianMatrix[1][0] * vectGrad.x + HessianMatrix[1][1] * vectGrad.y;
        x = prevX - G * res.x;
        y = prevY - G * res.y;
        console.log("Новые значения: х = " + x + ", у = " + y);
        console.log("F(x,y) = " + f(x,y));
        console.log("-----------------------");
        tempModGrad = moduleGrad();
        counter++;
    }while(tempModGrad > eps);
    console.log("Итераций выполнено: " + counter);
    console.log("Итоговый модуль градиента: " + tempModGrad);
}
Newton(0.2, 0.1, 0.001);

