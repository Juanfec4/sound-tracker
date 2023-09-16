//Styles
import './style.css';

function Userprofile({ userData , userDetails}) {
    let cache = new Set()
    let artists = []
    if(userData){
        for(let data of userData){
            cache.add(data.artists[0].name)
       }

        for(let element of cache){
            artists.push(element)
        }
    }

    return (
        // User form with username and password and login button
        <main className="user-profile">
            <h1 className='header-user'>Your 2023</h1>
            {userDetails ? <h1 className='user-profile__username'>{userDetails.display_name}</h1>:null}
            <div className="user-profile__album-container">
                    {userData ? <>
                    <img className="user-profile__album-image" src={userData[0].album.images[0].url}/>
                    </> : null}
                
            </div>

            <div className="user-profile__data-container">

                <div className="user-profile__data-row">

                    <div className="user-profile__data-col">
                        <div className="user-profile__artists">
                            <h3 className="user-profile__sub-title">Top Artists</h3>

                            {artists ? artists.map((artist, index) => {
                                return index < 5 ? (
                                    <li className='list-element'>
                                        {index + 1}{" "}{artist}
                                    </li>
                                ) : null
                            }) : null}
                        </div>
                    </div>

                    <div className="user-profile__data-col">
                        <div className="user-profile__songs">
                            <h3 className="user-profile__sub-title">Top Songs</h3>
                            {/* Map of top 5 songs */}

                            {userData ? userData.map((data, index) => {

                                return index < 5 ? (
                                    <li className='list-element'>
                                        {index + 1}{" "}{data.name}
                                    </li>
                                ) : null
                            }) : null}
                        </div>
                    </div>

                </div>

                <div className="user-profile__data-row">

                    <div className="user-profile__data-col">
                        <div className="user-profile__total-minutes">
                            <h3 className="user-profile__sub-title">Minutes Listened</h3>

                            {/* Total minutes */}
                            <h2 className="user-profile__title"> {userData ? (userData[0].duration_ms/2).toLocaleString() : null} </h2>
                        </div>
                    </div>


                    <div className="user-profile__data-col">
                        <div className="user-profile__top-genre">
                            <h3 className="user-profile__sub-title">Top Genre</h3>

                            {/* Top Genre */}
                            <h2 className="user-profile__title">Hip Pop</h2>
                        </div>
                    </div>

                </div>

            </div>

        </main>


    )

}

export default Userprofile;