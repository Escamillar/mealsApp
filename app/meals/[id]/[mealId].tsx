import { ScrollView, Image, Text, View, StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { MEALS } from '../../../data/dummy_data';
import MealDetails from '../../../components/MealDetails';

export default function MealDetailScreen() {
  const { mealId } = useLocalSearchParams();

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  if (!selectedMeal) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Meal not found!</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetails 
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
      />
      <View style={styles.detailsContainer}>
        <Text style={styles.subtitle}>Ingredients</Text>
        {selectedMeal.ingredients.map(ingredient => (
          <Text style={styles.textContent} key={ingredient}>{ingredient}</Text>
        ))}
        <Text style={styles.subtitle}>Steps</Text>
        {selectedMeal.steps.map(step => (
          <Text style={styles.textContent} key={step}>{step}</Text>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F7',
  },
  errorText: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 24,
    color: 'red',
  },
  image: {
    width: '100%',
    height: 350,
  },
  title: {
    fontFamily: 'Inter-Bold',
    fontSize: 24,
    margin: 8,
    textAlign: 'center',
    color: '#000',
  },
  detailsContainer: {
    padding: 16,
  },
  subtitle: {
    fontFamily: 'Inter-Bold',
    fontSize: 20,
    marginVertical: 16,
    textAlign: 'center',
    borderBottomColor: '#000',
    borderBottomWidth: 1,
    paddingBottom: 8,
  },
  textContent: {
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    marginVertical: 4,
  }
});