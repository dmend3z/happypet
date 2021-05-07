import React from 'react';

 import { Background, CardOverlay, Item , Image, Name, CardContent, About, AboutText, Text} from './styles';

 interface Props {
     id: string;
     name: string;
     specie: string;
     age: string;
     image: string;
 }

const ListingItem: React.FC<Props> = ({
    id,
    name,
    specie,
    age,
    image,
    ...Props
}) => {

    const linkPet = `/pet/${id}`;
  return (
      <>
          <Item to={linkPet}>
            <Background>
                <Image src={image} ></Image>
                <CardOverlay>
                    <Name>{name}</Name>
                </CardOverlay>
            </Background>
            <CardContent>
                <About>
                    <AboutText>
                        <Text>{specie}</Text>
                    </AboutText>
                    <AboutText>
                        <Text>{age}</Text>
                    </AboutText>
                </About>
            </CardContent>
            </Item>
      </>

  );
}

export default ListingItem;