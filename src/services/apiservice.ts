import customAxios from "./setupaxios";

export function getURL(url: string, page: number, breed: any) {
  let Url = `${url}/images/search?has_breeds=1&limit=100`;
  if (breed) {
    Url = `${url}/images/search?breed_ids=${breed}&limit=100`;
  }
  return customAxios.get(Url);
}

export function addToFavoriteAPI(url: string, request: any) {
  return customAxios.post(`${url}/favourites`, request);
}

export function getFavoriteList(url: string) {
  return customAxios.get(`${url}/favourites?sub_id=testUser`);
}

export function getImageData(url: string, id: any) {
  return customAxios.get(`${url}/images/${id}`);
}

export function getBreedsList(url: string) {
  return customAxios.get(`${url}/breeds`);
}
