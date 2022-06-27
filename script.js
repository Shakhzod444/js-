Array.prototype.min = function(){
   let min = parseInt(this[this.length-1]), el;
   for(let i=this.length-2; i>=0; i--){
       el = parseInt(this[i]);
       if(el<min){
           min = el;
      //  } else if(let g=this.length[-2]; g>=0; g--){
      //    lel = parseInt(this[i]);
       }
   }
   return min;
};


let array = [ ];

console.log(array.min())

