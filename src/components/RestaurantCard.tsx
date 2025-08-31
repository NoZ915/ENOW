import { Badge, Card, Group, Image, Rating, Stack, Text } from "@mantine/core";
import styles from "../styles/components/RestaurantCard.module.css";
import type { CardData } from "../types/types";

export default function RestaurantCard({ data }: { data: CardData }) {
  return (
    <Card radius="md" withBorder className={styles.foodCard}>
      <Card.Section>
        <Image src={data.img} className={styles.foodImg} alt={data.title} />
        {data.badge && (
          <Badge className={styles.cornerBadge}>{data.badge}</Badge>
        )}
      </Card.Section>
      <Stack gap={6} mt={8}>
        <Group justify="space-between" align="center">
          <Text fw={600}>{data.title}</Text>
          <Group gap={6}>
            <Rating value={data.rating} fractions={2} readOnly size="xs" />
            <Text fz={12} c="dimmed">{data.rating.toFixed(1)}</Text>
          </Group>
        </Group>
        <Group gap={10} c="dimmed" fz={12}>
          <Text>💲{data.price}</Text>
          <Text>•</Text>
          <Text>{data.time}</Text>
        </Group>
      </Stack>
    </Card>
  );
}