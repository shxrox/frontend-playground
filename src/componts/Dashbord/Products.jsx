
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
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shopping-cart-icon lucide-shopping-cart"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
            </div>
          </div>

        ))}
      </div>


    </div>

  )
}

export default Products


