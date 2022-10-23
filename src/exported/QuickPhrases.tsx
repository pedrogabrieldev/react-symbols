import IconQuickPhrasesFill0Wght100Grad0Opsz48 from '../components/QuickPhrasesFill0Wght100Grad0Opsz48'
import IconQuickPhrasesFill0Wght200Grad0Opsz48 from '../components/QuickPhrasesFill0Wght200Grad0Opsz48'
import IconQuickPhrasesFill0Wght300Grad0Opsz48 from '../components/QuickPhrasesFill0Wght300Grad0Opsz48'
import IconQuickPhrasesFill0Wght400Grad0Opsz48 from '../components/QuickPhrasesFill0Wght400Grad0Opsz48'
import IconQuickPhrasesFill0Wght500Grad0Opsz48 from '../components/QuickPhrasesFill0Wght500Grad0Opsz48'
import IconQuickPhrasesFill0Wght600Grad0Opsz48 from '../components/QuickPhrasesFill0Wght600Grad0Opsz48'
import IconQuickPhrasesFill0Wght700Grad0Opsz48 from '../components/QuickPhrasesFill0Wght700Grad0Opsz48'
import IconQuickPhrasesFill1Wght100Grad0Opsz48 from '../components/QuickPhrasesFill1Wght100Grad0Opsz48'
import IconQuickPhrasesFill1Wght200Grad0Opsz48 from '../components/QuickPhrasesFill1Wght200Grad0Opsz48'
import IconQuickPhrasesFill1Wght300Grad0Opsz48 from '../components/QuickPhrasesFill1Wght300Grad0Opsz48'
import IconQuickPhrasesFill1Wght400Grad0Opsz48 from '../components/QuickPhrasesFill1Wght400Grad0Opsz48'
import IconQuickPhrasesFill1Wght500Grad0Opsz48 from '../components/QuickPhrasesFill1Wght500Grad0Opsz48'
import IconQuickPhrasesFill1Wght600Grad0Opsz48 from '../components/QuickPhrasesFill1Wght600Grad0Opsz48'
import IconQuickPhrasesFill1Wght700Grad0Opsz48 from '../components/QuickPhrasesFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconQuickPhrases = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconQuickPhrasesFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconQuickPhrasesFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconQuickPhrasesFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconQuickPhrasesFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconQuickPhrasesFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconQuickPhrasesFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconQuickPhrasesFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconQuickPhrasesFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconQuickPhrasesFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconQuickPhrasesFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconQuickPhrasesFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconQuickPhrasesFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconQuickPhrasesFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconQuickPhrasesFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
