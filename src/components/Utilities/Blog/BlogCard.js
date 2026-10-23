import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ blogData }) => {
    return (
        <Fragment>
            {
                blogData.map(data => {
                    const { slug, thumb, title, author, date, excerpt } = data;
                    return (
                        <div className="col-lg-4 col-md-6" key={slug}>
                            <div className="single-post2 mb-30  p-relative wow fadeInDown animated" data-animation="fadeInRight" data-delay=".4s">
                                <div className="blog-thumb2">
                                    <Link to={`/blog/${slug}`}>
                                        <img src={thumb} alt={title} />
                                    </Link>
                                </div>
                                <div className="blog-content2">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <h4><Link to={`/blog/${slug}`}>{title}</Link></h4>
                                            <div className="b-meta">
                                                <div className="meta-info">
                                                    <ul>
                                                        <li>
                                                            <i className="fal fa-user"></i>
                                                            {author}
                                                        </li>
                                                        <li>
                                                            <i className="fal fa-calendar-alt"></i>{date}
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <p>{excerpt}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </Fragment>
    )
}
export default BlogCard;
