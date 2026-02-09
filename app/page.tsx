import { Tariff } from "./types/tariff";
import PageClient from "./pageClient";

async function getTariffs(): Promise<Tariff[]> {
  const res = await fetch(
    "https://t-core.fit-hub.pro/Test/GetTariffs",
    { cache: "no-store" }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch tariffs");
  }

  return res.json();
}

export default async function Home() {
  const tariffs = await getTariffs();

  return <PageClient tariffs={tariffs} />;
}
