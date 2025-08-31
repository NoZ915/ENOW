import { Button, Card, Grid, Stack, Text } from "@mantine/core";
import styles from "../styles/components/PromoBanners.module.css";

export default function PromoBanners() {
  return (
    <Grid gutter="md" className={styles.promoRow}>
      <Grid.Col span={{ base: 12, sm: 6 }}>
        <Card radius="lg" padding="lg" className={styles.promoCard}>
          <img
            src="./PromoBanner1.png"
            className={`${styles.bannerImg} ${styles.left}`}
            alt=""
            aria-hidden
          />
          <Stack gap={10} className={styles.content}>
            <Text fw={700} size="20px" c="#202434" lh="28px">
              Invite friends to use Eat Now and get a $100 discount!
            </Text>
            <Button radius="360px" color="#3B4769" fw={400} classNames={{ root: styles.ctaBtn }}>
              See more
            </Button>
          </Stack>
        </Card>
      </Grid.Col>

      <Grid.Col span={{ base: 12, sm: 6 }}>
        <Card radius="lg" padding="lg" className={styles.promoCard}>
          <img
            src="./PromoBanner2.png"
            className={`${styles.bannerImg} ${styles.right}`}
            alt=""
            aria-hidden
          />
          <Stack gap={10} className={styles.content}>
            <Text fw={700} size="20px" c="#202434" lh="28px">
              Invite friends to use Eat Now and get a $100 discount!
            </Text>
            <Button radius="360px" color="#3B4769" fw={400} classNames={{ root: styles.ctaBtn }}>
              See more
            </Button>
          </Stack>
        </Card>
      </Grid.Col>
    </Grid>
  );
}
