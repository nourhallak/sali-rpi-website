import { URL } from "@/utils/url";

// Fetching book info from database
export default async function getbattery() {
  const res = await fetch(`${URL}/screen/batterypercentage`);
  return (await res.json()) as number;
}
