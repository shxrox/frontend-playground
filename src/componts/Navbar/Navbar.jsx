import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className=' text-white bg-[#000000f8]'>
      <div className='flex justify-between mx-20 py-6 font-serif'>
        <div>
          <Link to="#">
           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-clock9-icon lucide-clock-9"><path d="M12 6v6H8"/><circle cx="12" cy="12" r="10"/></svg>
           </Link>
        </div>
        <div className='flex justify-between space-x-7 '>
          <Link to="/">Home</Link>
          <Link to="/#">About</Link>
          <Link to="/#">Projects</Link>
          <Link to="/#">Contact us</Link>
        </div>
      </div>
      <div>
      </div>
    </div>
  )
}

export default Navbar