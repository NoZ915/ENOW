import { Button, Container, Group, Image, Input, Select } from "@mantine/core";
import styles from "../styles/components/Header.module.css";
import { districts } from "../fakeData/districts";

export default function Header() {
  const iconLocation = (
    <Image src="./Icon_Location.png" className={styles.iconLocationImage} />
  );
  const iconChevronDown = (
    <Image src="./Icon_ChevronDown.png" className={styles.iconChevronDownImage} />
  );
  const iconSearch = (
    <Image src="./Icon_Search.png" className={styles.iconChevronDownImage} />
  );
  const iconShoppingCart = (
    <Image src="./Icon_ShoppingCart.png" className={styles.iconShoppingCartImage} />
  )

  return (
    <header className={styles.header}>
      <Container className={styles.container} fluid={false}>
        <Group gap={20} wrap="nowrap" className={styles.leftGroup}>
          <Image src="./Logo_EatNow.png" className={styles.logoImage} alt="EatNow" />

          <Select
            placeholder="TTL Hotel"
            data={districts}
            variant="unstyled"
            leftSection={iconLocation}
            rightSection={iconChevronDown}
            className={styles.selectInput}
            comboboxProps={{
              withinPortal: true,
              position: 'bottom-start',
              zIndex: 4000,
              offset: 0,
            }}
          />

          <Input
            placeholder="Looking for restaurants, food, or groceries?"
            className={styles.input}
            variant="unstyled"
            leftSection={iconSearch}
            rightSectionPointerEvents="none"
          />
        </Group>

        <Group gap={12} wrap="nowrap" className={styles.rightGroup}>
          <Button variant="subtle" color="#FFE688" classNames={{ root: styles.shoppingCartBtnRoot }}>
            {iconShoppingCart}
          </Button>
          <Button variant="filled" color="#FFE688" justify="center" radius="360px" classNames={{ root: styles.loginBtnRoot, label: styles.loginBtnLabel }}>
            Log in
          </Button>
        </Group>
      </Container>
    </header >
  );
}
