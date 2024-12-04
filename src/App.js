import React, { useState, useEffect } from "react";
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
import Test from "./components/Test";

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
    const [showStartPage, setShowStartPage] = useState(true);
    const [texts, setTexts] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTexts = async () => {
            try {
                const response = await fetch('https://irt-test.ru/texts');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setTexts(data);
            } catch (error) {
                setError(error);
            }
        };

        fetchTexts();
    }, []);

    const startTest = () => {
        setShowStartPage(!showStartPage);
    };

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
                    <PageHeader title="Исследование восприятия текстов." level={3} />
                    <Grid columns="medium" gap="large" pad={{ bottom: "large" }}>
                        {showStartPage ? (
                            <Instruction startTest={startTest} />
                        ) : (
                            <Test texts={texts} error={error} />
                        )}
                    </Grid>
                </PageContent>
            </Page>
        </Grommet>
    );
}

export default App;
