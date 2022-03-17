function BST(key,left,right){
    this.key = key;
    this.left = left;
    this.right = right;
}

BST.prototype[Symbol.iterator] = function*(){   
    if(this.left){
        yield* this.left;
    }
    yield this.key;
    if(this.right){
        yield* this.right;
    }

}

var z = new BST(10,
            new BST(6,
                new BST(3,
                    new BST(1,null,null),
                    new BST(4,null,null)),
                new BST(7,
                    null,
                    new BST(9,null,null))),
            new BST(21,
                new BST(15,
                    new BST(12,null,null),
                    new BST(19,null,null)),
                new BST(25,
                    null,
                    new BST(30,null,null))));

for(let x of z) console.log(x);
