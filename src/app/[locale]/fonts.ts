// Description: The file contains the font configuration for the application.

import {Inter, Big_Shoulders_Text } from 'next/font/google';


export const bigShouldersText = Big_Shoulders_Text({
  subsets: ['latin'],
  weight: ['100', '400', '700'], 
  style: ['normal'],
});

export const inter = Inter({subsets: ['latin']})
