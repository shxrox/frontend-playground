import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className=' text-white bg-[#000000f8]'>
      <div className='flex justify-between mx-20 py-6 font-serif'>
        <div>
          <Link to="#">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shirt-icon lucide-shirt"><path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z" /></svg>
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