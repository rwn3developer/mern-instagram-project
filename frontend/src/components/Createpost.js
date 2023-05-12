import './Createpost.css';
const Createpost = () => {
    return (
        <>
            <div className="createPost">
                {/* header */}
                <div className="post-header">
                    <h4 style={{margin:"3px auto"}}>Create New Post</h4>
                    <button id="post-btn">Share</button>
                </div>
                {/* image-priview */}
                <div className="main-div">
                    <input type="file" accept="image/*"/>
                </div>
                {/* details */}
                <div className="details">
                    <div className="card-header">
                        <div className="card-pic">
                            <img src="https://plus.unsplash.com/premium_photo-1669748157807-30514e416843?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"/> 
                        </div>
                        <h5>jay mataji</h5>
                    </div>
                    <textarea type="text" placeholder="Write a caption.....">
                        
                    </textarea>
                </div>
            </div>
        </>
    )
}

export default Createpost;