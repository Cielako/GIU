function BST (key, left, right){
    this.key = key;
    if(left)
        this.left = left;
    if(right)    
        this.right = right;
}

BST.prototype[Symbol.iterator] = function*(){
    if(this.left){
        //yield* this.left; // gwiazdka przy yield oznacza zwracany obiekt iterowalny (za pomocą rekurencji)
        for(let x of this.left)
            yield x;
    }
    yield this.key;
    if(this.right){ 
        yield* this.right;
    }
}

let tree = new BST(13 ,
                new BST(3 ,
                    new BST(1),
                    new BST(7))
                ,new BST(21 ,
                    new BST(19),
                    new BST(32)));
for(let node of tree){
    console.log(node);
}


            