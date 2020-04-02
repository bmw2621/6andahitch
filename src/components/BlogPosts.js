import React from 'react';
import { Link, useStaticQuery, graphql } from "gatsby"

const BlogPosts = () => { 
    const { allMdx }  = useStaticQuery(graphql`
        {
            allMdx {
                nodes {
                    id
                    frontmatter {
                        title
                        slug
                        date
                        feature_image{
                            relativePath
                        }
                    }
                }
            }
        }
    `)

    let posts = allMdx.nodes
    const mostRecentPost = posts.pop()
    const postsOrdered = posts.reverse()

    const mostRecentPostFeatureImage = require(`../posts/${mostRecentPost.frontmatter.feature_image.relativePath}`)
    
    let postsOrderedData = []

    for(let i = 0; i < postsOrdered.length; i++){
        postsOrderedData.push({
            id: postsOrdered[i].id,
            title: postsOrdered[i].frontmatter.title,
            date: postsOrdered[i].frontmatter.date,
            slug: postsOrdered[i].frontmatter.slug,
            image: require(`../posts/${postsOrdered[i].frontmatter.feature_image.relativePath}`),
            })
    }

    const blogPostColors = [
        "rgba(209,179,187,.5)", //pink
        "rgba(140,201,199,.5)", //teal
        "rgba(77,85,107,.5)", //darkBlue
        ]
    
    const random = (mn, mx) => {  
            return Math.random() * (mx - mn) + mn;  
        } 

    let firstColor = Math.floor(random(0,2))

    return (
        <>
            <div id="blogPosts">
                <div id="firstPost">
                    <Link to={`/${mostRecentPost.frontmatter.slug}`}>
                        <span className="blogPostInfo" style={{"top":"40%"}}>{mostRecentPost.frontmatter.title}<br/><span>{mostRecentPost.frontmatter.date}</span></span>
                        <div className="blogPostBg" style={{"background": blogPostColors[firstColor]}}></div>
                        <img src={mostRecentPostFeatureImage} alt="Blog Post"/>
                    </Link>
                </div>
                <div id="olderPosts">
                    {postsOrderedData.map(post => {
                        firstColor = (firstColor + 1) % 3
                        console.log(firstColor)
                        return (
                            <Link to={`/${post.slug}`} key={post.id}>
                                <span className="blogPostInfo">{post.title}<br/><span>{post.date}</span></span>
                                <div className="blogPostBg" style={{"background": blogPostColors[firstColor]}}></div>
                                <img src={post.image} key={post.id} alt="Blog Post"/>
                            </Link>
                        )
                    })}
                </div>
            </div>
            <a className="more" href="#">More</a>
        </>
    )
}

export default BlogPosts;