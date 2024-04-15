import { RobotCurrentStatus } from "@/Interfaces/Status";
import { URL } from "@/utils/url";

export async function getCurrentStatus() {
  const res = await fetch(`${URL}/screen/currentstatus`);
  return (await res.json()) as RobotCurrentStatus;
}
