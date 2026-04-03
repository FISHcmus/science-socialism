export const CitationBar: React.FC<{ text: string }> = ({ text }) => {
  if (!text) return null;
  return (
    <div style={{
      fontSize: 6, color: "#92400E", textAlign: "center",
      fontStyle: "italic", paddingTop: 2,
      borderTop: "1px solid #D97706", marginTop: "auto",
    }}>
      {text}
    </div>
  );
};
