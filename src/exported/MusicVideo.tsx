import IconMusicVideoFill0Wght100Grad0Opsz48 from '../components/MusicVideoFill0Wght100Grad0Opsz48'
import IconMusicVideoFill0Wght200Grad0Opsz48 from '../components/MusicVideoFill0Wght200Grad0Opsz48'
import IconMusicVideoFill0Wght300Grad0Opsz48 from '../components/MusicVideoFill0Wght300Grad0Opsz48'
import IconMusicVideoFill0Wght400Grad0Opsz48 from '../components/MusicVideoFill0Wght400Grad0Opsz48'
import IconMusicVideoFill0Wght500Grad0Opsz48 from '../components/MusicVideoFill0Wght500Grad0Opsz48'
import IconMusicVideoFill0Wght600Grad0Opsz48 from '../components/MusicVideoFill0Wght600Grad0Opsz48'
import IconMusicVideoFill0Wght700Grad0Opsz48 from '../components/MusicVideoFill0Wght700Grad0Opsz48'
import IconMusicVideoFill1Wght100Grad0Opsz48 from '../components/MusicVideoFill1Wght100Grad0Opsz48'
import IconMusicVideoFill1Wght200Grad0Opsz48 from '../components/MusicVideoFill1Wght200Grad0Opsz48'
import IconMusicVideoFill1Wght300Grad0Opsz48 from '../components/MusicVideoFill1Wght300Grad0Opsz48'
import IconMusicVideoFill1Wght400Grad0Opsz48 from '../components/MusicVideoFill1Wght400Grad0Opsz48'
import IconMusicVideoFill1Wght500Grad0Opsz48 from '../components/MusicVideoFill1Wght500Grad0Opsz48'
import IconMusicVideoFill1Wght600Grad0Opsz48 from '../components/MusicVideoFill1Wght600Grad0Opsz48'
import IconMusicVideoFill1Wght700Grad0Opsz48 from '../components/MusicVideoFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconMusicVideo = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconMusicVideoFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconMusicVideoFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconMusicVideoFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconMusicVideoFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconMusicVideoFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconMusicVideoFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconMusicVideoFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconMusicVideoFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconMusicVideoFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconMusicVideoFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconMusicVideoFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconMusicVideoFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconMusicVideoFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconMusicVideoFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
