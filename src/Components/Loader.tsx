import { TailSpin } from "react-loader-spinner";

const loaderStyle =
  "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2";

const Loader = () => {
  return (
    <div className={loaderStyle}>
      <TailSpin
        visible={true}
        height="80"
        width="80"
        color="red"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default Loader;
