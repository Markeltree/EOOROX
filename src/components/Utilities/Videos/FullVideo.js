import fullImg from '../../../assets/img/bg/video-img3.png';
import { streamUrl } from '../../../siteConfig';

const bigVdeo = {
    thumb: fullImg,
    label: 'Eoorox Main Channel',
    description: 'Official matches, scrims and community nights'
}

const FullVideo = () => {
    const { thumb, label, description } = bigVdeo;
    return (
        <div className="video-full-img p-relative ">
            <img src={thumb} alt={label} />
            <div className="play-btn">
                {streamUrl && (
                    <a href={streamUrl} target="_blank" rel="noopener noreferrer" className="popup-video" aria-label="Watch live">
                        <i className="flaticon-play-button"></i>
                    </a>
                )}
                <h4>{label}</h4>
                <p>{description}</p>
            </div>
        </div>
    )
}
export default FullVideo;
