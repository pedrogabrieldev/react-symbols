import IconLivingFill0Wght100Grad0Opsz48 from '../components/LivingFill0Wght100Grad0Opsz48'
import IconLivingFill0Wght200Grad0Opsz48 from '../components/LivingFill0Wght200Grad0Opsz48'
import IconLivingFill0Wght300Grad0Opsz48 from '../components/LivingFill0Wght300Grad0Opsz48'
import IconLivingFill0Wght400Grad0Opsz48 from '../components/LivingFill0Wght400Grad0Opsz48'
import IconLivingFill0Wght500Grad0Opsz48 from '../components/LivingFill0Wght500Grad0Opsz48'
import IconLivingFill0Wght600Grad0Opsz48 from '../components/LivingFill0Wght600Grad0Opsz48'
import IconLivingFill0Wght700Grad0Opsz48 from '../components/LivingFill0Wght700Grad0Opsz48'
import IconLivingFill1Wght100Grad0Opsz48 from '../components/LivingFill1Wght100Grad0Opsz48'
import IconLivingFill1Wght200Grad0Opsz48 from '../components/LivingFill1Wght200Grad0Opsz48'
import IconLivingFill1Wght300Grad0Opsz48 from '../components/LivingFill1Wght300Grad0Opsz48'
import IconLivingFill1Wght400Grad0Opsz48 from '../components/LivingFill1Wght400Grad0Opsz48'
import IconLivingFill1Wght500Grad0Opsz48 from '../components/LivingFill1Wght500Grad0Opsz48'
import IconLivingFill1Wght600Grad0Opsz48 from '../components/LivingFill1Wght600Grad0Opsz48'
import IconLivingFill1Wght700Grad0Opsz48 from '../components/LivingFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconLiving = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconLivingFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconLivingFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconLivingFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconLivingFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconLivingFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconLivingFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconLivingFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconLivingFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconLivingFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconLivingFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconLivingFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconLivingFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconLivingFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconLivingFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
