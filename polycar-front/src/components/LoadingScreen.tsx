import "../styles/LoadingScreen.scss";

function LoadingScreen() {
  return (
    <div className="loading-screen">
      <div className="loading-text">
        <span>Loading</span>
        <span className="car-emoji">🚗</span>
      </div>
    </div>
  );
}
export default LoadingScreen;