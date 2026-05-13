import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function SkelentonLoader() {
  return (
    <div
      style={{
        marginTop: "3rem",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "1rem",
          justifyContent: "space-around",
        }}
      >
        <Skeleton height={150} width={250} style={{ borderRadius: "3%" }} />
        <Skeleton height={150} width={250} style={{ borderRadius: "3%" }} />
        <Skeleton height={150} width={250} style={{ borderRadius: "3%" }} />
        <Skeleton height={150} width={250} style={{ borderRadius: "3%" }} />
      </div>
      <div
        style={{
          display: "flex",
          gap: "1rem",
          justifyContent: "space-around",
          padding: "1rem",
        }}
      ></div>
      <Skeleton count={5} />
    </div>
  );
}

export default SkelentonLoader;
