import React, { useState } from 'react';
import Tweet from './Tweet';
const Tweets = () => {
   // const [first, setfirst]=useState(second)
    const [tweets,setTweets]=useState([
        {
            id:1,
            name:"Elon Musk",
            twitterhandle:"@elonmusk",
            tweet:"Mai crypto ka Jaikaant Shikre",
            likes:0
        },{
            id:2,
            name:"Mukesh Ambani",
            twitterhandle:"@mukambani",
            tweet: "Bought All the Umpires #IPLAuction",
            likes:0
        },{
            id:3,
            name:"Gautam adani",
            twitterhandle:"@gadani",
            tweet:"Nifty ka Jaikaant Shikre",
            likes:0
        }
    ]);

    // Like function

    const handleLike=(id)=>{
        // console.log("Liked")
        const latestState=[...tweets];
        const index = tweets.findIndex(el=>el.id===id);
        latestState[index].likes+=1
        setTweets(latestState);
    }
    const handleDislike=(id)=>{
        const latestState=[...tweets];
        const index = tweets.findIndex(el=>el.id===id);
        if(latestState[index].likes>0){
            latestState[index].likes-=1
        }
        setTweets(latestState);
    }
    const renderTweets=()=>{
        return tweets.map(item=>{
            return <Tweet tweet={item} handleLike={handleLike} handleDislike={handleDislike}/>
        })
    }
  return (
    <>
    {renderTweets()}
    </>
  )
}

export default Tweets