import IconSpellcheckFill0Wght100Grad0Opsz48 from '../components/SpellcheckFill0Wght100Grad0Opsz48'
import IconSpellcheckFill0Wght200Grad0Opsz48 from '../components/SpellcheckFill0Wght200Grad0Opsz48'
import IconSpellcheckFill0Wght300Grad0Opsz48 from '../components/SpellcheckFill0Wght300Grad0Opsz48'
import IconSpellcheckFill0Wght400Grad0Opsz48 from '../components/SpellcheckFill0Wght400Grad0Opsz48'
import IconSpellcheckFill0Wght500Grad0Opsz48 from '../components/SpellcheckFill0Wght500Grad0Opsz48'
import IconSpellcheckFill0Wght600Grad0Opsz48 from '../components/SpellcheckFill0Wght600Grad0Opsz48'
import IconSpellcheckFill0Wght700Grad0Opsz48 from '../components/SpellcheckFill0Wght700Grad0Opsz48'
import IconSpellcheckFill1Wght100Grad0Opsz48 from '../components/SpellcheckFill1Wght100Grad0Opsz48'
import IconSpellcheckFill1Wght200Grad0Opsz48 from '../components/SpellcheckFill1Wght200Grad0Opsz48'
import IconSpellcheckFill1Wght300Grad0Opsz48 from '../components/SpellcheckFill1Wght300Grad0Opsz48'
import IconSpellcheckFill1Wght400Grad0Opsz48 from '../components/SpellcheckFill1Wght400Grad0Opsz48'
import IconSpellcheckFill1Wght500Grad0Opsz48 from '../components/SpellcheckFill1Wght500Grad0Opsz48'
import IconSpellcheckFill1Wght600Grad0Opsz48 from '../components/SpellcheckFill1Wght600Grad0Opsz48'
import IconSpellcheckFill1Wght700Grad0Opsz48 from '../components/SpellcheckFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconSpellcheck = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconSpellcheckFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconSpellcheckFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconSpellcheckFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconSpellcheckFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconSpellcheckFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconSpellcheckFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconSpellcheckFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconSpellcheckFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconSpellcheckFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconSpellcheckFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconSpellcheckFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconSpellcheckFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconSpellcheckFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconSpellcheckFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
