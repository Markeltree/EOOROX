import { Link } from "react-router-dom";

import img1 from '../../../../assets/img/blog/b_details01.jpg'

const PostContent = ({ post }) => {
    const { title, author, date, category, tags, quote, content } = post;
    const [intro, second, ...rest] = content;

    return (
        <div className="details__content pb-30">
            <h2>{title}</h2>
            <div className="meta-info">
                <ul>
                    <li>
                        <i className="fal fa-user"></i>
                        {author}
                    </li>
                    <li>
                        <i className="fal fa-folder"></i>
                        {category}
                    </li>
                    <li>
                        <i className="fal fa-calendar-alt"></i>
                        {date}
                    </li>
                </ul>
            </div>
            <p>{intro}</p>
            <p>{second}</p>
            {quote && (
                <blockquote>
                    <footer>{author}</footer>
                    <h3>{quote}</h3>
                </blockquote>
            )}
            <div className="details__content-img">
                <img src={img1} alt={title} />
            </div>
            {
                rest.map((paragraph, index) => <p key={index}>{paragraph}</p>)
            }
            <div className="row">
                <div className="col-xl-12 col-md-12">
                    <div className="post__tag">
                        <h5>{'Related Tags'}</h5>
                        <ul>
                            {
                                tags.map(tag => (
                                    <li key={tag}>
                                        <Link to={'/blog'}>{tag}</Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PostContent;
