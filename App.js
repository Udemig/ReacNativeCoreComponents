import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  ScrollView,
  Button,
  Alert
} from 'react-native';

// Identifer ' xxxx' xxxx=örneğin View has aldrady been declared gibi hatada 2.kez import ediyorsunuzdur kontrol edin

//import {View} from 'react-native'

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      {/*Tüm elemanları kapsayan ana View*/}
      <View style={{flex: 1, backgroundColor: 'orange'}}>
        {/*Header Alanını Oluşturacağım View*/}

        <View style={homeStyle.header}>
          <View>
            <Text>UDEMIG</Text>
          </View>

          <View
            style={{
                height:60,
                width:120,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#FFF0F5',
              borderRadius: 20,
              shadowColor: '#f40e0e',
              shadowOffset: {
                width: 0,
                height: 18,
              },
              shadowOpacity: 0.25,
              shadowRadius: 20.0,
              elevation: 24,
            }}>
            <Text>Hasan Çelik</Text>
            <Button title="Çıkış Yap" onPress={()=>Alert.alert('React Native Hoşgeldiniz')}/>
          </View>
        </View>

        {/*Sayfanın orta kısmı*/}

        <View style={homeStyle.main}>
          <ScrollView>
            <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
              {/*bağlantı üzerinden resim alma*/}
              <Image
                style={homeStyle.image}
                source={{
                  uri: 'https://images.unsplash.com/photo-1689910708106-cc1cb6d71dff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
                }}
              />
              {/*Local dosyadan resim*/}
              <Image
                style={homeStyle.image}
                source={require('./assets/images/resim.jpg')}
              />

              <Image
                style={homeStyle.image}
                source={{
                  uri: 'https://plus.unsplash.com/premium_photo-1689685156566-427e74ac8a3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
                }}
              />

              <Image
                style={homeStyle.image}
                source={{
                  uri: 'https://images.unsplash.com/photo-1470115410308-ee7d860b53fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60',
                }}
              />

              <Image
                style={homeStyle.image}
                source={{
                  uri: 'https://images.unsplash.com/photo-1680169281565-084480372285?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60',
                }}
              />
              <Image
                style={homeStyle.image}
                source={{
                  uri: 'https://images.unsplash.com/photo-1686468117025-25e6fa62e826?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60',
                }}
              />
              <Image
                style={homeStyle.image}
                source={{
                  uri: 'https://images.unsplash.com/photo-1690023603728-f4fc93cf56c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60',
                }}
              />

              <Image
                style={homeStyle.image}
                source={{
                  uri: 'https://images.unsplash.com/photo-1689910708106-cc1cb6d71dff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
                }}
              />

              <Image
                style={homeStyle.image}
                source={{
                  uri: 'https://images.unsplash.com/photo-1689613302901-f830674bed5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
                }}
              />

              <Image
                style={homeStyle.image}
                source={{
                  uri: 'https://plus.unsplash.com/premium_photo-1689685156566-427e74ac8a3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
                }}
              />

              <Image
                style={homeStyle.image}
                source={{
                  uri: 'https://images.unsplash.com/photo-1470115410308-ee7d860b53fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60',
                }}
              />

              <Image
                style={homeStyle.image}
                source={{
                  uri: 'https://images.unsplash.com/photo-1680169281565-084480372285?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60',
                }}
              />
              <Image
                style={homeStyle.image}
                source={{
                  uri: 'https://images.unsplash.com/photo-1686468117025-25e6fa62e826?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60',
                }}
              />
              <Image
                style={homeStyle.image}
                source={{
                  uri: 'https://images.unsplash.com/photo-1690023603728-f4fc93cf56c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60',
                }}
              />
              <Image
                style={homeStyle.image}
                source={{
                  uri: 'https://images.unsplash.com/photo-1689910708106-cc1cb6d71dff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
                }}
              />

              <Image
                style={homeStyle.image}
                source={{
                  uri: 'https://images.unsplash.com/photo-1689613302901-f830674bed5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
                }}
              />

              <Image
                style={homeStyle.image}
                source={{
                  uri: 'https://plus.unsplash.com/premium_photo-1689685156566-427e74ac8a3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
                }}
              />

              <Image
                style={homeStyle.image}
                source={{
                  uri: 'https://images.unsplash.com/photo-1470115410308-ee7d860b53fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60',
                }}
              />

              <Image
                style={homeStyle.image}
                source={{
                  uri: 'https://images.unsplash.com/photo-1680169281565-084480372285?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60',
                }}
              />
              <Image
                style={homeStyle.image}
                source={{
                  uri: 'https://images.unsplash.com/photo-1686468117025-25e6fa62e826?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60',
                }}
              />
              <Image
                style={homeStyle.image}
                source={{
                  uri: 'https://images.unsplash.com/photo-1690023603728-f4fc93cf56c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60',
                }}
              />
            </View>
          </ScrollView>
        </View>

        {/*Alt Menu Kısmı*/}

        <View style={homeStyle.bottomTab}>
          <View style={homeStyle.bottomBox}>
            <Text style={homeStyle.boxText}>Ana Sayfa</Text>
          </View>

          <View style={homeStyle.bottomBox}>
            <Text style={homeStyle.boxText}>Ara</Text>
          </View>

          <View style={homeStyle.bottomBox}>
            <Text style={homeStyle.boxText}>Kategoriler</Text>
          </View>

          <View style={homeStyle.bottomBox}>
            <Text style={homeStyle.boxText}>Profil</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const homeStyle = StyleSheet.create({
  header: {
    backgroundColor: '#FBA1B7',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    paddingTop: 15,
  },
  main: {
    backgroundColor: '#FFF0F5',
    flex: 16,
  },

  image: {
    width: 140,
    height: 140,
    resizeMode: 'cover',
    margin: 1,
  },

  bottomTab: {
    backgroundColor: '#FBA1B7',
    flex: 2,
    flexDirection: 'row',
  },

  bottomBox: {
    backgroundColor: '#FFF0F5',
    flex: 9,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF0F5',
    borderRadius: 50,
    shadowColor: '#f40e0e',
    shadowOffset: {
      width: 0,
      height: 18,
    },
    shadowOpacity: 0.25,
    shadowRadius: 20.0,
    elevation: 24,
  },
});

export default App;
