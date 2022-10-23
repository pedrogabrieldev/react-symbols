import IconEmojiPeopleFill0Wght100Grad0Opsz48 from '../components/EmojiPeopleFill0Wght100Grad0Opsz48'
import IconEmojiPeopleFill0Wght200Grad0Opsz48 from '../components/EmojiPeopleFill0Wght200Grad0Opsz48'
import IconEmojiPeopleFill0Wght300Grad0Opsz48 from '../components/EmojiPeopleFill0Wght300Grad0Opsz48'
import IconEmojiPeopleFill0Wght400Grad0Opsz48 from '../components/EmojiPeopleFill0Wght400Grad0Opsz48'
import IconEmojiPeopleFill0Wght500Grad0Opsz48 from '../components/EmojiPeopleFill0Wght500Grad0Opsz48'
import IconEmojiPeopleFill0Wght600Grad0Opsz48 from '../components/EmojiPeopleFill0Wght600Grad0Opsz48'
import IconEmojiPeopleFill0Wght700Grad0Opsz48 from '../components/EmojiPeopleFill0Wght700Grad0Opsz48'
import IconEmojiPeopleFill1Wght100Grad0Opsz48 from '../components/EmojiPeopleFill1Wght100Grad0Opsz48'
import IconEmojiPeopleFill1Wght200Grad0Opsz48 from '../components/EmojiPeopleFill1Wght200Grad0Opsz48'
import IconEmojiPeopleFill1Wght300Grad0Opsz48 from '../components/EmojiPeopleFill1Wght300Grad0Opsz48'
import IconEmojiPeopleFill1Wght400Grad0Opsz48 from '../components/EmojiPeopleFill1Wght400Grad0Opsz48'
import IconEmojiPeopleFill1Wght500Grad0Opsz48 from '../components/EmojiPeopleFill1Wght500Grad0Opsz48'
import IconEmojiPeopleFill1Wght600Grad0Opsz48 from '../components/EmojiPeopleFill1Wght600Grad0Opsz48'
import IconEmojiPeopleFill1Wght700Grad0Opsz48 from '../components/EmojiPeopleFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconEmojiPeople = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconEmojiPeopleFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconEmojiPeopleFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconEmojiPeopleFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconEmojiPeopleFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconEmojiPeopleFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconEmojiPeopleFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconEmojiPeopleFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconEmojiPeopleFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconEmojiPeopleFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconEmojiPeopleFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconEmojiPeopleFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconEmojiPeopleFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconEmojiPeopleFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconEmojiPeopleFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
