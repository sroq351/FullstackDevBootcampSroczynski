class AppConfig {
   constructor (number =15){
    if(AppConfig.exists) {
        return AppConfig.instance
    }
    this.randomNumber=Math.random()
    this.number=number
    AppConfig.exists = true
    AppConfig.instance = this
    return this 
    }
}


const configObject = new AppConfig (8)
const configObject2= new AppConfig (1)
const configObject3= new AppConfig (6)

console.log (configObject)
console.log (configObject2)
console.log (configObject3)
