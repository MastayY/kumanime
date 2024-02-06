const TextDetail = (props) => {
    const {title, content} = props;
    return(
        <p className="text-[14px] py-1"><span className="font-bold">{title}:</span> {content || "-"}</p>
    )
}

export default TextDetail;