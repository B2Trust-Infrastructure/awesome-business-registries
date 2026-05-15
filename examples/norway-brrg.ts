// Norway — Brønnøysundregistrene (Enhetsregisteret)
// https://data.brreg.no/enhetsregisteret/api/docs/index.html
//
// Fully open REST API, no auth. HAL+JSON format.
// Search by name or organization number. Returns NACE codes, address,
// registration dates, employee count.

const SEARCH_NAME = "Equinor";

async function searchCompany(name: string) {
  const url = new URL("https://data.brreg.no/enhetsregisteret/api/enheter");
  url.searchParams.set("navn", name);
  url.searchParams.set("size", "5");

  const response = await fetch(url, {
    headers: { Accept: "application/json" },
  });

  const json = await response.json() as {
    _embedded?: {
      enheter: Array<{
        organisasjonsnummer: string;
        navn: string;
        registreringsdatoEnhetsregisteret: string;
        forretningsadresse?: { adresse?: string[]; poststed?: string };
      }>;
    };
  };

  return json._embedded?.enheter.map((e) => ({
    orgNumber: e.organisasjonsnummer,
    name: e.navn,
    registered: e.registreringsdatoEnhetsregisteret,
    address: e.forretningsadresse?.adresse?.join(", "),
    city: e.forretningsadresse?.poststed,
  })) ?? [];
}

searchCompany(SEARCH_NAME).then(console.log);
