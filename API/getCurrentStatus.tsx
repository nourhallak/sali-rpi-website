import { RobotCurrentStatus } from "@/Interfaces/Status";

export async function getCurrentStatus() {
  const res = await fetch(`${URL}/screen/search/books/currentstatus`);
  return (await res.json()) as RobotCurrentStatus;
}
