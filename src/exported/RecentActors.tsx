import IconRecentActorsFill0Wght100Grad0Opsz48 from '../components/RecentActorsFill0Wght100Grad0Opsz48'
import IconRecentActorsFill0Wght200Grad0Opsz48 from '../components/RecentActorsFill0Wght200Grad0Opsz48'
import IconRecentActorsFill0Wght300Grad0Opsz48 from '../components/RecentActorsFill0Wght300Grad0Opsz48'
import IconRecentActorsFill0Wght400Grad0Opsz48 from '../components/RecentActorsFill0Wght400Grad0Opsz48'
import IconRecentActorsFill0Wght500Grad0Opsz48 from '../components/RecentActorsFill0Wght500Grad0Opsz48'
import IconRecentActorsFill0Wght600Grad0Opsz48 from '../components/RecentActorsFill0Wght600Grad0Opsz48'
import IconRecentActorsFill0Wght700Grad0Opsz48 from '../components/RecentActorsFill0Wght700Grad0Opsz48'
import IconRecentActorsFill1Wght100Grad0Opsz48 from '../components/RecentActorsFill1Wght100Grad0Opsz48'
import IconRecentActorsFill1Wght200Grad0Opsz48 from '../components/RecentActorsFill1Wght200Grad0Opsz48'
import IconRecentActorsFill1Wght300Grad0Opsz48 from '../components/RecentActorsFill1Wght300Grad0Opsz48'
import IconRecentActorsFill1Wght400Grad0Opsz48 from '../components/RecentActorsFill1Wght400Grad0Opsz48'
import IconRecentActorsFill1Wght500Grad0Opsz48 from '../components/RecentActorsFill1Wght500Grad0Opsz48'
import IconRecentActorsFill1Wght600Grad0Opsz48 from '../components/RecentActorsFill1Wght600Grad0Opsz48'
import IconRecentActorsFill1Wght700Grad0Opsz48 from '../components/RecentActorsFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconRecentActors = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconRecentActorsFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconRecentActorsFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconRecentActorsFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconRecentActorsFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconRecentActorsFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconRecentActorsFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconRecentActorsFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconRecentActorsFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconRecentActorsFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconRecentActorsFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconRecentActorsFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconRecentActorsFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconRecentActorsFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconRecentActorsFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
