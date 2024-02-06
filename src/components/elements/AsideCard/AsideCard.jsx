const AsideCard = (props) => {
    const {imgUrl, title, href, topics, uploaded} = props;
    return(
        <>
            <div className="aside-card py-2 overflow-hidden text-white">
                <div className="poster float-left mr-2">
                    <img src={imgUrl} className="aspect-[3/4] max-w-[100px] object-cover" alt={title} loading="lazy" />
                </div>
                <div className="detail px-2">
                    <a href={href} target="_blank" className="font-bold text-[16px] hover:text-kumanime transition-all duration-200">{title}</a>
                    <div>
                        <p className="text-xs text-slate-300">
                            Uploaded : {uploaded}
                        </p>
                        <div className="topics flex gap-2 mt-2">
                            {
                                topics.join(', ').split(',').map((topic, index) => (
                                    <p className="text-xs text-wrap py-[1px] px-2 text-white bg-kumanime rounded-lg" key={index}>
                                        {topic}
                                    </p>
                                    
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AsideCard;