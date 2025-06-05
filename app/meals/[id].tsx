import { View, FlatList, StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { MEALS, CATEGORIES } from '../../data/dummy_data';
import MealItem from '../../components/MealItem';

export default function MealsOverviewScreen() {
  const { id } = useLocalSearchParams();
  
  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(id as string) >= 0;
  });

  const categoryTitle = CATEGORIES.find(
    (category) => category.id === id
  )?.title;

  function renderMealItem({ item }: { item: any }) {
    return (
      <MealItem
        id={item.id} 
        title={item.title}
        imageUrl={item.imageUrl}
        affordability={item.affordability}
        complexity={item.complexity}
        duration={item.duration}
      />
    );
  }

  return (
    <View style={styles.container}>
      <FlatList 
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F2F2F7',
  }
});