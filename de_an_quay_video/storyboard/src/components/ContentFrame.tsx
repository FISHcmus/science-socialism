import type { SectionData } from "../data/sections";
import { BgMesh } from "./TitleFrame";
import { MemberPiP } from "./MemberPiP";
import { ContentCard } from "./ContentCard";
import { StatBox } from "./StatBox";
import { QuoteBox } from "./QuoteBox";
import { ImageSlot } from "./ImageSlot";
import { CitationBar } from "./CitationBar";

export const ContentFrame: React.FC<{ section: SectionData }> = ({ section: s }) => (
  <div style={{
    width: 480, height: 270, position: "relative", overflow: "hidden",
    background: s.bgColor, borderRadius: "0 0 6px 6px",
  }}>
    <BgMesh />
    <div style={{ width: "100%", height: "100%", display: "flex" }}>
      {/* Content area */}
      <div style={{
        flex: 1, padding: "10px 12px",
        display: "flex", flexDirection: "column", gap: 4, overflow: "hidden",
      }}>
        {/* Stats row */}
        {s.stats && s.stats.length > 0 && (
          <div style={{ display: "flex", gap: 4 }}>
            {s.stats.map((st) => (
              <StatBox key={st.label} value={st.value} label={st.label} />
            ))}
          </div>
        )}

        {/* Quote */}
        {s.quote && <QuoteBox text={s.quote} />}

        {/* Cards */}
        {s.cards.map((c) => (
          <ContentCard key={c.label} label={c.label} detail={c.detail} />
        ))}

        {/* Images */}
        {s.images.length > 0 && (
          <div style={{ display: "flex", alignItems: "center", gap: 6, flex: 1, minHeight: 30 }}>
            {s.images.map((img) => (
              <ImageSlot key={img.alt} src={img.src} alt={img.alt} />
            ))}
          </div>
        )}
        {s.images.length === 0 && s.cards.length > 0 && (
          <div style={{ display: "flex", alignItems: "center", gap: 6, flex: 1, minHeight: 30 }}>
            <ImageSlot src="" alt="Chua co anh" />
            <ImageSlot src="" alt="Chua co anh" />
          </div>
        )}

        {/* Citation */}
        <CitationBar text={s.citation} />
      </div>

      {/* Member PiP */}
      <MemberPiP
        name={s.memberFull || s.member}
        sectionLabel={s.sectionLabel}
        color={s.memberColor}
      />
    </div>
  </div>
);
