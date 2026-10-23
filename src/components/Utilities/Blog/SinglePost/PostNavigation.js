import { Link } from "react-router-dom";
import blogIcon from '../../../../assets/img/icon/c_d01.png'

const PostNavigation = ({ prev, next }) => {

    return (

        <div className="posts_navigation pt-35 pb-35">
            <div className="row align-items-center">
                <div className="col-xl-4 col-md-5">
                    {prev && (
                        <div className="prev-link">
                            <span>{'Previous Post'}</span>
                            <h4><Link to={`/blog/${prev.slug}`}>{prev.title}</Link></h4>
                        </div>
                    )}
                </div>
                <div className="col-xl-4 col-md-2 text-left text-md-center">
                    <Link to={'/blog'} className="blog-filter" aria-label="All news">
                        <img src={blogIcon} alt="All news" />
                    </Link>
                </div>
                <div className="col-xl-4 col-md-5">
                    {next && (
                        <div className="next-link text-left text-md-right">
                            <span>{'Next Post'}</span>
                            <h4><Link to={`/blog/${next.slug}`}>{next.title}</Link></h4>
                        </div>
                    )}
                </div>
            </div>
        </div>

    );

}

export default PostNavigation;
