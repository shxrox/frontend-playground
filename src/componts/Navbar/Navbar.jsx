import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className=' text-white bg-[#000000]'>
      <div className='flex justify-between mx-20 py-6 font-serif'>
        <div>
          <Link to="/">
           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock9-icon lucide-clock-9"><path d="M12 6v6H8"/><circle cx="12" cy="12" r="10"/></svg>
           </Link>
        </div>
        <div  className=' flex justify-between space-x-7 '>
          <Link data-aos="fade-down" data-aos-duration="500" to="/">Home</Link>
          <Link data-aos="fade-down" data-aos-duration="1000" to="/Products">Products</Link>
          <Link data-aos="fade-down" data-aos-duration="1500" to="/About">About</Link>
          <Link data-aos="fade-down" data-aos-duration="2000" to="/#">Contact us</Link>
        </div>
      </div>
      <div>
      </div>
    </div>
  )
}

export default Navbar