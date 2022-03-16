function BST (key, left, right){
    this.key = key;
    this.left = left;
    this.right = right;
}

BST.prototype[Symbol.iterator] = function*(){
    if(this.left){
        yield* this.left; // gwiazdka przy yield oznacza zwracany obiekt iterowalny
    }
    yield this.key;

    if(this.right){ 
        yield* this.right;
    }
}

var tree = new BST(13 ,
                new BST(3 ,
                    new BST(1, null, null),
                    new BST(7, null, null))
                ,new BST(21 ,
                    new BST(19, null, null),
                    new BST(32, null, null)));
for(let node of tree){
    console.log(node);
}


            