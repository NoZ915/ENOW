import { Grid, Group, Stack, Text } from "@mantine/core";
import RestaurantCard from "./RestaurantCard";
import type { CardData } from "../types/types";

export default function Section({ title, cards }: { title: string; cards: CardData[] }) {
  return (
    <Stack gap={12} mt={24}>
      <Group justify="space-between">
        <Text fw={700}>{title}</Text>
        <Text fz="sm" c="orange">See more →</Text>
      </Group>
      <Grid gutter="md">
        {cards.map((c) => (
          <Grid.Col key={c.title} span={{ base: 12, sm: 6, md: 4 }}>
            <RestaurantCard data={c} />
          </Grid.Col>
        ))}
      </Grid>
    </Stack>
  );
}