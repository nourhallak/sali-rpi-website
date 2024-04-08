import { Status } from "@/Interfaces/Status";
import { URL } from "@/utils/url";
import NavigationPage from "./NavigationPage";

// Fetching data from database
export const getStatus = async () => {
  const res = await fetch(`${URL}/screen/currentstatus`);
  return (await res.json()) as Status;
};
export default async function getStatusComponent() {
  const status = await getStatus();
  return <NavigationPage statusParam={{ status }} />;
}
