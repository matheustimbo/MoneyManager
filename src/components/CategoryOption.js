import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import useColors from '../hooks/useColors';
import {TouchableOpacity} from 'react-native-gesture-handler';

const CategoryOption = ({category, selectedCategory, setSelectedCategory}) => {
  const [colors] = useColors();
  return (
    <TouchableOpacity
      onPress={() => setSelectedCategory(category.name)}
      style={[
        styles.container,
        {
          backgroundColor:
            selectedCategory === undefined || category.name !== selectedCategory
              ? colors.borderGrey
              : category.color,
        },
      ]}>
      <Text style={[styles.label, {color: colors.coloredBgText}]}>
        {category.name}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'flex-start',
    paddingHorizontal: 16,
    height: 40,
    borderRadius: 20,
    marginHorizontal: 8,
    marginVertical: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: 16,
  },
});

export default CategoryOption;
