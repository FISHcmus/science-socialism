import { HeroSection } from "@/components/HeroSection";
import { StatCard } from "@/components/StatCard";
import { SectionHeader } from "@/components/SectionHeader";
import { SectionDivider } from "@/components/SectionDivider";
import { ChapterCard } from "@/components/ChapterCard";
import { ChapterNav } from "@/components/ChapterNav";
import { LearningObjectives } from "@/components/LearningObjectives";
import { AssessmentBreakdown } from "@/components/AssessmentBreakdown";
import { CourseTimeline } from "@/components/CourseTimeline";
import { ExerciseBlock } from "@/components/ExerciseBlock";
import { TheaterEmbed } from "@/components/TheaterEmbed";
import { ScriptViewer } from "@/components/ScriptViewer";
import { MemberCard } from "@/components/MemberCard";
import { MemberGrid } from "@/components/MemberGrid";
import { DiscussionHighlight } from "@/components/DiscussionHighlight";
import { ResourceLink } from "@/components/ResourceLink";
import { ResourceLibrary } from "@/components/ResourceLibrary";
import { CallToAction } from "@/components/CallToAction";
import { Footer } from "@/components/Footer";
import { BookIcon, PeopleIcon, PlayIcon, StarIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { ScrollRevealWrapper } from "@/components/ScrollRevealWrapper";
import { LandingShell } from "@/components/LandingShell";
import { MindmapSection } from "@/components/MindmapSection";
import { chapter6Detailed } from "@/data/chapter6Detailed";

/* ─── Static Data ──────────────────────────────────────────── */

const chapters = [
  { number: 1, title: "Nhập môn CNXHKH", summary: "Đối tượng, phương pháp và ý nghĩa nghiên cứu CNXHKH." },
  { number: 2, title: "Sứ mệnh lịch sử của GCCN", summary: "Giai cấp công nhân và vai trò lịch sử thế giới." },
  { number: 3, title: "CNXH và thời kỳ quá độ", summary: "Chủ nghĩa xã hội và quá trình quá độ từ CNTB lên CNXH." },
  { number: 4, title: "Dân chủ XHCN và Nhà nước XHCN", summary: "Bản chất dân chủ XHCN, nhà nước kiểu mới." },
  { number: 5, title: "Cơ cấu xã hội - giai cấp", summary: "Liên minh giai cấp, tầng lớp trong thời kỳ quá độ." },
  { number: 6, title: "Dân tộc và tôn giáo", summary: "Vấn đề dân tộc, tôn giáo trong thời kỳ quá độ lên CNXH." },
  { number: 7, title: "Vấn đề gia đình", summary: "Gia đình trong thời kỳ quá độ lên CNXH." },
];

const scriptSections = [
  { id: "intro", memberName: "Nhân", task: "Mở đầu", content: "Xin chào thầy/cô và các bạn. Nhóm 7 chúng em xin trình bày chủ đề 'Trách nhiệm của sinh viên trong việc góp phần xây dựng khối đại đoàn kết toàn dân tộc ở Việt Nam.'" },
  { id: "s1-1", memberName: "Thục Nhi", task: "T1-1", content: "Cương lĩnh dân tộc của chủ nghĩa Mác - Lênin đặt ra ba nguyên tắc cốt lõi để giải quyết vấn đề dân tộc: bình đẳng, tự quyết, liên hiệp công nhân." },
  { id: "s1-2", memberName: "Châu Nhi", task: "T1-2", content: "Đặc trưng dân tộc Việt Nam: 54 dân tộc, truyền thống đoàn kết, chính sách dân tộc của Đảng." },
  { id: "s1-3", memberName: "Phụng Nhi", task: "T1-3", content: "Tư tưởng Hồ Chí Minh về đại đoàn kết dân tộc: kế thừa truyền thống yêu nước, phát triển sáng tạo." },
  { id: "s2-1", memberName: "Huỳnh Nhi", task: "T2-1", content: "Thực tiễn xây dựng khối đại đoàn kết toàn dân tộc ở Việt Nam: Mặt trận Tổ quốc, chính sách dân tộc, tôn giáo." },
  { id: "s2-2", memberName: "Phú", task: "T2-2", content: "Những thành tựu và hạn chế trong xây dựng khối đại đoàn kết: phát triển kinh tế, văn hóa, xã hội vùng dân tộc thiểu số." },
  { id: "s3-1", memberName: "Quỳnh Như", task: "T3-1", content: "Trách nhiệm sinh viên trong học tập và nghiên cứu: nâng cao nhận thức chính trị, hiểu biết về chính sách dân tộc." },
  { id: "s3-2", memberName: "Tố Như", task: "T3-2", content: "Trách nhiệm sinh viên trong hoạt động thực tiễn: tình nguyện, giao lưu văn hóa, tôn trọng đa dạng." },
  { id: "s3-3", memberName: "Ý Như", task: "T3-3", content: "Trách nhiệm sinh viên trong đấu tranh bảo vệ khối đại đoàn kết: chống phá hoại, phản bác luận điệu sai trái." },
  { id: "s3-4", memberName: "Nhân", task: "T3-4", content: "Kết luận: Mỗi sinh viên là một mắt xích trong khối đại đoàn kết dân tộc. Từ nhận thức đến hành động, chúng ta góp phần xây dựng đất nước ngày càng vững mạnh." },
];

const members = [
  { name: "Nguyễn Hữu Thiện Nhân", role: "Nhóm trưởng", task: "T3-4", description: "Kết luận & sản xuất video", photoUrl: "/avatars/nhan.webp", leader: true },
  { name: "Bùi Huỳnh Nhi", role: "Thành viên", task: "T2-1", description: "Thực tiễn đại đoàn kết VN" },
  { name: "Đào Thục Nhi", role: "Thành viên", task: "T1-1", description: "Cương lĩnh dân tộc Mác-Lênin" },
  { name: "Nguyễn Hồng Châu Nhi", role: "Thành viên", task: "T1-2", description: "Đặc trưng dân tộc Việt Nam" },
  { name: "Trần Thị Phụng Nhi", role: "Thành viên", task: "T1-3", description: "Tư tưởng HCM về đoàn kết" },
  { name: "Hoàng Thị Tố Như", role: "Thành viên", task: "T3-2", description: "SV trong hoạt động thực tiễn" },
  { name: "Nguyễn Đình Ý Như", role: "Thành viên", task: "T3-3", description: "SV bảo vệ đoàn kết dân tộc" },
  { name: "Nguyễn Phạm Quỳnh Như", role: "Thành viên", task: "T3-1", description: "SV trong học tập & nghiên cứu" },
  { name: "Ngô Văn Phú", role: "Thành viên", task: "T2-2", description: "Thành tựu & hạn chế thực tiễn" },
];

/* ─── JSON-LD (hardcoded, safe for dangerouslySetInnerHTML) ── */

const jsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Course",
  name: "Scientific Socialism (BAA00103)",
  courseCode: "BAA00103",
  provider: { "@type": "Organization", name: "University of Science - VNU-HCM" },
  description: "2-credit general education course on Scientific Socialism. Semester 2, 2025-2026.",
  numberOfCredits: 2,
});

