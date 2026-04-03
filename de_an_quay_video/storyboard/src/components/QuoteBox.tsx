export const QuoteBox: React.FC<{ text: string }> = ({ text }) => (
  <div style={{
    background: "#FEF3C7",
    borderLeft: "3px solid #D97706",
    padding: "4px 8px",
    fontSize: 7, fontStyle: "italic",
    borderRadius: "0 4px 4px 0",
  }}>
    {text}
  </div>
);
