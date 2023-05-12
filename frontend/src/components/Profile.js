import './Profile.css';
const Profile = () => {
    return (
        <>
            <div className="profile">
                {/* profile-frame */}
                    <div className="profile-frame">
                        {/* profile-pic */}
                        <div className="profile-pic">
                            <img width="200" src="https://plus.unsplash.com/premium_photo-1669748157807-30514e416843?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt=""/>
                        </div>
                        {/* profile-data */}
                        <div className="profile-data">
                            <h1>Jay mataji</h1>
                            <div className="profile-info" style={{display:'flex'}}>
                                <p>40 post</p>
                                <p>40 followers</p>
                                <p>following</p>
                            </div>
                        </div>
                    </div>

                    <hr style={{width:'90%',margin : "25px auto"}}/>

                    {/* gallery */}
                    <div className='gallery'>
                        <img width="200" src='https://plus.unsplash.com/premium_photo-1669748157807-30514e416843?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'/>
                        <img width="200" src='https://plus.unsplash.com/premium_photo-1669748157807-30514e416843?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'/>
                        <img width="200" src='https://plus.unsplash.com/premium_photo-1669748157807-30514e416843?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'/>
                       

                    </div>
            </div>
        </>
    )
}

export default Profile;