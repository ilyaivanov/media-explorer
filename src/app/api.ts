import { Item } from "./types";

export const searchItems = (searchTerm: string): Promise<Item[]> => {
  const url = `https://europe-west1-lean-watch.cloudfunctions.net/getVideos?q=${searchTerm}`;
  return fetch(url)
    .then((response) => response.json())
    .then((data: any) => {
      return data.items.map((i: any) => ({
        id: i.id,
        title: i.name,
        children: [],
        itemType: i.itemType,
        isOpen: false,
        itemId: i.itemId,
        image: i.image,
      }));
    });
};

export const loadPlaylistVideos = (playlistId: string): Promise<Item[]> => {
  const url = `https://europe-west1-lean-watch.cloudfunctions.net/getPlaylistItems?playlistId=${playlistId}`;
  return fetch(url)
    .then((response) => response.json())
    .then((data: any) => {
      console.log(data.items[0]);
      return data.items.map((i: any) => ({
        id: i.id,
        title: i.name,
        children: [],
        isOpen: false,
        itemId: i.itemId,
        image: i.image,
        itemType: i.itemType,
      }));
    });
};
