import Lottie from "react-lottie-player";
import basketBallLoader from "../../../assets/animations/basketballLoaderAnimation.json";

export default function BasketballLoader() {
  return (
    <div className="flex justify-center items-center w-full h-full bg-gray-900">
      <Lottie
        loop
        animationData={basketBallLoader}
        play
        style={{ width: 200, height: 200 }}
      />
    </div>
  );
}
