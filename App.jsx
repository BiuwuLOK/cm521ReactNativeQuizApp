import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  TouchableOpacity,
} from 'react-native';
import {tw} from 'react-native-tailwindcss';

class App extends Component {
  render() {
    return (
      <>
        <StatusBar />
        <SafeAreaView style = {styles.container}>
          <View style={{
            ...styles.statusBar,
            { width: this.state.satusBarwidth }
            }}>
            </View>
          { // check if current page of question index
            this.state.currentIndex < this.state.topics.length ?
            (
              <View style={styles.topicsContainer}>
                <Text style={styles.title}>
                  { // each title of question in the topics
                    this.state.topics[this.state.currentIndex].answers.map((answer, index) => {
                      return (
                        // display each answer as button
                        <TouchableOpacity key={index} onPress={
                          // press check for correction
                          () => this.next(index, answer.correct)}>
                          <View style={{
                            // when correct change green background                          
                            ...styles.button,
                            ...this.state.buttonBackgroundColor[index]
                          }}
                          </View>
                        </TouchableOpacity>
                      )
                    })
                  }
                </Text>
              </View>
            )
          }

        </SafeAreaView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {},
  statusBar: {},
  topicsContainer: {},
  button: {},
  buttonBackgroundColor: {},


})

export default App;
