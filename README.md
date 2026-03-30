# Awesome Business Registries [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

> A curated list of **official government business registry APIs** from around the world — endpoints, auth methods, data formats, rate limits, and bulk data sources.

If you've ever needed to look up a company programmatically — verify a VAT number, check if a business is active, or pull corporate filings — you know that every country does it differently. This list aims to be the definitive developer reference for official, primary-source company data APIs.

**Why this list?** Commercial aggregators like OpenCorporates, Global Database, and Veridion provide convenient unified APIs — but they sit on top of the same government sources listed here. If you want to go direct to the source (free, authoritative, no vendor lock-in), this is your starting point.

Maintained by [B2Trust](https://b2trust.com) — a multi-country business registry search engine.

---

## Contents

- [Europe](#europe)
  - [EU-Wide](#eu-wide)
  - [Western Europe](#western-europe)
  - [Northern Europe](#northern-europe)
  - [Central Europe](#central-europe)
  - [Southern Europe](#southern-europe)
  - [Eastern Europe](#eastern-europe)
- [Americas](#americas)
- [Asia-Pacific](#asia-pacific)
- [Africa](#africa)
- [Bulk Data Sources](#bulk-data-sources)
- [Cross-Border Tools](#cross-border-tools)
- [Contributing](#contributing)

---

## Legend

| Symbol | Meaning |
|--------|---------|
| 🟢 | Free, no auth required |
| 🔑 | Free, API key required |
| 🔐 | Free, requires national eID or special access |
| 💰 | Paid or restricted access |
| 📦 | Bulk data download available |

---

## Europe

### EU-Wide

| Service | Type | Auth | Format | Notes |
|---------|------|------|--------|-------|
| [VIES VAT Validation](https://ec.europa.eu/taxation_customs/vies/) | REST | 🟢 | JSON/XML | Validates EU VAT numbers. Most countries return full company name + address. DE and ES return valid/invalid only. |
| [BRIS](https://e-justice.europa.eu/489/EN/business_registers__search_for_a_company_in_the_eu) | Web portal | 🟢 | HTML | Business Registers Interconnection System. Searches across all 27 EU member states. No public API — web portal only. |
| [Open BRIS](https://openbris.eu/api/v1) | REST | 🔑 | JSON | Community-built API layer on top of BRIS data. |

### Western Europe

#### 🇬🇧 United Kingdom — Companies House

| | |
|---|---|
| **API** | https://api.company-information.service.gov.uk |
| **Auth** | 🔑 Basic auth (`api_key + ':'` — colon required, empty password) |
| **Format** | REST/JSON |
| **Rate limit** | 600 req/5min |
| **Endpoints** | Company search, company profile, officers, filing history, charges, insolvency, PSC (Persons of Significant Control) |
| **Bulk data** | 📦 Free monthly snapshots: [Companies House bulk data](http://download.companieshouse.gov.uk/en_output.html) (~5.4M companies, CSV) |
| **Docs** | [developer.company-information.service.gov.uk](https://developer.company-information.service.gov.uk/) |
| **Notes** | One of the best-documented, most developer-friendly government APIs in the world. Streaming API available for real-time filing events. |

#### 🇫🇷 France — SIRENE (INSEE)

| | |
|---|---|
| **API** | https://api.insee.fr/entreprises/sirene/V3.11 |
| **Auth** | 🟢 Public endpoint (was 🔑 Bearer token until 2024) |
| **Format** | REST/JSON |
| **Rate limit** | 30 req/min (unauthenticated), higher with token |
| **Endpoints** | Company search by name, SIREN, SIRET. Full establishment data. |
| **Bulk data** | 📦 [data.gouv.fr SIRENE](https://www.data.gouv.fr/fr/datasets/base-sirene-des-entreprises-et-de-leurs-etablissements-siren-siret/) (~25M establishments, CSV, updated monthly) |
| **Docs** | [api.insee.fr/catalogue](https://api.insee.fr/catalogue/) |
| **Notes** | `per_page` parameter max is 25 — must paginate for larger result sets. Lucene query syntax supported for advanced search. |

#### 🇩🇪 Germany — Handelsregister

| | |
|---|---|
| **Portal** | https://www.handelsregister.de |
| **Auth** | 🟢 No auth (web form POST) |
| **Format** | HTML (no official REST API) |
| **Rate limit** | ~60 requests/hour (unofficial, enforced by Nutzungsordnung) |
| **Endpoints** | Extended search via POST to `/rp_web/erweitertesuche.xhtml`. Returns HTML tables. |
| **Bulk data** | 📦 [OffeneRegister.de](https://offeneregister.de/) — community-maintained dump from Handelsregister (~5.3M companies, JSONL). Not official but sourced from official registers. |
| **Notes** | No official API. Integration requires HTML scraping. Very low rate limit makes bulk use impractical — use OffeneRegister dump instead. Common identifiers: HRB/HRA numbers per local court (Amtsgericht). |

#### 🇳🇱 Netherlands — KVK (Kamer van Koophandel)

| | |
|---|---|
| **API** | https://api.kvk.nl |
| **Auth** | 🔑 API key (free registration) |
| **Format** | REST/JSON |
| **Endpoints** | Search by name, KVK number, RSIN. Company profiles, branch offices. |
| **Docs** | [developers.kvk.nl](https://developers.kvk.nl/) |
| **Notes** | Free tier with reasonable limits. Financial filings available separately via Kamer van Koophandel website. |

#### 🇧🇪 Belgium — CBE/KBO (Crossroads Bank for Enterprises)

| | |
|---|---|
| **Portal** | https://kbopub.economie.fgov.be |
| **Auth** | 🟢 |
| **Format** | REST/JSON |
| **Bulk data** | 📦 [Open Data](https://economie.fgov.be/en/themes/enterprises/crossroads-bank-enterprises/services-everyone/cbe-open-data) — full database download, CSV, updated monthly |
| **Notes** | Enterprise number format: 0xxx.xxx.xxx (10 digits with leading zero). |

#### 🇮🇪 Ireland — CRO (Companies Registration Office)

| | |
|---|---|
| **Portal** | https://core.cro.ie |
| **Auth** | 🟢 Free search |
| **Format** | HTML (web search) |
| **Bulk data** | 📦 Annual returns data available via [data.gov.ie](https://data.gov.ie/) |
| **Notes** | No public REST API. Web scraping required for programmatic access. |

### Northern Europe

#### 🇳🇴 Norway — Brønnøysundregistrene

| | |
|---|---|
| **API** | https://data.brreg.no/enhetsregisteret/api |
| **Auth** | 🟢 Fully open, no auth |
| **Format** | REST/JSON (HAL+JSON) |
| **Rate limit** | Generous (no published limit) |
| **Endpoints** | Search by name or org number. Full company data including business codes (NACE), address, registration dates. |
| **Bulk data** | 📦 [data.brreg.no](https://data.brreg.no/enhetsregisteret/api/docs/index.html) — full dataset download (~1M entities) |
| **Docs** | [data.brreg.no/enhetsregisteret/api/docs](https://data.brreg.no/enhetsregisteret/api/docs/index.html) |
| **Notes** | One of the most open registries in Europe. HAL format uses `_embedded` and `_links` structure. Norwegian language field names. |

#### 🇸🇪 Sweden — Bolagsverket

| | |
|---|---|
| **Portal** | https://www.bolagsverket.se |
| **Auth** | 💰 Paid API access |
| **Format** | REST/JSON |
| **Notes** | Basic search free via web. API access requires agreement with Bolagsverket. Org number format: XXXXXX-XXXX. |

#### 🇩🇰 Denmark — CVR (Det Centrale Virksomhedsregister)

| | |
|---|---|
| **API** | https://datacvr.virk.dk/data/ |
| **Auth** | 🔐 Requires Danish NemID/MitID for API access |
| **Format** | REST/JSON (Elasticsearch) |
| **Bulk data** | 📦 [CVR Open Data](https://datacvr.virk.dk/data/) — full company dataset (~800K companies) |
| **Notes** | The API requires Danish digital identity. Bulk data downloads are accessible without NemID. CVR number format: 8 digits. |

#### 🇫🇮 Finland — PRH (Patent and Registration Office)

| | |
|---|---|
| **API** | https://avoindata.prh.fi/bis/v1 |
| **Auth** | 🟢 Open access |
| **Format** | REST/JSON |
| **Bulk data** | 📦 Available via [avoindata.prh.fi](https://avoindata.prh.fi/) (~600K companies) |
| **Docs** | [avoindata.prh.fi/index.html](https://avoindata.prh.fi/index.html) |
| **Notes** | Business ID format: XXXXXXX-X (7 digits + check digit). Open and well-documented. |

#### 🇪🇪 Estonia — e-Business Register

| | |
|---|---|
| **Portal** | https://ariregister.rik.ee |
| **Auth** | 🟢 Free web search / 🔑 API available |
| **Format** | REST/JSON, XML |
| **Bulk data** | 📦 Open data available (~353K companies) |
| **Notes** | Estonia's digital-first approach means excellent data quality. Registry code format: 8 digits. |

### Central Europe

#### 🇵🇱 Poland

**Multiple registries, each serving different entity types:**

| Registry | API | Auth | Format | Scope |
|----------|-----|------|--------|-------|
| [KRS](https://api-krs.ms.gov.pl/) | REST | 🟢 | JSON | Court-registered companies (sp. z o.o., S.A., etc.) |
| [CEIDG](https://dane.biznes.gov.pl/api/ceidg/v2) | REST | 🔑 Bearer (JWT) | JSON | Sole proprietors (~2.5M entities) |
| [GUS/REGON](https://wyszukiwarkaregon.stat.gov.pl/) | SOAP | 🔑 API key (free, email request) | XML/SOAP | All entities — NIP↔REGON↔KRS mapping, PKD codes, employee ranges |
| [Biała Lista](https://wl-api.mf.gov.pl/) | REST | 🟢 | JSON | VAT taxpayer whitelist — status, bank accounts |
| [CRBR](https://crbr.podatki.gov.pl/) | REST | 🟢 | JSON | Central Register of Beneficial Owners |

📦 **Bulk data:** KRS full dumps (~632K companies), CEIDG full dumps (~2.5M sole proprietors), REGON/GUS full dumps. All free, CSV/XML/JSON, nightly updates.

#### 🇨🇿 Czech Republic — ARES

| | |
|---|---|
| **API** | https://ares.gov.cz/ekonomicke-subjekty-v-be/rest |
| **Auth** | 🟢 No auth required |
| **Format** | REST/JSON (migrated from XML in 2023) |
| **Endpoints** | Search by name or IČO (identification number). Full company data. |
| **Bulk data** | 📦 [data.gov.cz](https://data.gov.cz/) (~2.7M entities) |
| **Docs** | [ares.gov.cz](https://ares.gov.cz/swagger-ui.html) |
| **Notes** | IČO format: 8 digits. Very fast API (~93ms average). Free and open. |

#### 🇸🇰 Slovakia — ORSR (Obchodný register)

| | |
|---|---|
| **Portal** | https://www.orsr.sk |
| **Auth** | 🟢 Free web search |
| **Format** | HTML |
| **Bulk data** | 📦 Available via open data portal (~500K entities) |
| **Notes** | IČO format: 8 digits (same as CZ). No public REST API — web scraping for programmatic access. |

#### 🇭🇺 Hungary — Céginformációs Szolgálat

| | |
|---|---|
| **Portal** | https://www.e-cegjegyzek.hu |
| **Auth** | 🟢 Free basic search |
| **Format** | HTML |
| **Notes** | Basic company data free. Detailed extracts (cégkivonat) are paid. Company number format: XX-XX-XXXXXX. BRIS accessible. |

#### 🇦🇹 Austria — Firmenbuch

| | |
|---|---|
| **Portal** | https://firmenbuch.at |
| **Auth** | 💰 Paid (via Justiz.gv.at) |
| **Notes** | Austrian company register requires payment for detailed information. Basic search possible through BRIS. FN (Firmenbuchnummer) format varies. |

### Southern Europe

#### 🇮🇹 Italy — Registro delle Imprese

| | |
|---|---|
| **Portal** | https://www.registroimprese.it |
| **Auth** | 💰 Paid for most data (via InfoCamere) |
| **Format** | HTML / 💰 API via InfoCamere |
| **Notes** | Basic search free. Official extracts (visura camerale) are paid. Codice Fiscale and Partita IVA formats. Run by the network of Chambers of Commerce (InfoCamere). |

#### 🇪🇸 Spain — Registro Mercantil

| | |
|---|---|
| **Portal** | https://www.rmc.es |
| **Auth** | 💰 Paid for extracts |
| **Notes** | Decentralized — each province has its own Registro Mercantil. Basic info through BRIS. CIF/NIF format for identification. |

#### 🇬🇷 Greece — GEMI (General Electronic Commercial Registry)

| | |
|---|---|
| **Portal** | https://www.businessregistry.gr |
| **Auth** | 🟢 Free basic search |
| **Format** | HTML |
| **Notes** | GEMI number is the primary identifier. Tax ID (AFM) also used. Greek language interface. |

#### 🇭🇷 Croatia — Sudski registar

| | |
|---|---|
| **Portal** | https://sudreg.pravosudje.hr |
| **Auth** | 🟢 Free search |
| **Format** | HTML |
| **Notes** | OIB (Personal Identification Number) format: 11 digits. Court registry with free public access. |

### Eastern Europe

#### 🇷🇴 Romania — ONRC (Oficiul Național al Registrului Comerțului)

| | |
|---|---|
| **Portal** | https://www.onrc.ro |
| **Auth** | 🟢 Free basic search / 💰 Paid for detailed info |
| **Notes** | CUI (Cod Unic de Identificare) format. Free name search, paid extracts. |

#### 🇧🇬 Bulgaria — Commercial Register

| | |
|---|---|
| **Portal** | https://portal.registryagency.bg |
| **Auth** | 🟢 Free access |
| **Format** | HTML |
| **Notes** | EIK (Unified Identification Code) format: 9 or 13 digits. Fully open and free. |

---

## Americas

#### 🇺🇸 United States — SEC EDGAR

| | |
|---|---|
| **API** | https://efts.sec.gov/LATEST/search-index?q={query} |
| **Auth** | 🟢 No auth (User-Agent header required) |
| **Format** | REST/JSON |
| **Rate limit** | 10 requests/second (hard limit) |
| **Endpoints** | Full-text search, company filings, XBRL financial data |
| **Bulk data** | 📦 [EDGAR full-text search](https://efts.sec.gov/LATEST/), [bulk downloads](https://www.sec.gov/dera/data) |
| **Docs** | [sec.gov/edgar/sec-api-documentation](https://www.sec.gov/edgar/sec-api-documentation) |
| **Notes** | **Public companies only.** US company registration is state-level — there is no federal business registry. Each state (Delaware, California, etc.) has its own Secretary of State registry with different APIs and access methods. SEC covers publicly traded companies. CIK number is the primary identifier. |

#### 🇧🇷 Brazil — CNPJ (Receita Federal)

| | |
|---|---|
| **API** | Various community APIs (e.g., [BrasilAPI](https://brasilapi.com.br/docs#tag/CNPJ)) |
| **Auth** | 🟢 (community) / 💰 (official) |
| **Format** | REST/JSON |
| **Bulk data** | 📦 [Receita Federal open data](https://dados.gov.br/dados/conjuntos-dados/cadastro-nacional-da-pessoa-juridica---cnpj) — full CNPJ database, CSV |
| **Notes** | CNPJ format: XX.XXX.XXX/XXXX-XX (14 digits). Official API is restricted. Community APIs like BrasilAPI and [ReceitaWS](https://receitaws.com.br/) provide free lookup. ID search only — most APIs don't support name search. |

#### 🇨🇦 Canada — Corporations Canada

| | |
|---|---|
| **Portal** | https://ised-isde.canada.ca/cc/lgcy/fdrlCrpSrch.html |
| **Auth** | 🟢 Free search |
| **Format** | HTML |
| **Notes** | Federal incorporations only. Each province (Ontario, BC, Quebec, etc.) has its own registry. No unified API. Corporation number format: 7 digits. |

---

## Asia-Pacific

#### 🇦🇺 Australia — ABN Lookup

| | |
|---|---|
| **API** | https://abr.business.gov.au/abrxmlsearch/AbrXmlSearch.asmx |
| **Auth** | 🔑 GUID (free registration at [abr.business.gov.au](https://abr.business.gov.au/)) |
| **Format** | SOAP/XML |
| **Endpoints** | Search by ABN, name, ASIC number. Returns ABN status, entity name, business names, GST registration. |
| **Docs** | [abr.business.gov.au/Documentation](https://abr.business.gov.au/Documentation/WebServiceResponse) |
| **Notes** | ABN format: 11 digits. SOAP protocol — you'll need to construct XML envelopes. Response may contain HTML-encoded entities that need decoding. |

#### 🇳🇿 New Zealand — NZBN

| | |
|---|---|
| **API** | https://api.business.govt.nz/gateway/nzbn/v5 |
| **Auth** | 🔑 API key (free registration) |
| **Format** | REST/JSON |
| **Docs** | [api.business.govt.nz](https://api.business.govt.nz/) |
| **Notes** | NZBN format: 13 digits. Modern REST API with good documentation. |

#### 🇮🇳 India — MCA (Ministry of Corporate Affairs)

| | |
|---|---|
| **Portal** | https://www.mca.gov.in |
| **Auth** | 🟢 Free basic search |
| **Format** | HTML |
| **Notes** | CIN (Corporate Identification Number) format: 21 characters. No public API. V3 portal launched 2023. |

#### 🇸🇬 Singapore — ACRA (BizFile+)

| | |
|---|---|
| **Portal** | https://www.bizfile.gov.sg |
| **Auth** | 💰 Paid for detailed profiles |
| **Notes** | UEN (Unique Entity Number) format varies. Free search, paid BizFile+ extracts. |

#### 🇭🇰 Hong Kong — Companies Registry

| | |
|---|---|
| **Portal** | https://www.icris.cr.gov.hk |
| **Auth** | 💰 Paid for company searches |
| **Notes** | CR number format: 7 digits. ICRIS portal. Most searches require payment. |

---

## Africa

#### 🇿🇦 South Africa — CIPC

| | |
|---|---|
| **Portal** | https://eservices.cipc.co.za |
| **Auth** | 🔑 Free registration required |
| **Format** | HTML |
| **Notes** | Registration number format: YYYY/NNNNNN/NN. Free basic search after registration. |

#### 🇰🇪 Kenya — eCitizen Business Registration

| | |
|---|---|
| **Portal** | https://www.ecitizen.go.ke |
| **Auth** | 🟢 Free basic search |
| **Notes** | Business search available through eCitizen portal. KRA PIN used for tax identification. |

---

## Bulk Data Sources

These open datasets provide complete or near-complete company databases for bulk import and offline analysis.

| Country | Source | Records | Format | Update Frequency |
|---------|--------|---------|--------|-----------------|
| 🇬🇧 UK | [Companies House bulk data](http://download.companieshouse.gov.uk/en_output.html) | ~5.4M | CSV | Monthly |
| 🇫🇷 France | [SIRENE (data.gouv.fr)](https://www.data.gouv.fr/fr/datasets/base-sirene-des-entreprises-et-de-leurs-etablissements-siren-siret/) | ~25M | CSV | Monthly |
| 🇩🇪 Germany | [OffeneRegister.de](https://offeneregister.de/) | ~5.3M | JSONL | Periodic |
| 🇵🇱 Poland | KRS + CEIDG + GUS dumps | ~3.1M | CSV/XML/JSON | Nightly |
| 🇳🇴 Norway | [data.brreg.no](https://data.brreg.no/enhetsregisteret/api/docs/index.html) | ~1M | JSON | Daily |
| 🇨🇿 Czech Republic | [data.gov.cz](https://data.gov.cz/) | ~2.7M | XML/CSV | Regular |
| 🇪🇪 Estonia | [avaandmed.rik.ee](https://avaandmed.rik.ee/) | ~353K | CSV/JSON | Regular |
| 🇩🇰 Denmark | [CVR Open Data](https://datacvr.virk.dk/data/) | ~800K | JSON | Regular |
| 🇫🇮 Finland | [avoindata.prh.fi](https://avoindata.prh.fi/) | ~600K | JSON | Regular |
| 🇸🇰 Slovakia | [data.gov.sk](https://data.gov.sk/) | ~500K | CSV | Regular |
| 🇧🇷 Brazil | [CNPJ Open Data](https://dados.gov.br/dados/conjuntos-dados/cadastro-nacional-da-pessoa-juridica---cnpj) | ~50M | CSV | Monthly |

**Total**: ~95M+ company records freely available from official government sources.

---

## Cross-Border Tools

| Tool | Type | Description |
|------|------|-------------|
| [VIES](https://ec.europa.eu/taxation_customs/vies/) | API | EU VAT number validation with company data |
| [BRIS](https://e-justice.europa.eu/489/EN/business_registers__search_for_a_company_in_the_eu) | Portal | Search business registers across all 27 EU member states |
| [LEI Search (GLEIF)](https://search.gleif.org/) | API | Global Legal Entity Identifier lookup. [API docs](https://www.gleif.org/en/lei-data/gleif-api). 🟢 Free. |
| [OpenCorporates](https://opencorporates.com/) | API | 235M+ companies across 145 jurisdictions. Free for public benefit, 💰 paid commercial. |
| [B2Trust](https://b2trust.com) | Web | Free multi-country registry search. Queries government APIs in real-time. |

---

## Contributing

Contributions welcome! Please read [CONTRIBUTING.md](CONTRIBUTING.md) before submitting a pull request.

**What we're looking for:**
- New country registries with API access
- Corrections to endpoints, auth methods, or rate limits
- Bulk data sources we've missed
- Developer experience notes (gotchas, quirks, tips)

**Quality standards:**
- Only official government sources or well-established community projects built on official data
- Include auth type, format, and any known rate limits
- Note if bulk data is available
- Practical developer notes over marketing descriptions

---

## License

[![CC0](https://licensebuttons.net/p/zero/1.0/88x31.png)](https://creativecommons.org/publicdomain/zero/1.0/)

This list is released into the public domain under CC0. The information it describes is publicly available from the respective government sources.
