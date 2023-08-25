import request from 'request-promise';
import htmlParser from 'node-html-parser';
import { EventEmitter } from 'events';

import { getElementsByHandler, parseAttributes } from './htmlHelpers.js';

console.log(htmlParser);

export default class FlatIcon extends EventEmitter {
  constructor(query, count) {
    super();

    this.items = [];

    (async () => {
      let pageId = 1;
      while (this.items.length < count) {

        const pageResults = await getPage(query, pageId);

        this.items = this.items.concat(pageResults.items);
        this.emit("data", pageResults);
        pageId++;
      }
      this.emit("end");
    })();
  }
}

/*export default async function get(query, count = 96) {
  const page1Results = await getPage(query, 1);
  console.log(page1Results);
}*/
export async function getPage(query, pageId) {
  const url = getUrl('https://www.flaticon.com/search/' + pageId, {
    word: 'coffee'
  });

  const refererUrl = getUrl('https://www.flaticon.com/search/' + (pageId - 1), {
    word: 'coffee'
  });
  const resultRaw = await request(url, {
    method: 'GET',
    headers: {
      'Accept': 'application/json, text/javascript, */*; q=0.01',
      'Host': 'www.flaticon.com',
      'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.1 Safari/605.1.15',
      'Accept-Language': 'de-de',
      'Referer': refererUrl,
      'Connection': 'keep-alive',
      'X-Requested-With': 'XMLHttpRequest'
    }
  });

  const result = JSON.parse(resultRaw);
  return result;
}
export function getUrl(urlBase, params) {
  return urlBase + '?' + Object.entries(params).map(entry => entry.join("=")).join("&");
}
