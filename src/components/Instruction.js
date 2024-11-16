import React, { useContext } from "react";

import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Heading,
    Paragraph,
    ResponsiveContext,
    Text,
  } from "grommet";

import CopyEmailToClipboard from "./CopyEmailToClipboard";


const Instruction = () => {
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
             <p>на первой шкале — от 0 до 7 (где 0 означает «очень легко» и 7 — «очень сложно»), </p>
             <p>и на второй шкале — от 0 до 7 (где 0 означает «очень скучно» и 7 — «очень интересно»). </p>
             <p>После оценки всех текстов нажмите кнопку "Отправить ответы".</p>
           </Text>
          </Paragraph>
        </CardBody>
        <CardFooter pad="small" background="background-contrast">
        <p>
         Почта для обратной связи:<br />
         <CopyEmailToClipboard/>
        </p>

        </CardFooter>
      </Card>
    );
 };
   
export default Instruction;