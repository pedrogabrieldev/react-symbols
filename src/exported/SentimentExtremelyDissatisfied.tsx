import IconSentimentExtremelyDissatisfiedFill0Wght100Grad0Opsz48 from '../components/SentimentExtremelyDissatisfiedFill0Wght100Grad0Opsz48'
import IconSentimentExtremelyDissatisfiedFill0Wght200Grad0Opsz48 from '../components/SentimentExtremelyDissatisfiedFill0Wght200Grad0Opsz48'
import IconSentimentExtremelyDissatisfiedFill0Wght300Grad0Opsz48 from '../components/SentimentExtremelyDissatisfiedFill0Wght300Grad0Opsz48'
import IconSentimentExtremelyDissatisfiedFill0Wght400Grad0Opsz48 from '../components/SentimentExtremelyDissatisfiedFill0Wght400Grad0Opsz48'
import IconSentimentExtremelyDissatisfiedFill0Wght500Grad0Opsz48 from '../components/SentimentExtremelyDissatisfiedFill0Wght500Grad0Opsz48'
import IconSentimentExtremelyDissatisfiedFill0Wght600Grad0Opsz48 from '../components/SentimentExtremelyDissatisfiedFill0Wght600Grad0Opsz48'
import IconSentimentExtremelyDissatisfiedFill0Wght700Grad0Opsz48 from '../components/SentimentExtremelyDissatisfiedFill0Wght700Grad0Opsz48'
import IconSentimentExtremelyDissatisfiedFill1Wght100Grad0Opsz48 from '../components/SentimentExtremelyDissatisfiedFill1Wght100Grad0Opsz48'
import IconSentimentExtremelyDissatisfiedFill1Wght200Grad0Opsz48 from '../components/SentimentExtremelyDissatisfiedFill1Wght200Grad0Opsz48'
import IconSentimentExtremelyDissatisfiedFill1Wght300Grad0Opsz48 from '../components/SentimentExtremelyDissatisfiedFill1Wght300Grad0Opsz48'
import IconSentimentExtremelyDissatisfiedFill1Wght400Grad0Opsz48 from '../components/SentimentExtremelyDissatisfiedFill1Wght400Grad0Opsz48'
import IconSentimentExtremelyDissatisfiedFill1Wght500Grad0Opsz48 from '../components/SentimentExtremelyDissatisfiedFill1Wght500Grad0Opsz48'
import IconSentimentExtremelyDissatisfiedFill1Wght600Grad0Opsz48 from '../components/SentimentExtremelyDissatisfiedFill1Wght600Grad0Opsz48'
import IconSentimentExtremelyDissatisfiedFill1Wght700Grad0Opsz48 from '../components/SentimentExtremelyDissatisfiedFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconSentimentExtremelyDissatisfied = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconSentimentExtremelyDissatisfiedFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconSentimentExtremelyDissatisfiedFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconSentimentExtremelyDissatisfiedFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconSentimentExtremelyDissatisfiedFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconSentimentExtremelyDissatisfiedFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconSentimentExtremelyDissatisfiedFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconSentimentExtremelyDissatisfiedFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconSentimentExtremelyDissatisfiedFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconSentimentExtremelyDissatisfiedFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconSentimentExtremelyDissatisfiedFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconSentimentExtremelyDissatisfiedFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconSentimentExtremelyDissatisfiedFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconSentimentExtremelyDissatisfiedFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconSentimentExtremelyDissatisfiedFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
