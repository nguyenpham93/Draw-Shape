exports.Draw = class {

    constructor(rows,cols){
        this.rows = rows;
        this.cols = cols;
    }

    /** 
    * @param shape : hình muốn vẽ
    * @param num : số đường zigzac (dùng để vẽ zizac) 
    */
    drawShape(shape,num){
        if(num) this.cols *= num;
        console.log(this.cols);
        for(let i = 0; i < this.rows; i++){
            console.log(this.drawLine(i,this.cols,shape,num));
        }
    }

    drawLine(rowIndex,cols,shape,num){
        let str = "";
        for(let colIndex = 0; colIndex < cols; colIndex++){
            str = str.concat(shape(rowIndex, colIndex, this.rows, this.cols,num) ? '+' : ' ');
        }
        return str;
    }
    ZigZar(rowIndex,colIndex,rows,cols,num){
        let thick = rows - 1;
        for(let i = 1; i <= num;i++){
            if(i % 2 != 0){
                if(colIndex === (thick * i - rowIndex)) return true;
            }else{
                if(colIndex === (thick * i - (thick-rowIndex))) return true;
            }
        }
    }
    // Spiral(rowIndex,colIndex){
    //     let w = 11;
    //     let h = 11;
    //     let flag = 1;
    //     let count = 0;
    //     if(rowIndex % 2 == 0){
    //         if(colIndex % 2 != 0){
                
    //             return false;
    //         }
    //         return true;
    //     }
    // }
}

