"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

import { ImageGalleryLightbox } from "@/components/ImageGalleryLightbox";
import { Pill } from "@/components/ui/Pill";

const toPublicSrc = (path: string) => encodeURI(path.replace(/\.(png|jpe?g)$/i, ".webp"));

type BeyondWorkCard = {
  title: string;
  description: string;
  tags: string[];
  images: string[];
};

type BeyondWorkGroup = {
  id: string;
  label: string;
  title: string;
  description: string;
  cards: BeyondWorkCard[];
};

const beyondWorkGroups: BeyondWorkGroup[] = [
  {
    id: "microsoft-moments",
    label: "MICROSOFT · AI EDUCATION · HACKATHON · BUILDER CULTURE",
    title: "Microsoft Moments",
    description:
      "Beyond my PM internship, Microsoft gave me opportunities to mentor students, join builder communities, and experience how early ideas become shared innovation moments.",
    cards: [
      {
        title: "Microsoft AI Asia GIVE - Inspiring Future AI Builders",
        description:
          'Guided high school students through Microsoft AI showcases and shared approachable perspectives on STEM, innovation, and future AI career paths through the Microsoft AI Asia GIVE x "Walk the Yangtze Delta" Youth Camp.',
        tags: ["AI Education", "STEM Mentorship", "Inclusion", "Youth Camp"],
        images: [
          toPublicSrc("/Beyond Work/Microsoft AI Asia GIVE & Xinhua Education Foundation/give1.jpg"),
          toPublicSrc("/Beyond Work/Microsoft AI Asia GIVE & Xinhua Education Foundation/give2.jpg"),
          toPublicSrc("/Beyond Work/Microsoft AI Asia GIVE & Xinhua Education Foundation/give3.jpg"),
          toPublicSrc("/Beyond Work/Microsoft AI Asia GIVE & Xinhua Education Foundation/give4.jpeg")
        ]
      },
      {
        title: "Microsoft Hackathon - Building Early Ideas",
        description:
          "Participated in Microsoft Hackathon, exploring rapid product thinking, prototyping, and collaboration around early-stage ideas.",
        tags: ["Hackathon", "Product Experiments", "Prototyping"],
        images: [
          toPublicSrc("/Beyond Work/MS hackthon/Hackathon1.JPG"),
          toPublicSrc("/Beyond Work/MS hackthon/Hackathon2.JPG"),
          toPublicSrc("/Beyond Work/MS hackthon/Hackathon3.JPG"),
          toPublicSrc("/Beyond Work/MS hackthon/Hackathon4.JPG")
        ]
      },
      {
        title: "OPE Summer Festival - Internal Innovation Showcase",
        description:
          "Joined a summer co-creation festival where internal innovation projects were showcased, shared, and explored with people interested in Microsoft's product and technology culture.",
        tags: ["Internal Innovation", "Co-creation", "Builder Culture"],
        images: [
          toPublicSrc("/Beyond Work/MS OPE Summer festival/OPE1.JPG"),
          toPublicSrc("/Beyond Work/MS OPE Summer festival/OPE2.JPG"),
          toPublicSrc("/Beyond Work/MS OPE Summer festival/OPE3.jpg"),
          toPublicSrc("/Beyond Work/MS OPE Summer festival/OPE4.JPG"),
          toPublicSrc("/Beyond Work/MS OPE Summer festival/OPE5.JPG"),
          toPublicSrc("/Beyond Work/MS OPE Summer festival/OPE6.JPG")
        ]
      },
      {
        title: "Microsoft Intern Life",
        description:
          "Team moments, intern activities, and shared memories from my Microsoft internship experience.",
        tags: ["Internship Life", "Team Culture", "Microsoft"],
        images: [
          toPublicSrc("/Beyond Work/MS Intern/MS Intern 1.JPG"),
          toPublicSrc("/Beyond Work/MS Intern/MS Intern 2.jpeg"),
          toPublicSrc("/Beyond Work/MS Intern/MS Intern 3.jpeg"),
          toPublicSrc("/Beyond Work/MS Intern/MS Intern 4.jpeg"),
          toPublicSrc("/Beyond Work/MS Intern/MS Intern 5.jpeg"),
          toPublicSrc("/Beyond Work/MS Intern/MS Intern 6.jpg")
        ]
      }
    ]
  },
  {
    id: "disney-moments",
    label: "DISNEY · COMMUNITY · SUSTAINABILITY · INCLUSION",
    title: "Disney Moments",
    description:
      "At Disney, I experienced how creativity extends beyond products into community, sustainability, and inclusive belonging.",
    cards: [
      {
        title: "Earth Day Volunteering - Plastic Reuse Workshop",
        description:
          "Joined a Disney Earth Day volunteer activity, guiding elementary school students through plastic reuse and sustainability-themed creative activities.",
        tags: ["Volunteering", "Sustainability", "Earth Day", "Kids Workshop"],
        images: [
          toPublicSrc("/Beyond Work/迪士尼志愿者地球日和pride活动和其他照片/地球日/earth1.jpg"),
          toPublicSrc("/Beyond Work/迪士尼志愿者地球日和pride活动和其他照片/地球日/earth2.jpg"),
          toPublicSrc("/Beyond Work/迪士尼志愿者地球日和pride活动和其他照片/地球日/earth3.jpeg"),
          toPublicSrc("/Beyond Work/迪士尼志愿者地球日和pride活动和其他照片/地球日/earth4.jpeg")
        ]
      },
      {
        title: "Disney Pride & Team Moments",
        description:
          "Participated in Pride-related community moments that celebrated LGBTQ+ inclusion, representation, and belonging, alongside everyday team memories from my Disney creative internship.",
        tags: ["Pride", "Inclusion", "Community", "Team Culture", "Disney"],
        images: [
          toPublicSrc("/Beyond Work/迪士尼志愿者地球日和pride活动和其他照片/1.jpeg"),
          toPublicSrc("/Beyond Work/迪士尼志愿者地球日和pride活动和其他照片/2.jpeg"),
          toPublicSrc("/Beyond Work/迪士尼志愿者地球日和pride活动和其他照片/3.jpeg"),
          toPublicSrc("/Beyond Work/迪士尼志愿者地球日和pride活动和其他照片/4.JPG")
        ]
      }
    ]
  },
  {
    id: "graduation",
    label: "GRADUATION · SHANGHAI JIAO TONG UNIVERSITY · GROWTH",
    title: "Graduation",
    description:
      "A milestone marking the end of my undergraduate journey in Information & Interaction Design - and the beginning of my next chapter in AI product, HCI, and creative technology.",
    cards: [
      {
        title: "Graduation - From Interaction Design to AI Product",
        description:
          "Graduating from Shanghai Jiao Tong University shaped the foundation of how I think: combining design, technology, user experience, and product strategy to make complex systems more understandable.",
        tags: ["Graduation", "SJTU", "Interaction Design", "Next Chapter"],
        images: [
          toPublicSrc("/Beyond Work/Graduation/Graduation1.JPG"),
          toPublicSrc("/Beyond Work/Graduation/Graduation2.jpg"),
          toPublicSrc("/Beyond Work/Graduation/Graduation3.jpg"),
          toPublicSrc("/Beyond Work/Graduation/Graduation4.jpeg")
        ]
      }
    ]
  }
];

