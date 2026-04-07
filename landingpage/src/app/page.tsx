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
  {
    id: "intro",
    memberName: "Nhân",
    task: "Mở đầu",
    content:
      'Xin chào thầy/cô và các bạn. Nhóm 7 chúng em xin trình bày chủ đề "Trách nhiệm của sinh viên trong việc góp phần xây dựng khối đại đoàn kết toàn dân tộc ở Việt Nam." Trước hết, chúng em sẽ trình bày cơ sở lý luận từ môn Chủ nghĩa xã hội khoa học, tiếp đến là thực tiễn Việt Nam, và cuối cùng là trách nhiệm cụ thể mà mỗi sinh viên chúng em có thể thực hiện.',
  },
  {
    id: "s1-1",
    memberName: "Thục Nhi",
    task: "T1-1: Cương lĩnh dân tộc",
    content:
      'Cương lĩnh dân tộc của chủ nghĩa Mác - Lênin đặt ra ba nguyên tắc cốt lõi để giải quyết vấn đề dân tộc.\n\nNguyên tắc thứ nhất: các dân tộc hoàn toàn bình đẳng. Dù lớn hay nhỏ, phát triển cao hay thấp, mọi dân tộc đều có quyền và nghĩa vụ ngang nhau. Không dân tộc nào được giữ đặc quyền hay áp bức dân tộc khác. Bình đẳng dân tộc là nền tảng để thực hiện hai nguyên tắc còn lại.\n\nNguyên tắc thứ hai: các dân tộc có quyền tự quyết - tức quyền tự quyết định chế độ chính trị, con đường phát triển, và quyền tự nguyện liên hiệp với dân tộc khác trên cơ sở bình đẳng. Tuy nhiên, quyền tự quyết cần được thực hiện trên cơ sở tôn trọng chủ quyền và toàn vẹn lãnh thổ, tránh bị lợi dụng để can thiệp vào công việc nội bộ của quốc gia khác.\n\nNguyên tắc thứ ba: liên hiệp công nhân tất cả các dân tộc. Đây là sợi chỉ xuyên suốt, phản ánh bản chất quốc tế của phong trào công nhân và gắn kết sự nghiệp giải phóng dân tộc với giải phóng giai cấp. Như Chủ tịch Hồ Chí Minh khẳng định: "Muốn cứu nước và giải phóng dân tộc, không có con đường nào khác con đường cách mạng vô sản."\n\nBa nguyên tắc này đã được Đảng ta vận dụng nhất quán: đảm bảo 54 dân tộc bình đẳng về quyền lợi, tôn trọng quyền tự quyết từ Cách mạng Tháng Tám đến nay, và xây dựng khối đại đoàn kết toàn dân trên nền tảng liên minh giai cấp công nhân.',
  },
  {
    id: "s1-2",
    memberName: "Châu Nhi",
    task: "T1-2: Đặc trưng dân tộc",
    content:
      'Dân tộc theo nghĩa rộng, theo chủ nghĩa Mác - Lênin, có năm đặc trưng cơ bản. Thứ nhất là cộng đồng lãnh thổ - vùng đất, vùng trời, vùng biển thuộc chủ quyền quốc gia, gắn liền với khái niệm Tổ quốc. Thứ hai là cộng đồng sinh hoạt kinh tế - đặc trưng quan trọng nhất, tạo nên sự thống nhất và bền vững của dân tộc. Thứ ba là cộng đồng ngôn ngữ chung làm công cụ giao tiếp. Thứ tư là cộng đồng văn hóa và tâm lý - yếu tố đặc biệt quan trọng trong liên kết cộng đồng, các dân tộc luôn có ý thức bảo tồn bản sắc trước nguy cơ đồng hóa. Thứ năm là có chung một nhà nước - yếu tố phân biệt dân tộc quốc gia với dân tộc tộc người.\n\nDân tộc và quốc gia gắn bó mật thiết, không tách rời nhau: dân tộc quốc gia bao hàm dân tộc tộc người, dân tộc tộc người là bộ phận hình thành dân tộc quốc gia. Tại Việt Nam, điều này thể hiện rõ nhất qua truyền thống đoàn kết chống ngoại xâm: dù có 54 dân tộc với sắc thái riêng, tất cả đều chia sẻ lòng yêu nước và ý thức bảo vệ chủ quyền trên cùng một dải đất hình chữ S.',
  },
  {
    id: "s1-3",
    memberName: "Phụng Nhi",
    task: "T1-3: Tôn giáo trong quá độ",
    content:
      'Trong thời kỳ quá độ lên chủ nghĩa xã hội, tôn giáo vẫn tồn tại vì các nguồn gốc kinh tế, nhận thức và tâm lý của nó chưa mất đi. Vậy giải quyết vấn đề tôn giáo như thế nào? Chủ nghĩa Mác - Lênin đưa ra bốn nguyên tắc.\n\nMột là tôn trọng quyền tự do tín ngưỡng: mọi công dân có quyền theo hoặc không theo tôn giáo nào, các tôn giáo bình đẳng trước pháp luật. Tuy nhiên, tự do tín ngưỡng không đồng nghĩa với hoạt động trái pháp luật hay mê tín dị đoan.\n\nHai là khắc phục dần ảnh hưởng tiêu cực của tôn giáo - không phải bằng mệnh lệnh hành chính mà bằng cách phát triển kinh tế, nâng cao đời sống và dân trí.\n\nBa là phân biệt mặt tư tưởng và mặt chính trị. Mặt tư tưởng biểu hiện sự khác nhau về niềm tin giữa người có và không có tôn giáo - đây là mâu thuẫn không mang tính đối kháng. Mặt chính trị phản ánh mâu thuẫn đối kháng khi tôn giáo bị lợi dụng cho mục đích chính trị, gây ảnh hưởng đến ổn định xã hội. Việc phân biệt hai mặt này là cần thiết nhằm tránh khuynh hướng cực đoan trong ứng xử với tôn giáo.\n\nBốn là quan điểm lịch sử cụ thể: ở mỗi giai đoạn, vai trò của từng tôn giáo khác nhau, cần phân tích cụ thể để có chính sách phù hợp, phát huy những giá trị nhân văn tốt đẹp phục vụ xây dựng xã hội mới.',
  },
  {
    id: "s2-1",
    memberName: "Huỳnh Nhi",
    task: "T2-1: Đặc điểm dân tộc VN",
    content:
      'Việt Nam có 54 dân tộc cư trú đan xen nhau - không dân tộc nào chiếm giữ một vùng lãnh thổ riêng biệt tuyệt đối. Đặc điểm này vừa là lợi thế vừa là thách thức.\n\nVề lợi thế, sống gần nhau giúp các dân tộc tăng cường hiểu biết, mở rộng giao lưu, giúp đỡ nhau cùng phát triển, tạo nên một nền văn hóa thống nhất trong đa dạng. Như Hồ Chí Minh khẳng định: "Bao nhiêu lợi ích đều vì dân. Bao nhiêu quyền hạn đều của dân... quyền hành và lực lượng đều ở nơi dân."\n\nVề thách thức, do có nhiều tộc người sống xen kẽ nên trong quá trình sinh sống cũng dễ nảy sinh mâu thuẫn, hiểu lầm giữa các cộng đồng. Ngoài ra, sự chênh lệch về trình độ phát triển giữa các vùng miền cũng là rào cản cần vượt qua để đảm bảo sự gắn kết bền vững.\n\nĐoàn kết dân tộc trở thành truyền thống quý báu, là một trong những nguyên nhân và động lực quyết định mọi thắng lợi của dân tộc trong các giai đoạn lịch sử, giúp giành và giữ vững độc lập, thống nhất Tổ quốc.',
  },
  {
    id: "s2-2",
    memberName: "Phú",
    task: "T2-2: Tôn giáo ở VN",
    content:
      'Việt Nam hiện có 16 tôn giáo được công nhận với 43 tổ chức tôn giáo, khoảng 57.000 chức sắc, 157.000 chức việc và hơn 29.000 cơ sở thờ tự, bao gồm cả tôn giáo du nhập và tôn giáo nội sinh như Cao Đài, Phật giáo Hòa Hảo. Điểm đặc biệt là các tôn giáo ở nước ta chung sống hòa bình, chưa từng xảy ra xung đột, chiến tranh tôn giáo.\n\nĐảng và Nhà nước thực hiện nhất quán chính sách tôn trọng quyền tự do tín ngưỡng: công dân có quyền theo hoặc không theo tôn giáo nào, các tôn giáo bình đẳng trước pháp luật. Đồng thời nghiêm cấm lợi dụng tín ngưỡng để hoạt động mê tín dị đoan, kích động chia rẽ hay xâm phạm an ninh quốc gia.\n\nChính sách thể hiện rõ nhất tinh thần đoàn kết là chính sách đại đoàn kết dân tộc: đoàn kết giữa đồng bào theo các tôn giáo khác nhau, giữa người có đạo và không có đạo, lấy mục tiêu "dân giàu, nước mạnh, dân chủ, công bằng, văn minh" làm điểm tương đồng để gắn bó đồng bào các tôn giáo với sự nghiệp chung.',
  },
  {
    id: "s3-1",
    memberName: "Quỳnh Như",
    task: "T3-1: Giao lưu văn hóa",
    content:
      'Việt Nam có 54 dân tộc, mỗi dân tộc mang bản sắc văn hoá riêng biệt. Giáo trình khẳng định: văn hoá dân tộc không thể phát triển nếu không giao lưu với văn hoá các dân tộc khác, nhưng trong giao lưu ấy, các dân tộc không ngừng bảo tồn và phát triển bản sắc riêng. Đây chính là nguyên tắc "thống nhất trong đa dạng" mà chúng ta cần thực hành ngay từ giảng đường.\n\nTrong môi trường đại học, tôi đã có dịp tìm hiểu về các hoạt động giao lưu văn hoá dân tộc thiểu số, như chương trình Giao lưu học sinh, sinh viên DTTS tiêu biểu các trường VHTTDL khu vực phía Nam lần thứ IX (tổ chức tại Cần Thơ, tháng 5/2025). Chương trình bao gồm biểu diễn văn nghệ, thi cổng trại, đốt lửa trại - tạo không gian để sinh viên các dân tộc chia sẻ phong tục, tập quán và nghệ thuật truyền thống của mình.\n\nTừ đó, tôi rút ra những bài học thiết thực cho bản thân. Thứ nhất, tôn trọng đa dạng văn hoá nghĩa là không chỉ "không kỳ thị" mà phải chủ động tìm hiểu và trân trọng nét đẹp riêng của mỗi dân tộc. Thứ hai, giữ gìn bản sắc không có nghĩa là khép kín, mà là tự hào về nguồn cội của mình trong khi mở lòng học hỏi từ người khác. Thứ ba, mỗi sinh viên cần trở thành cầu nối văn hoá - lan toả giá trị tốt đẹp của dân tộc mình đến bạn bè trong lớp, trong trường.',
  },
  {
    id: "s3-2",
    memberName: "Tố Như",
    task: "T3-2: Kiểm chứng thông tin",
    content:
      'Mạng xã hội là không gian kết nối tuyệt vời, nhưng cũng là nơi thông tin sai lệch lan truyền rất nhanh. Những tin tức thiếu chính xác về vấn đề dân tộc hay tôn giáo có thể gây hiểu lầm, tạo khoảng cách giữa các cộng đồng. Là sinh viên, chúng ta cần trang bị kỹ năng đọc - hiểu thông tin một cách có trách nhiệm.\n\nThông tin sai lệch thường có bốn dấu hiệu: tiêu đề giật gân nhằm kích động cảm xúc; thiếu nguồn uy tín hoặc dẫn nguồn không thể kiểm chứng; hình ảnh và video bị cắt ghép, tách khỏi ngữ cảnh gốc; lời bình khái quát hóa hoặc quy chụp cả một nhóm dân tộc hay tôn giáo.\n\nVí dụ, trên mạng xã hội từng xuất hiện nhiều bài viết đưa thông tin không chính xác về chính sách dân tộc, hoặc sử dụng hình ảnh cũ ghép vào sự kiện mới để tạo ấn tượng sai lệch. Tại Đắk Lắk, cơ quan chức năng đã xác minh một số trường hợp đăng tải thông tin bịa đặt về quan hệ giữa các dân tộc ở Tây Nguyên.\n\nKhi gặp tin nhạy cảm, hãy kiểm chứng bằng cách đối chiếu với nhiều nguồn báo chí uy tín; dùng Google Image hoặc TinEye để tra nguồn gốc ảnh và video; và nếu phát hiện tin sai, hãy chia sẻ thông tin đính chính kèm nguồn đáng tin cậy. Mỗi sinh viên chủ động kiểm chứng thông tin chính là đang góp phần xây dựng một không gian mạng lành mạnh và gắn kết cộng đồng.',
  },
  {
    id: "s3-3",
    memberName: "Ý Như",
    task: "T3-3: Tuyên truyền & tình nguyện",
    content:
      'Hiểu lý thuyết về đoàn kết dân tộc là cần thiết, nhưng quan trọng hơn là hành động. Sinh viên có thể góp phần xây dựng khối đại đoàn kết thông qua hai việc: tuyên truyền chính sách và tham gia tình nguyện.\n\nVề tuyên truyền, nhiều đồng bào dân tộc thiểu số ở vùng sâu vùng xa chưa nắm rõ các chương trình hỗ trợ của Nhà nước. Chẳng hạn, Chương trình mục tiêu quốc gia phát triển vùng DTTS giai đoạn 2021-2030 đã hỗ trợ đất ở, nhà ở và nước sinh hoạt cho hàng nghìn hộ dân tại Hà Giang, Cao Bằng, Kon Tum. Sinh viên có thể giúp lan tỏa thông tin này qua mạng xã hội hoặc trong các đợt tình nguyện, để bà con biết quyền lợi mà mình được hưởng.\n\nVề tình nguyện, sinh viên ĐHKHTN đã có những đóng góp thiết thực. Trong chiến dịch Mùa hè xanh hàng năm, sinh viên được cử đến các tỉnh như Đồng Tháp, Vĩnh Long và các vùng DTTS để tổ chức lớp phổ cập tin học, hướng dẫn các em nhỏ sử dụng Internet tìm tài liệu học tập, khảo sát nguồn nước và hướng dẫn bà con xử lý rác thải. Đây chính là cách mang kiến thức chuyên môn phục vụ cộng đồng, thu hẹp khoảng cách giữa các vùng miền.',
  },
  {
    id: "s3-4",
    memberName: "Nhân",
    task: "T3-4: Đoàn kết từ giảng đường",
    content:
      'Là sinh viên năm nhất tại ĐHKHTN, tôi nhận thấy môi trường đại học chính là hình ảnh thu nhỏ của cộng đồng 54 dân tộc cư trú đan xen mà giáo trình đề cập. Trong lớp tôi có bạn bè đến từ nhiều tỉnh thành, vùng miền khác nhau - mỗi người mang theo giọng nói, thói quen sinh hoạt và nền tảng văn hoá riêng.\n\nTheo quan điểm của Đảng, đoàn kết dân tộc là sự đoàn kết giữa những người có cùng chung mục đích, và mục tiêu chung ấy chính là sức mạnh gắn kết. Trong môi trường đại học, mục tiêu chung của chúng tôi là học tập và phát triển bản thân.\n\nCụ thể, ngay trong bài thuyết trình nhóm này, tôi đã đảm nhận vai trò nhóm trưởng - phân công nhiệm vụ cho 9 thành viên, đảm bảo mỗi người đều có phần đóng góp phù hợp với khả năng. Quá trình làm việc nhóm đòi hỏi sự lắng nghe, tôn trọng ý kiến khác biệt và hỗ trợ lẫn nhau - đây chính là thực hành nguyên tắc "bình đẳng, đoàn kết, tương trợ, giúp nhau cùng phát triển" mà Đảng ta luôn nhất quán.\n\nTôi tin rằng xây dựng đoàn kết không bắt đầu từ những điều lớn lao, mà từ chính những hành động nhỏ hàng ngày: chủ động giúp đỡ bạn học yếu hơn, tôn trọng sự khác biệt vùng miền, và cùng nhau hướng đến mục tiêu chung. Đó là cách mỗi sinh viên góp phần xây dựng khối đại đoàn kết từ giảng đường.',
  },
  {
    id: "conclusion",
    memberName: "Nhân",
    task: "Kết luận",
    content:
      'Dựa trên cơ sở lý luận của chủ nghĩa Mác - Lênin về dân tộc và tôn giáo, nhóm 7 đã liên hệ với thực tiễn Việt Nam và thể hiện trách nhiệm cụ thể của sinh viên: từ giao lưu văn hóa, nhận diện tin giả, tuyên truyền chính sách, tình nguyện vùng DTTS, đến thực hành đoàn kết ngay trong giảng đường. Xây dựng khối đại đoàn kết toàn dân tộc không phải là khẩu hiệu xa vời mà bắt đầu từ chính hành động hàng ngày của mỗi chúng ta.\n\nNhóm 7 xin cảm ơn thầy/cô và các bạn đã theo dõi.',
  },
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
