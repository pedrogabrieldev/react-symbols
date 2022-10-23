import IconEmojiObjectsFill0Wght100Grad0Opsz48 from '../components/EmojiObjectsFill0Wght100Grad0Opsz48'
import IconEmojiObjectsFill0Wght200Grad0Opsz48 from '../components/EmojiObjectsFill0Wght200Grad0Opsz48'
import IconEmojiObjectsFill0Wght300Grad0Opsz48 from '../components/EmojiObjectsFill0Wght300Grad0Opsz48'
import IconEmojiObjectsFill0Wght400Grad0Opsz48 from '../components/EmojiObjectsFill0Wght400Grad0Opsz48'
import IconEmojiObjectsFill0Wght500Grad0Opsz48 from '../components/EmojiObjectsFill0Wght500Grad0Opsz48'
import IconEmojiObjectsFill0Wght600Grad0Opsz48 from '../components/EmojiObjectsFill0Wght600Grad0Opsz48'
import IconEmojiObjectsFill0Wght700Grad0Opsz48 from '../components/EmojiObjectsFill0Wght700Grad0Opsz48'
import IconEmojiObjectsFill1Wght100Grad0Opsz48 from '../components/EmojiObjectsFill1Wght100Grad0Opsz48'
import IconEmojiObjectsFill1Wght200Grad0Opsz48 from '../components/EmojiObjectsFill1Wght200Grad0Opsz48'
import IconEmojiObjectsFill1Wght300Grad0Opsz48 from '../components/EmojiObjectsFill1Wght300Grad0Opsz48'
import IconEmojiObjectsFill1Wght400Grad0Opsz48 from '../components/EmojiObjectsFill1Wght400Grad0Opsz48'
import IconEmojiObjectsFill1Wght500Grad0Opsz48 from '../components/EmojiObjectsFill1Wght500Grad0Opsz48'
import IconEmojiObjectsFill1Wght600Grad0Opsz48 from '../components/EmojiObjectsFill1Wght600Grad0Opsz48'
import IconEmojiObjectsFill1Wght700Grad0Opsz48 from '../components/EmojiObjectsFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconEmojiObjects = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconEmojiObjectsFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconEmojiObjectsFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconEmojiObjectsFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconEmojiObjectsFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconEmojiObjectsFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconEmojiObjectsFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconEmojiObjectsFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconEmojiObjectsFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconEmojiObjectsFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconEmojiObjectsFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconEmojiObjectsFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconEmojiObjectsFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconEmojiObjectsFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconEmojiObjectsFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
