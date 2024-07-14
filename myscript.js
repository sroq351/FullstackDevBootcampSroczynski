class Product{

    constructor(width,height,weight){
        this.width = width
        this.height= height
        this.weight= weight
    }
    display (){
        console.log("Product" + this.width + " " + this.height + " " + this.weight)
    }
}

class ProductFactory  {
    createProduct (width,height,weight){
        return new Product(width,height,weight)
    }
}
const factory = new ProductFactory()

const product = factory.createProduct(20,20,20);
const product2 = factory.createProduct(10,20,30);
product.display()
product2.display()