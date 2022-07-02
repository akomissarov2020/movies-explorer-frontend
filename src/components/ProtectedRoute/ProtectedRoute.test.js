import { render, screen } from '@testing-library/react';
import ProtectedRoute from './ProtectedRoute';

test('renders ProtectedRoute component', () => {
  render(<ProtectedRoute />);
});
