import React from 'react';
import { Box } from '@chakra-ui/react';
import AllRoutes from './pages/AllRoutes';
import Products from './components/Products/Products';

const App = () => {
  return (
    <Box bgColor={"#FDFDF9"}>
      <AllRoutes />
    </Box>
  );
};

export default App;
