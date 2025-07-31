import React, { useState } from "react";
import "./AoDaiIntro.css";
import aoDaiImage from "../../assets/AoDaiWorkshop/aodai_char.png";
import bgImage from "../../assets/AoDaiWorkshop/aodai_background.png";

const slides = [
  {
    emoji: "✨",
    title: "Áo Dài – Biểu Tượng Văn Hóa Việt Nam",
    content:
      "Từ bao đời nay, chiếc áo dài đã trở thành hình ảnh quen thuộc, mang đậm bản sắc của người Việt. Không chỉ đơn thuần là trang phục, áo dài là kết tinh của lịch sử, thẩm mỹ và tinh thần dân tộc, gắn liền với hình ảnh người phụ nữ Việt dịu dàng, thanh thoát.",
  },
  {
    emoji: "👘",
    title: "Nguồn Gốc & Hành Trình Biến Đổi",
    content:
      "Khởi nguồn từ chiếc áo ngũ thân dưới thời chúa Nguyễn Phúc Khoát thế kỷ 18, áo dài đã trải qua nhiều lần cách tân – từ phong cách Le Mur hiện đại hóa năm 1934 của họa sĩ Nguyễn Cát Tường, đến kiểu dáng cổ thuyền phá cách của bà Trần Lệ Xuân hay tay Raglan những năm 1960, tạo nên đa dạng phong cách nhưng vẫn giữ hồn cốt truyền thống.",
  },
  {
    emoji: "🎨",
    title: "Áo Dài trong Nghệ Thuật & Đời Sống",
    content:
      "Chiếc áo dài không chỉ hiện diện trong đời sống thường nhật mà còn là nguồn cảm hứng bất tận cho thi ca, âm nhạc và hội họa. Từ “Áo lụa Hà Đông” của Nguyên Sa, đến tranh “Thiếu nữ bên hoa huệ” của Tô Ngọc Vân, áo dài luôn là biểu tượng cho vẻ đẹp thuần khiết, đậm chất Á Đông.",
  },
  {
    emoji: "🌍",
    title: "Áo Dài và Vị Thế Quốc Tế",
    content:
      "Áo dài đã vươn mình ra thế giới qua các cuộc thi nhan sắc quốc tế và các buổi trình diễn thời trang lớn. Những bộ quốc phục được thiết kế công phu đã tôn vinh nét đẹp Việt, đồng thời đưa hình ảnh áo dài đến với bạn bè năm châu như một biểu tượng mềm của văn hóa Việt Nam.",
  },
  {
    emoji: "💡",
    title: "Bảo Tồn & Sáng Tạo – Hơi Thở Mới Cho Áo Dài",
    content:
      "Ngày nay, áo dài tiếp tục được làm mới qua các chất liệu hiện đại, kết hợp cùng thời trang đương đại để phù hợp với nhịp sống mới. Tuy nhiên, giữ gìn hồn cốt của áo dài – từ dáng áo đến cách mặc – vẫn là điều thiêng liêng đối với bao thế hệ người Việt.",
  },
];

const AoDaiIntro = () => {
  const [step, setStep] = useState(0);

  const handleNext = () => {
    if (step < slides.length - 1) setStep(step + 1);
  };

  return (
    <div
      className="ao-dai-intro-background"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="ao-dai-intro-content colorful">
        <img src={aoDaiImage} alt="Áo Dài" className="ao-dai-image" />
        <div className="ao-dai-emoji">{slides[step].emoji}</div>
        <h1 className="ao-dai-title">{slides[step].title}</h1>
        <p className="ao-dai-desc">{slides[step].content}</p>
        {step < slides.length - 1 ? (
          <button className="ao-dai-next-btn" onClick={handleNext}>
            👉 Tiếp tục
          </button>
        ) : (
          <button className="ao-dai-next-btn" disabled>
            Đã hết phần giới thiệu
          </button>
        )}
      </div>
    </div>
  );
};

export default AoDaiIntro; 