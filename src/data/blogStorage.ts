import React, { useEffect, useState } from 'react';

export interface BlogPost {
  id: string;
  title: string;
  date: string; // ISO date string
  content: string;
}

// Utility functions to interact with localStorage
export const loadPosts = (): BlogPost[] => {
  const raw = localStorage.getItem('blogPosts');
  if (!raw) return [];
  try {
    return JSON.parse(raw) as BlogPost[];
  } catch {
    return [];
  }
};

export const savePosts = (posts: BlogPost[]) => {
  localStorage.setItem('blogPosts', JSON.stringify(posts));
};
