import IconSendAndArchiveFill0Wght100Grad0Opsz48 from '../components/SendAndArchiveFill0Wght100Grad0Opsz48'
import IconSendAndArchiveFill0Wght200Grad0Opsz48 from '../components/SendAndArchiveFill0Wght200Grad0Opsz48'
import IconSendAndArchiveFill0Wght300Grad0Opsz48 from '../components/SendAndArchiveFill0Wght300Grad0Opsz48'
import IconSendAndArchiveFill0Wght400Grad0Opsz48 from '../components/SendAndArchiveFill0Wght400Grad0Opsz48'
import IconSendAndArchiveFill0Wght500Grad0Opsz48 from '../components/SendAndArchiveFill0Wght500Grad0Opsz48'
import IconSendAndArchiveFill0Wght600Grad0Opsz48 from '../components/SendAndArchiveFill0Wght600Grad0Opsz48'
import IconSendAndArchiveFill0Wght700Grad0Opsz48 from '../components/SendAndArchiveFill0Wght700Grad0Opsz48'
import IconSendAndArchiveFill1Wght100Grad0Opsz48 from '../components/SendAndArchiveFill1Wght100Grad0Opsz48'
import IconSendAndArchiveFill1Wght200Grad0Opsz48 from '../components/SendAndArchiveFill1Wght200Grad0Opsz48'
import IconSendAndArchiveFill1Wght300Grad0Opsz48 from '../components/SendAndArchiveFill1Wght300Grad0Opsz48'
import IconSendAndArchiveFill1Wght400Grad0Opsz48 from '../components/SendAndArchiveFill1Wght400Grad0Opsz48'
import IconSendAndArchiveFill1Wght500Grad0Opsz48 from '../components/SendAndArchiveFill1Wght500Grad0Opsz48'
import IconSendAndArchiveFill1Wght600Grad0Opsz48 from '../components/SendAndArchiveFill1Wght600Grad0Opsz48'
import IconSendAndArchiveFill1Wght700Grad0Opsz48 from '../components/SendAndArchiveFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconSendAndArchive = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconSendAndArchiveFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconSendAndArchiveFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconSendAndArchiveFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconSendAndArchiveFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconSendAndArchiveFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconSendAndArchiveFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconSendAndArchiveFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconSendAndArchiveFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconSendAndArchiveFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconSendAndArchiveFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconSendAndArchiveFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconSendAndArchiveFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconSendAndArchiveFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconSendAndArchiveFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
