import { useState } from "react";

interface Props {
  src: string;
  alt: string;
}

export const ImageSlot: React.FC<Props> = ({ src, alt }) => {
  const [failed, setFailed] = useState(false);

  return (
    <div style={{
      flex: 1, minHeight: 28,
      border: "2px solid #D97706", borderRadius: 4,
      display: "flex", alignItems: "center", justifyContent: "center",
      fontSize: 7, color: "#92400E", background: "#FEF3C7",
      overflow: "hidden",
    }}>
      {!failed && src ? (
        <img
          src={src} alt={alt}
          onError={() => setFailed(true)}
          style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: 2 }}
        />
      ) : (
        alt
      )}
    </div>
  );
};
