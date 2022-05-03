'use strict'
// Implementa la clase LinkedList
// tiene metodos `add`, `remove`, y `search`
// add: Agrega un nuevo nodo en el final de la lista
// Ej:      Head --> null
// add(1):  Head --> 1 --> null
// add(2):  Head --> 1 --> 2 --> null
// remove:  Elimina el último nodo de la lista y devuelve su valor. (Tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía)
// Ej:         Head --> 1
// remove():   Head --> null y devuelve 1
// search: Busca un valor dentro de la lista. Puede recibir un valor o una función. Si no hubiera resultados, devuelve null.

function LinkedList() {
this.head = null;
}

function Node(value){
  this.value = value;
  this.next = null;
}
 
let list = new LinkedList();

LinkedList.prototype.add= function (value){
  let node = new Node (value);

  
   if(!this.head){
    this.head = node;
  }else{
    let current = this.head; 
    while (current.next){
      current = current.next;
    }
  current.next = node;
  }
} 


LinkedList.prototype.remove = function (){
 


  if (this.head == null) return null;
if  (!this.head.next){
  var aux1 = this.head.value;  
     this.head = null

     return aux1;
  }
 else {
      let current = this.head
      while (current.next.next){
        current = current.next;
      }
        var aux = current.next.value;
        current.next = null;
      
      return aux;
    }

}

LinkedList.prototype.search = function (argumento){
  
  let current = this.head;
  if(!current) return null;

  while (current){
     if (typeof argumento === 'function'){
       if ( argumento(current.value)){
       return current.value;
       }
     }else {

    if(current.value === argumento) return argumento;
     }
    current = current.next; 
     
  }
     return null;
}







// Hash Table( ver información en: https://es.wikipedia.org/wiki/Tabla_hash)
// Una Hash table contiene un arreglo de "contenedores" o buckets donde puede guardar información.
// Para este ejercicio, generar 35 buckets para la Hash Table, y realizar los métodos, get, hasKey
// Para almacenar un valor asociado a una key (string):
//    - Se pasa ese valor a la función hash(Pista: usar la función charCodeAt), que determina la posición en que debe ir en el arreglo. 
//    - Luego el elemento se inserta(llamando al método set) en la posición(índice) devuelta. 
// Para buscar el valor por su key:
//    - Sólo habrá que pasarle a la función hash la clave del elemento a buscar y ésta determinará la posición 
//      en que se encuentra.
//    - Usar el número obtenido, para buscar(llamando al método get) el contenedor o bucket donde está el valor.
//    - Retornar dicho valor.

function HashTable() {
  this.numBuckets = 35,
  this.buckets = [];

}

HashTable.prototype.hash = function (key){
  var acum = 0;
  for (var i = 0; i < key.length; i++){
    acum = acum + key.charCodeAt (i);
  }
  return acum % this.numBuckets;
}

HashTable.prototype.set = function (key, value){
  if (typeof  key !== 'string') throw new TypeError ('keys must be string');
  var index = this.hash (key);
  if (!this.buckets[index]){ 
    this.buckets[index]= {}
  }
  this.buckets[index][key] = value;
}

HashTable.prototype.get = function (key) {
var index = this.hash (key);
return this.buckets[index][key];
}

HashTable.prototype.hasKey = function () {
  var index  = this.hash (key);
  return this.buckets[index]. hasOwnProperty (key)
  
}










// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Node,
  LinkedList,
  HashTable
};
