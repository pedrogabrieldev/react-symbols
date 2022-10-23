import IconSentimentNeutralFill0Wght100Grad0Opsz48 from '../components/SentimentNeutralFill0Wght100Grad0Opsz48'
import IconSentimentNeutralFill0Wght200Grad0Opsz48 from '../components/SentimentNeutralFill0Wght200Grad0Opsz48'
import IconSentimentNeutralFill0Wght300Grad0Opsz48 from '../components/SentimentNeutralFill0Wght300Grad0Opsz48'
import IconSentimentNeutralFill0Wght400Grad0Opsz48 from '../components/SentimentNeutralFill0Wght400Grad0Opsz48'
import IconSentimentNeutralFill0Wght500Grad0Opsz48 from '../components/SentimentNeutralFill0Wght500Grad0Opsz48'
import IconSentimentNeutralFill0Wght600Grad0Opsz48 from '../components/SentimentNeutralFill0Wght600Grad0Opsz48'
import IconSentimentNeutralFill0Wght700Grad0Opsz48 from '../components/SentimentNeutralFill0Wght700Grad0Opsz48'
import IconSentimentNeutralFill1Wght100Grad0Opsz48 from '../components/SentimentNeutralFill1Wght100Grad0Opsz48'
import IconSentimentNeutralFill1Wght200Grad0Opsz48 from '../components/SentimentNeutralFill1Wght200Grad0Opsz48'
import IconSentimentNeutralFill1Wght300Grad0Opsz48 from '../components/SentimentNeutralFill1Wght300Grad0Opsz48'
import IconSentimentNeutralFill1Wght400Grad0Opsz48 from '../components/SentimentNeutralFill1Wght400Grad0Opsz48'
import IconSentimentNeutralFill1Wght500Grad0Opsz48 from '../components/SentimentNeutralFill1Wght500Grad0Opsz48'
import IconSentimentNeutralFill1Wght600Grad0Opsz48 from '../components/SentimentNeutralFill1Wght600Grad0Opsz48'
import IconSentimentNeutralFill1Wght700Grad0Opsz48 from '../components/SentimentNeutralFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconSentimentNeutral = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconSentimentNeutralFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconSentimentNeutralFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconSentimentNeutralFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconSentimentNeutralFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconSentimentNeutralFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconSentimentNeutralFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconSentimentNeutralFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconSentimentNeutralFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconSentimentNeutralFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconSentimentNeutralFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconSentimentNeutralFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconSentimentNeutralFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconSentimentNeutralFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconSentimentNeutralFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
