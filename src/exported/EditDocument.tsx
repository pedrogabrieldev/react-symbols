import IconEditDocumentFill0Wght100Grad0Opsz48 from '../components/EditDocumentFill0Wght100Grad0Opsz48'
import IconEditDocumentFill0Wght200Grad0Opsz48 from '../components/EditDocumentFill0Wght200Grad0Opsz48'
import IconEditDocumentFill0Wght300Grad0Opsz48 from '../components/EditDocumentFill0Wght300Grad0Opsz48'
import IconEditDocumentFill0Wght400Grad0Opsz48 from '../components/EditDocumentFill0Wght400Grad0Opsz48'
import IconEditDocumentFill0Wght500Grad0Opsz48 from '../components/EditDocumentFill0Wght500Grad0Opsz48'
import IconEditDocumentFill0Wght600Grad0Opsz48 from '../components/EditDocumentFill0Wght600Grad0Opsz48'
import IconEditDocumentFill0Wght700Grad0Opsz48 from '../components/EditDocumentFill0Wght700Grad0Opsz48'
import IconEditDocumentFill1Wght100Grad0Opsz48 from '../components/EditDocumentFill1Wght100Grad0Opsz48'
import IconEditDocumentFill1Wght200Grad0Opsz48 from '../components/EditDocumentFill1Wght200Grad0Opsz48'
import IconEditDocumentFill1Wght300Grad0Opsz48 from '../components/EditDocumentFill1Wght300Grad0Opsz48'
import IconEditDocumentFill1Wght400Grad0Opsz48 from '../components/EditDocumentFill1Wght400Grad0Opsz48'
import IconEditDocumentFill1Wght500Grad0Opsz48 from '../components/EditDocumentFill1Wght500Grad0Opsz48'
import IconEditDocumentFill1Wght600Grad0Opsz48 from '../components/EditDocumentFill1Wght600Grad0Opsz48'
import IconEditDocumentFill1Wght700Grad0Opsz48 from '../components/EditDocumentFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconEditDocument = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconEditDocumentFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconEditDocumentFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconEditDocumentFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconEditDocumentFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconEditDocumentFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconEditDocumentFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconEditDocumentFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconEditDocumentFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconEditDocumentFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconEditDocumentFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconEditDocumentFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconEditDocumentFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconEditDocumentFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconEditDocumentFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
