import React, { useContext } from "react";

import {
    Button,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Heading,
    Paragraph,
    ResponsiveContext,
    Text,
  } from "grommet";


const Instruction = ({ startTest }) => {
    const size = useContext(ResponsiveContext);
    return (
      <Card>
        <CardHeader pad="small">
          <Heading level={2} margin="none">
             Инструкция.
          </Heading>
        </CardHeader>
        <CardBody pad="small">
          <Paragraph maxlines={size === "small" ? 3 : undefined}>
           <Text>
             <p>Пожалуйста, оцените сложность восприятия каждого текста по двум шкалам: </p>
             <p>на первой шкале — от 1 до 8 (где 1 означает «очень легко» и 8 — «очень сложно»), </p>
             <p>и на второй шкале — от 1 до 8 (где 1 означает «очень скучно» и 8 — «очень интересно»). </p>
             <p>После оценки всех текстов нажмите кнопку "Отправить ответы".</p>
           </Text>
          </Paragraph>
        </CardBody>
        <CardFooter pad="small" background="background-contrast">
          <Button primary label="Начать тест" onClick={startTest} />
        </CardFooter>
      </Card>
    );
 };
   
export default Instruction;