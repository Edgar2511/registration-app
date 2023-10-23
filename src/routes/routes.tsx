import React from "react";
import { Users } from "../pages/UsersPage/UsersPage";
import { Route, Routes } from "react-router-dom";
import { PostsPage } from "../pages/PostsPage/PostsPage";
import { AlbumPage } from "../pages/AlbumsPage/AlbumsPage";
import { LoginPage } from "../Components/HomePage/LoginPage/LoginPage";
import { SignupPage } from "../Components/HomePage/SignupPage/SignupPage";

export const AppRoutes: React.FC = () => (
  <Routes>
    <Route path="/users" element={<Users />} />
    <Route path="/posts" element={<PostsPage />} />
    <Route path="/albums" element={<AlbumPage />} />
    <Route path="/login" element={<LoginPage />} />
    <Route path="/signup" element={<SignupPage />} />
  </Routes>
);
