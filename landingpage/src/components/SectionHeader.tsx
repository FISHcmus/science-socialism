import React from "react";

type SectionHeaderProps = {
  label: string;
  title: string;
};

export const SectionHeader: React.FC<SectionHeaderProps> = ({ label, title }) => (
  <div className="mb-8">
    <span className="section-label text-xs">{label}</span>
    <div className="accent-line my-2 w-[30%]" />
    <h2 className="display-text text-[56px] leading-[1.1] m-0">{title}</h2>
  </div>
);
