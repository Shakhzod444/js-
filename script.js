// Array.prototype.min = function(){
//    let min = parseInt(this[this.length-1]), el;
//    for(let i=this.length-2; i>=0; i--){
//        el = parseInt(this[i]);
//        if(el<min){
//            min = el;
//       //  } else if(let g=this.length[-2]; g>=0; g--){
//       //    lel = parseInt(this[i]);
//        }
//    }
//    return min;
// };


// let array = [ ];

// console.log(array.min())
// function genagein() {
//     let password = ''
//     let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
//     l
// }



let shakh = [10, 1, 35, 2, 0 , 23,  14];

   console.log('Не сортированная: ' + shakh);

let sorted = shakh.map(function() {
       return this.splice(this.indexOf(Math.min(...this)), 1);
} ,shakh.slice());

console.log('Сортированная: ' + sorted);


// let arr = [3, 2, 1, 1, 5, 4, 1222, 2354 , 12 , -1, 12, 2, 0],
//     out = [];
// for (; arr.length;) {
//      out.push(arr.splice(arr.indexOf(Math.min(...arr)), 1)[0]) 
//     }
// console.log(out)

