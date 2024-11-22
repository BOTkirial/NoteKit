import { fetchPosts } from './fetchPosts';

export default async function PostsPage() {
  const posts = await fetchPosts();

  console.log("oui")

  return (
    <div>
      <h1>List of Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}