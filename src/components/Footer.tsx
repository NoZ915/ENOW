import { Container, Text } from "@mantine/core";
import styles from "../styles/components/Footer.module.css"

export default function Footer(){
    return(
        <footer className={styles.footer}>
        <Container className={styles.pageContainer}>
          <Text c="dimmed" fz="sm">© 2025 Eat Now Technologies Inc.</Text>
        </Container>
      </footer>
    )
}