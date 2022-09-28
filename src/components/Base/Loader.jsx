const Loader = (props: { status: boolean }) => {
  return (
    <div
      className="center"
      data-testid="custom-loader"
      style={{ visibility: props.status ? "visible" : "hidden" }}
    >
      <img src="assets/loader.svg" width={70} alt="" />
    </div>
  );
};
export default Loader;
