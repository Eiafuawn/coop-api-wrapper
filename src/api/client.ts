import type { SearchItem, SearchResult } from './searchResult.ts';

const LANGUAGES = ['fr', 'de', 'it'];

const SETTINGS = {
  language: 'fr',
};

const HEADERS: any = {
  "credentials": "include",
  "headers": {
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:140.0) Gecko/20100101 Firefox/140.0",
    "Accept": "*/*",
    "Accept-Language": "en-US,en;q=0.5",
    "X-Requested-With": "XMLHttpRequest",
    "Sec-GPC": "1",
    "Sec-Fetch-Dest": "empty",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Site": "same-origin",
    "Priority": "u=0"
  },
  "referrer": `https://www.coop.ch/${SETTINGS.language}/`,
  "method": "GET",
  "mode": "cors"
};


const BASE_URL = `https://www.coop.ch/${SETTINGS.language}/dynamic-pageload/searchresultJson?componentName=searchresultJson&url=https%3A%2F%2Fwww.coop.ch%2Ffr%2F`;


async function get(url: string): Promise<SearchResult> {
  const response = await fetch(url, HEADERS);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data = await response.json() as SearchResult;

  return data;
}

/**
 * Search for products on Coop.ch
 * @param query - The search query
 * @returns An array of SearchItem
 */
export async function search(query: string) {
  const url = `${BASE_URL}2Ffr%2Fsearch%2F%3Ftext%3D${encodeURIComponent(query)}`;
  const response = await get(url);

  return response?.contentJsons?.anchors[1]?.json.elements.map((item: SearchItem) => item);
}
