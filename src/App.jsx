import { useEffect, useState } from "react";
import "./App.css";
import Description from "./components/description/Description";
import Feedback from "./components/feedback/Feedback";
import Options from "./components/options/Options";
import Notification from "./components/notification/Notification";

function App() {
  const [options, setOptions] = useState(() => {
    const savedFeedback =
      localStorage.getItem("syeta");
    return savedFeedback
      ? JSON.parse(savedFeedback)
      : {
          good: 0,
          neutral: 0,
          bad: 0,
        };
  });

  useEffect(() => {
    localStorage.setItem(
      "syeta",
      JSON.stringify(options)
    );
  }, [options]);
  const updateFeedback = (feedbackType) => {
    setOptions({
      ...options,
      [feedbackType]: options[feedbackType] + 1,
    });
  };

  const totalFeedback =
    options.good + options.neutral + options.bad;

  const resetFeedback = () => {
    setOptions({ good: 0, neutral: 0, bad: 0 });
  };

  const positiveFeedback = Math.round(
    (options.good / totalFeedback) * 100
  );

  return (
    <>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        resetFeedback={resetFeedback}
      />
      {totalFeedback ? (
        <Feedback
          options={options}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      ) : (
        <Notification />
      )}
    </>
  );
}

export default App;
