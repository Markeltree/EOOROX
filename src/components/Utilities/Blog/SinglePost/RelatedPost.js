import { Link } from 'react-router-dom';
import img3 from '../../../../assets/img/blog/b_details03.jpg'
import img4 from '../../../../assets/img/blog/b_details04.jpg'

const thumbs = [img3, img4];

const RelatedPost = ({ posts }) => {

    return (
        <div className="related__post mt-45 mb-85">
            <div className="post-title">
                <h4>{'Related Posts'}</h4>
            </div>
            <div className="row">
                {
                    posts.map(({ slug, title, excerpt }, index) => (
                        <div className="col-md-6" key={slug}>
                            <div className="related-post-wrap mb-30">
                                <div className="post-thumb">
                                    <img src={thumbs[index % thumbs.length]} alt={title} />
                                </div>
                                <div className="rp__content">
                                    <h3>
                                        <Link to={`/blog/${slug}`}>{title}</Link>
                                    </h3>
                                    <p>{excerpt}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );

}

export default RelatedPost;
