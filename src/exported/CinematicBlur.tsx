import IconCinematicBlurFill0Wght100Grad0Opsz48 from '../components/CinematicBlurFill0Wght100Grad0Opsz48'
import IconCinematicBlurFill0Wght200Grad0Opsz48 from '../components/CinematicBlurFill0Wght200Grad0Opsz48'
import IconCinematicBlurFill0Wght300Grad0Opsz48 from '../components/CinematicBlurFill0Wght300Grad0Opsz48'
import IconCinematicBlurFill0Wght400Grad0Opsz48 from '../components/CinematicBlurFill0Wght400Grad0Opsz48'
import IconCinematicBlurFill0Wght500Grad0Opsz48 from '../components/CinematicBlurFill0Wght500Grad0Opsz48'
import IconCinematicBlurFill0Wght600Grad0Opsz48 from '../components/CinematicBlurFill0Wght600Grad0Opsz48'
import IconCinematicBlurFill0Wght700Grad0Opsz48 from '../components/CinematicBlurFill0Wght700Grad0Opsz48'
import IconCinematicBlurFill1Wght100Grad0Opsz48 from '../components/CinematicBlurFill1Wght100Grad0Opsz48'
import IconCinematicBlurFill1Wght200Grad0Opsz48 from '../components/CinematicBlurFill1Wght200Grad0Opsz48'
import IconCinematicBlurFill1Wght300Grad0Opsz48 from '../components/CinematicBlurFill1Wght300Grad0Opsz48'
import IconCinematicBlurFill1Wght400Grad0Opsz48 from '../components/CinematicBlurFill1Wght400Grad0Opsz48'
import IconCinematicBlurFill1Wght500Grad0Opsz48 from '../components/CinematicBlurFill1Wght500Grad0Opsz48'
import IconCinematicBlurFill1Wght600Grad0Opsz48 from '../components/CinematicBlurFill1Wght600Grad0Opsz48'
import IconCinematicBlurFill1Wght700Grad0Opsz48 from '../components/CinematicBlurFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconCinematicBlur = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconCinematicBlurFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconCinematicBlurFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconCinematicBlurFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconCinematicBlurFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconCinematicBlurFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconCinematicBlurFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconCinematicBlurFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconCinematicBlurFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconCinematicBlurFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconCinematicBlurFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconCinematicBlurFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconCinematicBlurFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconCinematicBlurFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconCinematicBlurFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
