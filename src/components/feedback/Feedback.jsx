import css from "./Feeback.module.css";

const Feedback = ({
  options,
  totalFeedback,
  positiveFeedback,
}) => {
  return (
    <ul>
      <li>Good: {options.good}</li>
      <li>Neutral: {options.neutral}</li>
      <li>Bad: {options.bad}</li>
      {totalFeedback > 0 && (
        <li>Total: {totalFeedback}</li>
      )}
      {positiveFeedback > 0 && (
        <li>Positive: {positiveFeedback}</li>
      )}
    </ul>
  );
};

export default Feedback;
