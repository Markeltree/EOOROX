import React from "react";
import { Link } from "react-router-dom";
import SideBar from "../../Utilities/Blog/ArchivePost/SideBar";
import Breadcrumb from "../../Utilities/Breadcrumb/Breadcrumb";
import posts from "../../../data/posts";

const BlogPost = () => {

    return (
        <React.Fragment>
            <Breadcrumb pageTitle={'News'} currentPage={'News'} />

            <section className="inner-blog pb-90">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            {
                                posts.map(data => {
                                    const { slug, thumb, author, title, excerpt, category, date } = data;
                                    return (
                                        <div className="bsingle__post mb-50" key={slug}>
                                            <div className="bsingle__post-thumb">
                                                <Link to={`/blog/${slug}`}>
                                                    <img src={thumb} alt={title} />
                                                </Link>
                                            </div>
                                            <div className="bsingle__content">
                                                <div className="admin">
                                                    <i className="far fa-user"></i>
                                                    {`by ${author}`}
                                                </div>
                                                <h2>
                                                    <Link to={`/blog/${slug}`}>{title}</Link>
                                                </h2>
                                                <p>{excerpt}</p>
                                                <div className="meta-info">
                                                    <ul>
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
                                            </div>
                                        </div>
                                    );
                                })
                            }
                        </div>
                        {/* Right Sidebar */}
                        <SideBar />
                    </div>
                </div>
            </section>
        </React.Fragment>
    );

}
export default BlogPost;
