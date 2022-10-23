import IconScoreboardFill0Wght100Grad0Opsz48 from '../components/ScoreboardFill0Wght100Grad0Opsz48'
import IconScoreboardFill0Wght200Grad0Opsz48 from '../components/ScoreboardFill0Wght200Grad0Opsz48'
import IconScoreboardFill0Wght300Grad0Opsz48 from '../components/ScoreboardFill0Wght300Grad0Opsz48'
import IconScoreboardFill0Wght400Grad0Opsz48 from '../components/ScoreboardFill0Wght400Grad0Opsz48'
import IconScoreboardFill0Wght500Grad0Opsz48 from '../components/ScoreboardFill0Wght500Grad0Opsz48'
import IconScoreboardFill0Wght600Grad0Opsz48 from '../components/ScoreboardFill0Wght600Grad0Opsz48'
import IconScoreboardFill0Wght700Grad0Opsz48 from '../components/ScoreboardFill0Wght700Grad0Opsz48'
import IconScoreboardFill1Wght100Grad0Opsz48 from '../components/ScoreboardFill1Wght100Grad0Opsz48'
import IconScoreboardFill1Wght200Grad0Opsz48 from '../components/ScoreboardFill1Wght200Grad0Opsz48'
import IconScoreboardFill1Wght300Grad0Opsz48 from '../components/ScoreboardFill1Wght300Grad0Opsz48'
import IconScoreboardFill1Wght400Grad0Opsz48 from '../components/ScoreboardFill1Wght400Grad0Opsz48'
import IconScoreboardFill1Wght500Grad0Opsz48 from '../components/ScoreboardFill1Wght500Grad0Opsz48'
import IconScoreboardFill1Wght600Grad0Opsz48 from '../components/ScoreboardFill1Wght600Grad0Opsz48'
import IconScoreboardFill1Wght700Grad0Opsz48 from '../components/ScoreboardFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconScoreboard = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconScoreboardFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconScoreboardFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconScoreboardFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconScoreboardFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconScoreboardFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconScoreboardFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconScoreboardFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconScoreboardFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconScoreboardFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconScoreboardFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconScoreboardFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconScoreboardFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconScoreboardFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconScoreboardFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
