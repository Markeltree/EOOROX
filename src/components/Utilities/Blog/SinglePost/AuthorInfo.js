import avatar from '../../../../assets/img/blog/comment/avatar.png'
import siteConfig from '../../../../siteConfig';
import SocialLinks from '../../SocialLinks/SocialLinks';

const AuthorInfo = () => {
    return (

        <div className="avatar__wrap text-center mb-45">
            <div className="avatar-img">
                <img src={avatar} alt={`${siteConfig.brandName} Team`} />
            </div>
            <div className="avatar__info">
                <h5>{`${siteConfig.brandName} Team`}</h5>
                <div className="avatar__info-social">
                    <SocialLinks />
                </div>
            </div>
            <div className="avatar__wrap-content">
                <p>{`Stories, updates and insights from the players, coaches and staff behind ${siteConfig.brandName}. Follow along for roster news, match recaps and a look at life inside a competitive esports organization.`}</p>
            </div>
        </div>

    );
}

export default AuthorInfo;
