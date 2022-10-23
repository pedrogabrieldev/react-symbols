import IconRuleFolderFill0Wght100Grad0Opsz48 from '../components/RuleFolderFill0Wght100Grad0Opsz48'
import IconRuleFolderFill0Wght200Grad0Opsz48 from '../components/RuleFolderFill0Wght200Grad0Opsz48'
import IconRuleFolderFill0Wght300Grad0Opsz48 from '../components/RuleFolderFill0Wght300Grad0Opsz48'
import IconRuleFolderFill0Wght400Grad0Opsz48 from '../components/RuleFolderFill0Wght400Grad0Opsz48'
import IconRuleFolderFill0Wght500Grad0Opsz48 from '../components/RuleFolderFill0Wght500Grad0Opsz48'
import IconRuleFolderFill0Wght600Grad0Opsz48 from '../components/RuleFolderFill0Wght600Grad0Opsz48'
import IconRuleFolderFill0Wght700Grad0Opsz48 from '../components/RuleFolderFill0Wght700Grad0Opsz48'
import IconRuleFolderFill1Wght100Grad0Opsz48 from '../components/RuleFolderFill1Wght100Grad0Opsz48'
import IconRuleFolderFill1Wght200Grad0Opsz48 from '../components/RuleFolderFill1Wght200Grad0Opsz48'
import IconRuleFolderFill1Wght300Grad0Opsz48 from '../components/RuleFolderFill1Wght300Grad0Opsz48'
import IconRuleFolderFill1Wght400Grad0Opsz48 from '../components/RuleFolderFill1Wght400Grad0Opsz48'
import IconRuleFolderFill1Wght500Grad0Opsz48 from '../components/RuleFolderFill1Wght500Grad0Opsz48'
import IconRuleFolderFill1Wght600Grad0Opsz48 from '../components/RuleFolderFill1Wght600Grad0Opsz48'
import IconRuleFolderFill1Wght700Grad0Opsz48 from '../components/RuleFolderFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconRuleFolder = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconRuleFolderFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconRuleFolderFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconRuleFolderFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconRuleFolderFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconRuleFolderFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconRuleFolderFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconRuleFolderFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconRuleFolderFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconRuleFolderFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconRuleFolderFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconRuleFolderFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconRuleFolderFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconRuleFolderFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconRuleFolderFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
