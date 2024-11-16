import React, { useState } from "react";
import {
    Box,
    Button,
    Grid,
    Grommet,
    grommet,
    Header,
    Page,
    PageContent,
    PageHeader,
    Text,
  } from "grommet";
  import { deepMerge } from "grommet/utils";
  import { Moon, Sun } from "grommet-icons";

  import Instruction from "./components/Instruction";

const theme = deepMerge(grommet, {
  global: {
    colors: {
        brand: '#F5F5F5',
      },
    font: {
      family: "Roboto",
      size: "18px",
      height: "20px",
    },
  },
});

const AppBar = (props) => (
   <Header
     background="brand"
     pad={{ left: "medium", right: "small", vertical: "small" }}
     elevation="medium"
     {...props}
   />
);

function App() {
  const [dark, setDark] = useState(false);
  return (
   <Grommet theme={theme} full themeMode={dark ? "dark" : "light"}>
      <Page>
        <AppBar>
          <Text size="medium">IPRAS</Text>
          <Button
            a11yTitle={dark ? "Светлая тема" : "Темная тема"}
            icon={dark ? <Moon /> : <Sun />}
            onClick={() => setDark(!dark)}
            tip={{
                content: (
                  <Box
                    pad="small"
                    round="small"
                    background={dark ? "dark-1" : "light-3"}
                  >
                    {dark ? "Светлая тема" : "Темная тема"}
                  </Box>
                ),
              plain: true,
            }}
          />
        </AppBar> 
        <PageContent>
          <PageHeader title="Исследование восприятия текстов." />
          <Grid columns="medium" gap="large" pad={{ bottom: "large"}}>
            <Instruction />
          </Grid>
        </PageContent>       
      </Page>
    </Grommet>
  );
}


export default App;
