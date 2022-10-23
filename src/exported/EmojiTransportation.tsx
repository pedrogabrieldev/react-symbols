import IconEmojiTransportationFill0Wght100Grad0Opsz48 from '../components/EmojiTransportationFill0Wght100Grad0Opsz48'
import IconEmojiTransportationFill0Wght200Grad0Opsz48 from '../components/EmojiTransportationFill0Wght200Grad0Opsz48'
import IconEmojiTransportationFill0Wght300Grad0Opsz48 from '../components/EmojiTransportationFill0Wght300Grad0Opsz48'
import IconEmojiTransportationFill0Wght400Grad0Opsz48 from '../components/EmojiTransportationFill0Wght400Grad0Opsz48'
import IconEmojiTransportationFill0Wght500Grad0Opsz48 from '../components/EmojiTransportationFill0Wght500Grad0Opsz48'
import IconEmojiTransportationFill0Wght600Grad0Opsz48 from '../components/EmojiTransportationFill0Wght600Grad0Opsz48'
import IconEmojiTransportationFill0Wght700Grad0Opsz48 from '../components/EmojiTransportationFill0Wght700Grad0Opsz48'
import IconEmojiTransportationFill1Wght100Grad0Opsz48 from '../components/EmojiTransportationFill1Wght100Grad0Opsz48'
import IconEmojiTransportationFill1Wght200Grad0Opsz48 from '../components/EmojiTransportationFill1Wght200Grad0Opsz48'
import IconEmojiTransportationFill1Wght300Grad0Opsz48 from '../components/EmojiTransportationFill1Wght300Grad0Opsz48'
import IconEmojiTransportationFill1Wght400Grad0Opsz48 from '../components/EmojiTransportationFill1Wght400Grad0Opsz48'
import IconEmojiTransportationFill1Wght500Grad0Opsz48 from '../components/EmojiTransportationFill1Wght500Grad0Opsz48'
import IconEmojiTransportationFill1Wght600Grad0Opsz48 from '../components/EmojiTransportationFill1Wght600Grad0Opsz48'
import IconEmojiTransportationFill1Wght700Grad0Opsz48 from '../components/EmojiTransportationFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconEmojiTransportation = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconEmojiTransportationFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconEmojiTransportationFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconEmojiTransportationFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconEmojiTransportationFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconEmojiTransportationFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconEmojiTransportationFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconEmojiTransportationFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconEmojiTransportationFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconEmojiTransportationFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconEmojiTransportationFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconEmojiTransportationFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconEmojiTransportationFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconEmojiTransportationFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconEmojiTransportationFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
