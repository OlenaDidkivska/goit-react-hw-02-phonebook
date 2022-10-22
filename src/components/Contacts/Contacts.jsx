import { ContactItem, ContactNumber, FilterButton } from './Contacts.styled';

export const Contacts = ({ id, name, number, onDelete }) => {
  return (
    <ContactItem key={id}>
      {name}: <ContactNumber href={`tel:${number}`}>{number}</ContactNumber>{' '}
      <FilterButton type="button" onClick={() => onDelete(id)}>
        Delete
      </FilterButton>
    </ContactItem>
  );
};