/* ─── Page ─────────────────────────────────────────────────── */

export default function LandingPage() {
  return (
    <>
      {/* eslint-disable-next-line react/no-danger -- static JSON-LD, no user input */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />
      <LandingShell>
        {/* ── Section 1: Hero ─────────────────────────────── */}
        <div id="hero">
          <HeroSection />
        </div>

        {/* ── Section 2: Stats ────────────────────────────── */}
        <section id="stats" className="py-16 px-8 bg-background">
          <ScrollRevealWrapper className="max-w-[1200px] mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4 anim-march">
            <StatCard value="7" label="Chapters" icon={<BookIcon size={24} />} />
            <StatCard value="9" label="Members" icon={<PeopleIcon size={24} />} />
            <StatCard value="15'" label="Video" icon={<PlayIcon size={24} />} />
            <StatCard value="50/50" label="Assessment" icon={<StarIcon size={24} />} />
          </ScrollRevealWrapper>
        </section>

        {/* ── Section 3: Chapters ─────────────────────────── */}
        <div className="section-slash" />
        <section id="chapters" className="py-16 px-8 bg-background">
          <div className="max-w-[1200px] mx-auto">
            <ScrollRevealWrapper className="anim-section">
              <SectionHeader label="Part 01" title="Course Content" />
            </ScrollRevealWrapper>
            <ScrollRevealWrapper className="anim-march-deep">
              <ChapterNav>
                {chapters.map((ch) => (
                  <ChapterCard key={ch.number} number={ch.number} title={ch.title} summary={ch.summary} />
                ))}
              </ChapterNav>
            </ScrollRevealWrapper>
          </div>
        </section>

        {/* ── Section 4: Objectives + Assessment ──────────── */}
        <SectionDivider variant="ornament" className="max-w-[1200px] mx-auto" />
        <section id="objectives" className="py-16 px-8 bg-background">
          <div className="max-w-[1200px] mx-auto">
            <ScrollRevealWrapper className="anim-section">
              <SectionHeader label="Part 02" title="Objectives & Assessment" />
            </ScrollRevealWrapper>
            <ScrollRevealWrapper className="grid grid-cols-1 lg:grid-cols-2 gap-6 anim-march">
              <LearningObjectives objectives={[
                "Understand the scientific and revolutionary nature of Scientific Socialism",
                "Master the laws of social movement and development",
                "Creatively apply Marxist-Leninist theory to Vietnamese practice",
                "Recognize student responsibility in building socialism",
              ]} />
              <AssessmentBreakdown finalWeight="50%" finalDetail="Essay, 60 minutes, paper materials allowed, no electronic devices" />
            </ScrollRevealWrapper>
          </div>
        </section>

        {/* ── Section 5: Timeline ─────────────────────────── */}
        <SectionDivider variant="ornament" className="max-w-[1200px] mx-auto" />
        <section id="timeline" className="py-16 px-8 bg-background">
          <div className="max-w-[1200px] mx-auto">
            <ScrollRevealWrapper className="anim-section">
              <SectionHeader label="Part 03" title="Schedule" />
            </ScrollRevealWrapper>
            <ScrollRevealWrapper className="anim-slam">
              <CourseTimeline milestones={[
                { week: 1, label: "Start", description: "Introduction to CNXHKH", active: true },
                { week: 4, label: "Midterm", description: "Written exam, 20%", active: false },
                { week: 8, label: "Video Due", description: "Group presentation, 10%", active: true },
                { week: 15, label: "Final", description: "Essay exam, 50%", active: false },
              ]} />
            </ScrollRevealWrapper>
          </div>
        </section>

        {/* ── Section 6: Exercise ─────────────────────────── */}
        <SectionDivider variant="ornament" className="max-w-[1200px] mx-auto" />
        <section id="exercise" className="py-16 px-8 bg-background">
          <div className="max-w-[1200px] mx-auto">
            <ScrollRevealWrapper className="anim-section">
              <SectionHeader label="Part 04" title="Topic Analysis" />
            </ScrollRevealWrapper>
            <ScrollRevealWrapper className="max-w-4xl anim-slam">
              <ExerciseBlock
                prompt="Based on the theoretical foundations of Scientific Socialism, demonstrate student responsibility in contributing to building the bloc of national solidarity in Vietnam."
                tiers={[
                  { label: "Theory", percent: "35%", description: "Marxist-Leninist principles on ethnicity, Ho Chi Minh thought on national unity" },
                  { label: "Practice", percent: "15%", description: "Vietnam Fatherland Front, ethnic minority policies, achievements and limitations" },
                  { label: "Responsibility", percent: "50%", description: "Student duties: study, volunteer, cultural exchange, defend national unity" },
                ]}
              />
            </ScrollRevealWrapper>
          </div>
        </section>

        {/* ── Section 6.5: Chapter 6 Mindmap ──────────────── */}
        <SectionDivider variant="ornament" className="max-w-[1200px] mx-auto" />
        <section id="mindmap-ch6" className="py-16 px-8 bg-background">
          <div className="max-w-[1200px] mx-auto">
            <SectionHeader label="Chương 6" title="Dân tộc và tôn giáo — Mindmap" />
            <p className="font-body text-sm text-muted-foreground uppercase tracking-wider mb-6 max-w-2xl">
              Sơ đồ tư duy chương 6: Vấn đề dân tộc và tôn giáo trong thời kỳ quá độ lên CNXH — nền tảng lý luận cho chủ đề thuyết trình nhóm 7.
            </p>
            <MindmapSection tree={chapter6Detailed} layout="radial" />
            <a href="/mindmap/6" target="_blank" className="inline-block mt-4">
              <Button variant="outline" size="lg">Open Fullscreen</Button>
            </a>
          </div>
        </section>

        {/* ── Section 7: Video Theater (DARK) ─────────────── */}
        <div className="section-slash" />
        <section id="video" className="bg-black py-20 px-8">
          <div className="max-w-[1200px] mx-auto">
            <ScrollRevealWrapper className="anim-section">
              <SectionHeader label="Part 05" title="Presentation Video" />
            </ScrollRevealWrapper>
            <ScrollRevealWrapper className="anim-slam">
              <TheaterEmbed videoId="GT7FYuN6Sc0" title="Group 7 - Topic 6: National Solidarity" />
            </ScrollRevealWrapper>
            <div className="mt-4 text-center">
              <p className="font-display-vi text-lg uppercase tracking-[4px] text-primary mb-1">Chủ đề 6: Xây dựng khối đại đoàn kết toàn dân tộc</p>
              <p className="font-body text-sm text-cream/50">Nhóm 7 - BAA00103 - HK2 2025-2026</p>
            </div>
            <div className="mt-12 max-w-3xl mx-auto">
              <h3 className="font-propaganda text-xl uppercase tracking-[6px] text-cream mb-4">Script</h3>
              <ScriptViewer sections={scriptSections} />
            </div>
          </div>
        </section>
        <div className="section-slash" />

        {/* ── Section 8: Team ─────────────────────────────── */}
        <section id="team" className="py-16 px-8 bg-background">
          <div className="max-w-[1200px] mx-auto">
            <ScrollRevealWrapper className="anim-section">
              <SectionHeader label="Part 06" title="Group 7" />
            </ScrollRevealWrapper>
            <ScrollRevealWrapper className="anim-march-deep">
              <div className="max-w-2xl mx-auto mb-8">
                {members.filter((m) => m.leader).map((m) => <MemberCard key={m.name} {...m} />)}
              </div>
              <MemberGrid>
                {members.filter((m) => !m.leader).map((m) => <MemberCard key={m.name} {...m} />)}
              </MemberGrid>
            </ScrollRevealWrapper>
          </div>
        </section>

        {/* ── Section 9: Discussion ───────────────────────── */}
        <SectionDivider variant="ornament" className="max-w-[1200px] mx-auto" />
        <section id="discussion" className="py-16 px-8 bg-background">
          <div className="max-w-[1200px] mx-auto">
            <ScrollRevealWrapper className="anim-section">
              <SectionHeader label="Part 07" title="Discussion" />
            </ScrollRevealWrapper>
            <ScrollRevealWrapper className="max-w-2xl anim-slide">
              <DiscussionHighlight
                prompt="National solidarity in the context of globalization - what challenges do students face?"
                references={["Ch.5 Social Structure", "Ch.6 Ethnicity & Religion", "Vietnamese Practice"]}
              />
            </ScrollRevealWrapper>
          </div>
        </section>

        {/* ── Section 10: Resources ───────────────────────── */}
        <SectionDivider variant="ornament" className="max-w-[1200px] mx-auto" />
        <section id="resources" className="py-16 px-8 bg-background">
          <div className="max-w-[1200px] mx-auto">
            <ScrollRevealWrapper className="anim-section">
              <SectionHeader label="Part 08" title="Resources" />
            </ScrollRevealWrapper>
            <ScrollRevealWrapper className="anim-march-deep">
              <ResourceLibrary>
                <ResourceLink title="Giáo trình CNXHKH (2021)" description="NXB Chính trị Quốc gia Sự Thật, giáo trình chính thức" href="https://drive.google.com/file/d/1J1gb8SlxsQPYVMcY8GbnZLjf9-hDhLlS/view" type="pdf" />
                <ResourceLink title="Bài giảng chương 1-7" description="Slide PPTX từ giảng viên" href="https://drive.google.com/file/d/1B3uN9vblBBQ2iDW7XeqxkVTnMz_FmplI/view" type="pptx" />
                <ResourceLink title="Đề cương chi tiết" description="Đề cương chi tiết học phần BAA00103" href="https://drive.google.com/file/d/1f1Aw1fRkpcZyXXtRzqerjEJzKUg1oXk0/view" type="pdf" />
                <ResourceLink title="Trang Moodle" description="courses.hcmus.edu.vn - ID 16128" href="https://courses.hcmus.edu.vn/course/view.php?id=16128" type="link" />
              </ResourceLibrary>
            </ScrollRevealWrapper>
          </div>
        </section>

        {/* ── Section 11: CTA ─────────────────────────────── */}
        <div id="cta">
          <ScrollRevealWrapper className="anim-slam">
            <CallToAction title="Start Learning Now" description="Access course materials and join group discussions" items={[
              { label: "Open Moodle", href: "https://courses.hcmus.edu.vn/course/view.php?id=16128" },
              { label: "Contact Team", href: "#team", variant: "outline" },
            ]} />
          </ScrollRevealWrapper>
        </div>

        {/* ── Section 12: Footer ──────────────────────────── */}
        <div id="footer">
          <Footer courseCode="BAA00103" courseName="Scientific Socialism" year="2025-2026" />
        </div>
      </LandingShell>
    </>
  );
}
