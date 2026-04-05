import React from "react";

type SectionHeaderProps = {
  label: string;
  title: string;
};

export const SectionHeader: React.FC<SectionHeaderProps> = ({ label, title }) => (
  <div className="mb-10">
    <span className="section-label text-sm tracking-[12px]">{label}</span>
    <div className="accent-line my-3 w-full" />
    <h2 className="display-text text-[64px] leading-[1] m-0 stamp-text tracking-[-1px]">{title}</h2>
  </div>
);
