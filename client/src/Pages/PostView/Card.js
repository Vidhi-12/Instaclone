import moment from 'moment';

export default function Card({ post }) {
// console.log(post.date);
    return (
        <>
            <section className="card">
                <section className="card-header">
                    <div>
                        <div className="card-name">{post.name}</div>
                        <div className="card-post">{post.location}</div>
                    </div>
                    <span>
                        <i className="fa fa-ellipsis-h" aria-hidden="true"></i>
                    </span>
                </section>
                <section className="card-image">
                    <img src={post.postImage.url} alt="img" />
                </section>
                <section className="card-actions">
                    <span>
                        <i className="fa fa-heart-o" aria-hidden="true" id="heart-span"></i>
                    </span>
                    <span>
                        <i className="fa fa-paper-plane-o" aria-hidden="true" id="share-span"></i>
                    </span>
                    <span id="date-span">
                        {
                            moment(post.date).format("DD MMM YYYY")
                        }
                    </span>
                </section>
                <section className="likes">
                    {post.likes} likes
                </section>
                <section className="description">
                    {post.description}
                </section>
            </section>
        </>
    )
}