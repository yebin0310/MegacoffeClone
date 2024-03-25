"use client";

import { useState, useEffect } from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import axios from "axios";

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
`;

const Title = styled.h1`
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const Input = styled.input`
  margin-bottom: 10px;
  padding: 5px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #333;
  color: #fff;
  border: none;
  cursor: pointer;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid #ccc;
`;

const DeleteButton = styled.button`
  padding: 5px 10px;
  background-color: #f00;
  color: #fff;
  border: none;
  cursor: pointer;
`;

type Post = {
  id: number;
  title: string;
  body: string;
};

const IndexPage = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setPosts(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const createPost = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        {
          title,
          body,
        }
      );

      const newPost: Post = {
        id: response.data.id,
        title,
        body,
      };

      setPosts([...posts, newPost]);
      setTitle("");
      setBody("");
    } catch (error) {
      console.error(error);
    }
  };

  const deletePost = async (id: number) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
      setPosts(posts.filter((post) => post.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container>
      <Title>게시판</Title>
      <Form onSubmit={createPost}>
        <Input
          type="text"
          placeholder="제목"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Input
          type="text"
          placeholder="내용"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <Button type="submit">글 작성</Button>
      </Form>
      <List>
        {posts.map((post) => (
          <ListItem key={post.id}>
            <div>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </div>
            <DeleteButton onClick={() => deletePost(post.id)}>
              삭제
            </DeleteButton>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default IndexPage;
