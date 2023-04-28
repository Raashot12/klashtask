import { render, screen } from '@testing-library/react';
import * as nextRouter from 'next/router';
import HeroSection from '.';

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

describe('Hero section test cases', () => {
  it('should render hero section test campaign correctly', () => {
    const { getByText } = render(<HeroSection />);
    expect(getByText(/We Collect High Quality Leads/i)).toBeInTheDocument();
    expect(
      getByText(
        /Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravi./i
      )
    ).toBeInTheDocument();
  });
  it('should render correct image value', () => {
    render(<HeroSection />);
    const displayedImage = document.querySelector('img') as HTMLImageElement;
    expect(displayedImage.src).toContain(
      'https://preview.colorlib.com/theme/seos/assets/img/hero/hero_right.png.webp'
    );
    expect(displayedImage.alt).toContain('hero section image');
  });
  it('should button work correctly when clicked', () => {
    render(<HeroSection />);
    // Find an element with a role of button & text of 'Change to blue'
    const colorButton = screen.getByRole('button', {
      name: 'Click to Onboard',
    });
    expect(colorButton).toHaveStyle({ backgroundColor: '#93278F' });
  });
  it('should...', () => {
    nextRouter.useRouter.mockImplementation(() => ({ route: '/onboarding' }));
  });
});
