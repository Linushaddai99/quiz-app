import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import Quiz from '../component/Quiz'
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../redux/configStore.js';

describe('Quiz page', () => {
    it('Renders the quiz page correctly', () => {
        const { tree } = render(
            <Provider store={store}>
              <BrowserRouter>
                <Quiz />
              </BrowserRouter>
            </Provider>,
          );
          expect(tree).toMatchSnapshot();
    })
})