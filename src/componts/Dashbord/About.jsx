
export default function About() {
    return (
        <div className=" grid grid-cols-2 bg-[#000] p-[130px] font-serif">
            <div className=" text-white text-center">
                <h1 className=" text-3xl">Who are we ?</h1>
                <p className=" text-2xl text-justify mr-2 mt-10">At TIMELESS <span className="text-amber-300">LUXURY</span>, we craft more than watches we create legacies of character. Guided by our philosophy of ELEGANCE IN EVERY SECOND, each timepiece blends flawless craftsmanship with enduring design. We build companions for your journey, meant to be inherited, not just worn. <span className=" text-amber-300">DISCOVER WATCHES THAT DEFINE YOUR STYLE.</span></p>
            </div>

            <div className=" ">
                <img className="border border-black rounded-4xl" src="../src/assets/2.png" alt="" />
            </div>
        </div>
    )
}
