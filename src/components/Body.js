import { useState } from "react";
import { getDuration, getFormattedTime, getAvgSize } from "../functions/calculateDuration";
import { Header } from "./Header";
import { Input } from "./Input";
import { Loader } from "./Loader";
import { Error } from "./Error";
import Output from "./Output";
import { toast } from 'react-toastify';

function Body() {
  document.title = "YT Playlist Length Calculator";
  const [urlLink, setURL] = useState("");
  const [resultOut, setResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [error_msg, setErrorMsg] = useState("");
  const [timeString, setTimeString] = useState({ num: 0, avg_size: "", t100: "", t125: "", t150: "", t175: "", t200: "" });

  function urlChangeHandler(event) { setURL(event.target.value); }

  async function getTime() {
    let time, count, notCount, avg_size;
    if(urlLink.length===0) {
      toast.warn('Input is empty !');
      return;
    }
    setResult(false);
    setError(false);
    setLoading(true);
    try {
      // eslint-disable-next-line
      [time, count, notCount] = await getDuration(urlLink);
      avg_size = getAvgSize(time, count);
      const [t100x, t125x, t150x, t175x, t200x] = getFormattedTime(time);
      let obj = { num: count, avg_size: avg_size, t100: t100x, t125: t125x, t150: t150x, t175: t175x, t200: t200x };
      setTimeString(obj);
    }
    catch (error) {
      setError(true);
      setErrorMsg(error.message);
    }
    setResult(true);
    setLoading(false);
  }

  return (

    <div className="w-full h-full bg-black/60 flex flex-col items-center justify-evenly flex-wrap">

      <Header resultOut={resultOut} />
      <Input getTime={getTime} urlChangeHandler={urlChangeHandler} urlLink={urlLink} />
      <Loader loading={loading} />
      <Output resultOut={resultOut} error={error} timeString={timeString} />
      <Error error_msg={error_msg} error={error} resultOut={resultOut} />

    </div>


  );
}
export default Body;