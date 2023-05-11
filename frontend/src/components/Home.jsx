import "./Home.css";
const Home = () => {
    return (
        <div className="home">
            {/* card */}
            <div className="card">
                {/* card header  */}
                <div className="card-header">
                    <div className="card-pic">
                        <img width={100} src="https://images.pexels.com/photos/3775553/pexels-photo-3775553.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    </div>
                    <h5>jay mataji</h5>
                </div>
                {/* card-image */}
                <div className="card-image">
                    <img width={100} src="https://images.pexels.com/photos/6235052/pexels-photo-6235052.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                </div>
                {/* card-content */}
                <div className="card-content">
                    <span class="material-symbols-outlined">
                        favorite
                    </span>
                    <p>1 Like</p>
                    <p>This is amazing</p>
                </div>
                {/* add-comment */}
                <div className="add-comment">
                    <span class="material-symbols-outlined">
                        sentiment_satisfied
                    </span>
                    <input type="text" placeholder="add a comment" />
                    <button className="comment">Post</button>
                </div>
            </div>
        </div>
    )
}

export default Home;