import IconSportsScoreFill0Wght100Grad0Opsz48 from '../components/SportsScoreFill0Wght100Grad0Opsz48'
import IconSportsScoreFill0Wght200Grad0Opsz48 from '../components/SportsScoreFill0Wght200Grad0Opsz48'
import IconSportsScoreFill0Wght300Grad0Opsz48 from '../components/SportsScoreFill0Wght300Grad0Opsz48'
import IconSportsScoreFill0Wght400Grad0Opsz48 from '../components/SportsScoreFill0Wght400Grad0Opsz48'
import IconSportsScoreFill0Wght500Grad0Opsz48 from '../components/SportsScoreFill0Wght500Grad0Opsz48'
import IconSportsScoreFill0Wght600Grad0Opsz48 from '../components/SportsScoreFill0Wght600Grad0Opsz48'
import IconSportsScoreFill0Wght700Grad0Opsz48 from '../components/SportsScoreFill0Wght700Grad0Opsz48'
import IconSportsScoreFill1Wght100Grad0Opsz48 from '../components/SportsScoreFill1Wght100Grad0Opsz48'
import IconSportsScoreFill1Wght200Grad0Opsz48 from '../components/SportsScoreFill1Wght200Grad0Opsz48'
import IconSportsScoreFill1Wght300Grad0Opsz48 from '../components/SportsScoreFill1Wght300Grad0Opsz48'
import IconSportsScoreFill1Wght400Grad0Opsz48 from '../components/SportsScoreFill1Wght400Grad0Opsz48'
import IconSportsScoreFill1Wght500Grad0Opsz48 from '../components/SportsScoreFill1Wght500Grad0Opsz48'
import IconSportsScoreFill1Wght600Grad0Opsz48 from '../components/SportsScoreFill1Wght600Grad0Opsz48'
import IconSportsScoreFill1Wght700Grad0Opsz48 from '../components/SportsScoreFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconSportsScore = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconSportsScoreFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconSportsScoreFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconSportsScoreFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconSportsScoreFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconSportsScoreFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconSportsScoreFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconSportsScoreFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconSportsScoreFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconSportsScoreFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconSportsScoreFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconSportsScoreFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconSportsScoreFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconSportsScoreFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconSportsScoreFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
