import { View, Text, StyleSheet, FlatList } from 'react-native';
import { CATEGORIES } from '../../data/dummy_data';
import CategoryGridTile from '../../components/CategoryGridTile';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter();

  function renderCategoryItem({ item }: { item: any }) {
    function pressHandler() {
      router.push(`/meals/${item.id}`);
    }

    return (
      <CategoryGridTile 
        title={item.title} 
        color={item.color} 
        onPress={pressHandler}
      />
    );
  }

  return (
    <View style={styles.container}>
      <FlatList 
        data={CATEGORIES} 
        keyExtractor={(item) => item.id}
        renderItem={renderCategoryItem}
        numColumns={2}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F7',
  }
});