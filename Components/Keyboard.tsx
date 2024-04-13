"use client";
import Popup from "reactjs-popup";
import { Button } from "@nextui-org/react";
import { Ref, useState } from "react";

const keyStyle =
  "text-center pt-1 w-12 h-12 bg-gray-400 m-1 rounded-xl text-xl text-white font-bold";

type Props = {
  value: string;
  setValue: (value: string) => void;
};

export default function Keyboard({ value, setValue }: Props) {
  const ChangeTextFeild = (event: any) => {
    let updatedText = value;
    let keyPressed = event.target.value;
    if (keyPressed == ".") {
      updatedText = updatedText.slice(0, -1);
    } else {
      updatedText += event.target.value;
    }
    setValue(updatedText);
    // params.textRef.current = updatedText;
  };

  return (
    <main>
      <div className="flex flex-col w-[800px] h-[250px] absolute bottom-0 bg-gray-200 border-2 border-t-gray-400 shadow-2xl shadow-black">
        <div className="row-1 flex justify-center pt-4">
          <Button
            size="sm"
            className={keyStyle}
            value={"q"}
            onClick={ChangeTextFeild}
          >
            Q
          </Button>
          <Button
            size="sm"
            className={keyStyle}
            value={"w"}
            onClick={ChangeTextFeild}
          >
            W
          </Button>
          <Button
            size="sm"
            className={keyStyle}
            value={"e"}
            onClick={ChangeTextFeild}
          >
            E
          </Button>
          <Button
            size="sm"
            className={keyStyle}
            value={"r"}
            onClick={ChangeTextFeild}
          >
            R
          </Button>
          <Button
            size="sm"
            className={keyStyle}
            value={"t"}
            onClick={ChangeTextFeild}
          >
            T
          </Button>
          <Button
            size="sm"
            className={keyStyle}
            value={"y"}
            onClick={ChangeTextFeild}
          >
            Y
          </Button>
          <Button
            size="sm"
            className={keyStyle}
            value={"u"}
            onClick={ChangeTextFeild}
          >
            U
          </Button>
          <Button
            size="sm"
            className={keyStyle}
            value={"i"}
            onClick={ChangeTextFeild}
          >
            I
          </Button>
          <Button
            size="sm"
            className={keyStyle}
            value={"o"}
            onClick={ChangeTextFeild}
          >
            O
          </Button>
          <Button
            size="sm"
            className={keyStyle}
            value={"p"}
            onClick={ChangeTextFeild}
          >
            P
          </Button>
        </div>
        <div className="row-2 flex justify-center">
          <Button
            size="sm"
            className={keyStyle}
            value={"a"}
            onClick={ChangeTextFeild}
          >
            A
          </Button>
          <Button
            size="sm"
            className={keyStyle}
            value={"s"}
            onClick={ChangeTextFeild}
          >
            S
          </Button>
          <Button
            size="sm"
            className={keyStyle}
            value={"d"}
            onClick={ChangeTextFeild}
          >
            D
          </Button>
          <Button
            size="sm"
            className={keyStyle}
            value={"f"}
            onClick={ChangeTextFeild}
          >
            F
          </Button>
          <Button
            size="sm"
            className={keyStyle}
            value={"g"}
            onClick={ChangeTextFeild}
          >
            G
          </Button>
          <Button
            size="sm"
            className={keyStyle}
            value={"h"}
            onClick={ChangeTextFeild}
          >
            H
          </Button>
          <Button
            size="sm"
            className={keyStyle}
            value={"j"}
            onClick={ChangeTextFeild}
          >
            J
          </Button>
          <Button
            size="sm"
            className={keyStyle}
            value={"k"}
            onClick={ChangeTextFeild}
          >
            K
          </Button>
          <Button
            size="sm"
            className={keyStyle}
            value={"l"}
            onClick={ChangeTextFeild}
          >
            L
          </Button>
        </div>
        <div className="row-3 flex justify-center">
          <Button
            size="sm"
            className={keyStyle}
            value={"z"}
            onClick={ChangeTextFeild}
          >
            Z
          </Button>
          <Button
            size="sm"
            className={keyStyle}
            value={"x"}
            onClick={ChangeTextFeild}
          >
            X
          </Button>
          <Button
            size="sm"
            className={keyStyle}
            value={"c"}
            onClick={ChangeTextFeild}
          >
            C
          </Button>
          <Button
            size="sm"
            className={keyStyle}
            value={"v"}
            onClick={ChangeTextFeild}
          >
            V
          </Button>
          <Button
            size="sm"
            className={keyStyle}
            value={"b"}
            onClick={ChangeTextFeild}
          >
            B
          </Button>
          <Button
            size="sm"
            className={keyStyle}
            value={"n"}
            onClick={ChangeTextFeild}
          >
            N
          </Button>
          <Button
            size="sm"
            className={keyStyle}
            value={"m"}
            onClick={ChangeTextFeild}
          >
            M
          </Button>
          <Button
            size="sm"
            className="font-bold absolute bottom-15 right-10 text-center pt-1 w-24 h-12 bg-gray-500 m-1 rounded-xl text-xl text-white "
            value={"."}
            onClick={ChangeTextFeild}
          >
            Delete
          </Button>
        </div>

        <div className="row-4 flex justify-center">
          <Button className="absolute bottom-1 left-2 text-center pt-1 w-24 h-12 bg-gray-500 m-1 rounded-xl text-xl text-white ">
            Close
          </Button>
          <Button
            className="text-center pt-3 w-96 h-12 bg-gray-400 m-1 rounded-xl text-xl text-white font-bold"
            value={" "}
            onClick={ChangeTextFeild}
          ></Button>
          {/* <input
            type="text"
            className="mt-4 border border-black h-6 w-40"
            value={Text}
            readOnly
          /> */}
        </div>
      </div>
    </main>
  );
}
