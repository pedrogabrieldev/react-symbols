import IconCelebrationFill0Wght100Grad0Opsz48 from '../components/CelebrationFill0Wght100Grad0Opsz48'
import IconCelebrationFill0Wght200Grad0Opsz48 from '../components/CelebrationFill0Wght200Grad0Opsz48'
import IconCelebrationFill0Wght300Grad0Opsz48 from '../components/CelebrationFill0Wght300Grad0Opsz48'
import IconCelebrationFill0Wght400Grad0Opsz48 from '../components/CelebrationFill0Wght400Grad0Opsz48'
import IconCelebrationFill0Wght500Grad0Opsz48 from '../components/CelebrationFill0Wght500Grad0Opsz48'
import IconCelebrationFill0Wght600Grad0Opsz48 from '../components/CelebrationFill0Wght600Grad0Opsz48'
import IconCelebrationFill0Wght700Grad0Opsz48 from '../components/CelebrationFill0Wght700Grad0Opsz48'
import IconCelebrationFill1Wght100Grad0Opsz48 from '../components/CelebrationFill1Wght100Grad0Opsz48'
import IconCelebrationFill1Wght200Grad0Opsz48 from '../components/CelebrationFill1Wght200Grad0Opsz48'
import IconCelebrationFill1Wght300Grad0Opsz48 from '../components/CelebrationFill1Wght300Grad0Opsz48'
import IconCelebrationFill1Wght400Grad0Opsz48 from '../components/CelebrationFill1Wght400Grad0Opsz48'
import IconCelebrationFill1Wght500Grad0Opsz48 from '../components/CelebrationFill1Wght500Grad0Opsz48'
import IconCelebrationFill1Wght600Grad0Opsz48 from '../components/CelebrationFill1Wght600Grad0Opsz48'
import IconCelebrationFill1Wght700Grad0Opsz48 from '../components/CelebrationFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconCelebration = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconCelebrationFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconCelebrationFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconCelebrationFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconCelebrationFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconCelebrationFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconCelebrationFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconCelebrationFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconCelebrationFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconCelebrationFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconCelebrationFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconCelebrationFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconCelebrationFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconCelebrationFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconCelebrationFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
