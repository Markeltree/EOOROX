import React from 'react';
import bgImg from '../../../../assets/img/bg/blog-bg.png';
import BlogCard from "../BlogCard";
import posts from '../../../../data/posts';

const BlogOne = () => {
    return (
        <section id="blog" className="blog-area  p-relative pt-120 pb-120 fix" style={{ background: `url(${bgImg}) no-repeat right bottom` }}>
            <div className="container">
                <div className="row">
                    <BlogCard blogData={posts.slice(0, 3)} />
                </div>
            </div>
        </section>
    )
}
export default BlogOne;
