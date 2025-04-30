import React from 'react';
import TopBar from './components/TopBar';

const App = () => {
    const posts = [
        { id: 1, userName: "john_doe", caption: "Enjoying the sunshine!" },
        { id: 2, userName: "jane_smith", caption: "Loving this new app!" }
        // Ensure all posts include both userName and caption
    ];

    return (
        <div className="app">
            <TopBar posts={posts} />
            {/* ...existing code... */}
        </div>
    );
};

export default App;
