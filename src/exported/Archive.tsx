import IconArchiveFill0Wght100Grad0Opsz48 from '../components/ArchiveFill0Wght100Grad0Opsz48'
import IconArchiveFill0Wght200Grad0Opsz48 from '../components/ArchiveFill0Wght200Grad0Opsz48'
import IconArchiveFill0Wght300Grad0Opsz48 from '../components/ArchiveFill0Wght300Grad0Opsz48'
import IconArchiveFill0Wght400Grad0Opsz48 from '../components/ArchiveFill0Wght400Grad0Opsz48'
import IconArchiveFill0Wght500Grad0Opsz48 from '../components/ArchiveFill0Wght500Grad0Opsz48'
import IconArchiveFill0Wght600Grad0Opsz48 from '../components/ArchiveFill0Wght600Grad0Opsz48'
import IconArchiveFill0Wght700Grad0Opsz48 from '../components/ArchiveFill0Wght700Grad0Opsz48'
import IconArchiveFill1Wght100Grad0Opsz48 from '../components/ArchiveFill1Wght100Grad0Opsz48'
import IconArchiveFill1Wght200Grad0Opsz48 from '../components/ArchiveFill1Wght200Grad0Opsz48'
import IconArchiveFill1Wght300Grad0Opsz48 from '../components/ArchiveFill1Wght300Grad0Opsz48'
import IconArchiveFill1Wght400Grad0Opsz48 from '../components/ArchiveFill1Wght400Grad0Opsz48'
import IconArchiveFill1Wght500Grad0Opsz48 from '../components/ArchiveFill1Wght500Grad0Opsz48'
import IconArchiveFill1Wght600Grad0Opsz48 from '../components/ArchiveFill1Wght600Grad0Opsz48'
import IconArchiveFill1Wght700Grad0Opsz48 from '../components/ArchiveFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconArchive = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconArchiveFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconArchiveFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconArchiveFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconArchiveFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconArchiveFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconArchiveFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconArchiveFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconArchiveFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconArchiveFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconArchiveFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconArchiveFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconArchiveFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconArchiveFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconArchiveFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
