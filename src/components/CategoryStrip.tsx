import { Group, Image, Stack, Text, UnstyledButton } from "@mantine/core";
import styles from "../styles/components/CategoryStrip.module.css";

export default function CategoryStrip() {
  const cats = [
    { icon: "./c_tea.png", label: "Tea Time" },
    { icon: "./c_japan.png", label: "Japanese" },
    { icon: "./c_italian.png", label: "Italian" },
    { icon: "./c_american.png", label: "American" },
    { icon: "./c_korean.png", label: "Korean" },
    { icon: "./c_chinese.png", label: "Chinese" },
    { icon: "./c_mexican.png", label: "Mexican" },
    { icon: "./c_teppan.png", label: "Teppanyaki" },
    { icon: "./c_vege.png", label: "Vegetarian" },
  ];

  const handleClick = (label: string) => {
    console.log("Clicked:", label);
  };

  return (
    <Stack gap={8}>
      <Text fw={700} size="24px">Hot right now 🔥</Text>
      <Group gap={28} wrap="wrap" className={styles.catGroup}> 
        {cats.map((c) => (
          <UnstyledButton
            key={c.label}
            className={styles.catItem}
            onClick={() => handleClick(c.label)}
          >
            <Image src={c.icon} alt={c.label} className={styles.catIcon} />
            <Text fw={700} size="12px" c="#202434">{c.label}</Text>
          </UnstyledButton>
        ))}
      </Group>
    </Stack>
  );
}
