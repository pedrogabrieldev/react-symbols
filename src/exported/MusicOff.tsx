import IconMusicOffFill0Wght100Grad0Opsz48 from '../components/MusicOffFill0Wght100Grad0Opsz48'
import IconMusicOffFill0Wght200Grad0Opsz48 from '../components/MusicOffFill0Wght200Grad0Opsz48'
import IconMusicOffFill0Wght300Grad0Opsz48 from '../components/MusicOffFill0Wght300Grad0Opsz48'
import IconMusicOffFill0Wght400Grad0Opsz48 from '../components/MusicOffFill0Wght400Grad0Opsz48'
import IconMusicOffFill0Wght500Grad0Opsz48 from '../components/MusicOffFill0Wght500Grad0Opsz48'
import IconMusicOffFill0Wght600Grad0Opsz48 from '../components/MusicOffFill0Wght600Grad0Opsz48'
import IconMusicOffFill0Wght700Grad0Opsz48 from '../components/MusicOffFill0Wght700Grad0Opsz48'
import IconMusicOffFill1Wght100Grad0Opsz48 from '../components/MusicOffFill1Wght100Grad0Opsz48'
import IconMusicOffFill1Wght200Grad0Opsz48 from '../components/MusicOffFill1Wght200Grad0Opsz48'
import IconMusicOffFill1Wght300Grad0Opsz48 from '../components/MusicOffFill1Wght300Grad0Opsz48'
import IconMusicOffFill1Wght400Grad0Opsz48 from '../components/MusicOffFill1Wght400Grad0Opsz48'
import IconMusicOffFill1Wght500Grad0Opsz48 from '../components/MusicOffFill1Wght500Grad0Opsz48'
import IconMusicOffFill1Wght600Grad0Opsz48 from '../components/MusicOffFill1Wght600Grad0Opsz48'
import IconMusicOffFill1Wght700Grad0Opsz48 from '../components/MusicOffFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconMusicOff = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconMusicOffFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconMusicOffFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconMusicOffFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconMusicOffFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconMusicOffFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconMusicOffFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconMusicOffFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconMusicOffFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconMusicOffFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconMusicOffFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconMusicOffFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconMusicOffFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconMusicOffFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconMusicOffFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
