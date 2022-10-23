import IconGifFill0Wght100Grad0Opsz48 from '../components/GifFill0Wght100Grad0Opsz48'
import IconGifFill0Wght200Grad0Opsz48 from '../components/GifFill0Wght200Grad0Opsz48'
import IconGifFill0Wght300Grad0Opsz48 from '../components/GifFill0Wght300Grad0Opsz48'
import IconGifFill0Wght400Grad0Opsz48 from '../components/GifFill0Wght400Grad0Opsz48'
import IconGifFill0Wght500Grad0Opsz48 from '../components/GifFill0Wght500Grad0Opsz48'
import IconGifFill0Wght600Grad0Opsz48 from '../components/GifFill0Wght600Grad0Opsz48'
import IconGifFill0Wght700Grad0Opsz48 from '../components/GifFill0Wght700Grad0Opsz48'
import IconGifFill1Wght100Grad0Opsz48 from '../components/GifFill1Wght100Grad0Opsz48'
import IconGifFill1Wght200Grad0Opsz48 from '../components/GifFill1Wght200Grad0Opsz48'
import IconGifFill1Wght300Grad0Opsz48 from '../components/GifFill1Wght300Grad0Opsz48'
import IconGifFill1Wght400Grad0Opsz48 from '../components/GifFill1Wght400Grad0Opsz48'
import IconGifFill1Wght500Grad0Opsz48 from '../components/GifFill1Wght500Grad0Opsz48'
import IconGifFill1Wght600Grad0Opsz48 from '../components/GifFill1Wght600Grad0Opsz48'
import IconGifFill1Wght700Grad0Opsz48 from '../components/GifFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconGif = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconGifFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconGifFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconGifFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconGifFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconGifFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconGifFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconGifFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconGifFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconGifFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconGifFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconGifFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconGifFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconGifFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconGifFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
