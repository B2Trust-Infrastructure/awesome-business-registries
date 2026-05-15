// Poland — KRS (Krajowy Rejestr Sądowy / National Court Register)
// https://api-krs.ms.gov.pl/
//
// Free REST/JSON API. Covers court-registered entities (sp. z o.o., S.A., etc.).
// KRS number: 10 digits. Two registers: "P" (entrepreneurs), "S" (associations).

const KRS_NUMBER = "0000028860"; // Example: PKN Orlen
const REGISTER = "P"; // P = przedsiębiorcy, S = stowarzyszenia

async function getCompany(krs: string, register: "P" | "S") {
  const url = `https://api-krs.ms.gov.pl/api/krs/OdpisAktualny/${krs}?rejestr=${register}&format=json`;

  const response = await fetch(url, {
    headers: { Accept: "application/json" },
  });

  const json = await response.json() as {
    odpis?: {
      dane?: {
        dzial1?: {
          danePodmiotu?: { nazwa?: string; identyfikatory?: { nip?: string; regon?: string } };
          siedzibaIAdres?: { adres?: { ulica?: string; nrDomu?: string; miejscowosc?: string; kodPocztowy?: string } };
          dataRejestracji?: string;
        };
      };
    };
  };

  const section = json.odpis?.dane?.dzial1;
  return {
    krs,
    name: section?.danePodmiotu?.nazwa,
    nip: section?.danePodmiotu?.identyfikatory?.nip,
    regon: section?.danePodmiotu?.identyfikatory?.regon,
    address: section?.siedzibaIAdres?.adres,
    registered: section?.dataRejestracji,
  };
}

getCompany(KRS_NUMBER, REGISTER).then(console.log);
