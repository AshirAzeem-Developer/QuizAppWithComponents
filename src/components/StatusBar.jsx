function StatusBar(props) {
  return (
    <>
      <div>
        <div className="container align-items-center">
          <div className="row justify-content-center">
            <div className="col-md-3">
              <p>All Question</p>
            </div>
            <div className="col-md-3">
              <p>Attempted Question</p>
            </div>
            <div className="col-md-3">
              <p>Correct Question</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default StatusBar;
