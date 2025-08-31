import { useState } from "react";
import { Checkbox, Radio, SegmentedControl, Stack, Text } from "@mantine/core";
import styles from "../styles/components/Sidebar.module.css";

export default function Sidebar() {
  const [delivery, setDelivery] = useState("delivery");
  const [sortBy, setSortBy] = useState("relevance");
  const [price, setPrice] = useState("$$");
  const [dietary, setDietary] = useState<string[]>([]);

  return (
    <Stack className={styles.sidebar} gap={22}>
      <Text fw={700} size="20px">Delivery / Pickup</Text>
      <Radio.Group
        value={delivery}
        onChange={setDelivery}
        className={styles.cardBox}
      >
        <Stack gap={10}>
          <Radio
            value="delivery"
            label="Delivery"
            color="#FF9537"
            classNames={{ radio: styles.radioControl, label: styles.radioLabel, body: styles.radioBody }}
          />
          <Radio
            value="pickup"
            label="Pickup"
            color="#FF9537"
            classNames={{ radio: styles.radioControl, label: styles.radioLabel, body: styles.radioBody }}
          />
        </Stack>
      </Radio.Group>

      <Text fw={700} size="20px">Sort by</Text>
      <Radio.Group
        value={sortBy}
        onChange={setSortBy}
        className={styles.cardBox}
      >
        <Stack gap={10}>
          <Radio value="relevance" label="Relevance" color="#FF9537" classNames={{ radio: styles.radioControl, label: styles.radioLabel, body: styles.radioBody }} />
          <Radio value="recommended" label="Recommended" color="#FF9537" classNames={{ radio: styles.radioControl, label: styles.radioLabel, body: styles.radioBody }} />
          <Radio value="rating" label="Rating" color="#FF9537" classNames={{ radio: styles.radioControl, label: styles.radioLabel, body: styles.radioBody }} />
          <Radio value="time" label="Delivery time" color="#FF9537" classNames={{ radio: styles.radioControl, label: styles.radioLabel, body: styles.radioBody }} />
        </Stack>
      </Radio.Group>

      <Text fw={700} size="20px">Price</Text>
      <SegmentedControl
        value={price}
        onChange={setPrice}
        data={["$", "$$", "$$$"]}
        fullWidth
        classNames={{
          root: styles.priceRoot,
          control: styles.priceControl,
          indicator: styles.priceIndicator,
          innerLabel: styles.priceInnerLabel,
          label: styles.priceLabel,
        }}
      />

      <Text fw={700} size="20px">Dietary restrictions</Text>
      <Checkbox.Group
        value={dietary}
        onChange={setDietary}
        className={styles.cardBox}
      >
        <Stack gap={12}>
          <Checkbox
            value="vegetarian"
            label="Vegetarian"
            color="#FF9537"
            classNames={{ input: styles.checkboxInput, label: styles.checkboxLabel, body: styles.checkboxBody, icon: styles.checkboxIcon }}
          />
          <Checkbox
            value="vegan"
            label="Vegan"
            color="#FF9537"
            classNames={{ input: styles.checkboxInput, label: styles.checkboxLabel, body: styles.checkboxBody, icon: styles.checkboxIcon }}
          />
          <Checkbox
            value="gluten-free"
            label="Gluten-Free"
            color="#FF9537"
            classNames={{ input: styles.checkboxInput, label: styles.checkboxLabel, body: styles.checkboxBody, icon: styles.checkboxIcon }}
          />
        </Stack>
      </Checkbox.Group>
    </Stack>
  );
}
