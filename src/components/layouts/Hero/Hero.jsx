import "./Hero.css";

const Hero = () => {
    return (
        <>
            <div className="flex bg-bg-kumanime justify-evenly items-center m-auto h-[80vh] font-poppins">
                <div className="hero-text max-w-[40%] text-white">
                    <h3 className="font-bold text-xl md:text-2xl lg:text-4xl text-center md:text-left">Selamat Datang di <span className="text-kumanime">Kumanime</span></h3>
                    <p className="text-xs md:text-sm mt-3 mb-6 text-center md:text-left">Kumanime adalah web untuk menonton anime subtitle indonesia gratis tanpa iklan yang membuat pengguna mendapat kepuasan dalam menonton anime tanpa diganggu iklan.</p>
                </div>
                <img src="yuna-kuma.png" alt="yuna kuma bear" className="w-[200px] hidden md:block" />
            </div>
        </>
    )
}

export default Hero;