import { Image, Stack, Text } from "@chakra-ui/react";
import "../styles.css";

import map from "../assets/map.png";

export default function Address() {
  return (
    <Stack justifyContent="center" alignItems="center" mt={5}>
      <Image src={map} width={900} />
      <Text>
        ​Улица <b>Кабанбай батыра</b> 77​ - 1 этаж
      </Text>
    </Stack>
  );
}
