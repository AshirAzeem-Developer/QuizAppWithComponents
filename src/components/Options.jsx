import Button from "@mui/material/Button";

function Options(props) {
  const { OptionData, myFunction } = props;
  return (
    <>
      <div className="container  align-items-center">
        <div className="row justify-content-center">
          <div className="col-md-12">
            {OptionData.map((x, i) => {
              return (
                <div className=" d-flex flex-row" key={i}>
                  <Button
                    onClick={myFunction}
                    variant="contained"
                    className="p-3  my-3 w-100 shadow "
                  >
                    {x}
                  </Button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Options;
