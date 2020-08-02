import React from 'react';
import {
  View,
  Modal,
  Text,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableWithoutFeedback,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import useColors from '../hooks/useColors';
import Add from '../assets/svgs/Add.svg';
import Minus from '../assets/svgs/Minus.svg';
import {texts} from '../utils/texts';

const {width} = Dimensions.get('window');

const NewTransactionTypeModal = ({visible, setVisible, onSelectType}) => {
  const [colors] = useColors();

  return (
    <Modal
      animationType="fade"
      transparent
      visible={visible}
      onRequestClose={() => setVisible(false)}>
      <TouchableWithoutFeedback onPress={() => setVisible(false)}>
        <View style={[styles.screenFill, {backgroundColor: colors.modalFill}]}>
          <TouchableWithoutFeedback>
            <View
              style={[
                styles.modalCard,
                {
                  backgroundColor: colors.background,
                },
              ]}>
              <TouchableOpacity
                style={styles.optionContainer}
                onPress={() => onSelectType('Revenue')}>
                <Add width={32} height={32} />
                <Text style={styles.optionText}>{texts.revenue}</Text>
              </TouchableOpacity>
              <View
                style={[styles.divider, {backgroundColor: colors.borderGrey}]}
              />
              <TouchableOpacity
                style={styles.optionContainer}
                onPress={() => onSelectType('Expense')}>
                <Minus width={32} height={32} />
                <Text style={styles.optionText}>{texts.expense}</Text>
              </TouchableOpacity>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const styles = StyleSheet.create({
  screenFill: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  modalCard: {
    width: width * 0.6,
    borderRadius: 16,
  },
  divider: {
    width: width * 0.6,
    height: 1,
  },
  optionContainer: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionText: {
    marginLeft: 16,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default NewTransactionTypeModal;
