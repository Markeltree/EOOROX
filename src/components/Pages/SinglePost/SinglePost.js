import React from "react";
import { useParams } from "react-router-dom";
import SideBar from "../../Utilities/Blog/ArchivePost/SideBar";
import Breadcrumb from "../../Utilities/Breadcrumb/Breadcrumb";

import PostNavigation from "../../Utilities/Blog/SinglePost/PostNavigation";
import RelatedPost from "../../Utilities/Blog/SinglePost/RelatedPost";
import AuthorInfo from "../../Utilities/Blog/SinglePost/AuthorInfo";
import PostContent from "../../Utilities/Blog/SinglePost/PostContent";
import Error404 from "../404";
import posts from "../../../data/posts";

const SinglePost = () => {
    const { slug } = useParams();
    const index = posts.findIndex(post => post.slug === slug);

    if (index === -1) {
        return <Error404 />;
    }

    const post = posts[index];

    return (

        <React.Fragment>
            <Breadcrumb pageTitle={'News'} currentPage={post.title} />

            <section className="inner-blog b-details-p pb-90">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="blog-details-wrap">
                                {/* Post Content */}
                                <PostContent post={post} />

                                {/* Post Navigation */}
                                <PostNavigation
                                    prev={posts[index + 1]}
                                    next={posts[index - 1]} />

                                {/* Related Post */}
                                <RelatedPost posts={posts.filter(p => p.slug !== slug).slice(0, 2)} />

                                {/* Author */}
                                <AuthorInfo />

                            </div>
                        </div>
                        {/* Right sidebar */}
                        <SideBar />
                    </div>
                </div>
            </section>
        </React.Fragment>

    );
}

export default SinglePost;
