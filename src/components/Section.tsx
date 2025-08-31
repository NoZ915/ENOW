import { useEffect, useRef, useState } from "react";
import { ActionIcon, Group, Stack, Text } from "@mantine/core";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import RestaurantCard from "./RestaurantCard";
import type { CardData } from "../types/types";
import styles from "../styles/components/Section.module.css";

export default function SectionCarousel({
  title,
  cards,
}: {
  title: string;
  cards: CardData[];
}) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const updateEdges = () => {
    const el = viewportRef.current;
    if (!el) return;
    const { scrollLeft, clientWidth, scrollWidth } = el;
    setAtStart(scrollLeft <= 0);
    setAtEnd(scrollLeft + clientWidth >= scrollWidth - 1);
  };

  useEffect(() => {
    updateEdges();
    const el = viewportRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateEdges, { passive: true });
    window.addEventListener("resize", updateEdges);
    return () => {
      el.removeEventListener("scroll", updateEdges);
      window.removeEventListener("resize", updateEdges);
    };
  }, []);

  const scroll = (dir: "left" | "right") => {
    const el = viewportRef.current;
    if (!el) return;
    const delta = (el.clientWidth || 0) * 0.9;
    el.scrollBy({ left: dir === "left" ? -delta : delta, behavior: "smooth" });
  };

  return (
    <Stack gap={12} mt={24}>
      <Group justify="space-between" align="center">
        <Text fw={700} size="24px" c="#202434">
          {title}
        </Text>

        <Group gap={8}>
          <Text
            fw={700}
            size="14px"
            c="#3B4769"
            role="button"
            tabIndex={0}
            onClick={() => {
              const el = viewportRef.current;
              if (el) el.scrollTo({ left: el.scrollWidth, behavior: "smooth" });
            }}
            style={{ cursor: "pointer" }}
          >
            See More
          </Text>
          <ActionIcon
            variant="white"
            size="xl"
            color="#202434"
            onClick={() => scroll("left")}
            disabled={atStart}
            aria-label="Scroll left"
          >
            <BsChevronLeft />
          </ActionIcon>
          <ActionIcon
            variant="white"
            size="xl"
            color="#202434"
            onClick={() => scroll("right")}
            disabled={atEnd}
            aria-label="Scroll right"
          >
            <BsChevronRight />
          </ActionIcon>
        </Group>
      </Group>

      <div className={styles.carouselViewport} ref={viewportRef}>
        <div className={styles.row}>
          {cards.map((c) => (
            <div key={c.title} className={styles.cardCol}>
              <RestaurantCard data={c} />
            </div>
          ))}
        </div>
      </div>
    </Stack>
  );
}
