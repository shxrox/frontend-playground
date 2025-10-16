
function Products() {

  const products = [
    {
      name: "product1",
      discription: "discription",
      price: 111,
    },
    {
      name: "product1",
      discription: "discription",
      price: 111,
    },
    {
      name: "product1",
      discription: "discription",
      price: 111,
    },
    {
      name: "product1",
      discription: "discription",
      price: 111,
    },
    {
      name: "product1",
      discription: "discription",
      price: 111,
    },
    {
      name: "product1",
      discription: "discription",
      price: 111,
    },
  ]

  return (
    <div className=' pb-[300px] bg-[#3a3a3a]'>

      <div className=" flex justify-between">
        {products.map((product, index) => (
          <div key={index} className=" px-10 py-20 border rounded-4xl mt-20 bg-white">
            <h1>name :{product.name}</h1>
            <p> discription :{product.price}</p>
            <p>price : {product.price}</p>
            <button> buy now</button>
            <button>Add to cart</button>
          </div>

        ))}
      </div>


    </div>

  )
}

export default Products


