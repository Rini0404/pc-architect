import { useSelector } from "react-redux";

function Welcome() {
  const { user } = useSelector((state) => state.auth);
  console.log(user)
  return (
    <>
      <div className="w-11/12 sm:w-2/3 mb-5 sm:mb-10">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-white font-bold leading-tight">
        Welcome {user && user.name}!
        </h1>
      </div>
    </>
  );
}

export default Welcome;
