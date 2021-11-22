import React from "react";

const Clock = () => {
  let aDate = new Date();
  // let aString = aDate.toLocaleString();
  let aString = "YYYY/MM/DD hh:mm:ss";
  let yearString = aDate.getFullYear().toString(); //年
  let monthString = ("0" + (aDate.getMonth() + 1).toString()).slice(-2); //月
  let dateString = ("0" + aDate.getDate().toString()).slice(-2); //日

  aString = aString.replace(/YYYY/, yearString);
  aString = aString.replace(/MM/, monthString);
  aString = aString.replace(/DD/, dateString);

  let hourString = ("0" + aDate.getHours().toString()).slice(-2);
  let minuteString = ("0" + aDate.getMinutes().toString()).slice(-2);
  let secondString = ("0" + aDate.getSeconds().toString()).slice(-2);

  aString = aString.replace(/hh/, hourString);
  aString = aString.replace(/mm/, minuteString);
  aString = aString.replace(/ss/, secondString);

  return <div>{aString}</div>;
};

export default Clock;
