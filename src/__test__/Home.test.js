import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Home from '../component/Home';
import store from '../redux/configStore';

describe('Home page', () => {
  it('should display Homepage correctly', () => {
    const { container } = render(
      <Provider store={store}>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </Provider>,
    );
    expect(container).toMatchSnapshot();
  });

  it('Should render title', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </Provider>,
    );

    expect(screen.getByText(/TAKE A QUIZ/i)).toBeInTheDocument();
  });

  it('Should render Generate questions button', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </Provider>,
    );

    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
