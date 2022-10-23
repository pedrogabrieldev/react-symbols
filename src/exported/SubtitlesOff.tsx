import IconSubtitlesOffFill0Wght100Grad0Opsz48 from '../components/SubtitlesOffFill0Wght100Grad0Opsz48'
import IconSubtitlesOffFill0Wght200Grad0Opsz48 from '../components/SubtitlesOffFill0Wght200Grad0Opsz48'
import IconSubtitlesOffFill0Wght300Grad0Opsz48 from '../components/SubtitlesOffFill0Wght300Grad0Opsz48'
import IconSubtitlesOffFill0Wght400Grad0Opsz48 from '../components/SubtitlesOffFill0Wght400Grad0Opsz48'
import IconSubtitlesOffFill0Wght500Grad0Opsz48 from '../components/SubtitlesOffFill0Wght500Grad0Opsz48'
import IconSubtitlesOffFill0Wght600Grad0Opsz48 from '../components/SubtitlesOffFill0Wght600Grad0Opsz48'
import IconSubtitlesOffFill0Wght700Grad0Opsz48 from '../components/SubtitlesOffFill0Wght700Grad0Opsz48'
import IconSubtitlesOffFill1Wght100Grad0Opsz48 from '../components/SubtitlesOffFill1Wght100Grad0Opsz48'
import IconSubtitlesOffFill1Wght200Grad0Opsz48 from '../components/SubtitlesOffFill1Wght200Grad0Opsz48'
import IconSubtitlesOffFill1Wght300Grad0Opsz48 from '../components/SubtitlesOffFill1Wght300Grad0Opsz48'
import IconSubtitlesOffFill1Wght400Grad0Opsz48 from '../components/SubtitlesOffFill1Wght400Grad0Opsz48'
import IconSubtitlesOffFill1Wght500Grad0Opsz48 from '../components/SubtitlesOffFill1Wght500Grad0Opsz48'
import IconSubtitlesOffFill1Wght600Grad0Opsz48 from '../components/SubtitlesOffFill1Wght600Grad0Opsz48'
import IconSubtitlesOffFill1Wght700Grad0Opsz48 from '../components/SubtitlesOffFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconSubtitlesOff = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconSubtitlesOffFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconSubtitlesOffFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconSubtitlesOffFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconSubtitlesOffFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconSubtitlesOffFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconSubtitlesOffFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconSubtitlesOffFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconSubtitlesOffFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconSubtitlesOffFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconSubtitlesOffFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconSubtitlesOffFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconSubtitlesOffFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconSubtitlesOffFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconSubtitlesOffFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
