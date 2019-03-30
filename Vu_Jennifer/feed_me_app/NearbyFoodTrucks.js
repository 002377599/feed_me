import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps'

export default class NearbyFoodTrucks extends React.Component {
  constructor(){
    super();
    this.state = {
        names: [
           {'name': 'The Loaded Burger', 'feedMeCount': 0, 'id': 1},
           {'name': 'Gotta Have It', 'feedMeCount': 0, 'id': 2},
           {'name': 'Not As Famous Cookie Company', 'feedMeCount': 0, 'id': 3},
           {'name': 'The Loaded Taco', 'feedMeCount': 0, 'id':4},
           {'name': 'Sweet Jeanius', 'feedMeCount': 0, 'id':5},
           {'name': "YummY's Funnel Cakes", 'feedMeCount': 0, 'id':6},
           {'name': 'Tom + Chee Kennesaw', 'feedMeCount': 0, 'id':7},
           {'name': 'King Kabob', 'feedMeCount': 0, 'id':8},
           {'name': 'Up Top Italian Ice', 'feedMeCount': 0, 'id':9},
           {'name': 'The Royal Pig BBQ', 'feedMeCount': 0, 'id':10},
           {'name': 'Steve', 'feedMeCount': 0, 'id':11},
           {'name': 'Uptown Food Truck', 'feedMeCount': 0, 'id':12}
        ]
    }
  }
  UpdateFeedCount = (i) =>{
    const newNames = [ ...this.state.names ]
    newNames[i].feedMeCount += 1
    this.setState({names: newNames})
  }
  render() {
    return (
      <View>
        <View style={styles.mapItem}>
          <Text style={styles.textItem}>Placeholder for map </Text>
        </View>
        <ScrollView>
          {
            this.state.names.map((item, index) => (
             <View key = {item.id} style = {styles.item}>
                <Text style={styles.textItem}>{item.name}</Text>
                <Button
                  style={styles.button}
                  onPress={() =>
                    this.UpdateFeedCount(index)}
                  title="FeedMe!"
                  accessibilityLabel="FeedMe!"
                />
                <Text style={styles.textItem}>{item.feedMeCount}</Text>
             </View>
            ))
          }
        </ScrollView>
        <MapView
          provider ={PROVIDER_GOOGLE}
          style={{flex: 1}}
          region={{
            latitude: 42.882004,
            longitude: 74.582748,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }}
          showsUserLocation={true}
        />

        <Button
          title="Back to home"
          onPress={() =>
            this.props.navigation.navigate('Home')
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 50,
      margin: 1,
      borderColor: '#2a4944',
      borderWidth: 2,
      backgroundColor: '#841584',
   },
   mapItem: {
       flexDirection: 'row',
       justifyContent: 'space-between',
       alignItems: 'center',
       padding: 150,
       margin: 1,
       borderColor: '#2a4944',
       borderWidth: 1,
       backgroundColor: '#841584',
    },
    textItem: {
      color: '#ffff00',
      fontWeight: 'bold',
      textAlign: 'left',
      fontSize: 17,
    },
    button: {
      width: 100,
      height: 65,
      margin: 15,
    },
});
