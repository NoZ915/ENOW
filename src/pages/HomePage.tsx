import { Container, Divider, Grid, Text } from "@mantine/core";
import styles from "../styles/pages/HomePage.module.css";
import Sidebar from "../components/Sidebar";
import PromoBanners from "../components/PromoBanners";
import CategoryStrip from "../components/CategoryStrip";
import { allRestaurants, bestDeals, recommended } from "../fakeData/restaurantCard";
import Section from "../components/Section";

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <Container size={1280} className={styles.pageContainer}>
          <Grid gutter="xl">
            <Grid.Col span={{ base: 12, md: 3 }}>
              <Sidebar />
            </Grid.Col>

            <Grid.Col span={{ base: 12, md: 9 }}>
              <PromoBanners />
              <Divider my="lg" />
              <CategoryStrip />
              <Section title="Best Deals" cards={bestDeals} />
              <Section title="Recommended for You" cards={recommended} />
              <Section title="All Restaurants" cards={allRestaurants} />
            </Grid.Col>
          </Grid>
        </Container>
      </main>
      <footer className={styles.footer}>
        <Container className={styles.pageContainer}>
          <Text c="dimmed" fz="sm">© 2025 Eat Now Technologies Inc.</Text>
        </Container>
      </footer>
    </>
  );
}
