const IframeVideo = (props) => {
    const { streamUrl, quality } = props;

    const qualityHandler = (url) => {
        let modifiedUrl = url;

        if(quality === 'hd') {
            if (url.includes('/desudesu/?id=')) {
                modifiedUrl = url.replace('/desudesu/?id=', '/desudesuhd/?id=');
            } else if (url.includes('/stream/?id=')) {
                modifiedUrl = url.replace('/stream/?id=', '/stream/hd/?id=');
            } else if (url.includes('/beta/stream/?id=')) {
                modifiedUrl = url.replace('/beta/stream/?id=', '/beta/stream/hd/?id=');
            } else if (url.includes('/beta/stream2/?id=')) {
                modifiedUrl = url.replace('/beta/stream2/?id=', '/beta/stream2/hd/?id=');
            } else if (url.includes('/desudesu2/?id=')) {
                modifiedUrl = url.replace('/desudesu2/?id=', '/desudesuhd/?id=');
            }
        }

        return modifiedUrl;
    }

    return(
        <>
            <div className="w-full relative pb-[56.25%] mb-3">
                <iframe className="absolute w-full h-full" src={qualityHandler(streamUrl)}  allowFullScreen webkitallowfullscreen="true" mozallowfullscreen="true" frameBorder="0" width="448" height="252"></iframe>
            </div>
        </>
    )
}

export default IframeVideo;