// Finland — PRH (Patent and Registration Office) Open Data
// https://avoindata.prh.fi/
//
// Free REST API. Business ID (Y-tunnus) format: XXXXXXX-X.
// Returns company name, status, registration dates, addresses, NACE codes.

const BUSINESS_ID = "1927400-1"; // Example: Nokia Corporation

async function getCompany(businessId: string) {
  const url = `https://avoindata.prh.fi/opendata-ytj-api/v3/companies?businessId=${businessId}`;

  const response = await fetch(url, {
    headers: { Accept: "application/json" },
  });

  const json = await response.json() as {
    companies?: Array<{
      businessId: { value: string };
      names: Array<{ name: string; type: number }>;
      tradeRegisterStatus: string;
      registrationDate: string;
      mainBusinessLine?: { descriptions: Array<{ languageCode: string; description: string }> };
    }>;
  };

  return json.companies?.map((c) => ({
    id: c.businessId.value,
    name: c.names[0]?.name,
    status: c.tradeRegisterStatus,
    registered: c.registrationDate,
    industry: c.mainBusinessLine?.descriptions.find((d) => d.languageCode === "1")?.description,
  })) ?? [];
}

getCompany(BUSINESS_ID).then(console.log);
