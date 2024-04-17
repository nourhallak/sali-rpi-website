// export interface Status {
//   isMoving: boolean;
//   currentX: number;
//   currentY: number;
//   isRackMoving: boolean;
//   isCodefound: boolean;
//   isCentering: boolean;
// }

import { book } from "./Book";

export interface RobotCurrentStatus {
  stateText: string;
  navigationState: string;
  rackState: string;
  currentBook: book | undefined;
  booksToDeliver: book[];
  batteryPercentage: number;
  waitingForUserToConfirm: boolean;
  // currentX: number;
  // currentY: number;
}
