import IconEmojiNatureFill0Wght100Grad0Opsz48 from '../components/EmojiNatureFill0Wght100Grad0Opsz48'
import IconEmojiNatureFill0Wght200Grad0Opsz48 from '../components/EmojiNatureFill0Wght200Grad0Opsz48'
import IconEmojiNatureFill0Wght300Grad0Opsz48 from '../components/EmojiNatureFill0Wght300Grad0Opsz48'
import IconEmojiNatureFill0Wght400Grad0Opsz48 from '../components/EmojiNatureFill0Wght400Grad0Opsz48'
import IconEmojiNatureFill0Wght500Grad0Opsz48 from '../components/EmojiNatureFill0Wght500Grad0Opsz48'
import IconEmojiNatureFill0Wght600Grad0Opsz48 from '../components/EmojiNatureFill0Wght600Grad0Opsz48'
import IconEmojiNatureFill0Wght700Grad0Opsz48 from '../components/EmojiNatureFill0Wght700Grad0Opsz48'
import IconEmojiNatureFill1Wght100Grad0Opsz48 from '../components/EmojiNatureFill1Wght100Grad0Opsz48'
import IconEmojiNatureFill1Wght200Grad0Opsz48 from '../components/EmojiNatureFill1Wght200Grad0Opsz48'
import IconEmojiNatureFill1Wght300Grad0Opsz48 from '../components/EmojiNatureFill1Wght300Grad0Opsz48'
import IconEmojiNatureFill1Wght400Grad0Opsz48 from '../components/EmojiNatureFill1Wght400Grad0Opsz48'
import IconEmojiNatureFill1Wght500Grad0Opsz48 from '../components/EmojiNatureFill1Wght500Grad0Opsz48'
import IconEmojiNatureFill1Wght600Grad0Opsz48 from '../components/EmojiNatureFill1Wght600Grad0Opsz48'
import IconEmojiNatureFill1Wght700Grad0Opsz48 from '../components/EmojiNatureFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconEmojiNature = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconEmojiNatureFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconEmojiNatureFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconEmojiNatureFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconEmojiNatureFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconEmojiNatureFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconEmojiNatureFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconEmojiNatureFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconEmojiNatureFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconEmojiNatureFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconEmojiNatureFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconEmojiNatureFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconEmojiNatureFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconEmojiNatureFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconEmojiNatureFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