function PhotoRail({
  images,
  title,
  imageIndexes,
  onOpen
}: {
  images: string[];
  title: string;
  imageIndexes: number[];
  onOpen: (index: number) => void;
}) {
  const railRef = useRef<HTMLDivElement>(null);
  const duplicated = images.length > 1 ? [...images, ...images] : images;

  useEffect(() => {
    const node = railRef.current;
    if (!node || images.length <= 1) return;

    let rafId = 0;
    let lastTime = performance.now();
    const speed = 0.024;

    const step = (now: number) => {
      const delta = now - lastTime;
      lastTime = now;
      node.scrollLeft += delta * speed;
      const loopPoint = node.scrollWidth / 2;

      if (node.scrollLeft >= loopPoint) {
        node.scrollLeft -= loopPoint;
      }

      rafId = window.requestAnimationFrame(step);
    };

    rafId = window.requestAnimationFrame(step);

    return () => window.cancelAnimationFrame(rafId);
  }, [images]);

  return (
    <div className="relative overflow-hidden rounded-[26px] border border-white/78 bg-[rgba(247,243,238,0.84)] p-3 shadow-[0_18px_44px_rgba(31,45,96,0.08)]">
      <div
        ref={railRef}
        className="overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        aria-label={`${title} photo gallery`}
      >
        <div className="flex w-max gap-4">
          {duplicated.map((src, index) => {
            const imageIndex = imageIndexes[index % imageIndexes.length];

            return (
              <button
                key={`${title}-${index}`}
                type="button"
                onClick={() => onOpen(imageIndex)}
                className="group relative block h-[280px] w-[min(88vw,780px)] shrink-0 cursor-zoom-in overflow-hidden rounded-[22px] border border-white/80 bg-white/80 shadow-[0_16px_32px_rgba(31,45,96,0.08)] sm:h-[360px] sm:w-[620px] xl:h-[420px] xl:w-[760px]"
                aria-label={`Open ${title} photo ${index + 1}`}
              >
                <Image
                  src={src}
                  alt={`${title} photo ${(index % images.length) + 1}`}
                  fill
                  sizes="(min-width: 1280px) 760px, (min-width: 640px) 620px, 88vw"
                  quality={88}
                  className={`${src.includes("earth2.webp") ? "object-cover object-top" : "object-cover object-center"} transition duration-500 group-hover:scale-[1.02]`}
                  draggable={false}
                />
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export function BeyondWorkSection() {
  const galleryImages = useMemo(
    () =>
      beyondWorkGroups.flatMap((group) =>
        group.cards.flatMap((card) =>
          card.images.map((src, index) => ({
            src,
            alt: `${card.title} photo ${index + 1}`
          }))
        )
      ),
    []
  );

  const cardImageIndexes = useMemo(() => {
    let cursor = 0;

    return beyondWorkGroups.map((group) =>
      group.cards.map((card) => {
        const indexes = card.images.map((_, index) => cursor + index);
        cursor += card.images.length;
        return indexes;
      })
    );
  }, []);

  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  return (
    <section id="beyond-work" className="px-4 pb-20 pt-6 sm:px-6 lg:px-8 lg:pb-24">
      <div className="mx-auto max-w-[1280px]">
        <motion.div
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
          className="mx-auto max-w-4xl text-center"
        >
          <Pill>BEYOND WORK</Pill>
          <h2
            className="mt-6 text-[clamp(2.5rem,5vw,4.2rem)] leading-[1.04] tracking-[-0.03em] text-ink"
            style={{ fontFamily: "ABC Ginto Career, Inter, sans-serif" }}
          >
            Moments of mentorship, community, creativity, and growth.
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-[rgba(11,34,66,0.7)]">
            Moments of mentorship, community, creativity, and growth across the places I've learned and built.
          </p>
        </motion.div>

        <div className="mt-12 space-y-8">
          {beyondWorkGroups.map((group, groupIndex) => (
            <motion.section
              key={group.id}
              initial={false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{ duration: 0.55, delay: groupIndex * 0.03 }}
              className="rounded-[34px] border border-white/70 bg-[linear-gradient(135deg,rgba(255,255,255,0.72),rgba(248,244,239,0.64),rgba(242,241,252,0.62))] p-5 shadow-[0_24px_72px_rgba(31,45,96,0.08)] backdrop-blur-2xl sm:p-7"
            >
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[rgba(11,34,66,0.46)]">
                  {group.label}
                </p>
                <h3
                  className="mt-4 text-[clamp(2rem,3.2vw,3.05rem)] leading-[1] text-ink"
                  style={{ fontFamily: "ABC Ginto Career, Inter, sans-serif" }}
                >
                  {group.title}
                </h3>
                <p className="mt-4 max-w-4xl text-base leading-8 text-[rgba(11,34,66,0.72)]">
                  {group.description}
                </p>
              </div>

              <div className="mt-8 space-y-5">
                {group.cards.map((card, cardIndex) => (
                  <article
                    key={card.title}
                    className="rounded-[30px] border border-white/78 bg-white/68 p-4 shadow-[0_20px_52px_rgba(31,45,96,0.08)] backdrop-blur-xl sm:p-5"
                  >
                    <PhotoRail
                      images={card.images}
                      title={card.title}
                      imageIndexes={cardImageIndexes[groupIndex][cardIndex]}
                      onOpen={setActiveImageIndex}
                    />
                    <div className="mt-5">
                      <h4 className="text-[1.55rem] font-semibold leading-9 text-ink">{card.title}</h4>
                      <p className="mt-3 max-w-5xl text-[1rem] leading-8 text-[rgba(11,34,66,0.72)]">
                        {card.description}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {card.tags.map((tag) => (
                          <Pill key={tag} className="bg-white/82 text-[10px] tracking-[0.16em]">
                            {tag}
                          </Pill>
                        ))}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </motion.section>
          ))}
        </div>
      </div>

      <ImageGalleryLightbox
        images={galleryImages}
        activeIndex={activeImageIndex}
        onClose={() => setActiveImageIndex(null)}
        onNavigate={setActiveImageIndex}
      />
    </section>
  );
}
