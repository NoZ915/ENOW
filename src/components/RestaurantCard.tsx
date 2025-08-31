import { Badge, Card, Group, Image, Text } from "@mantine/core";
import styles from "../styles/components/RestaurantCard.module.css";
import type { CardData } from "../types/types";

export default function RestaurantCard({ data }: { data: CardData }) {
  const iconTruck = <Image src="./Icon_Delivery.png" className={styles.metaIcon} alt="" />;
  const iconClock = <Image src="./Icon_Time.png" className={styles.metaIcon} alt="" />;
  const iconStar  = <Image src="./Icon_Star.png" className={styles.metaIcon} alt="" />;
  const iconDiscount = <Image src="./Icon_Discount.png" className={styles.metaIcon} alt="" />;

  return (
    <Card component="a" href={`/restaurant/${data.title}`} withBorder radius={8} className={styles.foodCard}>
      <Card.Section className={styles.imageWrap}>
        <Image src={data.img} alt={data.title} h={170} w="100%" fit="cover" />
        {data.badge && 
          <Badge fw={400} size="lg" color="#FFE688" c="#202434" leftSection={iconDiscount} className={styles.cornerBadge}>
            {data.badge}
          </Badge>
        }
      </Card.Section>

      <Card.Section className={styles.info}>
        <Group justify="space-between" align="center" mb={6}>
          <Text fw={700} size="16px" c="#202434">{data.title}</Text>
          <Group gap={6} align="center">
            {iconStar}
            <Text fw={400} size="16px" c="#475682">{data.rating.toFixed(1)}</Text>
          </Group>
        </Group>

        <Group gap={10} align="center" fz={14}>
          {iconTruck}
          <Text fw={700} size="16px" c="#475682">${data.price}</Text>
          <Text c="#9aa3af">•</Text>
          {iconClock}
          <Text fw={700} size="16px" c="#475682">{data.time}</Text>
        </Group>
      </Card.Section>
    </Card>
  );
}
