import { Text, View, Image } from 'react-native';
import styled from 'styled-components/native';

const Container = styled(View)`
  padding: 0rem 2rem 1rem;
  
`;

const BaseText = styled(Text)`
  font-family: "Open sans"
`;
/**dd
 * @description your implementation goes here!
 */
const Challenge = () => {
  return (
    <Container>
      <Image
        source={{
          uri: 'https://seeklogo.com/images/N/nba-logo-41668C66DB-seeklogo.com.png',
        }}
        resizeMode="contain"
        style={{
          width: '100%',
          height: 120,
          alignSelf: 'center',
        }}
      />
    </Container>
  );
};

export default Challenge;
