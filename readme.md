# Awesome Business Registries [![Awesome](https://awesome.re/badge.svg)](https://github.com/sindresorhus/awesome)

> Curated list of official government business registry APIs worldwide.

Every country handles company data differently. This list is a developer reference for official, primary-source business registry APIs — endpoints, authentication, formats, rate limits, and bulk data sources.

Commercial aggregators like OpenCorporates and Global Database sit on top of these same government sources. If you want to go direct to the source — free, authoritative, no vendor lock-in — start here.

## Contents

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

## EU-Wide

- [VIES VAT Validation](https://ec.europa.eu/taxation_customs/vies/) - Validates EU VAT numbers and returns company name and address for most member states. REST/JSON, no authentication.
- [BRIS](https://e-justice.europa.eu/content_business_registers_at_european_level-105-en.do) - Business Registers Interconnection System covering all 27 EU member states. Web portal only, no public API.
- [LEI Search (GLEIF)](https://api.gleif.org/) - Global Legal Entity Identifier lookup across jurisdictions. Free REST/JSON API.

## Western Europe

- [Companies House (UK)](https://developer.company-information.service.gov.uk/) - Companies registry covering 5.4M UK entities. REST/JSON, basic auth with API key. 600 requests per 5 minutes. Streaming API available for real-time filing events.
- [SIRENE (France)](https://api.insee.fr/catalogue/) - INSEE business registry with 25M French establishments. REST/JSON, public endpoint since 2024. Pagination capped at 25 results per page. Lucene query syntax supported.
- [Handelsregister (Germany)](https://www.handelsregister.de/) - German commercial register. HTML only, no official REST API. Approximately 60 requests per hour. Bulk access via OffeneRegister.de community dump.
- [KVK (Netherlands)](https://developers.kvk.nl/) - Dutch Chamber of Commerce registry. REST/JSON, free API key. Search by name, KVK number, or RSIN.
- [CBE/KBO (Belgium)](https://kbopub.economie.fgov.be/) - Crossroads Bank for Enterprises. REST/JSON, no authentication. Enterprise number format is 10 digits with leading zero.
- [CRO (Ireland)](https://core.cro.ie/) - Companies Registration Office. Free web search, no public REST API. Annual returns available via data.gov.ie.

## Northern Europe

- [Brønnøysundregistrene (Norway)](https://data.brreg.no/enhetsregisteret/api/docs/) - One of the most open registries in Europe with 1M entities. REST/JSON in HAL format, no authentication, generous rate limits.
- [Bolagsverket (Sweden)](https://www.bolagsverket.se/) - Swedish Companies Registration Office. Basic search free via web, REST/JSON API requires paid agreement.
- [CVR (Denmark)](https://datacvr.virk.dk/) - Central Business Register with 800K companies. REST/JSON API requires Danish NemID or MitID; bulk data freely accessible.
- [PRH (Finland)](https://avoindata.prh.fi/) - Patent and Registration Office registry with 600K companies. REST/JSON, fully open access.
- [e-Business Register (Estonia)](https://ariregister.rik.ee/) - Estonian business registry with 353K companies. REST/JSON and XML formats available.

## Central Europe

- [KRS (Poland)](https://api-krs.ms.gov.pl/) - National Court Register for limited companies and corporations. REST/JSON, no authentication.
- [CEIDG (Poland)](https://datastore.ceidg.gov.pl/) - Central Registration of sole proprietors with 2.5M entities. REST/JSON, JWT bearer token required.
- [GUS REGON (Poland)](https://api.stat.gov.pl/Home/RegonApi) - Statistical office registry mapping NIP, REGON, and KRS identifiers. SOAP/XML, free API key by email request.
- [Biała Lista (Poland)](https://wl-api.mf.gov.pl/) - VAT taxpayer whitelist with status and bank account verification. REST/JSON, no authentication.
- [CRBR (Poland)](https://crbr.podatki.gov.pl/) - Central Register of Beneficial Owners. REST/JSON, no authentication.
- [ARES (Czech Republic)](https://ares.gov.cz/) - Economic subjects registry with 2.7M entities. REST/JSON since 2023, no authentication. Average response time 93ms.
- [ORSR (Slovakia)](https://www.orsr.sk/) - Commercial register with 500K entities. HTML only, no REST API. IČO format matches Czech Republic.
- [Céginformációs Szolgálat (Hungary)](https://www.e-cegjegyzek.hu/) - Hungarian company information service. Basic search free; detailed extracts paid.
- [Firmenbuch (Austria)](https://justizonline.gv.at/) - Austrian company register. Paid access via Justiz.gv.at; basic data through BRIS.

## Southern Europe

- [Registro delle Imprese (Italy)](https://www.registroimprese.it/) - Italian business register operated by InfoCamere. Basic search free; official extracts and API access paid.
- [Registro Mercantil (Spain)](https://www.rmc.es/) - Spanish commercial register, decentralized by province. Paid extracts; basic info through BRIS.
- [GEMI (Greece)](https://www.businessregistry.gr/) - General Electronic Commercial Registry. Free basic search, HTML only.
- [Sudski Registar (Croatia)](https://sudreg.pravosudje.hr/) - Croatian court registry. Free public web search.

## Eastern Europe

- [ONRC (Romania)](https://www.onrc.ro/) - National Trade Register Office. Free name search; detailed extracts paid.
- [Commercial Register (Bulgaria)](https://portal.registryagency.bg/) - Bulgarian Registry Agency. Fully open and free, HTML interface.

## Americas

- [SEC EDGAR (United States)](https://www.sec.gov/edgar/sec-api-documentation) - Securities and Exchange Commission filings for public companies. REST/JSON, no authentication, User-Agent header required. Hard limit 10 requests per second. Note that US registration is state-level — there is no federal business registry.
- [BrasilAPI CNPJ (Brazil)](https://brasilapi.com.br/docs#tag/CNPJ) - Community API on top of Receita Federal CNPJ data. REST/JSON, free. Bulk data available from Receita Federal.
- [Corporations Canada](https://ised-isde.canada.ca/cc/lgcy/fdrlCrpSrch.html) - Federal incorporations registry. Free web search, no API. Provincial registries operate separately.

## Asia-Pacific

- [ABN Lookup (Australia)](https://abr.business.gov.au/Documentation) - Australian Business Number registry. SOAP/XML, free GUID registration. Responses contain HTML-encoded entities requiring decoding.
- [NZBN (New Zealand)](https://api.business.govt.nz/gateway/nzbn/v5) - New Zealand Business Number registry. REST/JSON, free API key.
- [MCA (India)](https://www.mca.gov.in/) - Ministry of Corporate Affairs. Free basic search via V3 portal, no public API.
- [BizFile+ (Singapore)](https://www.bizfile.gov.sg/) - ACRA business filing portal. Free search; detailed profiles paid.
- [Companies Registry (Hong Kong)](https://www.icris.cr.gov.hk/) - ICRIS portal for Hong Kong companies. Most searches require payment.

## Africa

- [CIPC (South Africa)](https://eservices.cipc.co.za/) - Companies and Intellectual Property Commission. Free basic search after registration.
- [eCitizen Business Registration (Kenya)](https://www.ecitizen.go.ke/) - Kenyan business search portal. Free basic access.

## Bulk Data Sources

Open datasets providing complete or near-complete company databases for bulk import and offline analysis.

- [Companies House Bulk Data](http://download.companieshouse.gov.uk/en_output.html) - 5.4M UK companies, CSV, monthly updates.
- [SIRENE Open Data](https://www.data.gouv.fr/fr/datasets/base-sirene-des-entreprises-et-de-leurs-etablissements-siren-siret/) - 25M French establishments, CSV, monthly updates.
- [OffeneRegister.de](https://offeneregister.de/) - 5.3M German companies extracted from Handelsregister, JSONL.
- [KRS Bulk Dumps (Poland)](https://api-krs.ms.gov.pl/) - 632K Polish court-registered companies, nightly updates.
- [CEIDG Bulk Dumps (Poland)](https://datastore.ceidg.gov.pl/) - 2.5M Polish sole proprietors, nightly updates.
- [data.brreg.no](https://data.brreg.no/) - 1M Norwegian entities, JSON, daily updates.
- [data.gov.cz Business Subjects](https://data.gov.cz/) - 2.7M Czech entities, XML and CSV.
- [Estonian Open Data](https://avaandmed.eesti.ee/) - 353K Estonian companies, CSV and JSON.
- [CVR Open Data (Denmark)](https://datacvr.virk.dk/data/) - 800K Danish companies, JSON.
- [avoindata.prh.fi (Finland)](https://avoindata.prh.fi/) - 600K Finnish companies, JSON.
- [data.gov.sk Business Registry (Slovakia)](https://data.gov.sk/) - 500K Slovak entities, CSV.
- [CNPJ Open Data (Brazil)](https://dados.gov.br/dados/conjuntos-dados/cadastro-nacional-da-pessoa-juridica---cnpj) - 50M Brazilian entities, CSV, monthly updates.

## Cross-Border Tools

- [VIES](https://ec.europa.eu/taxation_customs/vies/) - EU VAT number validation that returns company data for most member states.
- [BRIS](https://e-justice.europa.eu/content_business_registers_at_european_level-105-en.do) - Search interface across business registers in all 27 EU member states.
- [GLEIF LEI Search](https://www.gleif.org/en/lei-data/gleif-api) - Global Legal Entity Identifier lookup across jurisdictions.
- [OpenCorporates](https://opencorporates.com/) - Aggregator covering 235M companies across 145 jurisdictions. Free for public benefit; commercial use paid.

## Contributing

Contributions welcome! Read the [contribution guidelines](contributing.md) first.

## License

[![CC0](https://mirrors.creativecommons.org/presskit/buttons/88x31/svg/cc-zero.svg)](https://creativecommons.org/publicdomain/zero/1.0)
