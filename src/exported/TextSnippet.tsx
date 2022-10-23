import IconTextSnippetFill0Wght100Grad0Opsz48 from '../components/TextSnippetFill0Wght100Grad0Opsz48'
import IconTextSnippetFill0Wght200Grad0Opsz48 from '../components/TextSnippetFill0Wght200Grad0Opsz48'
import IconTextSnippetFill0Wght300Grad0Opsz48 from '../components/TextSnippetFill0Wght300Grad0Opsz48'
import IconTextSnippetFill0Wght400Grad0Opsz48 from '../components/TextSnippetFill0Wght400Grad0Opsz48'
import IconTextSnippetFill0Wght500Grad0Opsz48 from '../components/TextSnippetFill0Wght500Grad0Opsz48'
import IconTextSnippetFill0Wght600Grad0Opsz48 from '../components/TextSnippetFill0Wght600Grad0Opsz48'
import IconTextSnippetFill0Wght700Grad0Opsz48 from '../components/TextSnippetFill0Wght700Grad0Opsz48'
import IconTextSnippetFill1Wght100Grad0Opsz48 from '../components/TextSnippetFill1Wght100Grad0Opsz48'
import IconTextSnippetFill1Wght200Grad0Opsz48 from '../components/TextSnippetFill1Wght200Grad0Opsz48'
import IconTextSnippetFill1Wght300Grad0Opsz48 from '../components/TextSnippetFill1Wght300Grad0Opsz48'
import IconTextSnippetFill1Wght400Grad0Opsz48 from '../components/TextSnippetFill1Wght400Grad0Opsz48'
import IconTextSnippetFill1Wght500Grad0Opsz48 from '../components/TextSnippetFill1Wght500Grad0Opsz48'
import IconTextSnippetFill1Wght600Grad0Opsz48 from '../components/TextSnippetFill1Wght600Grad0Opsz48'
import IconTextSnippetFill1Wght700Grad0Opsz48 from '../components/TextSnippetFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconTextSnippet = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconTextSnippetFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconTextSnippetFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconTextSnippetFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconTextSnippetFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconTextSnippetFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconTextSnippetFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconTextSnippetFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconTextSnippetFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconTextSnippetFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconTextSnippetFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconTextSnippetFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconTextSnippetFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconTextSnippetFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconTextSnippetFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
