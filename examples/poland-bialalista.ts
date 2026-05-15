// Poland — Biała Lista (VAT Taxpayer Whitelist)
// https://wl-api.mf.gov.pl/
//
// Ministry of Finance API for VAT taxpayer verification.
// Returns active VAT status and the list of bank accounts officially registered
// for receiving payments — critical for split-payment compliance.

const NIP = "7740001454"; // Example: PGE Polska Grupa Energetyczna
const DATE = new Date().toISOString().slice(0, 10); // Today, YYYY-MM-DD

async function checkVatpayer(nip: string, date: string) {
  const url = `https://wl-api.mf.gov.pl/api/search/nip/${nip}?date=${date}`;

  const response = await fetch(url, {
    headers: { Accept: "application/json" },
  });

  const json = await response.json() as {
    result?: {
      subject?: {
        name: string;
        nip: string;
        statusVat: "Czynny" | "Zwolniony" | "Niezarejestrowany";
        regon?: string;
        krs?: string;
        accountNumbers?: string[];
        workingAddress?: string;
      };
      requestId?: string;
    };
  };

  return {
    name: json.result?.subject?.name,
    vatStatus: json.result?.subject?.statusVat,
    accounts: json.result?.subject?.accountNumbers ?? [],
    address: json.result?.subject?.workingAddress,
    requestId: json.result?.requestId, // Keep this for audit trail
  };
}

checkVatpayer(NIP, DATE).then(console.log);
