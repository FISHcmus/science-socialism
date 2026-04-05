import React, { useState } from "react";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { StatCard } from "./components/StatCard";
import { SearchBar } from "./components/SearchBar";
import { ChapterCard } from "./components/ChapterCard";
import { ChapterNav } from "./components/ChapterNav";
import { LearningObjectives } from "./components/LearningObjectives";
import { AssessmentBreakdown } from "./components/AssessmentBreakdown";
import { CourseTimeline } from "./components/CourseTimeline";
import { ExerciseBlock } from "./components/ExerciseBlock";
import { TheaterEmbed } from "./components/TheaterEmbed";
import { ScriptViewer } from "./components/ScriptViewer";
import { MemberCard } from "./components/MemberCard";
import { MemberGrid } from "./components/MemberGrid";
import { DiscussionHighlight } from "./components/DiscussionHighlight";
import { ResourceLink } from "./components/ResourceLink";
import { ResourceLibrary } from "./components/ResourceLibrary";
import { CallToAction } from "./components/CallToAction";
import { Footer } from "./components/Footer";
import { SectionDivider } from "./components/SectionDivider";
import { SectionHeader } from "./components/SectionHeader";
import { MindmapViewer, useMindmapViewer } from "./components/MindmapViewer";
import { MarkdownRenderer } from "./components/MarkdownRenderer";
import {
  StarIcon, DiamondIcon, ArrowIcon, PlayIcon, BookIcon,
  PeopleIcon, DownloadIcon, SearchIcon, ChevronIcon,
} from "./components/icons";

function Section({ title, children, dark, red, olive }: { title: string; children: React.ReactNode; dark?: boolean; red?: boolean; olive?: boolean }) {
  const bg = red ? "red-banner" : dark ? "black-banner" : olive ? "olive-banner" : "";
  return (
    <>
      {/* Thick red slash between sections */}
      <div className="section-slash" />
      <div className={`${bg} py-14 px-8`}>
        <div className="max-w-[1200px] mx-auto">
          <h2 className="font-propaganda text-3xl mb-8 pb-3 border-b-4 border-current uppercase tracking-[6px] stamp-text">
            {title}
          </h2>
          {children}
        </div>
      </div>
    </>
  );
}

const sampleScript = [
  { id: "1", memberName: "Thuc Nhi", task: "T1-1", content: "National solidarity is a precious tradition of the Vietnamese people, forged through thousands of years of history." },
  { id: "2", memberName: "Chau Nhi", task: "T1-2", content: "According to Marxism-Leninism, the national question is inseparably linked to class struggle and social revolution." },
  { id: "3", memberName: "Phung Nhi", task: "T1-3", content: "Ho Chi Minh's thought on national solidarity inherits and develops the patriotic tradition." },
];

const sampleMd = `# Chapter 5: Ethnicity
## 5.1 Concepts
- Nation in the broad sense (nation)
- Nation in the narrow sense (ethnic group)

> **Definition:** All nations are completely equal

| Criteria | Nation | Ethnic |
|----------|--------|--------|
| Scale | Large | Small |
`;

