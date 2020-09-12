import { Item } from "./types";

export const searchItems = (searchTerm: string): Promise<Item[]> => {
  const url =
    "https://europe-west1-lean-watch.cloudfunctions.net/getVideos?q=" +
    searchTerm;
  return fetch(url)
    .then((response) => response.json())
    .then((data: any) =>
      data.items.map((i: any) => ({
        id: i.id,
        title: i.name,
        children: [],
        isOpen: false,
        videoId: i.itemId,
      }))
    );
};
