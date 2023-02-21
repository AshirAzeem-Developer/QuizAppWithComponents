function Result(props) {
  const { marks } = props;

  return (
    <>
      <div className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h1>All Attempts</h1>
            </div>
            <div className="col-md-6">
              <h1>You Got {marks}</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
