// import { Product } from './Product';

import { BookList } from "./BookList ";
import { favouriteBooks } from "./favouriteBooks";
import { Alert } from "./Alert";






export const App2 = () => {
  return (
    <>
			<h1>Books of the week</h1>
      <BookList books={favouriteBooks} />
      <Alert variant="info">
        Would you like to browse our recommended products?
      </Alert>
      <Alert variant="error">
        There was an error during your last transaction
      </Alert>
      <Alert variant="success">
        Payment received, thank you for your purchase
      </Alert>
      <Alert variant="warning">
        Please update your profile contact information
      </Alert> 
    </>
  );
};
