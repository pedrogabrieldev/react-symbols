import IconGifBoxFill0Wght100Grad0Opsz48 from '../components/GifBoxFill0Wght100Grad0Opsz48'
import IconGifBoxFill0Wght200Grad0Opsz48 from '../components/GifBoxFill0Wght200Grad0Opsz48'
import IconGifBoxFill0Wght300Grad0Opsz48 from '../components/GifBoxFill0Wght300Grad0Opsz48'
import IconGifBoxFill0Wght400Grad0Opsz48 from '../components/GifBoxFill0Wght400Grad0Opsz48'
import IconGifBoxFill0Wght500Grad0Opsz48 from '../components/GifBoxFill0Wght500Grad0Opsz48'
import IconGifBoxFill0Wght600Grad0Opsz48 from '../components/GifBoxFill0Wght600Grad0Opsz48'
import IconGifBoxFill0Wght700Grad0Opsz48 from '../components/GifBoxFill0Wght700Grad0Opsz48'
import IconGifBoxFill1Wght100Grad0Opsz48 from '../components/GifBoxFill1Wght100Grad0Opsz48'
import IconGifBoxFill1Wght200Grad0Opsz48 from '../components/GifBoxFill1Wght200Grad0Opsz48'
import IconGifBoxFill1Wght300Grad0Opsz48 from '../components/GifBoxFill1Wght300Grad0Opsz48'
import IconGifBoxFill1Wght400Grad0Opsz48 from '../components/GifBoxFill1Wght400Grad0Opsz48'
import IconGifBoxFill1Wght500Grad0Opsz48 from '../components/GifBoxFill1Wght500Grad0Opsz48'
import IconGifBoxFill1Wght600Grad0Opsz48 from '../components/GifBoxFill1Wght600Grad0Opsz48'
import IconGifBoxFill1Wght700Grad0Opsz48 from '../components/GifBoxFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconGifBox = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconGifBoxFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconGifBoxFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconGifBoxFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconGifBoxFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconGifBoxFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconGifBoxFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconGifBoxFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconGifBoxFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconGifBoxFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconGifBoxFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconGifBoxFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconGifBoxFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconGifBoxFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconGifBoxFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
