import React from 'react';
import { Grommet, Box, Text } from 'grommet';

const FinalPage = () => {
  return (
    <Grommet>
      <Box
        fill
        align="center"
        justify="center"
        pad="medium"
        background="light-2"
      >
        <Text size="xlarge" weight="bold">
          Ваши ответы приняты
        </Text>
        <Text size="medium" margin={{ top: 'medium' }}>
          Спасибо за участие, эту страницу можно закрыть.
        </Text>
      </Box>
    </Grommet>
  );
};

export default FinalPage;
