import React from 'react'
import InstagramPost from './InstagramPost'
import Sidebar from '../shared/sidebar'

export default function Home() {
    return (

        <div className='flex'>
            <Sidebar />
            <InstagramPost
                profileImage="/Auto%20Layout%20Horizontal.png"
                username="lewishamilton"
                postImage="/Auto%20Layout%20Horizontal(2).png"
                caption="This is the caption of the post"
                initialLikes={741285}
                commentsCount={11354}
                timeAgo="5h"
            />
        </div>

    )
}
