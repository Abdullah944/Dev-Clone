//* Loading Spinner

type propsLoader = {
  show: boolean;
};

// ? If show true show the loading icon by implementation the css class
export default function Loader({ show }: propsLoader) {
  return show ? <div className="loader"></div> : null;
}
