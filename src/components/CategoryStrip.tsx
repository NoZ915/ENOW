import { Group, Image, Stack, Text } from "@mantine/core";
import styles from "../styles/components/CategoryStrip.module.css";

export default function CategoryStrip() {
  const cats = [
    { icon: "./c_tea.png", label: "Tea Time" },
    { icon: "./c_japan.png", label: "Japanese" },
    { icon: "./c_italy.png", label: "Italian" },
    { icon: "./c_american.png", label: "American" },
    { icon: "./c_korean.png", label: "Korean" },
    { icon: "./c_chinese.png", label: "Chinese" },
    { icon: "./c_mexican.png", label: "Mexican" },
    { icon: "./c_teppan.png", label: "Teppanyaki" },
    { icon: "./c_vege.png", label: "Vegetarian" },
  ];
  return (
    <Stack gap={8}>
      <Text fw={700}>Hot right now 🔥</Text>
      <Group gap={20} wrap="wrap">
        {cats.map((c) => (
          <Stack key={c.label} align="center" gap={6} className={styles.catItem}>
            <Image src={c.icon} alt={c.label} className={styles.catIcon} />
            <Text fz={12} c="dimmed">{c.label}</Text>
          </Stack>
        ))}
      </Group>
    </Stack>
  );
}