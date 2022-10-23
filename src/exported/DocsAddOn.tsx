import IconDocsAddOnFill0Wght100Grad0Opsz48 from '../components/DocsAddOnFill0Wght100Grad0Opsz48'
import IconDocsAddOnFill0Wght200Grad0Opsz48 from '../components/DocsAddOnFill0Wght200Grad0Opsz48'
import IconDocsAddOnFill0Wght300Grad0Opsz48 from '../components/DocsAddOnFill0Wght300Grad0Opsz48'
import IconDocsAddOnFill0Wght400Grad0Opsz48 from '../components/DocsAddOnFill0Wght400Grad0Opsz48'
import IconDocsAddOnFill0Wght500Grad0Opsz48 from '../components/DocsAddOnFill0Wght500Grad0Opsz48'
import IconDocsAddOnFill0Wght600Grad0Opsz48 from '../components/DocsAddOnFill0Wght600Grad0Opsz48'
import IconDocsAddOnFill0Wght700Grad0Opsz48 from '../components/DocsAddOnFill0Wght700Grad0Opsz48'
import IconDocsAddOnFill1Wght100Grad0Opsz48 from '../components/DocsAddOnFill1Wght100Grad0Opsz48'
import IconDocsAddOnFill1Wght200Grad0Opsz48 from '../components/DocsAddOnFill1Wght200Grad0Opsz48'
import IconDocsAddOnFill1Wght300Grad0Opsz48 from '../components/DocsAddOnFill1Wght300Grad0Opsz48'
import IconDocsAddOnFill1Wght400Grad0Opsz48 from '../components/DocsAddOnFill1Wght400Grad0Opsz48'
import IconDocsAddOnFill1Wght500Grad0Opsz48 from '../components/DocsAddOnFill1Wght500Grad0Opsz48'
import IconDocsAddOnFill1Wght600Grad0Opsz48 from '../components/DocsAddOnFill1Wght600Grad0Opsz48'
import IconDocsAddOnFill1Wght700Grad0Opsz48 from '../components/DocsAddOnFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconDocsAddOn = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconDocsAddOnFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconDocsAddOnFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconDocsAddOnFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconDocsAddOnFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconDocsAddOnFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconDocsAddOnFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconDocsAddOnFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconDocsAddOnFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconDocsAddOnFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconDocsAddOnFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconDocsAddOnFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconDocsAddOnFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconDocsAddOnFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconDocsAddOnFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
