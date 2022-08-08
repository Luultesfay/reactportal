const Error = (props) => {
  console.log(props);
  return (
    <div
      className="Error--description"
      onClick={() => props.setShowErrorModal(false)}
    >
      <p>Please fill the field on the form !!!!!</p>
    </div>
  );
};
export default Error;
