import { NextApiRequest, NextApiResponse } from "next";
import { Crawler, Page } from "../crawler";

type Response = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Response>
) {
  const fs = require("fs");
  const { query } = req;
  const { urls: urlString, limit } = query;
  const urls = (urlString as string).split(",");
  const crawlLimit = parseInt(limit as string) || 1500;

  const crawler = new Crawler(urls, crawlLimit, 200);
  const pages = (await crawler.start()) as Page[];

  for (var i = 0; i < pages.length; i++) {
    var directory = "scraped";
    directory += i.toString();
    directory += ".md";

    fs.writeFileSync(directory, JSON.stringify(pages[i].text));
  }

  res.status(200).json({ message: "Done" });
}
