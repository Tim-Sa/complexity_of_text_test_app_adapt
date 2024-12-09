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


const Instruction = () => {
    const [texts, setTexts] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [userId] = useState(generateUniqueId());
    const [testData, setTestData] = useState({});

    const API_URL = process.env.REACT_APP_API_URL;

    useEffect(() => {
      async function fetchTexts() {
        try {
          const response = await axios.get(`${API_URL}/texts`);
          const shuffledTexts = response.data.map(item => item.text).sort(() => Math.random() - 0.5);
          setTexts(shuffledTexts);
        } catch (error) {
          console.error('Ошибка при получении текстов:', error);
        }
      }
      fetchTexts();
    }, [API_URL]);

    const size = useContext(ResponsiveContext);

    return (
      <Card>
        <CardHeader pad="small">
          <Heading level={2} margin="none">
             Оцените пожалуйста следующий текст:.
          </Heading>
        </CardHeader>
        <CardBody pad="small">
          <Paragraph maxlines={size === "small" ? 3 : undefined}>
           <Text>
             {texts[currentIndex]}
           </Text>
          </Paragraph>
        </CardBody>
        <CardFooter pad="small" background="background-contrast">
        {/* <p>
         Почта для обратной связи:<br />
         <CopyEmailToClipboard/>
        </p> */}

        </CardFooter>
      </Card>
    );
 };
   
export default Instruction;