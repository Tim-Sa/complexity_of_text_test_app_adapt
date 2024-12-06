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

function Test({ texts, userId, error }) {
    const size = useContext(ResponsiveContext);
    const [diffValue, setDiffValue] = useState(4);
    const [intValue, setIntValue] = useState(4);
    const [isFinalPage, setIsFinalPage] = useState(false);
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [responses, setResponses] = useState([]); 

    const handleNextText = () => {
        setResponses(prevResponses => [
            ...prevResponses,
            {
                user_id: userId,
                text_id: texts[currentTextIndex].id,
                interest: intValue,
                difficult: diffValue,
            }
        ]);
    
        if (currentTextIndex < texts.length - 1) {
            setCurrentTextIndex(currentTextIndex + 1);
            setDiffValue(4);
            setIntValue(4);
        } else {
            sendResponses(); 
            setIsFinalPage(true); 
        }
    };

    const sendResponses = async () => {
        const promises = responses.map(async (userResponse) => {
            console.log('Отправка данных:', userResponse);
            const response = await fetch('https://irt-test.ru/answers/', {
                method: 'POST',
                headers: {
                    'accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userResponse),
            });
    
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(`Ошибка отправки данных: ${errorData.message}`);
            }
        });
    
        try {
            await Promise.all(promises);
            console.log('Все ответы успешно отправлены');
        } catch (error) {
            console.error('Ошибка отправки данных:', error);
        }
    };
    
    if (error) {
        return <Text color="status-critical">Ошибка загрузки текстов: {error.message}</Text>;
    }

    if (!texts.length) {
        return <Text>Загрузка текстов...</Text>;
    }

    return (
        <>
            {isFinalPage ? (
                <FinalPage />
            ) : (
                <Card>
                    <CardHeader pad="small">
                        <Heading level={4} margin="none">
                            Оцените текст {currentTextIndex + 1} из {texts.length}:
                        </Heading>
                    </CardHeader>
                    <CardBody pad="small">
                        <Paragraph maxlines={size === "medium" ? 3 : undefined}>
                            <Text>
                                <p>{texts[currentTextIndex].text}</p>
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
