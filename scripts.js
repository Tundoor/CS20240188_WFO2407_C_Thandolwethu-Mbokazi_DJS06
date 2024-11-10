// A list of provinces:
const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State']

// A list of names:
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie']

// A list of products with prices:
const products = [
  { product: 'banana', price: "2" },
  { product: 'mango', price: 6 },
  { product: 'potato', price: '' },
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


// reduce mapping object
// name is in square brackets so that it takes name and makes it a key in the object created
// index gets us the indices of the differen provinces
let reduceMethod = names.reduce( (accumulator, name, index) => {
  accumulator[name] = provinces[index];
  return accumulator;
}, {} )

// logs an array of names to the console

console.log(products.map( (productItem) => productItem.product))

// Gets the values of the diffent names in the array and then filters out those with a length greater than five
console.log( 
  products.map( (productItem) => productItem.product).filter((name) =>  name.length > 5)

)

// Fliter out prices with no prices and changes them into numbers
console.log (
  products.filter((product) => product.price !== "")
     .map((product) => Number(product.price))
)

// adds the prices together
console.log( "Total price:" ,
  products.filter( (product) => product.price !== "")
    .map((product) => Number(product.price))
  .reduce((accumulator, current) => accumulator + current, 0))

  //Make all product names string thats concatenated 

  console.log(
    products.map((product) => product.product).reduce((acc, current) => acc + current)
    )

    // Logs highest and lowest price
    // The spread operator is used to get the individual prices fromm the array

    console.log(
      "Highest:", Math.max(...products.map((product) => product.price)),
      "Lowest:", Math.min(...products.map((product) => product.price)))

      //Change the key and value of the object
    
      console.log(
        products.map(product => 
          // object entries returned an array nested in an array and 
          //then reduce is used to make it an object
          Object.entries(product).reduce((acc, [key, value]) => {
            // checks the key values of the object and changes them
            if (key === 'product') {
              acc['name'] = value;
            } else if (key === 'price') {
              acc['cost'] = value;
            }
            return acc;
          }, {})
        )
      )