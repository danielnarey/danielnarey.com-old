import { get } from 'svelte/store';
import { loadedPosts } from './store.js';


export const fetchPost = async (slug) => {
  const data = get(loadedPosts).get(slug);

  if (data) {
    return ({ data });
  }

  let json;

  try {
    const response = await fetch(`/.netlify/functions/fetch-data?collection=posts&slug=${slug}`);

    json = await response.json();

    if (json.data) {
      loadedPosts.update((mp) => mp.set(slug, json.data));
    }
  } catch (error) {
    return ({ error });
  }

  return json;
};
