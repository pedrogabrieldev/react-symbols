import IconSentimentSatisfiedFill0Wght100Grad0Opsz48 from '../components/SentimentSatisfiedFill0Wght100Grad0Opsz48'
import IconSentimentSatisfiedFill0Wght200Grad0Opsz48 from '../components/SentimentSatisfiedFill0Wght200Grad0Opsz48'
import IconSentimentSatisfiedFill0Wght300Grad0Opsz48 from '../components/SentimentSatisfiedFill0Wght300Grad0Opsz48'
import IconSentimentSatisfiedFill0Wght400Grad0Opsz48 from '../components/SentimentSatisfiedFill0Wght400Grad0Opsz48'
import IconSentimentSatisfiedFill0Wght500Grad0Opsz48 from '../components/SentimentSatisfiedFill0Wght500Grad0Opsz48'
import IconSentimentSatisfiedFill0Wght600Grad0Opsz48 from '../components/SentimentSatisfiedFill0Wght600Grad0Opsz48'
import IconSentimentSatisfiedFill0Wght700Grad0Opsz48 from '../components/SentimentSatisfiedFill0Wght700Grad0Opsz48'
import IconSentimentSatisfiedFill1Wght100Grad0Opsz48 from '../components/SentimentSatisfiedFill1Wght100Grad0Opsz48'
import IconSentimentSatisfiedFill1Wght200Grad0Opsz48 from '../components/SentimentSatisfiedFill1Wght200Grad0Opsz48'
import IconSentimentSatisfiedFill1Wght300Grad0Opsz48 from '../components/SentimentSatisfiedFill1Wght300Grad0Opsz48'
import IconSentimentSatisfiedFill1Wght400Grad0Opsz48 from '../components/SentimentSatisfiedFill1Wght400Grad0Opsz48'
import IconSentimentSatisfiedFill1Wght500Grad0Opsz48 from '../components/SentimentSatisfiedFill1Wght500Grad0Opsz48'
import IconSentimentSatisfiedFill1Wght600Grad0Opsz48 from '../components/SentimentSatisfiedFill1Wght600Grad0Opsz48'
import IconSentimentSatisfiedFill1Wght700Grad0Opsz48 from '../components/SentimentSatisfiedFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconSentimentSatisfied = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconSentimentSatisfiedFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconSentimentSatisfiedFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconSentimentSatisfiedFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconSentimentSatisfiedFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconSentimentSatisfiedFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconSentimentSatisfiedFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconSentimentSatisfiedFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconSentimentSatisfiedFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconSentimentSatisfiedFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconSentimentSatisfiedFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconSentimentSatisfiedFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconSentimentSatisfiedFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconSentimentSatisfiedFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconSentimentSatisfiedFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
