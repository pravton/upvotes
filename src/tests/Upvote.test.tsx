import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import UpvotesList from '../components/UpvotesList';
import { UpvoteProvider } from '../context/UpvoteContext';

// Test to check add and remove functionality
describe('UpvotesList Component', () => {
  // Test to check if the add button correctly adds an Upvote component
  test('adds an Upvote component on add button click', async () => {
      render(<UpvoteProvider><UpvotesList listIndex={0} /></UpvoteProvider>);

      const addButton = screen.getByTestId('add-upvote-button');

      const initialUpvoteCount = screen.queryAllByTestId('upvote-component').length;

      fireEvent.click(addButton);

      await waitFor(() => {
          const newUpvoteCount = screen.queryAllByTestId('upvote-component').length;
          expect(newUpvoteCount).toBe(initialUpvoteCount + 1);
      });
  });

  // Test to check if the remove button correctly removes an Upvote component
  test('removes an Upvote component on remove button click', () => {
    render(<UpvoteProvider><UpvotesList listIndex={0} /></UpvoteProvider>);

    const addButton = screen.getByTestId('add-upvote-button');
    const removeButton = screen.getByTestId('remove-upvote-button');

    fireEvent.click(addButton);

    const countAfterAdd = screen.queryAllByTestId('upvote-component').length;

    fireEvent.click(removeButton);

    const countAfterRemove = screen.queryAllByTestId('upvote-component').length;

    expect(countAfterRemove).toBe(countAfterAdd - 1);
  });
});