import IconSubtitlesFill0Wght100Grad0Opsz48 from '../components/SubtitlesFill0Wght100Grad0Opsz48'
import IconSubtitlesFill0Wght200Grad0Opsz48 from '../components/SubtitlesFill0Wght200Grad0Opsz48'
import IconSubtitlesFill0Wght300Grad0Opsz48 from '../components/SubtitlesFill0Wght300Grad0Opsz48'
import IconSubtitlesFill0Wght400Grad0Opsz48 from '../components/SubtitlesFill0Wght400Grad0Opsz48'
import IconSubtitlesFill0Wght500Grad0Opsz48 from '../components/SubtitlesFill0Wght500Grad0Opsz48'
import IconSubtitlesFill0Wght600Grad0Opsz48 from '../components/SubtitlesFill0Wght600Grad0Opsz48'
import IconSubtitlesFill0Wght700Grad0Opsz48 from '../components/SubtitlesFill0Wght700Grad0Opsz48'
import IconSubtitlesFill1Wght100Grad0Opsz48 from '../components/SubtitlesFill1Wght100Grad0Opsz48'
import IconSubtitlesFill1Wght200Grad0Opsz48 from '../components/SubtitlesFill1Wght200Grad0Opsz48'
import IconSubtitlesFill1Wght300Grad0Opsz48 from '../components/SubtitlesFill1Wght300Grad0Opsz48'
import IconSubtitlesFill1Wght400Grad0Opsz48 from '../components/SubtitlesFill1Wght400Grad0Opsz48'
import IconSubtitlesFill1Wght500Grad0Opsz48 from '../components/SubtitlesFill1Wght500Grad0Opsz48'
import IconSubtitlesFill1Wght600Grad0Opsz48 from '../components/SubtitlesFill1Wght600Grad0Opsz48'
import IconSubtitlesFill1Wght700Grad0Opsz48 from '../components/SubtitlesFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconSubtitles = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconSubtitlesFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconSubtitlesFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconSubtitlesFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconSubtitlesFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconSubtitlesFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconSubtitlesFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconSubtitlesFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconSubtitlesFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconSubtitlesFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconSubtitlesFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconSubtitlesFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconSubtitlesFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconSubtitlesFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconSubtitlesFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
