// Czech Republic — ARES (Administrative Register of Economic Subjects)
// https://ares.gov.cz/swagger-ui.html
//
// Free REST/JSON API, migrated from XML in 2023. Very fast (~93ms avg).
// IČO format: 8 digits. Returns full company data + addresses.

const ICO = "26168685"; // Example: Škoda Auto

async function getCompany(ico: string) {
  const url = `https://ares.gov.cz/ekonomicke-subjekty-v-be/rest/ekonomicke-subjekty/${ico}`;

  const response = await fetch(url, {
    headers: { Accept: "application/json" },
  });

  if (!response.ok) {
    throw new Error(`ARES returned ${response.status}: ${await response.text()}`);
  }

  const json = await response.json() as {
    ico: string;
    obchodniJmeno: string;
    sidlo?: { textovaAdresa?: string };
    pravniForma?: string;
    datumVzniku?: string;
    czNace?: string[];
  };

  return {
    ico: json.ico,
    name: json.obchodniJmeno,
    address: json.sidlo?.textovaAdresa,
    legalForm: json.pravniForma,
    incorporated: json.datumVzniku,
    nace: json.czNace,
  };
}

getCompany(ICO).then(console.log);
