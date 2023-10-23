import "./PostsPage.css";
import { Post, postService } from "../../api/Services/PostService";
import { useCallback, useState, useEffect } from "react";

export const PostsPage = () => {
  const [posts, setPosts] = useState<Post[]>();

  const fetchData = useCallback(async () => {
    try {
      const postsData = await postService.getAllPosts();
      setPosts(postsData);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="posts-data-container">
      <div className="posts-title">Our Users Posts</div>
      {posts?.map((post) => {
        return (
          <div className="post-card" key={post.id}>
            <div className="post-container">
              <h3 className="user-number">User №{post.userId}</h3>
              <p>Title: {post.title}</p>
              <p>Body: {post.body}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
