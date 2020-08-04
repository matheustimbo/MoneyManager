import moment from 'moment';
import 'moment/locale/pt-br';
import {texts} from '../utils/texts';

export const formatTransactionDate = (date) => {
  moment.locale('pt-br');
  return `${moment(Date(date)).format('DD ')}${texts.of}${moment(
    Date(date),
  ).format(' MMMM YYYY')}`;
};
