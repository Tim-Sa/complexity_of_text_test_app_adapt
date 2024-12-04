import React, { useContext } from "react";
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

function Test() {
    const size = useContext(ResponsiveContext);
    const [diffValue, setDiffValue] = React.useState(4);
    const [intValue, setIntValue] = React.useState(4);

    return (
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
                    onChange={event => setDiffValue(event.target.value)}
                    array={[
                        { value: 1, color: '#FF0000', opacity: 0.2 },
                        { value: 8, color: '#00FF00', opacity: 1 },
                    ]}
                    min={1}
                    max={8}
                />

                <p>Занимательность текста:</p>
                <Text alignSelf="center">{intValue}</Text>
                <RangeInput
                    name="interest"
                    value={intValue}
                    onChange={event => setIntValue(event.target.value)}
                    array={[
                        { value: 1, color: '#FF0000', opacity: 0.2 },
                        { value: 8, color: '#00FF00', opacity: 1 },
                    ]}
                    min={1}
                    max={8}
                    step={1}
                />
            </CardBody>
            <CardFooter pad="small" background="background-contrast">
                <Button primary label="Перейти к следующему тексту" />
            </CardFooter>
        </Card>
    );
}

export default Test;
