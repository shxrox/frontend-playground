
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
    <div className='px-20 bg-[#3a3a3a] '>

      <div className=" grid grid-cols-3 ">
        {products.map((product, index) => (
          <div key={index} className="m-[10px] text-center py-20 border rounded-4xl mt-20 bg-white">
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


