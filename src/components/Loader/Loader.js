import { SpinnerInfinity } from 'spinners-react';

export default function Loader() {
  return (
    <SpinnerInfinity
      size={90}
      thickness={180}
      speed={180}
      color="rgba(61, 172, 57, 1)"
      secondaryColor="#3f51b5"
      className="loader"
    />
  );
}
