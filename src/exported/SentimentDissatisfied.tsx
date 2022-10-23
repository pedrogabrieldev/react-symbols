import IconSentimentDissatisfiedFill0Wght100Grad0Opsz48 from '../components/SentimentDissatisfiedFill0Wght100Grad0Opsz48'
import IconSentimentDissatisfiedFill0Wght200Grad0Opsz48 from '../components/SentimentDissatisfiedFill0Wght200Grad0Opsz48'
import IconSentimentDissatisfiedFill0Wght300Grad0Opsz48 from '../components/SentimentDissatisfiedFill0Wght300Grad0Opsz48'
import IconSentimentDissatisfiedFill0Wght400Grad0Opsz48 from '../components/SentimentDissatisfiedFill0Wght400Grad0Opsz48'
import IconSentimentDissatisfiedFill0Wght500Grad0Opsz48 from '../components/SentimentDissatisfiedFill0Wght500Grad0Opsz48'
import IconSentimentDissatisfiedFill0Wght600Grad0Opsz48 from '../components/SentimentDissatisfiedFill0Wght600Grad0Opsz48'
import IconSentimentDissatisfiedFill0Wght700Grad0Opsz48 from '../components/SentimentDissatisfiedFill0Wght700Grad0Opsz48'
import IconSentimentDissatisfiedFill1Wght100Grad0Opsz48 from '../components/SentimentDissatisfiedFill1Wght100Grad0Opsz48'
import IconSentimentDissatisfiedFill1Wght200Grad0Opsz48 from '../components/SentimentDissatisfiedFill1Wght200Grad0Opsz48'
import IconSentimentDissatisfiedFill1Wght300Grad0Opsz48 from '../components/SentimentDissatisfiedFill1Wght300Grad0Opsz48'
import IconSentimentDissatisfiedFill1Wght400Grad0Opsz48 from '../components/SentimentDissatisfiedFill1Wght400Grad0Opsz48'
import IconSentimentDissatisfiedFill1Wght500Grad0Opsz48 from '../components/SentimentDissatisfiedFill1Wght500Grad0Opsz48'
import IconSentimentDissatisfiedFill1Wght600Grad0Opsz48 from '../components/SentimentDissatisfiedFill1Wght600Grad0Opsz48'
import IconSentimentDissatisfiedFill1Wght700Grad0Opsz48 from '../components/SentimentDissatisfiedFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconSentimentDissatisfied = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconSentimentDissatisfiedFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconSentimentDissatisfiedFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconSentimentDissatisfiedFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconSentimentDissatisfiedFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconSentimentDissatisfiedFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconSentimentDissatisfiedFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconSentimentDissatisfiedFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconSentimentDissatisfiedFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconSentimentDissatisfiedFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconSentimentDissatisfiedFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconSentimentDissatisfiedFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconSentimentDissatisfiedFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconSentimentDissatisfiedFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconSentimentDissatisfiedFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
