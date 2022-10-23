import IconLyricsFill0Wght100Grad0Opsz48 from '../components/LyricsFill0Wght100Grad0Opsz48'
import IconLyricsFill0Wght200Grad0Opsz48 from '../components/LyricsFill0Wght200Grad0Opsz48'
import IconLyricsFill0Wght300Grad0Opsz48 from '../components/LyricsFill0Wght300Grad0Opsz48'
import IconLyricsFill0Wght400Grad0Opsz48 from '../components/LyricsFill0Wght400Grad0Opsz48'
import IconLyricsFill0Wght500Grad0Opsz48 from '../components/LyricsFill0Wght500Grad0Opsz48'
import IconLyricsFill0Wght600Grad0Opsz48 from '../components/LyricsFill0Wght600Grad0Opsz48'
import IconLyricsFill0Wght700Grad0Opsz48 from '../components/LyricsFill0Wght700Grad0Opsz48'
import IconLyricsFill1Wght100Grad0Opsz48 from '../components/LyricsFill1Wght100Grad0Opsz48'
import IconLyricsFill1Wght200Grad0Opsz48 from '../components/LyricsFill1Wght200Grad0Opsz48'
import IconLyricsFill1Wght300Grad0Opsz48 from '../components/LyricsFill1Wght300Grad0Opsz48'
import IconLyricsFill1Wght400Grad0Opsz48 from '../components/LyricsFill1Wght400Grad0Opsz48'
import IconLyricsFill1Wght500Grad0Opsz48 from '../components/LyricsFill1Wght500Grad0Opsz48'
import IconLyricsFill1Wght600Grad0Opsz48 from '../components/LyricsFill1Wght600Grad0Opsz48'
import IconLyricsFill1Wght700Grad0Opsz48 from '../components/LyricsFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconLyrics = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconLyricsFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconLyricsFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconLyricsFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconLyricsFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconLyricsFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconLyricsFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconLyricsFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconLyricsFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconLyricsFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconLyricsFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconLyricsFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconLyricsFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconLyricsFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconLyricsFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
