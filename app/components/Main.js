import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import Note from './Note';

export default class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            noteArray: [],
            noteText: '',
        }
    }

  render() {

    let notes = this.state.noteArray.map((val,key) => {
        return <Note key={key} keyval={key} val={val}
               deleteMethod={ ()=> this.deleteNote(key) } />
    });

    return (
      <View style={styles.container}>

        <View style={styles.header}>
            <Text style={styles.headerText}>-  TO DO LIST  -</Text>

        </View>
    
        <ScrollView style={styles.scrollContainer}>
            {notes}
        </ScrollView>

        <View style={styles.footer}>

            <TextInput   
                styles={styles.TextInput}
                onChangeText={(noteText) => this.setState({noteText})}
                value={this.state.noteText}
                placeholder='>note'
                placeholderTextColor='black'
                underlineColorAndroid='transparent'>
            </TextInput>

        </View>

        <TouchableOpacity onPress={ this.addNote.bind(this) } style={styles.addButton}>
            <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>

      </View>
    );
  }

  addNote() {
     
    if (this.state.noteText) {

        var d = new Date();
        this.state.noteArray.push({
            'date': d.getFullYear() +
            "/" + (d.getMonth() +1) +
            "/" + d.getDate(),
            'note': this.state.noteText
        });
        this.setState({ noteArray: this.state.noteArray })
        this.setState({ noteText: '' });
        
    }

  }

  deleteNote(key) {
      this.state.noteArray.splice(key, 1);
      this.setState({ noteArray: this.state.noteArray })
  }

}

const styles = StyleSheet.create({
  container: {
      flex: 1,
    
  },
});