// A list of provinces:
const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State']

// A list of names:
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie']

// A list of products with prices:
const products = [
  { product: 'banana', price: "2" },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: "8" },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

// log each province to console
provinces.forEach((province) =>{
   console.log(province)
})

// come back to do this
names.forEach((name) => {
  console.log(name)
})

// For Each Loop takes a name and index as a varieble

names.forEach((name, index) => {
  console.log(`${name} (${provinces[index]})`);
});


let newProv = provinces.map(province => province.toUpperCase());
console.log(newProv)

let nameLengths = names.map( name => name.length)
console.log(nameLengths)

console.log(provinces.sort())

// logs number of provinces not including Cape
let filteredArr = provinces.filter((province) => !province.includes("Cape"))
console.log(filteredArr.length)

// Checks if includes S
let ContainS = names.map((name) => name.includes("S"))
console.log(ContainS)
