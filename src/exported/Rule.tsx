import IconRuleFill0Wght100Grad0Opsz48 from '../components/RuleFill0Wght100Grad0Opsz48'
import IconRuleFill0Wght200Grad0Opsz48 from '../components/RuleFill0Wght200Grad0Opsz48'
import IconRuleFill0Wght300Grad0Opsz48 from '../components/RuleFill0Wght300Grad0Opsz48'
import IconRuleFill0Wght400Grad0Opsz48 from '../components/RuleFill0Wght400Grad0Opsz48'
import IconRuleFill0Wght500Grad0Opsz48 from '../components/RuleFill0Wght500Grad0Opsz48'
import IconRuleFill0Wght600Grad0Opsz48 from '../components/RuleFill0Wght600Grad0Opsz48'
import IconRuleFill0Wght700Grad0Opsz48 from '../components/RuleFill0Wght700Grad0Opsz48'
import IconRuleFill1Wght100Grad0Opsz48 from '../components/RuleFill1Wght100Grad0Opsz48'
import IconRuleFill1Wght200Grad0Opsz48 from '../components/RuleFill1Wght200Grad0Opsz48'
import IconRuleFill1Wght300Grad0Opsz48 from '../components/RuleFill1Wght300Grad0Opsz48'
import IconRuleFill1Wght400Grad0Opsz48 from '../components/RuleFill1Wght400Grad0Opsz48'
import IconRuleFill1Wght500Grad0Opsz48 from '../components/RuleFill1Wght500Grad0Opsz48'
import IconRuleFill1Wght600Grad0Opsz48 from '../components/RuleFill1Wght600Grad0Opsz48'
import IconRuleFill1Wght700Grad0Opsz48 from '../components/RuleFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconRule = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconRuleFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconRuleFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconRuleFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconRuleFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconRuleFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconRuleFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconRuleFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconRuleFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconRuleFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconRuleFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconRuleFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconRuleFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconRuleFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconRuleFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
