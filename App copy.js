import {View, Text, SafeAreaView, StyleSheet} from 'react-native';

const App = () => {
  return (
    //Farklı Cihazlarda Çentik gibi durumlardan kurtulmak için Safeare view ile sarmalıyoruz
    <SafeAreaView style={{flex: 1}}>
      {/*Stillendirme Yaparken Hem inline hemde dışarıdan stillendrima yapabilirz*/}

      {/* Flex varsayılan olarak column geldiği için yatayda ortlamak için align-items, dikeyde ortalaamak için justfcontnetn kullanılır*/}
      <View
        style={{
          backgroundColor: 'red',
          margin: 10,
          padding: 20,
          height: 250,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {/* Eğer String Bir İfade Yazacaksak mutlka text compnenti içinde yazarız*/}
        <Text>Ben Birinci boxım</Text>
      </View>
      {/*React NAtivede stillendirme yaparken birim kullnaılmaz*/}
      <View
        style={{
          backgroundColor: 'yellow',
          margin: 10,
          padding: 20,
          height: 250,
        }}>
        <Text>Ben ikinci boxım</Text>
      </View>

      <View style={styles.wrapperBox}>
        <View style={styles.box}>
          <Text style={styles.boxText}>1</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.boxText}>2</Text>
        </View>

        <View style={styles.box}>
          <Text style={styles.boxText}>3</Text>
        </View>

        <View style={styles.box}>
          <Text style={styles.boxText}>4</Text>
        </View>

        <View style={styles.box}>
          <Text style={styles.boxText}>5</Text>
        </View>

        <View style={styles.box}>
          <Text style={styles.boxText}>6</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapperBox: {
    backgroundColor: 'aqua',
    width: 350,
    height: 300,
    //sadece yatayda özellik vereceksek horizontal eğer dikey vereceksek vertical
    marginHorizontal:'auto',
    flexDirection:'row',
    flexWrap:'wrap'
  },

  box:{
    backgroundColor:'pink',
    margin:10,
    padding:10,
    width:50,
    height:50

  },

  boxText:{
    fontSize:20,
    fontWeight:'900'
  }
});

export default App;
