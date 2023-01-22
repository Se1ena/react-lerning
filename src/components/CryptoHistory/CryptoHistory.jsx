import {format} from 'date-fns';
import { isTSMethodSignature } from '@babel/types';
import { BaseTable, THead, Th, Tr, Td } from './CryptoHistory.styled';

export const CryptoHistory = ({data}) => {
  return <BaseTable>
  <THead>
    <tr>
      <Th>№</Th>
      <Th>PRICE</Th>
      <Th>AMOUNT</Th>
      <Th>DATE</Th>
    </tr>
  </THead>

  <tbody>
    {data.map(({id, price, amount, date}, index)=>
    (<Tr key={id}>
      <Td>{index+1}</Td>
      <Td>{price}</Td>
      <Td>{amount}</Td>
      <Td>{format(new Date(date), 'Pp')}</Td>
    </Tr>))}
  </tbody>
</BaseTable>
};
