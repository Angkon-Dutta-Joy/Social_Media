import React, { useState } from 'react';

const TopBar = ({ posts }) => {
    const [searchQuery, setSearchQuery] = useState("");

    const filteredPosts = posts.filter(post => 
        post.caption.toLowerCase().includes(searchQuery.toLowerCase()) || 
        post.userName.toLowerCase().includes(searchQuery.toLowerCase()) 
    );

    return (
        <div className="topbar">
            <input
                type="text"
                placeholder="Search by caption or user name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
            <div className="search-results">
                {filteredPosts.map(post => (
                    <div key={post.id} className="post">
                        <p><strong>{post.userName}</strong>: {post.caption}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TopBar;
