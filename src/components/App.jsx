export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Section title="">
        <FeedbackOptions options={} onLeaveFeedback={}></FeedbackOptions>
        <Statistics good={ } neutral={ } bad={ } total={ } positivePercentage={ } />
        <Notification message="There is no feedback"></Notification>
      </Section>
    </div>
  );
};
