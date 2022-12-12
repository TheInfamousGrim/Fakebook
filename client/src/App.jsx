// External modules
import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";

// Components
import Nav from "./components/Nav/index";
import Header from "./components/header/index";
import Intro from "./components/intro/index";
import Photos from "./components/photos/index";
import CreatePost from "./components/createPost";
import FriendList from "./components/Friends";
import Post from "./components/post";

// Create an httpLink to graphql
const httpLink = createHttpLink({
  uri: "http://localhost:3001",
});

// Create an authLink

// Create an apollo client
const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="antialiased">
        <Nav />
        <Header />
        <div className="bg-dark px-52 grid grid-cols-12 mt-4 z-10 gap-4 antialiased">
          <div className="col-span-5 col-start-1 row-start-1 mt-8 space-y-4">
            <Intro />
            <Photos />
            <FriendList />
          </div>
          <div className=" flex-row col-span-7 col-start-6 row-start-1 mt-8 space-y-4">
            <CreatePost />
            <Post />
          </div>
        </div>
      </div>
    </ApolloProvider>
  );
}

export default App;
