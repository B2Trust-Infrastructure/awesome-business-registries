// VIES — EU VAT Number Validation
// https://ec.europa.eu/taxation_customs/vies/
//
// SOAP-based service. Validates an EU VAT number and returns
// the registered company name and address for most member states.
// Germany (DE) and Spain (ES) return only valid/invalid.

const COUNTRY_CODE = "PL";
const VAT_NUMBER = "5260250995"; // Example: Polish company

async function checkVat(countryCode: string, vatNumber: string) {
  const soapBody = `<?xml version="1.0" encoding="UTF-8"?>
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"
               xmlns:tns="urn:ec.europa.eu:taxud:vies:services:checkVat:types">
  <soap:Body>
    <tns:checkVat>
      <tns:countryCode>${countryCode}</tns:countryCode>
      <tns:vatNumber>${vatNumber}</tns:vatNumber>
    </tns:checkVat>
  </soap:Body>
</soap:Envelope>`;

  const response = await fetch("https://ec.europa.eu/taxation_customs/vies/services/checkVatService", {
    method: "POST",
    headers: { "Content-Type": "text/xml; charset=utf-8" },
    body: soapBody,
  });

  const xml = await response.text();
  const valid = /<valid>(true|false)<\/valid>/.exec(xml)?.[1];
  const name = /<name>([^<]*)<\/name>/.exec(xml)?.[1];
  const address = /<address>([^<]*)<\/address>/.exec(xml)?.[1];
  return { valid: valid === "true", name, address };
}

checkVat(COUNTRY_CODE, VAT_NUMBER).then(console.log);
