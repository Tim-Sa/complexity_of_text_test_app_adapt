import React, { useContext, useState } from "react";
import {
    Button,
    RangeInput,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Heading,
    Paragraph,
    ResponsiveContext,
    Text
} from "grommet";

import FinalPage from "./FinalPage";

function Test() {
    const size = useContext(ResponsiveContext);
    const [diffValue, setDiffValue] = React.useState(4);
    const [intValue, setIntValue] = React.useState(4);
    const [isFinalPage, setIsFinalPage] = useState(false); // Состояние для отслеживания отображаемого компонента

    const handleNextText = () => {
        setIsFinalPage(true); // Меняем состояние, чтобы показать FinallPage
    };

    return (
        <>
            {isFinalPage ? ( // Условный рендеринг
                <FinalPage />
            ) : (
                <Card>
                    <CardHeader pad="small">
                        <Heading level={4} margin="none">
                            Оцените текст:
                        </Heading>
                    </CardHeader>
                    <CardBody pad="small">
                        <Paragraph maxlines={size === "medium" ? 3 : undefined}>
                            <Text>
                                <p>Текст на оценку</p>
                            </Text>
                        </Paragraph>
                        <p>Сложность текста:</p>
                        <Text alignSelf="center">{diffValue}</Text>
                        <RangeInput
                            name="difficult"
                            value={diffValue}
                            onChange={event => setDiffValue(Number(event.target.value))}
                            min={1}
                            max={8}
                        />

                        <p>Занимательность текста:</p>
                        <Text alignSelf="center">{intValue}</Text>
                        <RangeInput
                            name="interest"
                            value={intValue}
                            onChange={event => setIntValue(Number(event.target.value))}
                            min={1}
                            max={8}
                        />
                    </CardBody>
                    <CardFooter pad="small" background="background-contrast">
                        <Button primary label="Перейти к следующему тексту" onClick={handleNextText} />
                    </CardFooter>
                </Card>
            )}
        </>
    );
}

export default Test;
