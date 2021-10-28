const Animal = require('./animal')
const Employee = require('./employee')
const write = require('./write')
const read = require('./read')
const update = require('./update')
const rename = require('./rename')
const deleteFile = require('./delete')


mike = new Employee("mike",2000)
alice = new Employee("alice",5000) //go girl.
brandon = new Employee("brandon",3500)

const employees = [mike, alice, brandon]

eagle = new Animal("Bird", "Bald Eagle")
snake = new Animal("Snake", "Western Diamondback")
elephant = new Animal("Mammal", "Asian Elephant")

const animals = [eagle, snake, elephant]

write('employees.json', employees)
read('employees.json')
//I've solved the async contact problem between the update and read functions by using setTimeout functions. 
//But I do not understand how it is relevant yet.
/* BOOTCAMP'deki arkadaşlar için:
    Eger timeout kullanmazsam, json dosyamı her read fonksiyonu icin her zaman en son update isleminden 
    sonraki degerler ile cagırıyor. Bu sorunu setTimeout kullanarak aştım fakat zaten update fonksiyonumu 
    async await yapısına göre yazdım.read fonksiyonu icindeki promisimi update fonksyionuna bagladım ve 
    programa sırayla calısmalarını söyledim.Ama olmuyor.
*/
setTimeout(()=>{ //web api saymaya baslıyo 1.2..3
    update('employees.json',animals)
},2000)

setTimeout(()=>{
    rename('employees.json', 'animals.json')
},4000)

setTimeout(()=>{
    read('animals.json')
}, 6000)

setTimeout(()=>{
    deleteFile('animals.json')
}, 8000)


// update('employees.json', animals)
// read('employees.json')
