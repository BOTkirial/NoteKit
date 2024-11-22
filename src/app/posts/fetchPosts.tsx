export async function fetchPosts() {
    // Simuler une récupération de données avec un délai
    const posts = [
      { id: 1, title: 'First Post', content: 'This is the first post.' },
      { id: 2, title: 'Second Post', content: 'This is the second post.' },
      { id: 3, title: 'Third Post', content: 'This is the third post.' }
    ];
  
    // En situation réelle, vous pourriez faire une requête API ou base de données ici
    return posts;
  }