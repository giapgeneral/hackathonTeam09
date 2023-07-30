import axios from 'axios';

export function History() {
  var historyList = {
    score: 0,
  };
  const getPosts = async () => {
    try {
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      console.log(res)
    } catch (err) {
    }
  };
  getPosts();
  return (
    <div>
      ádasd
    </div>
  );
}
