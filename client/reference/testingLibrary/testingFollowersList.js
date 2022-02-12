
import React, { useEffect, useState } from 'react'
// import axios from "axios"
// import { Link } from 'react-router-dom';

export default function TestingFollowersList() {

    const [followers, setFollowers] = useState([]);

    useEffect(() => {

        const fetchFollowers = async () => {
            const response = await fetch("https://randomuser.me/api/?results=5")
            const data = await response.json()
            setFollowers(data.results)
        }

        fetchFollowers()
    }, []);



    return (
        <div className="followerslist-container">
            <div>
                {followers.map((follower, index) => (
                    <div key={Math.random()} className="follower-item" data-testid={`follower-item-${index}`}>
                        <img src={follower.picture.large}/>
                        <div className="followers-details">
                            <div className="follower-item-name">
                                <h4>{follower.name.first}</h4> <h4>{follower.name.last}</h4>
                            </div>
                            <p>{follower.login.username}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="todo-footer">
                {/* <Link to="/">Go Back</Link> */}
            </div>
        </div>
    )
}