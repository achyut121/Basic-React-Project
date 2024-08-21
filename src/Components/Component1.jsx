import axios from 'axios';
import { useEffect, useState } from 'react';

const Component1 = () => {
  const [posts, setPosts] = useState([]);
  const postData = {
    "userId": 999,
    "id": 111,
    "title": "Achyut Kumar",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  };
  const url = "https://jsonplaceholder.typicode.com/posts";
  const getPosts = async () =>{
    try{
      const data = await axios.get(url);
      // console.log(data);
      setPosts(data.data)
    }catch(err){
      console.log(arr);
    }
    
  }

  const postPosts = async () =>{
    try{
      await axios.post(url, postData)
    }catch(err){
      console.log(err);
    }
  }

 
  
  useEffect(() =>{
    getPosts();
  },[]);

  console.log(posts);

  return (
    <>
    <h1>Component1</h1>
      <ul>
      {
       posts && posts.map((item, index) => {
          return <li key={index}>{item.title}</li>
      })
      }
       </ul>
       <button onClick={postPosts}>Post Data</button>
       {/* <button onClick={getPosts}>Get Data</button> */}
    </>
  )
}

export default Component1