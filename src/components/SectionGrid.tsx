import { Button, Group, Stack, Text } from "@mantine/core";
import RestaurantCard from "./RestaurantCard";
import type { CardData } from "../types/types";
import styles from "../styles/components/SectionGrid.module.css";

export default function SectionGrid({
  title,
  cards,
  onSeeMore,
}: {
  title: string;
  cards: CardData[];
  onSeeMore?: () => void;
}) {
  return (
    <Stack gap={12} mt={24}>
      <Group justify="space-between" align="center">
        <Text fw={700} size="24px" c="#202434">
          {title}
        </Text>
      </Group>

      <div className={styles.grid}>
        {cards.map((c) => (
          <div key={c.title} className={styles.gridCol}>
            <RestaurantCard data={c} />
          </div>
        ))}
      </div>

      <div className={styles.seeMoreWrap}>
        <Button 
          radius="xl" 
          variant="filled" 
          color="#FFE688" 
          c="#202434" 
          onClick={onSeeMore} 
          classNames={{ 
            label: styles.seeMoreBtnLabel,
            root: styles.seeMoreBtnRoot
          }}>
          See more
        </Button>
      </div>
    </Stack>
  );
}
