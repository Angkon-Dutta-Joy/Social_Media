export const fetchPosts = async () => {
    const response = await fetch('/api/posts');
    const data = await response.json();
    return data.map(post => ({
        id: post.id,
        userName: post.userName, // Ensure userName is included
        caption: post.caption    // Ensure caption is included
    }));
};
