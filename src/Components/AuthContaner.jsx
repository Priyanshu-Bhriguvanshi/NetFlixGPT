
const AuthContainer = ({ children }) => {
  const imageUrl =
    "https://assets.nflxext.com/ffe/siteui/vlv3/638e9299-0637-42d1-ba39-54ade4cf2bf6/web/IN-en-20250203-TRIFECTA-perspective_46eb8857-face-4ea6-b901-dbf22b461369_medium.jpg";

  return (
    <div
      className="flex justify-center items-center h-screen  bg-cover bg-center relative"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="">{children}</div>
    </div>
  );
};

export default AuthContainer;
