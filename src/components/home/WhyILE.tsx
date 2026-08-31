import { Compass, Users, LineChart, Heart, Milestone } from 'lucide-react';

interface Strength {
  icon: typeof Compass;
  title: string;
  body: string;
  accent: 'sky' | 'blush' | 'ink';
}

const strengths: Strength[] = [
  {
    icon: Compass,
    title: 'Kinh nghiệm thực tiễn',
    body: 'Tiếng Anh được đưa vào tình huống thực — con không chỉ học ngữ pháp mà biết dùng ngôn ngữ để giao tiếp, kể chuyện và giải quyết vấn đề.',
    accent: 'sky',
  },
  {
    icon: Users,
    title: 'Đội ngũ giáo viên chất lượng',
    body: 'Giáo viên bản ngữ và Việt Nam giàu kinh nghiệm, yêu trẻ và được đào tạo liên tục để đồng hành cùng từng giai đoạn phát triển của con.',
    accent: 'ink',
  },
  {
    icon: LineChart,
    title: 'Theo dõi tiến bộ rõ ràng',
    body: 'Bố mẹ được cập nhật định kỳ về sự tiến bộ của con — từng kỹ năng, từng cột mốc — qua báo cáo chi tiết và phiên đánh giá riêng.',
    accent: 'blush',
  },
  {
    icon: Heart,
    title: 'Môi trường học tập truyền cảm hứng',
    body: 'Không gian học được thiết kế an toàn, ấm áp và khơi gợi sự tò mò — nơi con muốn đến mỗi ngày và tự tin thể hiện bản thân.',
    accent: 'sky',
  },
  {
    icon: Milestone,
    title: 'Lộ trình phù hợp từng độ tuổi',
    body: 'Từ 3 đến 15 tuổi, mỗi bé theo một lộ trình được cá nhân hoá theo năng lực và sở thích — không học theo khuôn mẫu chung.',
    accent: 'ink',
  },
];

const accentMap: Record<Strength['accent'], string> = {
  sky: 'bg-sky-200/70 text-sky-700',
  blush: 'bg-blush-200/70 text-blush-600',
  ink: 'bg-ink-900 text-cream-100',
};

const TIGER =
  'https://res.cloudinary.com/wsaz946u/image/upload/v1788166533/yeya-tiger.svg';

