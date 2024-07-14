const Offer =function(brand,model,prize){
    this.brand= brand
    this.model= model
    this.prize = prize
}
Offer.prototype.cost100km= () => console.log(37)

const offer1 = new Offer ("Opel","Kadett","2000")

offer1.cost100km()