export const Gallery: React.FC = () => {
  const mindmap = useMindmapViewer();

  return (
    <div className="min-h-screen bg-background text-foreground film-grain">
      {/* Icons */}
      <Section title="Icons">
        <div className="flex gap-6 flex-wrap items-end">
          {[
            ["Star", StarIcon], ["Diamond", DiamondIcon], ["Arrow", ArrowIcon],
            ["Play", PlayIcon], ["Book", BookIcon], ["People", PeopleIcon],
            ["Download", DownloadIcon], ["Search", SearchIcon],
          ].map(([name, Icon]: any) => (
            <div key={name} className="flex flex-col items-center gap-2 text-primary">
              <Icon size={28} />
              <span className="text-xs text-muted-foreground">{name}</span>
            </div>
          ))}
          {(["up", "down", "left", "right"] as const).map((d) => (
            <div key={d} className="flex flex-col items-center gap-2 text-primary">
              <ChevronIcon size={28} direction={d} />
              <span className="text-xs text-muted-foreground">Chevron {d}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* SectionHeader + SectionDivider */}
      <Section title="SectionHeader + SectionDivider">
        <SectionHeader label="Part 1" title="Theoretical Basis" />
        <SectionDivider variant="ornament" />
        <SectionHeader label="Part 2" title="Vietnamese Practice" />
        <SectionDivider />
      </Section>

      {/* Navbar */}
      <Section title="Navbar">
        <Navbar />
      </Section>

      {/* HeroSection */}
      <Section title="HeroSection">
        <HeroSection onWatchVideo={() => alert("Video")} onResources={() => alert("Resources")} />
      </Section>

      {/* StatCard */}
      <Section title="StatCard">
        <div className="grid grid-cols-4 gap-4">
          <StatCard value="7" label="Chapters" icon={<BookIcon size={24} />} />
          <StatCard value="9" label="Member" icon={<PeopleIcon size={24} />} />
          <StatCard value="15'" label="Video" icon={<PlayIcon size={24} />} />
          <StatCard value="50/50" label="Assessment" icon={<StarIcon size={24} />} />
        </div>
      </Section>

      {/* SearchBar */}
      <Section title="SearchBar">
        <div className="max-w-sm">
          <SearchBar onSearch={(q) => console.log(q)} />
        </div>
      </Section>

      {/* ChapterCard + ChapterNav */}
      <Section title="ChapterCard + ChapterNav">
        <ChapterNav>
          {[
            [1, "Introduction to Scientific Socialism"],
            [2, "Historical Mission of the Working Class"],
            [3, "Socialism and the Transition Period"],
            [5, "Ethnicity and Religion"],
          ].map(([n, t]: any) => (
            <ChapterCard key={n} number={n} title={t}
              summary="Chapter summary..."
              onMindmap={() => mindmap.openMindmap(`Chapter ${n}: ${t}`, n)}
              onRead={() => alert("Read")} />
          ))}
        </ChapterNav>
      </Section>

      {/* LearningObjectives */}
      <Section title="LearningObjectives">
        <div className="max-w-xl">
          <LearningObjectives />
        </div>
      </Section>

      {/* AssessmentBreakdown */}
      <Section title="AssessmentBreakdown">
        <div className="max-w-2xl">
          <AssessmentBreakdown />
        </div>
      </Section>

      {/* CourseTimeline */}
      <Section title="CourseTimeline">
        <div className="max-w-2xl">
          <CourseTimeline />
        </div>
      </Section>

      {/* ExerciseBlock */}
      <Section title="ExerciseBlock">
        <div className="max-w-3xl">
          <ExerciseBlock prompt="Analyze the role of national solidarity in building socialism in Vietnam today." />
        </div>
      </Section>

      {/* TheaterEmbed */}
      <Section title="TheaterEmbed" olive>
        <TheaterEmbed src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="Demo" />
      </Section>

      {/* ScriptViewer */}
      <Section title="ScriptViewer" dark>
        <div className="max-w-2xl">
          <ScriptViewer sections={sampleScript} />
        </div>
      </Section>

      {/* MemberCard + MemberGrid */}
      <Section title="MemberCard + MemberGrid">
        <MemberGrid>
          {[
            { name: "Nguyen Huu Thien Nhan", role: "Team Leader", task: "T3-4" },
            { name: "Bui Huynh Nhi", role: "Member", task: "T2-1" },
            { name: "Dao Thuc Nhi", role: "Member", task: "T1-1" },
            { name: "Nguyen Hong Chau Nhi", role: "Member", task: "T1-2" },
            { name: "Tran Thi Phung Nhi", role: "Member", task: "T1-3" },
            { name: "Hoang Thi To Nhu", role: "Member", task: "T3-2" },
            { name: "Nguyen Dinh Y Nhu", role: "Member", task: "T3-3" },
            { name: "Nguyen Pham Quynh Nhu", role: "Member", task: "T3-1" },
            { name: "Ngo Van Phu", role: "Member", task: "T2-2" },
          ].map((m) => <MemberCard key={m.name} {...m} />)}
        </MemberGrid>
      </Section>

      {/* DiscussionHighlight */}
      <Section title="DiscussionHighlight">
        <div className="max-w-xl">
          <DiscussionHighlight prompt="Analyze the practical role of the Vietnam Fatherland Front in building national solidarity today." />
        </div>
      </Section>

      {/* ResourceLink + ResourceLibrary */}
      <Section title="ResourceLink + ResourceLibrary">
        <ResourceLibrary>
          <ResourceLink title="Scientific Socialism Textbook" description="National Political Publishing, 2021" href="#" type="pdf" />
          <ResourceLink title="Chapter 5 - Ethnicity" description="Extracted markdown" href="#" type="md" />
          <ResourceLink title="Lectures" description="PPTX Slides" href="#" type="pptx" />
          <ResourceLink title="Moodle" description="Course page" href="#" type="link" />
        </ResourceLibrary>
      </Section>

      {/* MarkdownRenderer */}
      <Section title="MarkdownRenderer">
        <div className="max-w-2xl">
          <MarkdownRenderer content={sampleMd} />
        </div>
      </Section>

      {/* CallToAction */}
      <Section title="CallToAction">
        <CallToAction />
      </Section>

      {/* Footer */}
      <Section title="Footer">
        <Footer />
      </Section>

      {/* MindmapViewer Dialog */}
      <MindmapViewer
        title={mindmap.title}
        chapterNumber={mindmap.chapterNumber}
        open={mindmap.open}
        onOpenChange={mindmap.onOpenChange}
      />
    </div>
  );
};
