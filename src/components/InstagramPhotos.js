import React from 'react';
import { useStaticQuery, graphql } from "gatsby"

const InstagramPhotos = () => {
    const data = useStaticQuery(graphql`
        query {
            allInstaNode {
                nodes {
                    id
                    timestamp
                    preview
                    thumbnails {
                        src
                    }
                }
            }
        }
    `)    

    const photos = data.allInstaNode.nodes

    return (
        <>
            <div id="instagramPhotos">
                {
                    photos.map(photo => <a href={`https://www.instagram.com/p/${photo.id}`} className="photoContainer"><img key={photo.id} src={photo.thumbnails[3].src} alt="This zooms-in really well and smooth" /></a>)
                }
            </div>
            <a className="more" href="https://twitter.com/6andahitch">More</a>
        </>
    )
}

export default InstagramPhotos;