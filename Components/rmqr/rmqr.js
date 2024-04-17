"use client";

import { useCallback, useEffect, useRef } from "react";
import * as wasm from "rmqr";

export const RMQR = ({ onSuccess, disabled }) => {
  const vid_r = useRef();
  const canvas_r = useRef();
  const is_init = useRef(false);
  const is_disabled = useRef(false);

  const getStream = async () => {
    return navigator.mediaDevices.getUserMedia({
      audio: false,
      video: {
        facingMode: {
          ideal: "environment",
        },
        width: 1280,
        height: 720,
      },
    });
  };

  const snapshotVidToCanvas = useCallback(() => {
    try {
      if (disabled || is_disabled.current) return;
      const ctx = canvas_r.current.getContext("2d");
      ctx.drawImage(
        vid_r.current,
        (1280 - 720) * 0.5,
        0,
        720,
        720,
        0,
        0,
        512,
        512
      );
      let res = [];
      try {
        res = wasm.render();
      } catch {
        console.log("Error Scanning...");
      }

      if (res.length > 0 && res[0] != "" && res[0].length >= 15) {
        onSuccess(res);
        is_disabled.current = true;
        return;
      } else {
        setTimeout(() => {
          window.requestAnimationFrame(snapshotVidToCanvas);
        }, 50);
      }
    } catch (e) {
      console.log(e);
    }
  }, [onSuccess]);

  useEffect(() => {
    if (canvas_r.current && vid_r.current && !disabled) {
      if (!is_init.current) {
        (async function () {
          const stream = await getStream();
          vid_r.current.srcObject = stream;
          is_init.current = true;
          is_disabled.current = false;
          snapshotVidToCanvas();
        })();
      } else {
        is_disabled.current = false;
        snapshotVidToCanvas();
      }
    }
  }, [canvas_r.current, vid_r.current, disabled]);

  return (
    <div>
      <video
        style={{ display: "none" }}
        ref={vid_r}
        width="1280"
        height="720"
        autoPlay={true}
      ></video>
      <div
        className="relative ml-auto mr-auto mt-2"
        style={{
          width: 256,
          height: 256,
        }}
      >
        <canvas
          ref={canvas_r}
          id="canvas"
          className="absolute transform scale-50 -translate-x-[25%] -translate-y-[25%]"
          width="512"
          height="512"
        ></canvas>
      </div>
    </div>
  );
};

export default RMQR;
