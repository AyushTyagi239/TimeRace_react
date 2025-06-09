import { forwardRef, useImperativeHandle, useRef } from "react";

const ResultModal = forwardRef(function ResultModal({ result, targetTime , remainingTime , onReset}, ref) {
  const dialog = useRef();
 const userlost = remainingTime <= 0;
 const formattedRemainingTime = (remainingTime/1000).toFixed(2);
 const score = Math.round((1- remainingTime/(targetTime*1000))*100)
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal(); // Show the native dialog
      }
    };
  });

  return (
    <dialog ref={dialog} className="result-modal">
      {userlost && <h2>You Lost</h2>}
      {!userlost && <h2>Your score: {score} </h2>}
      <p>The target time was <strong>{targetTime} Seconds</strong></p>
      <p>You stopped the timer with <strong>{formattedRemainingTime} seconds left.</strong></p>
      <form method="dialog" on onSubmit={onReset}>
        <button>CLOSE</button>
      </form>
    </dialog>
  );
});

export default ResultModal;
