export interface book {
  name: string;
  auther: string;
  decoded_string: string;
  position: {
    x: number;
    y: number;
    z: number;
  };
  orientation: {
    x: number;
    y: number;
    z: number;
    w: number;
  };
}
export const emptybook: book = {
  name: "",
  auther: "",
  decoded_string: "",
  position: {
    x: 0,
    y: 0,
    z: 0,
  },
  orientation: {
    x: 0,
    y: 0,
    z: 0,
    w: 0,
  },
};
