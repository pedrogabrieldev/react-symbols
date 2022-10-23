import IconLeaderboardFill0Wght100Grad0Opsz48 from '../components/LeaderboardFill0Wght100Grad0Opsz48'
import IconLeaderboardFill0Wght200Grad0Opsz48 from '../components/LeaderboardFill0Wght200Grad0Opsz48'
import IconLeaderboardFill0Wght300Grad0Opsz48 from '../components/LeaderboardFill0Wght300Grad0Opsz48'
import IconLeaderboardFill0Wght400Grad0Opsz48 from '../components/LeaderboardFill0Wght400Grad0Opsz48'
import IconLeaderboardFill0Wght500Grad0Opsz48 from '../components/LeaderboardFill0Wght500Grad0Opsz48'
import IconLeaderboardFill0Wght600Grad0Opsz48 from '../components/LeaderboardFill0Wght600Grad0Opsz48'
import IconLeaderboardFill0Wght700Grad0Opsz48 from '../components/LeaderboardFill0Wght700Grad0Opsz48'
import IconLeaderboardFill1Wght100Grad0Opsz48 from '../components/LeaderboardFill1Wght100Grad0Opsz48'
import IconLeaderboardFill1Wght200Grad0Opsz48 from '../components/LeaderboardFill1Wght200Grad0Opsz48'
import IconLeaderboardFill1Wght300Grad0Opsz48 from '../components/LeaderboardFill1Wght300Grad0Opsz48'
import IconLeaderboardFill1Wght400Grad0Opsz48 from '../components/LeaderboardFill1Wght400Grad0Opsz48'
import IconLeaderboardFill1Wght500Grad0Opsz48 from '../components/LeaderboardFill1Wght500Grad0Opsz48'
import IconLeaderboardFill1Wght600Grad0Opsz48 from '../components/LeaderboardFill1Wght600Grad0Opsz48'
import IconLeaderboardFill1Wght700Grad0Opsz48 from '../components/LeaderboardFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconLeaderboard = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconLeaderboardFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconLeaderboardFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconLeaderboardFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconLeaderboardFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconLeaderboardFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconLeaderboardFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconLeaderboardFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconLeaderboardFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconLeaderboardFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconLeaderboardFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconLeaderboardFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconLeaderboardFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconLeaderboardFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconLeaderboardFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
