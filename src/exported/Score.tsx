import IconScoreFill0Wght100Grad0Opsz48 from '../components/ScoreFill0Wght100Grad0Opsz48'
import IconScoreFill0Wght200Grad0Opsz48 from '../components/ScoreFill0Wght200Grad0Opsz48'
import IconScoreFill0Wght300Grad0Opsz48 from '../components/ScoreFill0Wght300Grad0Opsz48'
import IconScoreFill0Wght400Grad0Opsz48 from '../components/ScoreFill0Wght400Grad0Opsz48'
import IconScoreFill0Wght500Grad0Opsz48 from '../components/ScoreFill0Wght500Grad0Opsz48'
import IconScoreFill0Wght600Grad0Opsz48 from '../components/ScoreFill0Wght600Grad0Opsz48'
import IconScoreFill0Wght700Grad0Opsz48 from '../components/ScoreFill0Wght700Grad0Opsz48'
import IconScoreFill1Wght100Grad0Opsz48 from '../components/ScoreFill1Wght100Grad0Opsz48'
import IconScoreFill1Wght200Grad0Opsz48 from '../components/ScoreFill1Wght200Grad0Opsz48'
import IconScoreFill1Wght300Grad0Opsz48 from '../components/ScoreFill1Wght300Grad0Opsz48'
import IconScoreFill1Wght400Grad0Opsz48 from '../components/ScoreFill1Wght400Grad0Opsz48'
import IconScoreFill1Wght500Grad0Opsz48 from '../components/ScoreFill1Wght500Grad0Opsz48'
import IconScoreFill1Wght600Grad0Opsz48 from '../components/ScoreFill1Wght600Grad0Opsz48'
import IconScoreFill1Wght700Grad0Opsz48 from '../components/ScoreFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconScore = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconScoreFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconScoreFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconScoreFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconScoreFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconScoreFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconScoreFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconScoreFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconScoreFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconScoreFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconScoreFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconScoreFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconScoreFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconScoreFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconScoreFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
