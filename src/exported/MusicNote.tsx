import IconMusicNoteFill0Wght100Grad0Opsz48 from '../components/MusicNoteFill0Wght100Grad0Opsz48'
import IconMusicNoteFill0Wght200Grad0Opsz48 from '../components/MusicNoteFill0Wght200Grad0Opsz48'
import IconMusicNoteFill0Wght300Grad0Opsz48 from '../components/MusicNoteFill0Wght300Grad0Opsz48'
import IconMusicNoteFill0Wght400Grad0Opsz48 from '../components/MusicNoteFill0Wght400Grad0Opsz48'
import IconMusicNoteFill0Wght500Grad0Opsz48 from '../components/MusicNoteFill0Wght500Grad0Opsz48'
import IconMusicNoteFill0Wght600Grad0Opsz48 from '../components/MusicNoteFill0Wght600Grad0Opsz48'
import IconMusicNoteFill0Wght700Grad0Opsz48 from '../components/MusicNoteFill0Wght700Grad0Opsz48'
import IconMusicNoteFill1Wght100Grad0Opsz48 from '../components/MusicNoteFill1Wght100Grad0Opsz48'
import IconMusicNoteFill1Wght200Grad0Opsz48 from '../components/MusicNoteFill1Wght200Grad0Opsz48'
import IconMusicNoteFill1Wght300Grad0Opsz48 from '../components/MusicNoteFill1Wght300Grad0Opsz48'
import IconMusicNoteFill1Wght400Grad0Opsz48 from '../components/MusicNoteFill1Wght400Grad0Opsz48'
import IconMusicNoteFill1Wght500Grad0Opsz48 from '../components/MusicNoteFill1Wght500Grad0Opsz48'
import IconMusicNoteFill1Wght600Grad0Opsz48 from '../components/MusicNoteFill1Wght600Grad0Opsz48'
import IconMusicNoteFill1Wght700Grad0Opsz48 from '../components/MusicNoteFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconMusicNote = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconMusicNoteFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconMusicNoteFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconMusicNoteFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconMusicNoteFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconMusicNoteFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconMusicNoteFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconMusicNoteFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconMusicNoteFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconMusicNoteFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconMusicNoteFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconMusicNoteFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconMusicNoteFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconMusicNoteFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconMusicNoteFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
