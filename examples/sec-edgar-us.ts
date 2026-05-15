// United States — SEC EDGAR
// https://www.sec.gov/edgar/sec-api-documentation
//
// Free REST API for US publicly-traded companies. No auth, but requires
// a real User-Agent header (SEC policy). Rate limit: 10 req/sec.
// CIK is the primary identifier (zero-padded to 10 digits in URLs).

const CIK = "0000320193"; // Example: Apple Inc.
const USER_AGENT = "Your Name your.email@example.com"; // REQUIRED by SEC

async function getCompanyFilings(cik: string) {
  const url = `https://data.sec.gov/submissions/CIK${cik}.json`;

  const response = await fetch(url, {
    headers: { "User-Agent": USER_AGENT, Accept: "application/json" },
  });

  if (!response.ok) {
    throw new Error(`SEC returned ${response.status} — check User-Agent header`);
  }

  const json = await response.json() as {
    name: string;
    sic: string;
    sicDescription: string;
    tickers: string[];
    exchanges: string[];
    filings: { recent: { form: string[]; filingDate: string[]; accessionNumber: string[] } };
  };

  return {
    name: json.name,
    industry: json.sicDescription,
    tickers: json.tickers,
    exchanges: json.exchanges,
    recentFilings: json.filings.recent.form.slice(0, 5).map((form, i) => ({
      form,
      date: json.filings.recent.filingDate[i],
      accession: json.filings.recent.accessionNumber[i],
    })),
  };
}

getCompanyFilings(CIK).then(console.log);
