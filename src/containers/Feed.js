import React, { Component } from 'react'

export default class Feed extends Component {
    constructor() {
        super()

        this.state = {
            posts: []
        }
    }

    render() {
        return (
            <div>
                <ul>
                    {this.state.posts.map(post => {
                        <Post title={post.title} />
                    })}
                </ul>
            </div>
        )
    }
}