export default function WhyILE() {
  return (
    <section className="relative overflow-hidden bg-cream-100 py-20 lg:py-28">
      {/* Soft decorative blob */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-20 top-1/4 h-[300px] w-[300px] rounded-[54%_46%_37%_63%_/_48%_55%_45%_52%] bg-sky-200/30 blur-2xl"
      />

      <div className="container-page relative">
        {/* Section header */}
        <div className="flex flex-col items-start gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-blush-200/70 px-4 py-1.5 font-body text-sm font-semibold text-blush-600">
              Vì sao bố mẹ chọn ILE?
            </span>
            <h2 className="mt-5 font-heading text-3xl font-extrabold leading-[1.15] tracking-tight text-ink-900 sm:text-4xl lg:text-[2.75rem]">
              Năm điều làm nên{' '}
              <span className="relative whitespace-nowrap text-sky-600">
                khác biệt
                <svg
                  aria-hidden
                  viewBox="0 0 180 12"
                  preserveAspectRatio="none"
                  className="absolute -bottom-1 left-0 h-2.5 w-full text-blush-400"
                >
                  <path
                    d="M2 8 C 50 2, 130 2, 178 6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>{' '}
              của ILE
            </h2>
          </div>
          <p className="max-w-sm font-body text-base leading-relaxed text-ink-600 lg:text-right">
            Chúng tôi tin rằng một môi trường tốt sẽ giúp con tự tin bước ra
            thế giới — bằng tiếng Anh và bằng chính mình.
          </p>
        </div>

        {/* ── Desktop: editorial asymmetric layout ── */}
        <div className="mt-14 hidden lg:block">
          <div className="grid grid-cols-12 gap-6">
            {/* Featured strength — tall left column */}
            <div className="col-span-5">
              <FeatureCard strength={strengths[0]} large />
            </div>

            {/* Right column: 2x2 of remaining strengths */}
            <div className="col-span-7 grid grid-cols-2 gap-6">
              <FeatureCard strength={strengths[1]} />
              <FeatureCard strength={strengths[2]} />
              <FeatureCard strength={strengths[3]} />
              {/* Last cell: tiger anchor + short note */}
              <div className="relative flex flex-col justify-between rounded-[24px] bg-sky-200/50 p-7">
                <div>
                  <h3 className="font-heading text-xl font-bold text-ink-900">
                    Đôi thú nhỏ, thành quả lớn
                  </h3>
                  <p className="mt-3 font-body text-base leading-relaxed text-ink-600">
                    Mỗi ngày tại ILE là một bước nhỏ — và những bước nhỏ ấy dệt
                    nên sự tự tin của con trên chặng đường dài.
                  </p>
                </div>
                <img
                  src={TIGER}
                  alt=""
                  aria-hidden
                  className="mt-4 h-24 w-24 self-end drop-shadow-[0_8px_16px_rgba(31,42,55,0.12)]"
                />
              </div>
            </div>

            {/* Full-width fifth strength */}
            <div className="col-span-12">
              <FeatureCard strength={strengths[4]} wide />
            </div>
          </div>
        </div>

        {/* ── Mobile: alternating editorial flow ── */}
        <div className="mt-10 flex flex-col gap-5 lg:hidden">
          {strengths.map((s, i) => (
            <div
              key={s.title}
              className={[
                'rounded-[24px] bg-white/70 p-6 shadow-soft ring-1 ring-ink-300/20',
                i % 2 === 1 ? 'ml-6' : '',
              ].join(' ')}
            >
              <span
                className={[
                  'inline-flex h-11 w-11 items-center justify-center rounded-[14px]',
                  accentMap[s.accent],
                ].join(' ')}
              >
                <s.icon className="h-5 w-5" strokeWidth={2.25} />
              </span>
              <h3 className="mt-4 font-heading text-lg font-bold text-ink-900">
                {s.title}
              </h3>
              <p className="mt-2 font-body text-base leading-relaxed text-ink-600">
                {s.body}
              </p>
            </div>
          ))}

          {/* Tiger anchor card */}
          <div className="relative flex items-center gap-4 overflow-hidden rounded-[24px] bg-sky-200/50 p-6">
            <div className="flex-1">
              <h3 className="font-heading text-lg font-bold text-ink-900">
                Đôi thú nhỏ, thành quả lớn
              </h3>
              <p className="mt-2 font-body text-sm leading-relaxed text-ink-600">
                Mỗi ngày tại ILE là một bước nhỏ dệt nên sự tự tin của con.
              </p>
            </div>
            <img
              src={TIGER}
              alt=""
              aria-hidden
              className="h-20 w-20 shrink-0 drop-shadow-[0_8px_16px_rgba(31,42,55,0.12)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({
  strength,
  large = false,
  wide = false,
}: {
  strength: Strength;
  large?: boolean;
  wide?: boolean;
}) {
  const Icon = strength.icon;
  return (
    <div
      className={[
        'group flex h-full flex-col rounded-[24px] bg-white/70 p-7 shadow-soft ring-1 ring-ink-300/20 transition-all duration-300 ease-smooth hover:shadow-card',
        large ? 'min-h-[340px]' : '',
        wide ? 'flex-row items-center gap-8' : '',
      ].join(' ')}
    >
      <span
        className={[
          'inline-flex items-center justify-center rounded-[16px] transition-transform duration-300 ease-smooth group-hover:scale-105',
          accentMap[strength.accent],
          large ? 'h-14 w-14' : 'h-11 w-11',
        ].join(' ')}
      >
        <Icon
          className={large ? 'h-7 w-7' : 'h-5 w-5'}
          strokeWidth={2.25}
        />
      </span>

      <div className={wide ? 'flex-1' : 'mt-5'}>
        <h3
          className={[
            'font-heading font-bold text-ink-900',
            large ? 'text-2xl' : 'text-xl',
          ].join(' ')}
        >
          {strength.title}
        </h3>
        <p
          className={[
            'mt-3 font-body leading-relaxed text-ink-600',
            large ? 'text-lg' : 'text-base',
            wide ? 'max-w-2xl' : '',
          ].join(' ')}
        >
          {strength.body}
        </p>
      </div>
    </div>
  );
}
