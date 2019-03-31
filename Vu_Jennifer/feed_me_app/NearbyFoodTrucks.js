import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps'

export default class NearbyFoodTrucks extends React.Component {
  static navigationOptions = {
    title: 'Nearby Food Trucks',
    headerStyle: { backgroundColor: 'white' },
    headerTitleStyle: { color: 'purple' },
  };
  constructor(){
    super();
    this.state = {
        names: [
           {'name': 'The Loaded Burger', 'feedMeCount': 0, 'id': 1, 'hasVoted':false},
           {'name': 'Gotta Have It', 'feedMeCount': 0, 'id': 2, 'hasVoted':false},
           {'name': 'Not As Famous Cookie Company', 'feedMeCount': 0, 'id': 3, 'hasVoted':false},
           {'name': 'The Loaded Taco', 'feedMeCount': 0, 'id':4, 'hasVoted':false},
           {'name': 'Sweet Jeanius', 'feedMeCount': 0, 'id':5, 'hasVoted':false},
           {'name': "YummY's Funnel Cakes", 'feedMeCount': 0, 'id':6, 'hasVoted':false},
           {'name': 'Tom + Chee Kennesaw', 'feedMeCount': 0, 'id':7, 'hasVoted':false},
           {'name': 'King Kabob', 'feedMeCount': 0, 'id':8, 'hasVoted':false},
           {'name': 'Up Top Italian Ice', 'feedMeCount': 0, 'id':9, 'hasVoted':false},
           {'name': 'The Royal Pig BBQ', 'feedMeCount': 0, 'id':10, 'hasVoted':false},
           {'name': 'Steve', 'feedMeCount': 0, 'id':11, 'hasVoted':false},
           {'name': 'Uptown Food Truck', 'feedMeCount': 0, 'id':12, 'hasVoted':false}
        ]
    }
  }
  UpdateFeedCount = (i) =>{
    if(this.state.names[i].hasVoted == false)
    {
      const newNames = [ ...this.state.names ]
      newNames[i].feedMeCount += 1
      newNames[i].hasVoted = true
      this.setState({names: newNames})
    }
    else {
      alert('You have already voted for this food truck!')
    }
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
                <Text style={styles.textItem2} numberOfLines={5}>{item.name}</Text>
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
    textItem2: {
      color: '#ffff00',
      fontWeight: 'bold',
      textAlign: 'left',
      fontSize: 17,
      width: 125,
    },
    button: {
      width: 100,
      height: 65,
      margin: 15,
    },
});
