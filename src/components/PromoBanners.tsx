import { Box, Card, Grid, Group, Image, Text } from "@mantine/core";
import styles from "../styles/components/PromoBanners.module.css";

export default function PromoBanners() {
  return (
    <Grid gutter="md" className={styles.promoRow}>
      <Grid.Col span={{ base: 12, sm: 6 }}>
        <Card radius="lg" padding="lg" className={styles.promoCard}>
          <Group justify="space-between" align="center">
            <Box>
              <Text fw={700} fz={18}>Invite friends to use Eat Now</Text>
              <Text fz="sm" c="dimmed">and get a $100 discount!</Text>
            </Box>
            <Image src="./PromoBanner1.png" className={styles.bannerImg} />
          </Group>
        </Card>
      </Grid.Col>
      <Grid.Col span={{ base: 12, sm: 6 }}>
        <Card radius="lg" padding="lg" className={styles.promoCard}>
          <Group justify="space-between" align="center">
            <Box>
              <Text fw={700} fz={18}>Invite friends to use Eat Now</Text>
              <Text fz="sm" c="dimmed">and get a $100 discount!</Text>
            </Box>
            <Image src="./PromoBanner2.png" className={styles.bannerImg} />
          </Group>
        </Card>
      </Grid.Col>
    </Grid>
  );
}