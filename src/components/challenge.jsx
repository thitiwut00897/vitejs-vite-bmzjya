import { Text, View, Image, StyleSheet, FlatList } from 'react-native';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components/native';

const Container = styled(View)`
flex: 1;
padding: 0rem 2rem 1rem;
`;

const BaseText = styled(Text)`
  font-family: "Open sans"
`;
const TextNBA = styled(BaseText)`
  font-size:25;
  color:white;
`;
/**dd
 * @description your implementation goes here!
 */
const Challenge = () => {
  const [Data, setData] = useState();
  const [MetaData, setMetaData] = useState();
  const getData = async () => {
    try {
      const response = await fetch(
        'https://free-nba.p.rapidapi.com/players?page=1&per_page=10',
        {
          method: 'GET',
          headers: {
            'X-RapidAPI-Key':
              '473c6c45a9msh7d7a1c6e7e83247p11b3fbjsndb18d5346b6e',
            'X-RapidAPI-Host': 'free-nba.p.rapidapi.com',
          },
        }
      );
      const json = await response.json();
      setData(json.data);
      setMetaData(json.meta);
      console.log(Data[0].id);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  const renderNBA = ({ item }) => {
    return (
      <View style={{ paddingVertical: 4 }}>
        <View style={styles.NBAPlayer}>
          <TextNBA>
            {item.first_name} {item.last_name}
          </TextNBA>
        </View>
        <View style={styles.NBATeam}>
          <TextNBA>{item.team.name}</TextNBA>
        </View>
        <View style={styles.imageNBA}>
          <Image
            source={{
              uri: 'https://logo-logos.com/2017/11/nba-logo.png',
            }}
            resizeMode="contain"
            style={{ height: 60, width: 60 }}
          />
        </View>
      </View>
    );
  };
  return (
    <Container>
      <Image
        source={{
          uri: 'https://seeklogo.com/images/N/nba-logo-41668C66DB-seeklogo.com.png',
        }}
        resizeMode="contain"
        style={{
          height: 120,
        }}
      />
      <View style={styles.metaData}>
        {MetaData ? (
          <Text>
            {MetaData.per_page} out of {MetaData.total_count} players is loaded
          </Text>
        ) : (
          <Text>loadding</Text>
        )}
      </View>
      <View style={styles.NBABar}>
        <FlatList
          data={Data}
          renderItem={renderNBA}
          keyExtractor={(item) => item.id}
          style={{ height: 640 }}
        />
      </View>
    </Container>
  );
};
const styles = StyleSheet.create({
  NBABar: {
    flexDirection: 'row',
    width: '100%',
  },
  NBAPlayer: {
    backgroundColor: 'rgb(22, 24, 144)',
    height: 60,
    width: '50%',
    position: 'absolute',
    left: 0,
    borderRadius: 7,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: '1rem',
  },
  NBATeam: {
    backgroundColor: 'rgb(208, 29, 29)',
    height: 60,
    width: '50%',
    position: 'absolute',
    right: 0,
    borderRadius: 7,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingHorizontal: '1rem',
  },
  imageNBA: {
    alignItems: 'center',
  },
  metaData: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingVertical: 5,
  },
});
export default Challenge;
