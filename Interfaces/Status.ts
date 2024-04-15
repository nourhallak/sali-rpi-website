// export interface Status {
//   isMoving: boolean;
//   currentX: number;
//   currentY: number;
//   isRackMoving: boolean;
//   isCodefound: boolean;
//   isCentering: boolean;
// }

export interface RobotCurrentStatus {
  navigationState: string;
  rackState: string;
  batteryPercentage: number;
  // currentX: number;
  // currentY: number;
}
