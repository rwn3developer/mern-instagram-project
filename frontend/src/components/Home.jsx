import "./Home.css";
const Home = () => {
    return (
        <div className="home">
            {/* card */}
            <div className="card">
                {/* card header  */}
                <div className="card-header">
                    <div className="card-pic">
                        <img  src="https://plus.unsplash.com/premium_photo-1669748157807-30514e416843?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />
                    </div>
                    <h5>jay mataji</h5>
                </div>
                {/* card-image */}
                <div className="card-image">
                    <img  src="https://plus.unsplash.com/premium_photo-1669748157807-30514e416843?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />
                </div>
                {/* card-content */}
                <div className="card-content">
                    <span className="material-symbols-outlined">
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