import video1Img from '../../../assets/img/bg/video-img4.png';
import video2Img from '../../../assets/img/bg/video-img5.png';
import video3Img from '../../../assets/img/bg/video-img6.png';
import video4Img from '../../../assets/img/bg/video-img7.png';
import { streamUrl } from '../../../siteConfig';

// Add a `URL` to any item to link it to a specific video;
// otherwise it links to the main channel from siteConfig.
const vdeoList = [
    {
        id: '1',
        thumb: video1Img,
        label: 'Match Highlights',
        description: 'The best plays from our latest games'
    },
    {
        id: '2',
        thumb: video2Img,
        label: 'Full Match Replays',
        description: 'Catch up on every round you missed'
    },
    {
        id: '3',
        thumb: video3Img,
        label: 'Behind the Scenes',
        description: 'Life inside the Eoorox squad'
    },
    {
        id: '4',
        thumb: video4Img,
        label: 'Tips and Guides',
        description: 'Level up with advice from our pros'
    },
]

const VideoList = () => {
    return (
        <ul>
            {
                vdeoList.map(data => {
                    const { id, thumb, URL, label, description } = data;
                    const link = URL || streamUrl;
                    return (
                        <li key={id}>
                            <div className="video-tumb p-relative ">
                                <div className="img">
                                    <img src={thumb} alt={label} />
                                    {link && (
                                        <div className="play-btn">
                                            <a href={link} target="_blank" rel="noopener noreferrer" className="popup-video" aria-label={`Watch ${label}`}>
                                                <i className="flaticon-play-button"></i>
                                            </a>
                                        </div>
                                    )}
                                </div>
                                <div className="text">
                                    <h4>{label}</h4>
                                    <p>{description}</p>
                                </div>
                            </div>
                        </li>
                    )
                })
            }

        </ul>
    )
}
export default VideoList;
