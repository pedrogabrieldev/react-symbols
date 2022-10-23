import IconSentimentVeryDissatisfiedFill0Wght100Grad0Opsz48 from '../components/SentimentVeryDissatisfiedFill0Wght100Grad0Opsz48'
import IconSentimentVeryDissatisfiedFill0Wght200Grad0Opsz48 from '../components/SentimentVeryDissatisfiedFill0Wght200Grad0Opsz48'
import IconSentimentVeryDissatisfiedFill0Wght300Grad0Opsz48 from '../components/SentimentVeryDissatisfiedFill0Wght300Grad0Opsz48'
import IconSentimentVeryDissatisfiedFill0Wght400Grad0Opsz48 from '../components/SentimentVeryDissatisfiedFill0Wght400Grad0Opsz48'
import IconSentimentVeryDissatisfiedFill0Wght500Grad0Opsz48 from '../components/SentimentVeryDissatisfiedFill0Wght500Grad0Opsz48'
import IconSentimentVeryDissatisfiedFill0Wght600Grad0Opsz48 from '../components/SentimentVeryDissatisfiedFill0Wght600Grad0Opsz48'
import IconSentimentVeryDissatisfiedFill0Wght700Grad0Opsz48 from '../components/SentimentVeryDissatisfiedFill0Wght700Grad0Opsz48'
import IconSentimentVeryDissatisfiedFill1Wght100Grad0Opsz48 from '../components/SentimentVeryDissatisfiedFill1Wght100Grad0Opsz48'
import IconSentimentVeryDissatisfiedFill1Wght200Grad0Opsz48 from '../components/SentimentVeryDissatisfiedFill1Wght200Grad0Opsz48'
import IconSentimentVeryDissatisfiedFill1Wght300Grad0Opsz48 from '../components/SentimentVeryDissatisfiedFill1Wght300Grad0Opsz48'
import IconSentimentVeryDissatisfiedFill1Wght400Grad0Opsz48 from '../components/SentimentVeryDissatisfiedFill1Wght400Grad0Opsz48'
import IconSentimentVeryDissatisfiedFill1Wght500Grad0Opsz48 from '../components/SentimentVeryDissatisfiedFill1Wght500Grad0Opsz48'
import IconSentimentVeryDissatisfiedFill1Wght600Grad0Opsz48 from '../components/SentimentVeryDissatisfiedFill1Wght600Grad0Opsz48'
import IconSentimentVeryDissatisfiedFill1Wght700Grad0Opsz48 from '../components/SentimentVeryDissatisfiedFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconSentimentVeryDissatisfied = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconSentimentVeryDissatisfiedFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconSentimentVeryDissatisfiedFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconSentimentVeryDissatisfiedFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconSentimentVeryDissatisfiedFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconSentimentVeryDissatisfiedFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconSentimentVeryDissatisfiedFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconSentimentVeryDissatisfiedFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconSentimentVeryDissatisfiedFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconSentimentVeryDissatisfiedFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconSentimentVeryDissatisfiedFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconSentimentVeryDissatisfiedFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconSentimentVeryDissatisfiedFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconSentimentVeryDissatisfiedFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconSentimentVeryDissatisfiedFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
