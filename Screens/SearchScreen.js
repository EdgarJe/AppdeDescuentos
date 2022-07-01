import React,{Component} from "React";
import { View, TextInput, Text, TouchableOpacity, StyleSheet,
Image, FlatList } from "react-native-web";

export default class SearchScreen extends Component{
    constructor(props) {
        super(props);
        this.state = {
          allTransactions: [],
          lastVisibleTransaction: null,
          searchText: ""
        };
      }
      componentDidMount = async () => {
        this.getTransactions();
    }

    render() {
        //const { searchText, allTransactions } = this.state;
        return (
          <View style={styles.container}>
            <View style={styles.upperContainer}>
              <View style={styles.textinputContainer}>
                <TextInput
                  style={styles.textinput}
                  onChangeText={text => this.setState({ searchText: text })}
                  placeholder={"Search product"}
                  placeholderTextColor={"#FFFFFF"}
                />
                <TouchableOpacity
                  style={styles.scanbutton}
                  onPress={() => this.handleSearch(searchText)}
                >
                  <Text style={styles.scanbuttonText}>Search</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.lowerContainer}>
              <FlatList
                data={allTransactions}
                renderItem={this.renderItem}
                keyExtractor={(item, index) => index.toString()}
                onEndReached={() => this.fetchMoreTransactions(searchText)}
                onEndReachedThreshold={0.7}
              />
            </View>
          </View>
        );
      }
}
