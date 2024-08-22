import { useEffect, useRef, useState } from "react";
import { addPost, deletePost, getAllPosts } from "../../../helpers/api";
import { IPost } from "../../../helpers/types";
import { BASE } from "../../../helpers/default";

export const Photos = () => {
  const photo = useRef<HTMLInputElement | null>(null);
  const [posts, setPosts] = useState<IPost[]>([]);
  const [text, setText] = useState<string>("");

  useEffect(() => {
    getAllPosts().then((response) => {
      setText("");
      setPosts(response.payload as IPost[])
    });
  }, []);

  const handlePostAdd = () => {
    const file = photo.current?.files?.[0];
    if (file) {
      const form = new FormData();
      form.append("photo", file);
      form.append("content", text);
      addPost(form)
      .then((response) => {
      setPosts([...posts, response.payload as IPost]);
      });
      setText("")
    }
  };
  const handlePostDelete =(id:number)=>{
    deletePost(id)
    .then(response =>{
        setPosts((posts) => posts.filter((post) => post.id !== id))
        setText("")
    })

  }
  return (
    <>
      <h1>photos</h1>
      <input type="file" ref={photo} />
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handlePostAdd}>upload</button>
        <div>
            {
                posts.map((e,i)=><div key={e.id}>
                <p>{e.title}</p>
                 <img src={BASE+ e.picture}/> 
                 <button className="btn btn-outline-info"  onClick={()=> handlePostDelete(e.id)}>delete</button>  
                </div>)
            }
        </div>
    </>
  );
};
