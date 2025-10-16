
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
          <div key={index} className="m-[10px] text-center py-20 border border-4-black  rounded-4xl mt-20 bg-white">
            <h1>name :{product.name}</h1>
            <p> discription :{product.price}</p>
            <p>price : {product.price}</p>
            <div className="flex justify-around pt-10">
               
               <button className="bg-black text-white px-4 py-2 rounded-3xl border hover:text-black hover:bg-white hover:border-black">Buy Now</button>
            <button className="bg-white text-black px-4 py-2 rounded-3xl border hover:text-white hover:bg-black hover:border-white">Cart</button>
            </div>
          </div>

        ))}
      </div>


    </div>

  )
}

export default Products


