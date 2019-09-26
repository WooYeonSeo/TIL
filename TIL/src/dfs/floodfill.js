

function floodFill(x,y,oldcolor,newcolor){
    if(getpixel(x,y) === oldcolor){
        //putpixel(x,y,newcolor);
        countPixel(color,cnt); //
        floodFill(x+1,y,oldcolor,newcolor);
        floodFill(x,y+1,oldcolor,newcolor);
        floodFill(x-1,y,oldcolor,newcolor);
        floodFill(x,y-1,oldcolor,newcolor);
    }
}

function main(m,n,picture,answer){
    let width = m, height =n;
    let cnt = 0;
    let maxcnt = 0;
    // 시작이니까 
    floodFill(x,y , picture[0][0], picture[0][0]);
    
    // return :  몇 개의 영역, 가장 큰 영역은 몇 칸
    return [cnt,maxcnt];
}

function getpixel(x,y){
    return picture[x][y];
}

let picture = [
    [1,1,1,0],
    [1,2,2,0],
    [1,0,0,1],
    [0,0,0,1],
    [0,0,0,3],
    [0,0,0,3]
];