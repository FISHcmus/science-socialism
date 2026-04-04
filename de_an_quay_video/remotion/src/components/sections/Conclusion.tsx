import { memo, type FC } from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig, Video, staticFile } from "remotion";
import { COLORS, TEXT_SHADOW } from "../../constants";

const MEMBERS = [
  "Nguyễn Hữu Thiện Nhân",
  "Bùi Huỳnh Nhi",
  "Đào Thục Nhi",
  "Nguyễn Hồng Châu Nhi",
  "Trần Thị Phụng Nhi",
  "Hoàng Thị Tố Như",
  "Nguyễn Đình Ý Như",
  "Nguyễn Phạm Quỳnh Như",
  "Ngô Văn Phú",
];

export const Conclusion: FC = memo(() => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const thankYouSpring = spring({
    frame,
    fps,
    config: { damping: 20, stiffness: 60 },
  });
  const thankYouTranslateY = interpolate(thankYouSpring, [0, 1], [80, 0]);
  const thankYouOpacity = interpolate(thankYouSpring, [0, 1], [0, 1]);
  const accentWidth = interpolate(thankYouSpring, [0, 1], [0, 320]);

  const groupFade = interpolate(frame, [300, 380], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const memberOpacities = MEMBERS.map((_, i) => {
    const memberStart = 360 + i * 20;
    return interpolate(frame, [memberStart, memberStart + 20], [0, 1], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    });
  });

  const globalOpacity = interpolate(frame, [600, 880], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill>
      {/* Background video */}
      <AbsoluteFill>
        <Video src={staticFile('media/T3-4/cnxhkh_ending_nhan.mp4')} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
      </AbsoluteFill>
      {/* Overlay + content */}
      <AbsoluteFill
        className="justify-center items-center flex-col"
        style={{
          background: `linear-gradient(180deg, rgba(247,243,238,0.75) 0%, rgba(237,232,224,0.65) 100%)`,
          opacity: globalOpacity,
        }}
      >
      {/* Thank-you text */}
      <div
        className="text-center mb-5"
        style={{
          transform: `translateY(${thankYouTranslateY}px)`,
          opacity: thankYouOpacity,
        }}
      >
        <h1
          className="text-[64px] text-ds-white font-sans font-bold m-0 leading-snug"
          style={{ textShadow: TEXT_SHADOW }}
        >
          Cảm ơn thầy/cô đã theo dõi
        </h1>
      </div>

      {/* Gold accent line */}
      <div
        className="h-[3px] bg-ds-gold rounded-sm mb-12"
        style={{ width: accentWidth }}
      />

      {/* Group info */}
      <div
        className="text-center mb-8"
        style={{ opacity: groupFade }}
      >
        <div
          className="text-[28px] text-ds-gold font-sans font-bold tracking-[2px] mb-2"
          style={{ textShadow: TEXT_SHADOW }}
        >
          Nhóm 7 - CNXHKH
        </div>
        <div
          className="text-[22px] text-ds-body font-sans tracking-[1px]"
          style={{ textShadow: TEXT_SHADOW }}
        >
          BAA00103 — Chủ nghĩa xã hội khoa học
        </div>
      </div>

      {/* Member names grid */}
      <div className="grid grid-cols-3 gap-x-12 gap-y-3 text-center">
        {MEMBERS.map((name, i) => (
          <div
            key={name}
            className="text-2xl text-ds-white font-sans px-3 py-1.5"
            style={{
              opacity: memberOpacities[i],
              textShadow: TEXT_SHADOW,
            }}
          >
            {name}
          </div>
        ))}
      </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
});
