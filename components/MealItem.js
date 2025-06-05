import { View, Text, Image, Pressable, StyleSheet, Platform } from "react-native"
import { useRouter } from 'expo-router'
import MealDetails from "./MealDetails"

function MealItem({ id, title, imageUrl, duration, complexity, affordability }){
    const router = useRouter();
   
    function selectMealItemHandler(){
        router.push(`/meals/${id}/`);
    }

    return(
        <View style={styles.mealItem}>
            <Pressable 
                android_ripple={{ color: '#ccc'}}
                style={({ pressed }) => (pressed ? styles.buttonPressed : null) } 
                onPress={selectMealItemHandler}
            >
                <View style={styles.innerContainer}>
                    <Image 
                        source={{uri: imageUrl}}
                        style={styles.image}
                    />
                    <Text style={styles.title}>
                        {title}
                    </Text>
                </View>
                <MealDetails 
                    duration={duration}
                    complexity={complexity}
                    affordability={affordability}
                />
            </Pressable>
        </View>
    )
}

export default MealItem

const styles = StyleSheet.create({
    mealItem: {
        margin: 16,
        borderRadius: 8,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
        backgroundColor: 'white',
        elevation: 4,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2},
        shadowRadius: 8,
    },
    buttonPressed: {
        opacity: 0.5
    },
    innerContainer: {
        borderRadius: 8,
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: 200
    },
    title: {
        fontFamily: 'Inter-Bold',
        textAlign: 'center',
        fontSize: 18,
        margin: 8
    },
})