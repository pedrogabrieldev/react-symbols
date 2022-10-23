import IconCrueltyFreeFill0Wght100Grad0Opsz48 from '../components/CrueltyFreeFill0Wght100Grad0Opsz48'
import IconCrueltyFreeFill0Wght200Grad0Opsz48 from '../components/CrueltyFreeFill0Wght200Grad0Opsz48'
import IconCrueltyFreeFill0Wght300Grad0Opsz48 from '../components/CrueltyFreeFill0Wght300Grad0Opsz48'
import IconCrueltyFreeFill0Wght400Grad0Opsz48 from '../components/CrueltyFreeFill0Wght400Grad0Opsz48'
import IconCrueltyFreeFill0Wght500Grad0Opsz48 from '../components/CrueltyFreeFill0Wght500Grad0Opsz48'
import IconCrueltyFreeFill0Wght600Grad0Opsz48 from '../components/CrueltyFreeFill0Wght600Grad0Opsz48'
import IconCrueltyFreeFill0Wght700Grad0Opsz48 from '../components/CrueltyFreeFill0Wght700Grad0Opsz48'
import IconCrueltyFreeFill1Wght100Grad0Opsz48 from '../components/CrueltyFreeFill1Wght100Grad0Opsz48'
import IconCrueltyFreeFill1Wght200Grad0Opsz48 from '../components/CrueltyFreeFill1Wght200Grad0Opsz48'
import IconCrueltyFreeFill1Wght300Grad0Opsz48 from '../components/CrueltyFreeFill1Wght300Grad0Opsz48'
import IconCrueltyFreeFill1Wght400Grad0Opsz48 from '../components/CrueltyFreeFill1Wght400Grad0Opsz48'
import IconCrueltyFreeFill1Wght500Grad0Opsz48 from '../components/CrueltyFreeFill1Wght500Grad0Opsz48'
import IconCrueltyFreeFill1Wght600Grad0Opsz48 from '../components/CrueltyFreeFill1Wght600Grad0Opsz48'
import IconCrueltyFreeFill1Wght700Grad0Opsz48 from '../components/CrueltyFreeFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconCrueltyFree = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconCrueltyFreeFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconCrueltyFreeFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconCrueltyFreeFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconCrueltyFreeFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconCrueltyFreeFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconCrueltyFreeFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconCrueltyFreeFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconCrueltyFreeFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconCrueltyFreeFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconCrueltyFreeFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconCrueltyFreeFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconCrueltyFreeFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconCrueltyFreeFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconCrueltyFreeFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
