import IconHealingFill0Wght100Grad0Opsz48 from '../components/HealingFill0Wght100Grad0Opsz48'
import IconHealingFill0Wght200Grad0Opsz48 from '../components/HealingFill0Wght200Grad0Opsz48'
import IconHealingFill0Wght300Grad0Opsz48 from '../components/HealingFill0Wght300Grad0Opsz48'
import IconHealingFill0Wght400Grad0Opsz48 from '../components/HealingFill0Wght400Grad0Opsz48'
import IconHealingFill0Wght500Grad0Opsz48 from '../components/HealingFill0Wght500Grad0Opsz48'
import IconHealingFill0Wght600Grad0Opsz48 from '../components/HealingFill0Wght600Grad0Opsz48'
import IconHealingFill0Wght700Grad0Opsz48 from '../components/HealingFill0Wght700Grad0Opsz48'
import IconHealingFill1Wght100Grad0Opsz48 from '../components/HealingFill1Wght100Grad0Opsz48'
import IconHealingFill1Wght200Grad0Opsz48 from '../components/HealingFill1Wght200Grad0Opsz48'
import IconHealingFill1Wght300Grad0Opsz48 from '../components/HealingFill1Wght300Grad0Opsz48'
import IconHealingFill1Wght400Grad0Opsz48 from '../components/HealingFill1Wght400Grad0Opsz48'
import IconHealingFill1Wght500Grad0Opsz48 from '../components/HealingFill1Wght500Grad0Opsz48'
import IconHealingFill1Wght600Grad0Opsz48 from '../components/HealingFill1Wght600Grad0Opsz48'
import IconHealingFill1Wght700Grad0Opsz48 from '../components/HealingFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconHealing = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconHealingFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconHealingFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconHealingFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconHealingFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconHealingFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconHealingFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconHealingFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconHealingFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconHealingFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconHealingFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconHealingFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconHealingFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconHealingFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconHealingFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
