import IconSentimentVerySatisfiedFill0Wght100Grad0Opsz48 from '../components/SentimentVerySatisfiedFill0Wght100Grad0Opsz48'
import IconSentimentVerySatisfiedFill0Wght200Grad0Opsz48 from '../components/SentimentVerySatisfiedFill0Wght200Grad0Opsz48'
import IconSentimentVerySatisfiedFill0Wght300Grad0Opsz48 from '../components/SentimentVerySatisfiedFill0Wght300Grad0Opsz48'
import IconSentimentVerySatisfiedFill0Wght400Grad0Opsz48 from '../components/SentimentVerySatisfiedFill0Wght400Grad0Opsz48'
import IconSentimentVerySatisfiedFill0Wght500Grad0Opsz48 from '../components/SentimentVerySatisfiedFill0Wght500Grad0Opsz48'
import IconSentimentVerySatisfiedFill0Wght600Grad0Opsz48 from '../components/SentimentVerySatisfiedFill0Wght600Grad0Opsz48'
import IconSentimentVerySatisfiedFill0Wght700Grad0Opsz48 from '../components/SentimentVerySatisfiedFill0Wght700Grad0Opsz48'
import IconSentimentVerySatisfiedFill1Wght100Grad0Opsz48 from '../components/SentimentVerySatisfiedFill1Wght100Grad0Opsz48'
import IconSentimentVerySatisfiedFill1Wght200Grad0Opsz48 from '../components/SentimentVerySatisfiedFill1Wght200Grad0Opsz48'
import IconSentimentVerySatisfiedFill1Wght300Grad0Opsz48 from '../components/SentimentVerySatisfiedFill1Wght300Grad0Opsz48'
import IconSentimentVerySatisfiedFill1Wght400Grad0Opsz48 from '../components/SentimentVerySatisfiedFill1Wght400Grad0Opsz48'
import IconSentimentVerySatisfiedFill1Wght500Grad0Opsz48 from '../components/SentimentVerySatisfiedFill1Wght500Grad0Opsz48'
import IconSentimentVerySatisfiedFill1Wght600Grad0Opsz48 from '../components/SentimentVerySatisfiedFill1Wght600Grad0Opsz48'
import IconSentimentVerySatisfiedFill1Wght700Grad0Opsz48 from '../components/SentimentVerySatisfiedFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconSentimentVerySatisfied = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconSentimentVerySatisfiedFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconSentimentVerySatisfiedFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconSentimentVerySatisfiedFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconSentimentVerySatisfiedFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconSentimentVerySatisfiedFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconSentimentVerySatisfiedFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconSentimentVerySatisfiedFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconSentimentVerySatisfiedFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconSentimentVerySatisfiedFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconSentimentVerySatisfiedFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconSentimentVerySatisfiedFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconSentimentVerySatisfiedFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconSentimentVerySatisfiedFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconSentimentVerySatisfiedFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
