import IconImportContactsFill0Wght100Grad0Opsz48 from '../components/ImportContactsFill0Wght100Grad0Opsz48'
import IconImportContactsFill0Wght200Grad0Opsz48 from '../components/ImportContactsFill0Wght200Grad0Opsz48'
import IconImportContactsFill0Wght300Grad0Opsz48 from '../components/ImportContactsFill0Wght300Grad0Opsz48'
import IconImportContactsFill0Wght400Grad0Opsz48 from '../components/ImportContactsFill0Wght400Grad0Opsz48'
import IconImportContactsFill0Wght500Grad0Opsz48 from '../components/ImportContactsFill0Wght500Grad0Opsz48'
import IconImportContactsFill0Wght600Grad0Opsz48 from '../components/ImportContactsFill0Wght600Grad0Opsz48'
import IconImportContactsFill0Wght700Grad0Opsz48 from '../components/ImportContactsFill0Wght700Grad0Opsz48'
import IconImportContactsFill1Wght100Grad0Opsz48 from '../components/ImportContactsFill1Wght100Grad0Opsz48'
import IconImportContactsFill1Wght200Grad0Opsz48 from '../components/ImportContactsFill1Wght200Grad0Opsz48'
import IconImportContactsFill1Wght300Grad0Opsz48 from '../components/ImportContactsFill1Wght300Grad0Opsz48'
import IconImportContactsFill1Wght400Grad0Opsz48 from '../components/ImportContactsFill1Wght400Grad0Opsz48'
import IconImportContactsFill1Wght500Grad0Opsz48 from '../components/ImportContactsFill1Wght500Grad0Opsz48'
import IconImportContactsFill1Wght600Grad0Opsz48 from '../components/ImportContactsFill1Wght600Grad0Opsz48'
import IconImportContactsFill1Wght700Grad0Opsz48 from '../components/ImportContactsFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconImportContacts = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconImportContactsFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconImportContactsFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconImportContactsFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconImportContactsFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconImportContactsFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconImportContactsFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconImportContactsFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconImportContactsFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconImportContactsFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconImportContactsFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconImportContactsFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconImportContactsFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconImportContactsFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconImportContactsFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
