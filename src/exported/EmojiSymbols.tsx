import IconEmojiSymbolsFill0Wght100Grad0Opsz48 from '../components/EmojiSymbolsFill0Wght100Grad0Opsz48'
import IconEmojiSymbolsFill0Wght200Grad0Opsz48 from '../components/EmojiSymbolsFill0Wght200Grad0Opsz48'
import IconEmojiSymbolsFill0Wght300Grad0Opsz48 from '../components/EmojiSymbolsFill0Wght300Grad0Opsz48'
import IconEmojiSymbolsFill0Wght400Grad0Opsz48 from '../components/EmojiSymbolsFill0Wght400Grad0Opsz48'
import IconEmojiSymbolsFill0Wght500Grad0Opsz48 from '../components/EmojiSymbolsFill0Wght500Grad0Opsz48'
import IconEmojiSymbolsFill0Wght600Grad0Opsz48 from '../components/EmojiSymbolsFill0Wght600Grad0Opsz48'
import IconEmojiSymbolsFill0Wght700Grad0Opsz48 from '../components/EmojiSymbolsFill0Wght700Grad0Opsz48'
import IconEmojiSymbolsFill1Wght100Grad0Opsz48 from '../components/EmojiSymbolsFill1Wght100Grad0Opsz48'
import IconEmojiSymbolsFill1Wght200Grad0Opsz48 from '../components/EmojiSymbolsFill1Wght200Grad0Opsz48'
import IconEmojiSymbolsFill1Wght300Grad0Opsz48 from '../components/EmojiSymbolsFill1Wght300Grad0Opsz48'
import IconEmojiSymbolsFill1Wght400Grad0Opsz48 from '../components/EmojiSymbolsFill1Wght400Grad0Opsz48'
import IconEmojiSymbolsFill1Wght500Grad0Opsz48 from '../components/EmojiSymbolsFill1Wght500Grad0Opsz48'
import IconEmojiSymbolsFill1Wght600Grad0Opsz48 from '../components/EmojiSymbolsFill1Wght600Grad0Opsz48'
import IconEmojiSymbolsFill1Wght700Grad0Opsz48 from '../components/EmojiSymbolsFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconEmojiSymbols = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconEmojiSymbolsFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconEmojiSymbolsFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconEmojiSymbolsFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconEmojiSymbolsFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconEmojiSymbolsFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconEmojiSymbolsFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconEmojiSymbolsFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconEmojiSymbolsFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconEmojiSymbolsFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconEmojiSymbolsFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconEmojiSymbolsFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconEmojiSymbolsFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconEmojiSymbolsFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconEmojiSymbolsFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
