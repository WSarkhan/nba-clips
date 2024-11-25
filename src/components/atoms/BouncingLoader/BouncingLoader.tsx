import Lottie from "react-lottie-player";
import basketBallLoader from "../../../assets/animations/basketballLoaderAnimation.json";

export function BouncingLoader() {
  return (
    <div className="flex items-center justify-center w-full h-full bg-gray-900">
      <Lottie
        loop
        animationData={basketBallLoader}
        play
        style={{ width: 200, height: 200 }}
      />
    </div>
  );
}
