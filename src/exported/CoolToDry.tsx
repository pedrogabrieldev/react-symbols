import IconCoolToDryFill0Wght100Grad0Opsz48 from '../components/CoolToDryFill0Wght100Grad0Opsz48'
import IconCoolToDryFill0Wght200Grad0Opsz48 from '../components/CoolToDryFill0Wght200Grad0Opsz48'
import IconCoolToDryFill0Wght300Grad0Opsz48 from '../components/CoolToDryFill0Wght300Grad0Opsz48'
import IconCoolToDryFill0Wght400Grad0Opsz48 from '../components/CoolToDryFill0Wght400Grad0Opsz48'
import IconCoolToDryFill0Wght500Grad0Opsz48 from '../components/CoolToDryFill0Wght500Grad0Opsz48'
import IconCoolToDryFill0Wght600Grad0Opsz48 from '../components/CoolToDryFill0Wght600Grad0Opsz48'
import IconCoolToDryFill0Wght700Grad0Opsz48 from '../components/CoolToDryFill0Wght700Grad0Opsz48'
import IconCoolToDryFill1Wght100Grad0Opsz48 from '../components/CoolToDryFill1Wght100Grad0Opsz48'
import IconCoolToDryFill1Wght200Grad0Opsz48 from '../components/CoolToDryFill1Wght200Grad0Opsz48'
import IconCoolToDryFill1Wght300Grad0Opsz48 from '../components/CoolToDryFill1Wght300Grad0Opsz48'
import IconCoolToDryFill1Wght400Grad0Opsz48 from '../components/CoolToDryFill1Wght400Grad0Opsz48'
import IconCoolToDryFill1Wght500Grad0Opsz48 from '../components/CoolToDryFill1Wght500Grad0Opsz48'
import IconCoolToDryFill1Wght600Grad0Opsz48 from '../components/CoolToDryFill1Wght600Grad0Opsz48'
import IconCoolToDryFill1Wght700Grad0Opsz48 from '../components/CoolToDryFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconCoolToDry = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconCoolToDryFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconCoolToDryFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconCoolToDryFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconCoolToDryFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconCoolToDryFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconCoolToDryFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconCoolToDryFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconCoolToDryFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconCoolToDryFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconCoolToDryFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconCoolToDryFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconCoolToDryFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconCoolToDryFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconCoolToDryFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
