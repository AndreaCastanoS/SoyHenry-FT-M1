'use strict'
// resolve estos ejercicios usando recursión

// Binary Seach Tree
// 'tiene metodos llamados `insert`, `contains`, `depthFirstForEach`, 'breadthFirstForEach' y 'size'
// corre depth-first (en recorrido "in-order") cuando depthFirstForEach() es ejecutado sin ninguna opcion o con la opcion "in-order
// corre depth-first (en recorrido "pre-order") cuando depthFirstForEach() es ejecutado con la opcion "pre-order"
// corre depth-first (en recorrido "post-order" cuando depthFirstForEach() es ejecutado con la opcion "post-order"
// corre breadth-first cuando breadthFirstForEach() es ejecutado
// Observar imagen de la carpeta "homework" llamada "bst.png". Allí encontraran dibujado el arbol utilizado para los tests
function BinarySearchTree(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

BinarySearchTree.prototype.insert = function(valor){
let nodo = new BinarySearchTree (valor);


 if (valor > this.value){
   if (!this.right){
   this.right = nodo;
 }else{
   this.right.insert (valor);
 }
} else{
  if (!this.left)
  this.left = nodo;
  else{
  this.left.insert (valor);
     }
  }
}

BinarySearchTree.prototype.contains = function (valor){
  
      if(valor === this.value) return true;
       if (valor > this.value){
         if(!this.right){
         return false;
       }
      else{
        return this.right.contains(valor);
       }
      }else{
        if(!this.left){
          return false;
        }else{
         return  this.left.contains (valor);
        }

       }
        
    }

BinarySearchTree.prototype.depthFirstForEach = function(cb , order){
//post- order
if(order == 'post-order'){
if(this.left !== null) this.left.depthFirstForEach(cb, order);
if(this.right!== null) this.right.depthFirstForEach(cb, order);
cb (this.value);
}else if (order == 'pre-order'){
cb(this.value)
if(this.left !== null) this.left.depthFirstForEach(cb ,order);
if(this.right !== null) this.right.depthFirstForEach (cb, order)
}else{
// in-order
  if (this.left !== null) this.left.depthFirstForEach(cb, order)
    cb(this.value)
    if(this.right !== null) this.right.depthFirstForEach(cb, order)
     }
   }
 


BinarySearchTree.prototype.breadthFirstForEach = function(cb, array = []){
  cb (this.value);
  if (this.left) array.push (this.left)
  if (this.right) array.push(this.right)
  array.length && array.shift ().breadthFirstForEach(cb, array)

}

BinarySearchTree.prototype.size = function (){
 if (!this.right && !this.left) return 1;
   if(!this.left) return 1 + this.right.size();
   if (!this.right) return 1 + this.left.size();
   return 1 + this.right.size() + this.left.size();

}

 

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree
};
