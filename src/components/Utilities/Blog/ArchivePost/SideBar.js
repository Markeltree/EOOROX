import { Link } from "react-router-dom";
import posts from "../../../../data/posts";
import SocialLinks, { hasSocialLinks } from "../../SocialLinks/SocialLinks";

const categories = posts.reduce((acc, { category }) => {
    acc[category] = (acc[category] || 0) + 1;
    return acc;
}, {});

const tags = [...new Set(posts.flatMap(post => post.tags))];

const SideBar = () => {
    return (

        <div className="col-sm-12 col-md-12 col-lg-4">
            <aside className="sidebar-widget">
                {hasSocialLinks && (
                    <section id="custom_html-5" className="widget_text widget widget_custom_html">
                        <h2 className="widget-title">{'Follow Us'}</h2>
                        <div className="textwidget custom-html-widget">
                            <div className="widget-social">
                                <SocialLinks />
                            </div>
                        </div>
                    </section>
                )}
                <section id="categories-1" className="widget widget_categories">
                    <h2 className="widget-title">{'Categories'}</h2>
                    <ul>
                        {
                            Object.entries(categories).map(([cat, count]) => (
                                <li key={cat} className="cat-item cat-item-16">
                                    <Link to={'/blog'}>{cat}</Link> ({count})
                                </li>
                            ))
                        }
                    </ul>
                </section>
                <section id="recent-posts-4" className="widget widget_recent_entries">
                    <h2 className="widget-title">{'Recent Posts'}</h2>
                    <ul>
                        {
                            posts.slice(0, 3).map(({ slug, title, date }) => (
                                <li key={slug}> <Link to={`/blog/${slug}`}>{title}</Link>
                                    <span className="post-date">{date}</span>
                                </li>
                            ))
                        }
                    </ul>
                </section>
                <section id="tag_cloud-1" className="widget widget_tag_cloud">
                    <h2 className="widget-title">{'Tags'}</h2>
                    <div className="tagcloud">
                        {
                            tags.map(tag => (
                                <Link key={tag} to={'/blog'} className="tag-cloud-link tag-link-28 tag-link-position-1" style={{ fontSize: '12pt' }}>
                                    {tag}
                                </Link>
                            ))
                        }
                    </div>
                </section>
            </aside>
        </div>

    );
}

export default SideBar;
