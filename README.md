## Introduction

This project only serves the purpose of scraping HTML pages and store them locally.

## Getting Started

First, install all the dependencies by calling `yarn install`.

Then, start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## How to scrape HTML?

In order to scrape the website you are interested in, visit `http://localhost:3000/api/crawl?urls=the_url_you_are_interested_in`. Notice that this application will specifically conver the scraped HTML into markdown file.
