const Footer = () => {
    return(
        <>
            <footer className="flex flex-col md:flex-row justify-around items-start md:items-center bg-bg-kumanime-semi py-7 px-10 h-[300px] mt-4">
                <div className="">
                    <a href="/" className="text-2xl font-bold text-kumanime">
                        Kumanime
                    </a>
                    <div className="">
                        <p className="text-sm font-medium text-gray-500 pt-4">
                            © {new Date().getFullYear()} KUMANIME.FUN | Website made by Mastay
                        </p>
                        <p className="text-sm font-thin text-gray-500 py-3">KUMANIME.FUN does not store any files on our server, we only share link to the media which is hosted on 3rd party services.</p>
                    </div>
                </div>
                <div className="navigation md:flex justify-evenly hidden text-white">
                    <ul className="navi px-10">
                        <li>
                            <a className="font-semibold hover:text-kumanime transition-all" href="/">Home</a>
                        </li>
                        <li>
                            <a className="font-semibold hover:text-kumanime transition-all" href="/completed">Completed</a>
                        </li>
                        <li>
                            <a className="font-semibold hover:text-kumanime transition-all" href="/ongoing">Ongoing</a>
                        </li>
                    </ul>
                    <ul className="navi">
                        <li>
                            <a className="font-semibold hover:text-kumanime transition-all" href="/dmca">DMCA</a>
                        </li>
                        <li>
                            <a className="font-semibold hover:text-kumanime transition-all" href="https://github.com/MastayY">Github</a>
                        </li>
                    </ul>

                </div>
            </footer>
        </>
    )
}

export default Footer;