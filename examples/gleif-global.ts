// GLEIF — Global Legal Entity Identifier search
// https://www.gleif.org/en/lei-data/gleif-api
//
// JSON:API endpoint. Free, no auth. Search by legal name or LEI code.
// Returns standardized entity data (name, address, jurisdiction, status).

const SEARCH_NAME = "Microsoft Corporation";

async function searchLei(legalName: string) {
  const url = new URL("https://api.gleif.org/api/v1/lei-records");
  url.searchParams.set("filter[entity.legalName]", legalName);
  url.searchParams.set("page[size]", "5");

  const response = await fetch(url, {
    headers: { Accept: "application/vnd.api+json" },
  });

  const json = await response.json() as {
    data: Array<{
      id: string;
      attributes: {
        entity: { legalName: { name: string }; legalAddress: { country: string } };
        registration: { status: string };
      };
    }>;
  };

  return json.data.map((rec) => ({
    lei: rec.id,
    name: rec.attributes.entity.legalName.name,
    country: rec.attributes.entity.legalAddress.country,
    status: rec.attributes.registration.status,
  }));
}

searchLei(SEARCH_NAME).then(console.log);
